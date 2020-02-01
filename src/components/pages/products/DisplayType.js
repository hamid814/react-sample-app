import React, { useContext } from 'react'

import Context from '../../../context/Context';

const DisplayType = () => {
  const { productsDisplayType: type, setProductsDisplayType: setType } = useContext(Context)
  
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
        <i className="fas fa-bars"></i>
      </button>
    </div>
  )
}

export default DisplayType
