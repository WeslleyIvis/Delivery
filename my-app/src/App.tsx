import React from 'react';
import './App.css';
import {Header} from './componentes/Header';
import Navbar from './componentes/Navbar';
import Main from './componentes/Main';

function App() {
  const [category, setCategory] = React.useState<string>('');

  const handleCategory = (r: string) => {
    setCategory(r);
  }

  return (
    <div>
        <Header />
        <Navbar handleCategory={handleCategory}/>
        <Main category={category}/>
    </div>)
}

export default App;
