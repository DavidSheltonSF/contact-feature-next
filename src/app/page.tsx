'use client'
import { useActionState } from "react";
import { MessageContainer } from "./components/messageContainer";
import { Form } from "./components/form";
import {submitMessage} from "./actions/submitMessage"


export default function Home() {
  const [formState, formAction] = useActionState(submitMessage, null)
  return (
    <main>
      <section className="flex justify-center gap-5 mt-8 max-lg:flex-col max-lg:items-center m-auto max-lg:w-150">
       <main>
         <div className="flex flex-col w-128 max-lg:items-center
         ">
          <h1 className="font-bold text-6xl">Get in touch</h1>
          <p className="max-lg:text-xl max-lg:text-center">Send us a message and we will get back as soon as possible</p>
          <div className="bg-white w-lg mt-5 p-4  rounded-xl drop-shadow-md">
            <Form formAction={formAction} formState={formState}/>
          </div>
         </div>
       </main>
        <aside className="flex flex-col w-lg h-full">
          <h1 className="font-bold max-lg:text-3xl max-lg:text-center ">Recent Messages</h1>
          <MessageContainer formState={formState}/>
        </aside>
      </section>
      
    </main>
  );
}
