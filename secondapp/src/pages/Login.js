import React from 'react'

const Login = () => {
  return (
    <div className="formContainer">
        <div  className="formWrapper">
        <span className="logo">Chat@F</span>
        <span className="title">Login</span>
        <form>
            <input type="email" placeholder='display email'/>
            <input type="password" placeholder='password'/>
            <button>Sign in</button>
        </form>
        <p> You do have an account? Register </p>
        </div>
    </div>
  )
}

export default Login