'use client'

import { NoMessage } from "../noMessage"
import { Messages } from "../messages"
import { useEffect, useState } from "react";

export function MessageContainer({formState}: {formState: any}) {

  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState<any>(true);

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
      } finally {
        setLoading(false)
      }
    }
    fetchMessages();
  }, [formState])

  {if (loading) return (
    <div className="flex flex-col items-center justify-center bg-white mt-5 rounded-xl min-h-40 drop-shadow-md">
      <img className="w-15 animate-spin" src="loading-icon.svg" alt="" />
    </div>
  )}

  return (
  <div className="flex flex-col items-center justify-start bg-white mt-5 rounded-xl min-h-40 drop-shadow-md overflow-y-scroll h-100">
    {
      messages.length ? <Messages messages={messages}/> : <NoMessage/>
    }
  </div>
  )
}