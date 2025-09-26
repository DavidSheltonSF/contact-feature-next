
export default function Home() {
  return (
    <main>
      <section className="flex justify-center gap-5 mt-8">
       <main>
         <h1 className="font-bold text-4xl">Get in touch</h1>
        <p>Send us a message and we will get back as soon as possible</p>
        <div className="bg-white w-lg mt-5 p-4 h-100 rounded-xl drop-shadow-md">
          <form className="flex flex-col h-full gap-4" action="">
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="input-name">Full Name</label>
              <input 
              className="border-1 border-solid border-gray-200 rounded-sm py-1" 
              type="text" id="input-name" 
              name="inputName"
              placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold" htmlFor="input-email">Email Address</label>
              <input 
              className="border-1 border-solid border-gray-200 rounded-sm py-1" 
              type="text" 
              id="input-email" 
              placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col flex-1">
              <label className="font-bold" htmlFor="input-message">Message</label>
              <textarea 
              className="border-1 border-solid border-gray-200 rounded-sm flex-1" 
              name="" 
              id="input-message" 
              placeholder="Tell us what's on your mind..."
              ></textarea>
            </div>
          </form>
        </div>
       </main>
        <aside className="flex flex-col w-lg h-full">
          <h1 className="font-bold text-xl">Recent Messages</h1>
          <div className="flex flex-col items-center justify-center bg-white mt-5 rounded-xl h-40 drop-shadow-md">
            <h2 className="font-bold">No messages yet</h2>
            <p>Be the first to send us a message</p>
          </div>
        </aside>
      </section>
      
    </main>
  );
}
