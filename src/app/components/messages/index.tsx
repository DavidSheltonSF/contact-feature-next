import { MessageItem, MessageProps } from "../messageItem";

const fakeMessages = [
  {
    id:'fsafdsfa',
    fullName: 'Josetho',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: "2025-02-02"
  },
  { id: 'ffsdfasdgasga',
    fullName: 'Joseth',
    email: "jo@email.com",
    text: "This is a test message",
    createdAt: "2025-02-02"
  },
]

interface MessagePropsArray {
  messages: MessageProps[]
}

export function Messages({messages}: MessagePropsArray) {
  const recentMessages = messages.slice(0, 4)
  return (
    <div className="flex flex-col w-full flex-1 gap-5">
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