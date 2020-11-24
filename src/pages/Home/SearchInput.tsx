import React, { useContext, useState } from 'react'
import { AutoComplete, Input } from 'antd'
import { useNavigate } from 'react-router-dom'
import { HistoryContext } from '../../utils/HistoryContext'

function SearchInput() {
  const [, addToHistory, allCoinItems] = useContext(HistoryContext)
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const onSelect = (data: string, e: any) => {
    addToHistory({ name: e.value, url: '/coin/' + e.id })
    navigate('/coin/' + e.id)
  }

  const onChange = (data: string) => {
    setValue(data)
  }

  return (
    <AutoComplete
      filterOption
      options={allCoinItems}
      style={{ width: 400 }}
      onSelect={onSelect}
      onChange={onChange}
      value={value}
    >
      <Input.Search
        size="large"
        placeholder="Search for your coin here"
        onSearch={(val, event) => onSelect(val, { value: val, id: val.toLowerCase() })}
      />
    </AutoComplete>
  )
}

export default SearchInput
