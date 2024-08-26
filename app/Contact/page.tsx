"use client"
import React, { useState } from "react"
export default function Contact() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [userMsg, setUserMsg] = useState("");
  const submitHandler = (elem:React.FormEvent<HTMLFormElement>) => {
    elem.preventDefault()
    console.log(userMsg);
    console.log(userName);
    console.log(email);
    setEmail("");
    setUserMsg("");
    setUserName("");
  }
  return (
   <>
   <main className="h-[89vh] w-screen bg-gradient-to-b from-clr1 to-clr2 flex flex-col gap-1 items-center justify-center">
    <div className="h-[14%] w-screen flex items-center justify-center font-bold text-white sm:text-[7vh] text-[6vh]">CONTACT ME</div>
    <div className="h-[80%] md:w-2/5 sm:w-3/5 w-11/12 bg-gradient-to-b from-purple-800 to-clr1 rounded-2xl shadow-formShadow">
    <form
    className="h-full w-full flex flex-col items-center py-6 px-10 gap-5 font-semibold"
    onSubmit={submitHandler}
    >
      <div className="w-full  h-[20%]">
        <label htmlFor="name" className="block font-semibold text-[20px] text-white">Name</label>
        <input
         type="text"
         id="name" 
         className="h-[60%] w-[100%] rounded-md bg-gradient-to-t from-purple-800 to-white px-2" 
         value={userName}
         onChange={(data)=>{setUserName(data.target.value)}}
         />
      </div>
      <div className="w-full  h-[20%]">
        <label htmlFor="email" className="block font-semibold text-[20px] text-white">Email</label>
        <input
        type="text"
        id="email" 
        className="h-[60%] w-[100%] rounded-md bg-gradient-to-t from-purple-800 to-white px-2"
        value={email}
        onChange={(data)=>{setEmail(data.target.value)}}
        />
      </div>
      <div className="w-full h-[40%] ">
        <label htmlFor="msg" className="block font-semibold text-[20px] text-white">Message</label>
        <textarea 
        id="msg"
        className="w-[100%] rounded-md h-[80%] bg-gradient-to-t from-purple-800 to-white p-2 box-border placeholder-gray-400 text-base"
        value={userMsg}
        onChange={(data)=>{setUserMsg(data.target.value)}}
        />
      </div>
      <div>
        <button 
        type="submit"
        className="text-white py-[2vh] px-4 rounded-xl font-semibold bg-purple-800 border-2 border-purple-800 hover:bg-transparent duration-500 hover:text-purple-800" 
        >
        Send Message
        </button>
      </div>
    </form>
    </div>
   </main>
   </>
  );
}