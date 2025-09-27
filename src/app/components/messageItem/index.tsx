export interface MessageProps {
  id?: string;
  username: string;
  email: string;
  text: string;
  // createdAt: string
}

export function MessageItem(props: MessageProps) {

  const {username, email, text} = props
 
  return (
    <article className="flex flex-col gap-4 h-30">
    <header className="flex gap-3">
      <div className="flex">
        <span className="bg-blue-500 px-3 py-4 rounded-xl">Icon</span>
      </div>
      <div className="flex flex-col justify-center mr-auto">
        <h3 className="font-bold">{username}</h3>
        <div className="flex items center gap-1">
          <img className="opacity-50" src="email-icon.svg" alt="" /> <span className="text-gray-500">{email}</span>
        </div>
      </div>
      <div>
          <div className="flex gap-1">
          <img className="opacity-25" src="clock-icon.svg" alt="" /> <span className="text-gray-400">less than a minute ago</span>
        </div>
      </div>
    </header>
    <main>
      <p>{text}</p>
    </main>
  </article>
  )
}