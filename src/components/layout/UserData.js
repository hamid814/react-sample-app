import React, { useState } from 'react'

import user from '../../images/user.png';

const UserData = () => {
  const [optionsOpen, setoptionsOpen] = useState(false)
  
  const onClick = () => {
    setoptionsOpen(!optionsOpen)
  }
  
  return (
    <>
      <div className={`image ${optionsOpen && 'active'}`} onClick={onClick}>
        <img src={user} alt="user-png"/>
      </div>
      <div className={`options ${optionsOpen ? 'open' : 'close'}`}>
        <div className="option-arrow"></div>
        <div className="option-item">
          سبد خرید
          <i className="fas fa-shopping-cart"></i>
        </div>
        <div className="option-item">
          تنظیمات
          <i className="fas fa-user-cog"></i>
        </div>
        <div className="option-item">
          خروج
          <i className="fas fa-sign-out-alt"></i>
        </div>
      </div>
    </>
  )
}

export default UserData
