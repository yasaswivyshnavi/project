import React from 'react'
import pcam from "../images/pcam.jpg";
import file from "../images/file.jpg";
function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder="Type here..."/>
      <div className='send'>
      <img height="24px"src={pcam}alt=""/>
        <input type="file" style={{display:"none"}} if="file"/>
        <label htmlFor="file">
        <img height="24px"src={file}alt=""/>
        </label>
        <button>submit</button>
      </div>

    </div>
  )
}

export default Input
