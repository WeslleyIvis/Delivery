import React, { SyntheticEvent } from 'react'
import { useNavigate } from 'react-router-dom';

const FormLogin = ({onLogin}: any) => {
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState('');
  const navigate = useNavigate();

  async function submit(event: SyntheticEvent) {
    event.preventDefault();

    await fetch('http://localhost:3333/auth/authenticate', {
      method: 'POST',
      body: JSON.stringify({email: name, password}),
      headers: {
        'Content-type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then(data => valid(data))
    .catch(err => console.log({error: err, }))
  }

  const valid = async (tokenData: {error: string, token: string}) => {
    const {error, token} = tokenData;

    if(token) {      
      sessionStorage.setItem('Authorization', `Bearer ${token}`)
      onLogin(token);
      navigate(`/admIndex${token}`);
    }

    if(error) {
      return setStatus("Invalid name or password")
    }else
      return setStatus('Error conection db server')
  }

  return (
    <div className="content-form-login">
      <form onSubmit={submit}>
        <label htmlFor="name">Name</label>
        <input 
        type="text"
        name="email"
        id="name" 
        placeholder='Login name' 
        value={name} 
        onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input 
        type="text" 
        name="password" 
        id="password" 
        placeholder='Password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        />
        <button type="submit">Sign In</button>
        <p>{status}</p>
      </form>
    </div>
  )
}

export default FormLogin
