import React from 'react'

const FormLogin = () => {
  return (
    <div className="content-form-login">
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="email" id="name" placeholder='Login name'/>
        <label htmlFor="password">Password</label>
        <input type="text" name="password" id="password" placeholder='Password'/>

        <button type="submit">Sign In</button>
      </form>
    </div>
  )
}

export default FormLogin
