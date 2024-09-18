import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
  const  [userdata, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    password2:"",

  })
  const changeInputHandle = (e) => {
    setuserData(prevState => {
      return{
        ...prevState, [e.target.name] : e.target.value}
    })
  }
  return (
    <section className='register'>
      <div className="container">
        <h2>Sign Up</h2>
        <form className='form register__form'>
          <p className="form__error-message">This is an error message</p>
            <input type="text" placeholder='Full name' name='name' value={userdata.name}
             onChange={changeInputHandle} />
              <input type="email" placeholder='Email' name='email' value={userdata.email}
               onChange={changeInputHandle} />
                <input type="password" placeholder='Password' name='password' value={userdata.password}
                 onChange={changeInputHandle} />
                  <input type="password" placeholder='Confirm password' name='Password2' value={userdata.password}
                   onChange={changeInputHandle} />
                   <button type='submit' className='btn primary'> Register</button>
        </form>
        <small>Already have an account? <Link to='/login'>Sign in</Link></small>
      </div>
      
    </section>
  )
}

export default Register
