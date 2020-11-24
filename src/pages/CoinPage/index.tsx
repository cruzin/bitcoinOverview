import React, { useEffect, useState } from 'react'
import { Col, Row, PageHeader, Button, Divider } from 'antd'
import { useNavigate, useParams } from 'react-router-dom'
import CoinDetails from './CoinDetails'
import CoinTrendChart from './CoinTrendChart'
import Spinner from '../../components/Spinner'
import { fetchCoinData } from '../../utils/apiCalls'
import './CoinPage.css'

const CoinPage = (): JSX.Element => {
  const params = useParams()
  const navigate = useNavigate()
  const [coinData, setCoinData] = useState<any>()
  const [isLoading, setLoading] = useState<boolean | string>()

  useEffect(() => {
    try {
      if (params?.id) {
        setLoading(true)
        fetchCoinData(params.id).then((res) => {
          setCoinData(res)
          setLoading('DONE')
        })
      }
    } catch (error) {
      setLoading('null')
    }
  }, [params])

  return (
    <Row justify={'center'}>
      <Col span={12}>
        {isLoading !== 'DONE' ? (
          <Spinner />
        ) : coinData.error ? (
          <div className={'spinner-container'}>
            <PageHeader title={'Something went wrong'} subTitle={coinData.error} />
            <Button onClick={() => navigate('/')}>{'Return to main page'}</Button>
          </div>
        ) : (
          <>
            <CoinDetails coinData={coinData} />
            <Divider />
            <CoinTrendChart />
            <Divider />
          </>
        )}
      </Col>
    </Row>
  )
}
export default CoinPage
