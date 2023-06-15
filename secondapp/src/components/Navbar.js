import React from 'react'

function Navbar() {
  return (
    <div className='navbar'>
        <span className="logo1">Chat@F</span>
        <div className="user">
        <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/>
        <span>vyshu</span>
        <button className='button1'>logout</button>
        </div>
    </div>
  )
}

export default Navbar
