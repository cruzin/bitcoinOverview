import React, { createContext, useState } from 'react'
import { CoinOptionType, historyObjType, HistoryType } from './types'

export const HistoryContext = createContext<HistoryType>([[], () => {}, [], () => {}])

export const HistoryContextProvider = (props: any): JSX.Element => {
  const [history, addToHistory] = useState<historyObjType[]>(props?.startHistory || [])
  const [allCoinItems, setAllCoinsListHistory] = useState<CoinOptionType[]>([])
  return (
    <HistoryContext.Provider
      value={[
        history,
        (logEntry) => addToHistory([logEntry, ...history]),
        allCoinItems,
        (list) => setAllCoinsListHistory(list),
      ]}
    >
      {props.children}
    </HistoryContext.Provider>
  )
}
