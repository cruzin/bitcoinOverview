export type HistoryType = [
  searchHistory: searchHistoryType,
  addToHistory: (item: historyObjType) => void,
  allCoins: CoinOptionType[],
  setAllCoinsListHistory: (array: CoinOptionType[]) => void,
]

export interface CoinOptionType {
  id: string
  value: string
}

export type searchHistoryType = historyObjType[]
export type historyObjType = { name: string; url: string }

export interface CoinItem {
  id: string
  name: string
  symbol: string
}
