import { MessageItem } from "../messageItem";

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

export function Messages() {
  return (
    <div className="flex flex-col justify-center w-full px-5 flex-1 mt-5 gap-2">
        {
          fakeMessages.map(msg => {
            return <MessageItem
              username={msg.name}
              email={msg.email}
              body={msg.body}
            />
          })
        }
    </div>
  )
}