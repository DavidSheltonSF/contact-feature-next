import { NoMessage } from "../noMessage"
import { Messages } from "../messages"

export async function MessageContainer() {

    const response = await fetch('http://localhost:8080/messages', {
      method: 'GET'
    });
  
    const data = await response.json();
    const messages = data.body;

  return (
    <div className="flex flex-col justify-center bg-white mt-5 rounded-xl min-h-40 drop-shadow-md">
      {
        messages ? <Messages messages={messages}/> : <NoMessage/>
      }
    </div>
  )
}