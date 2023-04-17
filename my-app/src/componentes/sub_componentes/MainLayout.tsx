import React from 'react'
import Products from './Products';


const MainLayout = () => {
    const [category, setCategory] = React.useState('Açai');

    function handleCategory(props: React.SyntheticEvent) {
        setCategory((props.target as HTMLLIElement).innerHTML);
    }
 
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

        <section className='menu-content'>
            <ul className='menu-selection'>
                <li className='active' onClick={event => handleCategory(event)}>Açai</li>
                <li onClick={event => handleCategory(event)}>Salgados</li>
                <li onClick={event => handleCategory(event)}>Cafe</li>
                <li onClick={event => handleCategory(event)}>Hamburguers</li>
            </ul>
            
            <Products category={category}/>

        </section>  
    </div>
  )
}

export default MainLayout
