import React from 'react'
interface Category {
  category: string
}

const Navbar = () => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  async function getCategories() {
    await fetch('http://localhost:3333/categories')
    .then(resp => resp.json())
    .then(data => {
      setCategories(data)
      console.log(data)
    })
    .catch(err => console.log({error: err}));
  }
  
  React.useEffect(() => {
    getCategories();
  }, [])
  return (
    <nav>
      <div>
        <img src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" alt="Logo Food" />
      </div>

      {categories && categories ? <div>
        {categories.map(element => {
          return <a href='/' key={element.category}>{element.category}</a>
        })}
      </div> : null }

      <div>
        <a href="/"><img src={require("./images/lupa.png")} alt="" /></a>
        <a href="/"><img src={require("./images/coracao.png")} alt="" /></a>
        <a href="/"><img src={require("./images/bag.png")} alt="" /></a>
      </div>
    </nav>
  )
}

export default Navbar
