import React from 'react'
import { Product } from './CategoryProductNavSelection';

const Products = (props: {category: string, display: string}) => {
  const [data, setData] = React.useState<Product[]>();
  
  async function filterCategory() {
    await fetch('http://localhost:3333/project/product')
    .then(r => r.json())
    .then(value => setData(value))
    .catch(err => console.log({error: err}));
  }

  React.useEffect(() => {
    filterCategory()
  }, [])

  return (
    <section>
    <div className={props.display}>
      {data && data ? 
      data.filter(product => product.category === props.category)
      .map((element, index) => {
        return <div className='product-hover' key={element.name + index}>  
          <div className='products-card'>
            <img src={element.image} alt={element.name} />
            <div>
              <h3>{element.name}</h3>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              <p>{element.value}</p>
              <button>
                <img src={require("../images/bag.png")} alt="" /> Comprar</button>
            </div>
          </div>
        </div>
      }) : null}  
    </div>  

    </section>
  )
}

export default Products
