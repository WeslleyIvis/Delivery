import React from 'react'

export const Header = () => {
  return (
    <header className='header'>
      <ul className='header-content'>
        <li>
          <a href="/">
          <img src={require("./images/facebook.png")} alt="Logo Facebook" />
          </a>
          <a href="/">
          <img src={require("./images/twitter.png")} alt="Logo Twiter" />
          </a>
        </li>
        <li className='header-menu'>
          <a href="/"><span>Lorem</span></a>
          <a href="/"><span>Lorem</span></a>
          <a href="/"><span>Lorem</span></a>
          <a href="/"><span>Lorem</span></a>
        </li>
        <li className='header-phone'>
          <img src={require("./images/icons8-phone-50.png")} alt="Phone" />
          <p className="number-phone">1 (800) 4234-9238</p>
          <span>Call back</span>
        </li>
        <li className='header-login'>
          <img src={require("./images/icon-user-48 .png")} alt="" />
          <a href="/">Login</a>
        </li>
      </ul>
    </header>
  )
}

