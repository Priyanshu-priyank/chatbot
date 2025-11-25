import user from '../assets/user.png';
import robot from '../assets/robot.png';

function ChatMessage({message,sender}){
    // const {message,sender} = props;

    return(
        <div>
          {
          sender==="robot" && 
            <img src={robot} alt="robot logo" className="chat-img" width="20"/> }
            {message}
            {sender==="user" && <img src={user} alt="user logo" className="chat-img" width="20"/>}
        </div>
    )
}

export default ChatMessage;