import React from 'react'

import UserData from './UserData';

import './navbar.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="user-data">
        <UserData />
      </div>
      <div className="logo">
        <span>
          LOGO
        </span>
      </div>
      <div className="menu">
        <div className="menu-item">
          خانه
        </div>
        <div className="menu-item">
          محصولات
        </div>
        <div className="menu-item">
          درباره ما
        </div>
        <div className="menu-item">
          تماس با ما
        </div>
      </div>
    </nav>
  )
}

export default Navbar
