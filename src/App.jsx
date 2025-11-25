import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChatInput from './components/ChatInput.jsx';
import ChatMessage from './components/ChatMessage.jsx';

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
     <ChatInput />
     <ChatMessage message="hello chatbot" sender="user"/>
     <ChatMessage message="Hello! How can I help you?" sender="robot"/>
     <ChatMessage message="can you get me today's date?" sender="user"/>
     <ChatMessage message="Today is September 27" sender="robot"/>
     <ChatMessage message=""/>
     <ChatMessage message="hello chatbot"/>
    </>
  )
}

export default App;
