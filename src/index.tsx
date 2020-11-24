import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import CoinPage from './pages/CoinPage'

import { HistoryContextProvider } from './utils/HistoryContext'
import * as serviceWorker from './utils/serviceWorker'
import { config } from './utils/routesConfig'
import './index.css'

export function App(): JSX.Element {
  return (
    <HistoryContextProvider>
      <Router>
        <Routes>
          <Route path={config.routes.home} element={<Home />} />
          <Route path={config.routes.coinPage} element={<CoinPage />} />
        </Routes>
      </Router>
    </HistoryContextProvider>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
