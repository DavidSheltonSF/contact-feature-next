import { Button } from "../button";
import { InputWithLabel } from "../inputWithLabel";
import { SubmitionFeedbackMessage } from "../submitionFeedbackMessage/intex";
import { TextAreaWithLabel } from "../textAreaWithLabel";


type Props = {
  formAction: (formData: FormData) => void;
  formState: any
};

export function Form({formAction, formState}: Props) {
  return (
    <form className="flex flex-col h-full gap-4" action={formAction}>
      <InputWithLabel id="input-full-name" label="Full Name" placeholder="Enter your full name" name="fullName" type="text"/>
      <InputWithLabel id="input-email" label="Email Address" placeholder="Enter your email address" name="email" type="email"/>
      <TextAreaWithLabel id="input-message" label="Message" placeholder="Tell us what's on your mind..." name="textMessage"/>
      {formState?.success === false ? <SubmitionFeedbackMessage type="error" label={formState?.message}/> : ''}
      {formState?.success === true ? <SubmitionFeedbackMessage type="success" /> : ''}
      <Button label="Send Message"></Button>
    </form>
  )
}