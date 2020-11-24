import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Row } from 'antd'
import { Line } from '@ant-design/charts'
import Spinner from '../../components/Spinner'
import { fetchCoinTrendData } from '../../utils/apiCalls'

function CoinTrendChart() {
  const params = useParams()
  const [isLoading, setLoading] = useState<boolean | string>()
  const [config, setConfig] = useState<any>()

  useEffect(() => {
    try {
      if (params?.id) {
        setLoading(true)
        fetchCoinTrendData(params.id).then((res) => {
          setLoading('DONE')
          setConfig({
            data: res.prices.map((dataPoint: [number, number]) => {
              return {
                date: new Date(dataPoint[0]).toISOString().split(':')[0],
                price: dataPoint[1],
              }
            }),
            height: 400,
            width: 600,
            xField: 'date',
            yField: 'price',
            label: {
              style: {
                fontSize: 0,
              },
            },
          })
        })
      }
    } catch (error) {
      setLoading('null')
    }
  }, [params])

  return isLoading !== 'DONE' ? (
    <Spinner />
  ) : (
    <Row className={'chart-container'}>{config && <Line {...config} />}</Row>
  )
}

export default CoinTrendChart
