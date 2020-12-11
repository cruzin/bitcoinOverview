import React, { createContext, useState } from 'react'
import { CoinOptionType, historyObjType, HistoryType } from './types'

//linting disabled on the line below to prevent a @typescript-eslint/no-empty-function error
export const HistoryContext = createContext<HistoryType>([[], () => {}, [], () => {}]) // eslint-disable-line

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
