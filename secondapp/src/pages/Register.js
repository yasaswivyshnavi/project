import React from 'react'

const Register = () => {
  return (
    <div className="formContainer">
        <div  className="formWrapper">
        <span className="logo">Chat@F</span>
        <span className="title">Register</span>
        <form>
            <input type="text" placeholder='display name'/>
            <input type="email" placeholder='display email'/>
            <input type="password" placeholder='password'/>
            
            <button>Sign up</button>
        </form>
        <p> You do have an account?  Login </p>
        </div>
    </div>
  )
}

export default Register


































