import React from 'react'
import { CategoryProps } from './Interfaces'
import ListingProducts from './ListingProducts';

const Categories: React.FC<CategoryProps> = (data) => {
    const [category, setCategory] = React.useState<String>('');    
    function handleEvent(category: string) {
        setCategory(category);
    }

  return (
    <main className='main'>
        <div className='categories-content'>
            <h2>Categories</h2>
            <ul>
                <li onClick={() => setCategory('')}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5973/5973800.png" alt="" />
                    <p>Home</p>
                </li>
                {data.data.map(element => {
                    return <li key={element.category} onClick={() => handleEvent(element.category)}>
                            <img src={element.image} alt={element.category} />
                            <p>{element.category}</p>
                        </li>
                })}
            </ul>
        </div>

        {category && category ? (<ListingProducts category={category}/>) : <ListingProducts />}
        
    </main>
  )
}

export default Categories
