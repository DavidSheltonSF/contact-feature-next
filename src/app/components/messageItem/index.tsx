import { setTimeFeedback } from "@/app/utils/setTimeFeedback";

export interface MessageProps {
  id?: string;
  username: string;
  email: string;
  text: string;
  createdAt: string
}

export function MessageItem(props: MessageProps) {

  const {username, email, text, createdAt} = props
 
  return (
    <article className="flex flex-col gap-4 h-30">
    <header className="flex gap-3">
      <div className="flex">
        <span className="bg-blue-500 px-3 py-4 rounded-xl">Icon</span>
      </div>
      <div className="flex flex-col justify-center mr-auto">
        <h3 className="font-bold">{username}</h3>
        <div className="flex items center gap-1">
          <img className="opacity-50 w-4" src="email-icon.svg" alt="" /> <span className="text-gray-500 text-sm">{email}</span>
        </div>
      </div>
      <div>
          <div className="flex gap-1">
          <img className="opacity-25 w-4" src="clock-icon.svg" alt="" /> 
          <span className="text-gray-400 text-sm">{setTimeFeedback(createdAt)}</span>
        </div>
      </div>
    </header>
    <main>
      <p>{text}</p>
    </main>
  </article>
  )
}