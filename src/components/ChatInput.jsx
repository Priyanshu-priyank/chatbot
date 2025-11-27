import { useState } from 'react';

function ChatInput({chatMessages,setChatMessages}){
    const [inputText,setInputText] = useState('');

    function saveInputText(e){ 
         //updater function
        setInputText(e.target.value);
    }

    function sendMessage(){

        const newChatMessage=[
            ...chatMessages,
            {
                message: inputText,
                sender: 'user',
                id: crypto.randomUUID(),
            }
        ];

        setChatMessages(newChatMessage);

        const response=Chatbot.getResponse(inputText);
        setChatMessages([
            ...newChatMessage,
            {
                message: response,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);
        
        //update the current value in inputText
        setInputText('')
    }
    return(
        <div className="chat-input">
            <input type="text" 
            placeholder="Send a message to Chatbot"
             size='30'
             onChange={saveInputText} 
             value={inputText} //change the text inside textbox(Controlled input)
             />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default ChatInput;