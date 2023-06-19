import React from 'react'
import { Product } from './CategoryProductNavSelection';

const Products = (props: { category: string, name: string, display?: string, amount?: number } = { category: '', name: '', display: 'products-content', amount: -1 } ) => {
  const [data, setData] = React.useState<Product[]>();
  const [loading, setLoading] = React.useState(true);
  const [countAmount, setCountAmount] = React.useState(props.amount);
  const [filterAmount, setFilterCount] = React.useState(0);

  async function filterCategory() {
    await fetch('http://localhost:3333/project/product')
    .then(r => r.json())
    .then(value => {
      setTimeout(() => {
        setData(value)
        setLoading(false);
      }, 3000)
    })
    .catch(err => {
      console.error({error: err})
      setLoading(false);
    });
  }

  React.useEffect(() => {
    filterCategory()
  }, [])

  React.useEffect(() => {
    if (data) {
      const count = data.filter(product => product.category === props.category).length;
      setFilterCount(count);
    }
    setCountAmount(props.amount);
  }, [data, props.category, props.amount])

  console.log({category: props.category, name: props.name})
  
  if(loading) 
    return <div>Loading products...</div>

  if(props.name) {
    return <section>
      <div className={props.display}>
        {data && data ? 
        data.filter(product => product.name.toLowerCase().includes(props.name.toLowerCase()))
        .slice(0, countAmount)
        .map((element, index) => {
          return <div className='product-hover' key={element.name + index}>  
            <div className='products-card'>
              <img src={element.image} alt={element.name} />
              <div>
                <h3>{element.name}</h3>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <p>{element.value}</p>
                <button>
                  <img src={require("../images/bag.png")} alt="bag" /> Comprar</button>
              </div>
            </div>
          </div>
        }) : null}  
      </div>  
  </section>
  }

  return (
    <section>
      <div className={props.display}>
        {data && data ? 
        data.filter(product => product.category.toLowerCase().includes(props.category.toLowerCase()))
        .slice(0, countAmount)
        .map((element, index) => {
          return <div className='product-hover' key={element.name + index}>  
            <div className='products-card'>
              <img src={element.image} alt={element.name} />
              <div>
                <h3>{element.name}</h3>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                <p>{element.value}</p>
                <button>
                  <img src={require("../images/bag.png")} alt="bag" /> Comprar</button>
              </div>
            </div>
          </div>
        }) : null}  
      </div>  
      {countAmount && countAmount < filterAmount ? <div onClick={() => setCountAmount(countAmount + 8)} className='products-add-items'></div> : null}
    </section>
  )
}

export default Products
