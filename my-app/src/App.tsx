import React from 'react';
import './App.css';
import {Header} from './componentes/Header';
import Navbar from './componentes/Navbar';

function App() {
  const [token, setToken] = React.useState<String | null>(null);

  function handleToken(tokenGenerate: string) {
    setToken(tokenGenerate);
  }

  return (
    <div>
        <Header />
        <Navbar />
    </div>)
}

export default App;
