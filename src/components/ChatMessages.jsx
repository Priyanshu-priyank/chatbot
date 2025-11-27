import ChatMessage from './ChatMessage.jsx';
import { useState } from 'react'
import './ChatMessages.css'
function ChatMessages({chatMessages}){
   //state lifted up to App component to use it in multiple components

return(
    <>
     {chatMessages.map((msg)=>{
      return (
        <ChatMessage
        message={msg.message}
        sender={msg.sender}
        key={msg.id}/>
      );
    })}
    </>
);
}

export default ChatMessages;