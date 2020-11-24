import React, { useContext } from 'react'
import { Col, Divider, Row } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HistoryContext } from '../../utils/HistoryContext'
import { historyObjType } from '../../utils/types'
import './SearchHistory.css'

function SearchHistory() {
  const [history] = useContext(HistoryContext)
  const navigate = useNavigate()

  return (
    <>
      <Row className={'history-title'} justify={'center'}>
        Search History
      </Row>
      <Divider />
      <Row className={'history-container'} justify={'center'}>
        <Col span={12}>
          {history?.map((item: historyObjType, index) => (
            <Row key={index} justify={'center'}>
              <div className={'history-card'} onClick={() => navigate(item.url)}>
                {item.name}
              </div>
            </Row>
          ))}
        </Col>
      </Row>
    </>
  )
}

export default SearchHistory
