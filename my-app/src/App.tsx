import React from 'react';
import './App.css';
import FormLogin from './componentes/FormLogin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './componentes/Main';
import FormProduct from './componentes/FormProduct';

function App() {
  const [token, setToken] = React.useState<String | null>(null);

  function handleToken(tokenGenerate: string) {
    setToken(tokenGenerate);
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<FormLogin onLogin={handleToken} />} />
        {token && (
          <Route path={`/admIndex${token}`} element={<Main />} />
        )}
        <Route path='/index' element={<FormProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
