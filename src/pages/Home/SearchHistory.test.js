import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter as Router } from 'react-router-dom'
import SearchHistory from './SearchHistory'
import { HistoryContextProvider } from '../../utils/HistoryContext'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

test('renders and shows no history if no history', async () => {
  const { container, getByText } = render(
    <Router>
      <SearchHistory />
    </Router>,
  )
  expect(getByText('Search History')).toBeInTheDocument()
  expect(container.querySelector(`[class='history-card']`)).toBe(null)
})

test('renders and shows history if history', async () => {
  const { container, getByText } = render(
    <HistoryContextProvider startHistory={[{ name: 'Dogecoin', url: 'dogecoin' }]}>
      <Router>
        <SearchHistory />
      </Router>
    </HistoryContextProvider>,
  )
  expect(getByText('Dogecoin')).toBeInTheDocument()
  expect(container.querySelector(`[class='history-card']`)).toBeVisible()
})
