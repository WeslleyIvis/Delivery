import React from 'react'
import { useNavigate } from 'react-router-dom';
import Categories from './Categories';
import { Category } from './Interfaces';

const AsideADM = () => {
    const token = sessionStorage.getItem('Authorization');
    const navigate = useNavigate();
    const [category, setCategory] = React.useState<Category[]>([]);

    async function getCategories() {
        await fetch('http://localhost:3333/categories', {
            method: "GET",
         })
        .then(r => r.json())
        .then(data => setCategory(data))
        .catch(err => console.log({error: err}))
    }

    React.useEffect(() => {
        getCategories();
    }, [])
    

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
                <li onClick={getCategories}>Categories</li>
                <li>Create Product</li>
                <li>Delete Product</li>
                <li>Edit Product</li>
                <li>Search Product</li>
                <li onClick={() => navigate('/')}>Logout</li>
            </ul>
        </aside>
        
        <div className='products'>
            {category && (<Categories data={category}/>)}
        </div>
    </section>

  )
}

export default AsideADM
