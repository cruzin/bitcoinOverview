import { CoinItem } from './types'

export async function fetchListOfAllCoins(): Promise<CoinItem[]> {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/list`)
  const jsonResponse = await response.json()
  return !jsonResponse.error && jsonResponse
}

export const fetchCoinTrendData = async (id: string): Promise<any> => {
  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
  )
  return await response.json()
}

export const fetchCoinData = async (id: string): Promise<any> => {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
  return await response.json()
}
