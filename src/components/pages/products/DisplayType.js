import React, { useState } from 'react'

const DisplayType = () => {
  const [type, setType] = useState('table') // values: table / row
  
  const onTableClick = () => {
    setType('table')
  }
  
  const onRowClick = () => {
    setType('row')
  }
  
  return (
    <div className="display-type">
      <button className={`btn ${type === 'table' && 'active'}`} onClick={onTableClick}>
        نمایش جدولی
        <i className="fas fa-border-all"></i>
      </button>
      <button className={`btn ${type === 'row' && 'active'}`} onClick={onRowClick}>
        نمایش ردیفی
        <i class="fas fa-bars"></i>
      </button>
    </div>
  )
}

export default DisplayType
