import React from 'react'
export interface Category {
  category: string
}
interface SetCategory {
  handleCategory: (r: string) => void;
  handleSearch: (r: string) => void;
}

const Navbar = (props: SetCategory) => {
  const [categories, setCategories] = React.useState<Category[]>([]);
  const [valueInput, setValueInput] = React.useState<string>('');
  const [isActive, setIsActive] = React.useState(false);

  const activeClass = () => {
    setIsActive(!isActive);
  }

  const setValue = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValueInput(event.target.value);
  }

  const searchProd = (value: string) => {
      props.handleSearch(value)
    
  }

  async function getCategories() {
    await fetch('http://localhost:3333/categories')
    .then(resp => resp.json())
    .then(data => {
      setCategories(data);
    })
    .catch(err => console.log({error: err}));
  }
  
  React.useEffect(() => {
    getCategories();
  }, [])

  return (
    <nav className="nav">
      <div className='nav-content'>
        <div className='logo' onClick={() => {
          props.handleCategory('')
          props.handleSearch('')
          }}>
          <img src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" alt="Logo Food" />
        </div>

        {categories && categories ? <div className='nav-categories'>
          {categories.map(element => {
            return <a href='/' key={element.category} onClick={(e) => {
              e.preventDefault();
              props.handleCategory(element.category);

              // Busca por pesquisa recebe vazio para não ter conflito
              props.handleSearch('');
            }}>{element.category}</a>
          })}
        </div> : null }

        <div className='nav-icons'>
          <button onClick={() => activeClass()}>
            <img src={require("./images/lupa.png")} alt="Lupa" />
          </button>
          <a href="/"><img src={require("./images/heart.png")} alt="Heart" /></a>
          <a href="/"><img src={require("./images/bag.png")} alt="Bag" /></a>
        </div>
      </div>

      <div className={isActive ? 'content-t-input' : 'disabled'}>
        <input 
          type="text" 
          className="input-t-search" 
          placeholder='Find your product' 
          onChange={(event) => setValue(event)} 
          onKeyUp={(event) => 
            event.key === 'Enter' ? searchProd(valueInput) : null
          }/>
        <button>
          <img src={require("./images/lupa.png")} alt='' onClick={() => searchProd(valueInput)}/>
        </button>
      </div>
    </nav>
    
  )
}

export default Navbar
