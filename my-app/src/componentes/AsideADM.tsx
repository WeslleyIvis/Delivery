import React from 'react'
import { useNavigate } from 'react-router-dom';
import Controller from './Controller';
import FormProduct from './FormProduct';

const AsideADM = () => {
    const navigate = useNavigate();
    const [controller, setController] = React.useState('category')
  
  return (
    <section className='content'>
        <aside className='aside'>
            <div className='aside-logo'>
                <h3>Logo</h3>
            </div>

            <div className='user-image'>
                <img src="https://i.pinimg.com/564x/07/9d/c0/079dc003ad1f68a3a7da28fee76aa783.jpg" alt="" />
                <h3>Lorem Ipsum</h3>
            </div>

            <ul className='aside-menu'>
                <li><h3>Menu</h3></li>
                <li onClick={() => setController('category') }>Categories</li>
                <li onClick={() => setController('create')}>Create Product</li>
                <li onClick={() => navigate('/')}>Logout</li>
            </ul>
        </aside>
        
        <div className='products'>
            {controller && (<Controller data={controller}/>)}
        </div>
    </section>

  )
}

export default AsideADM
