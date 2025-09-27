'use client'
import { useActionState } from "react";
import { MessageContainer } from "./components/messageContainer";
import { Form } from "./components/form";
import {submitMessage} from "./actions/submitMessage"


export default function Home() {
  const [formState, formAction] = useActionState(submitMessage, null)

  return (
    <main>
      <section className="flex justify-center gap-5 mt-8">
       <main>
         <h1 className="font-bold text-4xl">Get in touch</h1>
        <p>Send us a message and we will get back as soon as possible</p>
        <div className="bg-white w-lg mt-5 p-4 h-100 rounded-xl drop-shadow-md">
          <Form formAction={formAction}/>
        </div>
       </main>
        <aside className="flex flex-col w-lg h-full">
          <h1 className="font-bold text-xl">Recent Messages</h1>
          <MessageContainer formState={formState}/>
        </aside>
      </section>
      
    </main>
  );
}
