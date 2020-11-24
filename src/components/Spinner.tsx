import React from 'react'
import { Spin } from 'antd'
import './Spinner.css'

function Spinner() {
  return (
    <div className={'spinner-container'}>
      <Spin />
    </div>
  )
}

export default Spinner
