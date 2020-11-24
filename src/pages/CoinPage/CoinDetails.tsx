import React from 'react'
import { Divider, Image, PageHeader, Row } from 'antd'
import { useNavigate } from 'react-router-dom'

function CoinDetails({
  coinData: { name, image, symbol, market_data, market_cap_rank, description },
}: any) {
  const navigate = useNavigate()

  return (
    <>
      <Divider />
      <Row justify={'space-between'} className={'coindata-header-container'}>
        <PageHeader title={name} onBack={() => navigate('/')} />
        <Image className={'coin-logo'} src={image?.small} />
      </Row>
      <Row>{`Symbol: ${symbol}`}</Row>
      <Row>{`Market Cap Rank: ${market_cap_rank}`}</Row>
      <Row>{`Current Price USD: ${market_data?.current_price?.usd}`}</Row>
      <Row>
        {`Price Change last 24h: `}
        {market_data?.price_change_24h ? (
          <>
            <span className={market_data?.price_change_24h > 0 ? 'rising' : 'falling'}>
              {market_data?.price_change_24h > 0 && '+'}
              {market_data?.price_change_24h}{' '}
            </span>
          </>
        ) : (
          <span className={'falling'}>{'No data'}</span>
        )}
      </Row>
      <br />
      <div dangerouslySetInnerHTML={{ __html: description?.en }} />
    </>
  )
}

export default CoinDetails
