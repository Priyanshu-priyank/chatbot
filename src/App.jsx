import { useState } from 'react'
import ChatInput from './components/ChatInput.jsx';
import ChatMessages from './components/chatMessages.jsx';
import './App.css'

function App() {
  //Lifting the State Up into App component
  //  & shared it b/w ChatInput and ChatMessages
   const [chatMessages,setChatMessages]=useState( [
    {message:"hello chatbot", 
    sender:"user"
    ,id:'id1'
  },
    {message:"Hello! How can I help you?", 
      sender:"robot",
      id:'id2'
    },
    {message:"can you get me today's date?", 
      sender:"user",
      id:'id3'
    },
    {message:"Today is November 27",
       sender:"robot",
        id:'id4'
      },
    ]);

    // const [chatMessages,setChatMessages]= array;
    // const chatMessages=array[0];
    // const setChatMessages = array[1];
  
  

  return (
    <>
      <ChatInput 
      chatMessages={chatMessages} //prop for using state
      setChatMessages={setChatMessages}
      />
        
      <ChatMessages 
      chatMessages={chatMessages}
      />
    </>
  )
}

export default App;
