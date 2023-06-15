import React from 'react'
import cam from "../images/cam.jpg";
import user from "../images/user.jpg";
import more from "../images/more.jpg";
import Messages from "./Messages";
import Input from "./Input";
function Chat() {
  return (
    <div className="chat">
     <div className="chatInfo">
      <span>vyshu</span>
      <div className="chatIcons">
<img height="24px"src={cam}alt=""/>
<img height="24px"src={user}alt=""/>
<img height="24px"src={more }alt=""/>
      </div>
    </div>
    <Messages/>
   <Input/>
    </div>
  )
}

export default Chat

