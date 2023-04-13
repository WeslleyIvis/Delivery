import React from 'react'
import { Product } from './Interfaces';

const ListingProducts = ({category}: any) => {
    const [data, setData] = React.useState<Product[]>([]);
    const token = sessionStorage.getItem('Authorization');

    React.useEffect(() => {
      getData(); 
      
    }, [category])

    async function getData() {
      await fetch('http://localhost:3333/project/product')
      .then(r => r.json())
      .then(data => {
        setData(data)  
      })
      .catch(err => console.log({error: err})) 
    }

    async function deleteProduct(id: any) {
      console.log(id)
      
      await fetch(`http://localhost:3333/project/product/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `${token}`
        }
      }).then(r => r.json).then(data => {
        getData();
      })
      .catch(err => console.log({error: err}))
    }

  
  return (
    <div className='products-content'>
      {category && category ? (
        data.filter((product) => product.category === category).map(product => <div key={product._id} className='product-card'>
          {token && <div className='menu-edit'>
              <p>Edit</p>
              <p onClick={(e) => deleteProduct(product._id)}>Delete</p>
            </div>}
          <img src={product.image} alt={product.name} />
          <div>
            <p>{product.name}</p>
            <p>{product.value}</p>
          </div>
        </div>
        )
      ) : data.map(product => {
        return <div key={product._id} className='product-card'>
            {token && <div className='menu-edit'>
              <p>Edit</p>
              <p  onClick={(e) => deleteProduct(product._id)}>Delete</p>
            </div>}
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
