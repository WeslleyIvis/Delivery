import React from 'react'
import Navbar from '../Navbar'

const MainLayout = () => {
  return (
    <div>
        <section className='slide'>
            <div className='slide-controls'>
                <img src={require('../images/banner1.png')} alt="" />
            </div>
            <div className='slide-controls'>
                <img src={require('../images/banner1.png')} alt="" />
            </div>
            <div className='slide-controls'>
                <img src={require('../images/banner1.png')} alt="" />
            </div>
        </section>
       
    </div>
  )
}

export default MainLayout
