import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav>
      <div className="logo">
        <img src="/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <div className="button">
        <button>Login</button>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
