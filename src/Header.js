import React from 'react'
import "./Header.css";
function Header() {
  return (
    <div className='header'>
        {/* YOutube logo */}
        <div className="header__logo">
            <h1>Logo</h1>
        </div>
        {/* Search box */}
        <div className="header__search">
            <input type="text" />
            <button>Icon</button>
        </div>

        {/* Right side logos */}
        <div className="header__rightlogos">
            <h1>RIght logos</h1>
        </div>
    </div>
  )
}

export default Header