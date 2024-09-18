import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
  const  [userdata, setuserData] = useState({
  
    email: "",
    password: "",
   

  })
  const changeInputHandle = (e) => {
    setuserData(prevState => {
      return{
        ...prevState, [e.target.name] : e.target.value}
    })
  }
  return (
    <section className='login'>
      <div className="container">
        <h2>Sign in</h2>
        <form className='form login__form'>
          <p className="form__error-message">This is an error message</p>
           
              <input type="email" placeholder='Email' name='email' value={userdata.email}
               onChange={changeInputHandle} />
                <input type="password" placeholder='Password' name='password' value={userdata.password}
                 onChange={changeInputHandle} />
                  
                   <button type='submit' className='btn primary'>Login</button>
        </form>
        <small>Already have an account? <Link to='/login'>Sign up</Link></small>
      </div>
      
    </section>
  )
}

export default Login

