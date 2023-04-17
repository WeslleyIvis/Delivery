import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-logo'>
        <img src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" alt="logo"  />
      </div>
      <div className='footer-redes'>
        <img src={require("./images/iconTwiter.png")} alt="" />
        <img src={require("./images/iconFace.png")} alt="" />
        <img src={require("./images/iconTwiter.png")} alt="" />
      </div>
      <div>
        <p>@ Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </footer>
  )
}

export default Footer
