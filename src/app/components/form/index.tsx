import { Button } from "../button";
import { SubmitionFeedbackMessage } from "../submitionFeedbackMessage/intex";


type Props = {
  formAction: (formData: FormData) => void;
  formState: any
};

export function Form({formAction, formState}: Props) {
  return (
    <form className="flex flex-col h-full gap-4" action={formAction}>
      <div className="flex flex-col">
        <label className="font-bold" htmlFor="input-name">Full Name</label>
        <input 
        className="border-1 border-solid border-gray-200 rounded-sm py-1 pl-3" 
        type="text" id="input-name" 
        name="username"
        placeholder="Enter your full name"
        />
      </div>
      <div className="flex flex-col">
        <label className="font-bold" htmlFor="input-email">Email Address</label>
        <input 
        className="border-1 border-solid border-gray-200 rounded-sm py-1 pl-3" 
        type="text"
        name="email"
        id="input-email" 
        placeholder="Enter your email address"
        />
      </div>
      <div className="flex flex-col flex-1">
        <label className="font-bold" htmlFor="input-message">Message</label>
        <textarea 
        className="border-1 border-solid border-gray-200 rounded-sm flex-1 pl-3" 
        name="textMessage" 
        id="input-message" 
        placeholder="Tell us what's on your mind..."
        ></textarea>
      </div>
      {formState?.success === false ? <SubmitionFeedbackMessage type="error" label={formState?.message}/> : ''}
      {formState?.success === true ? <SubmitionFeedbackMessage type="success" /> : ''}
      <Button label="Send Message"></Button>
    </form>
  )
}