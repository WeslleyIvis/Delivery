import React from 'react'
import { Product } from './Interfaces'
import ListingProducts from './ListingProducts';

const Categories = (controller: any) => {
    const [category, setCategory] = React.useState<String>('');    
    const [products, setProduts] = React.useState<Product[]>([]);
    const [product, setProdut] = React.useState<Product>();
    const [id, setId] = React.useState('');
    
    async function getCategories() {

        await fetch('http://localhost:3333/categories', {
            method: "GET",
         })
        .then(r => r.json())
        .then(data => setProduts(data))
        .catch(err => console.log({error: err}))
    }

    async function getProduct(event: React.SyntheticEvent) { 
        event.preventDefault();

        await fetch(`http://localhost:3333/project/product/${id}`, {
            method: 'GET'
        }).then(r => r.json())
        .then(prod => {
            if(prod?.error) {
                console.log(prod)
            } 

            if(prod?.name) {
                console.log(prod)
                setProdut(prod)
            }
        })
        .catch(err => console.log({error: err}))
    }

    function handleEvent(category: string) {
        setCategory(category);
    }

    React.useEffect(() => {
        getCategories();
    }, [])

  return (
    <div className='main'>
        <div className='categories-content'>
            <form className='search-content' onSubmit={getProduct}>
                <label htmlFor="search"></label>           
                <input 
                type="text" 
                id='search' 
                name='search' 
                placeholder='Search product' 
                onChange={(event) => setId(event.target.value)}/>
                    <button>Lupa</button>
                
                {product && product?.name ? <div className='sear-p product-card'>
                    <img src={product.image} alt={product.name}/>
                    <div>
                        <p>{product.name}</p>
                        <p>{product.value}</p>
                    </div>
                </div> : null}
            </form>
        <h2>Categories</h2>
            <ul>
                <li onClick={() => setCategory('')}>
                    <img src="https://cdn-icons-png.flaticon.com/512/5973/5973800.png" alt="" />
                    <p>Home</p>
                </li>
                {products && products.map(element => {
                    return <li key={element.category} onClick={() => handleEvent(element.category)}>
                            <img src={element.image} alt={element.category} />
                            <p>{element.category}</p>
                        </li>
                })}
            </ul>     
        </div>
        
        {category && category ? (
        <ListingProducts 
            category={category} 
        />) : <ListingProducts />}         
    </div>
  )
}

export default Categories
