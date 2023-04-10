import React from 'react'
import { Product } from './Interfaces';

const ListingProducts = ({category}: any) => {
    const [data, setData] = React.useState<Product[]>([]);

    React.useEffect(() => {
      getData();    
    }, [category])

    async function getData() {
      await fetch('http://localhost:3333/project/product')
      .then(r => r.json())
      .then(data => setData(data))
      .catch(err => console.log({error: err})) 
    }

  return (
    <div className='products-content'>
      {category && category ? (
        data.filter((product) => product.category === category).map(product => <div key={product.name} className='product-card'>
          <img src={product.image} alt={product.name} />
          <div>
            <p>{product.name}</p>
            <p>{product.value}</p>
          </div>
        </div>
        )
      ) : data.map(product => {
        return <div key={product.name} className='product-card'>
          <img src={product.image} alt={product.name} />
          <div>
            <p>{product.name}</p>
            <p>{product.value}</p>
          </div>
        </div>
      })}
    </div>
  )
}

export default ListingProducts
