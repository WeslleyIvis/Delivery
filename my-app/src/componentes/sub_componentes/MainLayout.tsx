import React from 'react'
import Products from './Products';
import Locale from './Locale';



const MainLayout = () => {
    const [category, setCategory] = React.useState('Açai');
    const [activeClass, setActiveClass] = React.useState(0);
    const menu = ['Açai', 'Salgados', 'Cafe', 'Hamburguers']

    function handleCategory(props: React.SyntheticEvent, index: number) {
        setCategory((props.target as HTMLLIElement).innerHTML);
        setActiveClass(index);
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
                {menu.map((element, index) => {
                    return <li 
                        className={index === activeClass ? 'active-category' : ''}
                        onClick={event => handleCategory(event, index)} 
                        key={index}>
                        {element}
                    </li>
                })}

            </ul>
            
            <Products category={category} name={''} display='products-content' amount={8}/>
            <Locale />
        </section>  
    </div>
  )
}

export default MainLayout
