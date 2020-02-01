import React, { useState } from 'react'

import UserData from './UserData';
import Search from './Search';

import './navbar.scss';

import Logo from '../../images/logo.png';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  const onMenuBtnClick = () => {
    setNavbarOpen(!navbarOpen)
  }
  
  return (
    <nav className={`navbar ${navbarOpen ? 'open' : 'close'}`}>
      <div className="navbar-left">
        <div className="user-data">
          <UserData />
        </div>
        <div className="search">
          <Search />
        </div>
      </div>
      <div className="logo">
        <img src={Logo} alt="ninipay-logo-test"/>
      </div>
      <div className="menu-btn" onClick={onMenuBtnClick}>
        <div className="menu-btn-line"></div>
        <div className="menu-btn-line"></div>
        <div className="menu-btn-line"></div>
      </div>
      <div className="menu">
        <div className="menu-item">
          <div className="background-layer"></div>
          <div className="menu-item-text">
            خانه
          </div>
          خانه
        </div>
        <div className="menu-item">
          <div className="background-layer"></div>
          <div className="menu-item-text">
            محصولات
          </div>
          محصولات
        </div>
        <div className="menu-item">
          <div className="background-layer"></div>
          <div className="menu-item-text">
            درباره ما
          </div>
          درباره ما
        </div>
        <div className="menu-item">
          <div className="background-layer"></div>
          <div className="menu-item-text">
            تماس با ما
          </div>
          تماس با ما
        </div>
      </div>
    </nav>
  )
}

export default Navbar
