import { MessageItem, MessageProps } from "../messageItem";

const fakeMessages = [
  {
    name: 'Joseth',
    email: "jo@email.com",
    body: "This is a test message",
    createdAt: "2025-02-02"
  },
  {
    name: 'Joseth',
    email: "jo@email.com",
    body: "This is a test message",
    createdAt: "2025-02-02"
  },
]

interface MessagePropsArray {
  messages: MessageProps[]
}

export function Messages({messages}: MessagePropsArray) {
  const recentMessages = messages.slice(0, 4)
  return (
    <div className="flex flex-col w-full px-5 flex-1 mt-5 gap-2">
        {
          recentMessages.map(msg => {
            return <MessageItem
              key={msg.id}
              fullName={msg.fullName}
              email={msg.email}
              text={msg.text}
              createdAt={msg.createdAt}
            />
          })
        }
    </div>
  )
}