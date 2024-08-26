import Link from "next/link";
import React from "react";
export default function Home() {
  return (
    <>
      <div className=" h-[auto] pt-16 w-full flex flex-row items-center justify-center  md:pl-10 pl-2 text-white flex-wrap-reverse">
        <div className="h-auto w-[14rem] sm:w-[20rem] md:w-[28rem] bg-transparent flex items-start justify-center flex-col flex-wrap">
          <h1 className="md:text-[38px] sm:text-[30px] text-[25px] font-bold font-sans">
            Hi, I'm Muhammad Fasih
          </h1>
          <h2 className="md:text-[30px] sm:text-[22px] text-[20px] text-purple-800 font-bold">
            Fullstack Developer
          </h2>
          <p className="py-4 text-[16px]">
            I specialize in building responsive, user-friendly web applications.
            I excel in both front-end and back-end technologies, delivering
            efficient and innovative digital solutions tailored to client needs.
          </p>
          <div>
            <button className="sm:px-8 px-6 sm:py-2 py-1 sm:my-2 my-1 sm:mr-10 mr-8 sm:text-[1.2rem] text-[0.9rem] border-2 bg-purple-800 rounded text-clr2 font-bold  hover:bg-clr2 hover:text-purple-800 hover:border-purple-800 duration-500  border-transparent">
              <Link href="/Contact" className="h-full w-full inline-block">
                Hire Me
              </Link>
            </button>
            <button
              className="sm:px-8 px-6 sm:py-2 py-1 sm:my-2 my-1 sm:mr-10 mr-8 sm:text-[1.2rem] text-[0.9rem] border-2 rounded font-bold 
         text-purple-800 border-purple-800 hover:bg-purple-800 hover:text-clr2  duration-500"
            >
              <Link href="/Contact" className="h-full w-full inline-block">
                Let's Talk
              </Link>
            </button>
          </div>
          <div className="bg-transparent md:h-10 sm:8 h-6 flex md:gap-2 sm:gap-1 ml-2 mt-2">
            <span className="md:w-14 sm:w-10 w-8 h-full bg-[url('Assets/linkedin.svg')] bg-center bg-no-repeat bg-contain inline-block cursor-pointer hover:scale-125">
              <a
                href="https://www.linkedin.com/in/muhammad-fasih-99023b314/"
                className="h-full w-full inline-block"
                target="_blank"
              ></a>
            </span>
            <span className="md:w-14 sm:w-10 w-8 h-full bg-[url('Assets/github.svg')] bg-center bg-no-repeat bg-contain inline-block cursor-pointer hover:scale-125">
              <a
                href="https://github.com/HafizFasih"
                className="h-full w-full inline-block"
                target="_blank"
              ></a>
            </span>
            <span className="md:w-14 sm:w-10 w-8 h-full bg-[url('Assets/youtube.svg')] bg-center bg-no-repeat bg-contain inline-block cursor-pointer hover:scale-125">
              <a
                href="https://www.youtube.com/"
                className="h-full w-full inline-block"
                target="_blank"
              ></a>
            </span>
          </div>
        </div>

        <div className="flex md:h-[28rem] sm:h-[20rem] h-[14rem] w-[14rem] sm:w-[20rem] md:w-[28rem] bg-transparent items-center justify-center">
          <div className="h-[90%] w-[90%] rounded-full bg-transparent bg-[url('Assets/mypic.png')] bg-no-repeat bg-cover drop-shadow-pic brightness-110 hover:drop-shadow-none hover:scale-105 duration-500 cursor-pointer"></div>
        </div>
      </div>
    </>
  );
}
