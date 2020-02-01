import React, { useState } from 'react'

const Filter = () => {
  const [type, setType] = useState('none');
  
  const onFilterItemClicked = e => {
    if(type === e.target.id) {
      setType('none')
    } else {
      setType(e.target.id)
    }
  }
  
  return (
    <div className="fiter-products">
      <button className={`btn ${type === 'expensive' && 'active'}`} id="expensive" onClick={onFilterItemClicked}>
        گران ترین      
      </button>
      <button className={`btn ${type === 'cheap' && 'active'}`} id="cheap" onClick={onFilterItemClicked}>
        ارزان ترین
      </button>
      <button className={`btn ${type === 'new' && 'active'}`} id="new" onClick={onFilterItemClicked}>
        جدید ترین
      </button>
      <button className={`btn ${type === 'popular' && 'active'}`} id="popular" onClick={onFilterItemClicked}>
        محبوب ترین
      </button>
      <span className="filter-title">
        نمایش براساس
      </span>
    </div>
  )
}

export default Filter
