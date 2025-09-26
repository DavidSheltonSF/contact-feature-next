import { NoMessage } from "../noMessage"
import { Messages } from "../messages"

export function MessageContainer() {

  const fakeMessages = []

  return (
    <div className="flex flex-col justify-center bg-white mt-5 rounded-xl min-h-40 drop-shadow-md">
      {/* <NoMessage/> */}
      <Messages/>
    </div>
  )
}