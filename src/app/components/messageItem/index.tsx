import { setTimeFeedback } from "@/app/utils/setTimeFeedback";

export interface MessageProps {
  id?: string;
  fullName: string;
  email: string;
  text: string;
  createdAt: string
}

export function MessageItem(props: MessageProps) {

  const {fullName, email, text, createdAt} = props
 
  return (
    <article className="flex flex-col gap-4 h-30 transform opacity-0 transition-all translate-y-4 ease-in-out delay-200 duration-200 animate-fade-in">
    <header className="flex gap-3">
      <div className="flex">
        <span className="bg-blue-400 px-3 py-3 rounded-xl">
          <img src="user-icon.svg" alt="" />
        </span>
      </div>
      <div className="flex flex-col justify-center mr-auto">
        <h3 className="font-bold">{fullName}</h3>
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