import React, { useEffect, useState, useContext } from 'react'
import { Col, Divider, Row } from 'antd'
import SearchHistory from './SearchHistory'
import SearchInput from './SearchInput'
import { HistoryContext } from '../../utils/HistoryContext'
import { fetchListOfAllCoins } from '../../utils/apiCalls'
import './Home.css'

function Home(): JSX.Element {
  const [, , listOfAllCoinOptions, setAllCoinItems] = useContext(HistoryContext)
  const [isLoading, setLoading] = useState<boolean | string>()

  useEffect(() => {
    const ac = new AbortController()
    try {
      if (listOfAllCoinOptions.length === 0) {
        setLoading(true)
        fetchListOfAllCoins().then((res) => {
          if (res) {
            setAllCoinItems(
              res.map(({ id, name }) => {
                return {
                  value: name,
                  id,
                }
              }),
            )
            setLoading('DONE')
          } else {
            setLoading('error')
          }
        })
      }
    } catch (e) {
      setLoading('null')
    }
    return () => ac.abort()
  }, [listOfAllCoinOptions.length, setAllCoinItems])

  return (
    <Row>
      <Col span={6} />
      <Col span={12}>
        <Row justify={'center'}>
          <div className={'header-mainpage'}>{'Hello Cozero!'}</div>
          <Divider />
          <SearchInput />
        </Row>
        {isLoading === 'error' && <FetchListFailed />}
        <Row>
          <SearchHistory />
        </Row>
      </Col>
      <Col span={6} />
    </Row>
  )
}

export default Home

const FetchListFailed = () => {
  return (
    <Row justify={'center'}>
      <span>Fetching list of coins failed</span>
    </Row>
  )
}
