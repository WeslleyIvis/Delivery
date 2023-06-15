import React from 'react';
import './App.css';
import {Header} from './componentes/Header';
import Navbar from './componentes/Navbar';
import Main from './componentes/Main';

function App() {
  const [category, setCategory] = React.useState<string>('');
  const [search, setSearch] = React.useState<string>('');

  const handleCategory = (r: string) => {
    setCategory(r);
  }

  const handleSearch = (r: string) => {
    setSearch(r);
  }

  return (
    <div>
        <Header />
        <Navbar handleCategory={handleCategory} handleSearch={handleSearch}/>
        <Main category={category} name={search}/>
    </div>)
}

export default App;
