import React from 'react'

import UserData from './UserData';
import Search from './Search';

import './navbar.scss';

import Logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
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
