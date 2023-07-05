import React from 'react'
export interface Category {
  category: string
}
interface SetCategory {
  handleCategory: (r: string) => void;
  handleSearch: (r: string) => void;
}

const Navbar = (props: SetCategory) => {
  const categories = ['Salgados', 'Açai', 'Cafe', 'Sushi', 'Doce', 'Hamburguers']
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
            return <a href='/' key={element} onClick={(e) => {
              e.preventDefault();
              props.handleCategory(element);

              // Busca por pesquisa recebe vazio para não ter conflito
              props.handleSearch('');
            }}>{element}</a>
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
        <button onClick={() => searchProd(valueInput)}>
          <img src={require("./images/lupa.png")} alt='' />
        </button>
      </div>
    </nav>
    
  )
}

export default Navbar
