import React from 'react'

const Locale = () => {
  return (
    <div className='locale-content'>
        <div>
            <img src={require("../images/bag.png")} alt="" />
            <h2>Visit Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum magni tempora fugit perspiciatis qui dolor</p>
        </div>
        <div>
        <img src={require("../images/bag.png")} alt="" />
            <h2>Working Hours</h2>
            <p>
                Monday - Thursday 11:00 - 21:-00 <br />
                Friday - Saturday 11:00 - 22:00 <br />
                Sundaysl 2:00 - 20:00
            </p>
        </div>
        <div>
        <img src={require("../images/bag.png")} alt="" />
            <h2>Contact Us</h2>
            <p>
                1 (800) 312-2121 <br />
                Lorem@hotmail.com
            </p>
        </div>
    </div>
  )
}

export default Locale
