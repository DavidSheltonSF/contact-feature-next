import { Button } from "../button";


type Props = {
  formAction: (formData: FormData) => void;
};

export function Form({formAction}: Props) {
  return (
    <form className="flex flex-col h-full gap-4" action={formAction}>
      <div className="flex flex-col">
        <label className="font-bold" htmlFor="input-name">Full Name</label>
        <input 
        className="border-1 border-solid border-gray-200 rounded-sm py-1" 
        type="text" id="input-name" 
        name="username"
        placeholder="Enter your full name"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-bold" htmlFor="input-email">Email Address</label>
        <input 
        className="border-1 border-solid border-gray-200 rounded-sm py-1" 
        type="text"
        name="email"
        id="input-email" 
        placeholder="Enter your email address"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label className="font-bold" htmlFor="input-message">Message</label>
        <textarea 
        className="border-1 border-solid border-gray-200 rounded-sm flex-1" 
        name="textMessage" 
        id="input-message" 
        placeholder="Tell us what's on your mind..."
        ></textarea>
      </div>
      <Button label="Send Message"></Button>
    </form>
  )
}