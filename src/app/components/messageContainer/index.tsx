'use client'

import { NoMessage } from "../noMessage"
import { Messages } from "../messages"
import { useEffect, useState } from "react";

export function MessageContainer({formState}: {formState: any}) {

  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      try {
        const response = await fetch('http://localhost:8080/messages', {
          method: 'GET'
        });

        const data = await response.json()
        console.log(data)
        setMessages(data.body);
      } catch (error) {
        console.log(error)
      }
    }
    fetchMessages();
  }, [formState])

  return (
  <div className="flex flex-col justify-center bg-white mt-5 rounded-xl min-h-40 drop-shadow-md">
    {
      messages.length ? <Messages messages={messages}/> : <NoMessage/>
    }
  </div>
  )
}