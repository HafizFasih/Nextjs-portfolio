import React from "react";
export default function About() {
  return (
    <>
      <main className="bg-gradient-to-b from-clr1 to-clr2 sm:h-[89vh] h-auto w-full py-5 sm:gap-5 gap-4 flex flex-col items-center justify-evenly">
        <div className="cursor-pointer hover:bg-[url('Assets/logo.png')] h-[26vh] w-[26vh] bg-[url('Assets/Untitled.jpeg')] hover:bg-contain bg-center hover:bg-left bg-no-repeat bg-cover rounded-full shadow-formShadow hover: duration-500">
        </div>       
        <div className=" h-auto max-w-[60vw] bg-gradient-to-b from-purple-800 to-clr1 rounded-xl shadow-boxSh text-white font-semibold  sm:p-4 p-8 flex flex-col justify-start"> 
          <h1 className="text-center block justify-center md:text-[6vh] sm:text-[5vh] text-[4vh] font-bold">ABOUT ME</h1>
          <p className="text-center md:text-[16px] sm:text-[14px] text-[12px]">I'm Muhammad Fasih, an enthusiastic Full-Stack Developer with experience in HTML, CSS, and JavaScript. I'm also learning TypeScript and Python, and have been working with modern frameworks like React.js and Next.js. I enjoy using Tailwind CSS to create clean and responsive designs. While I'm still building my skills, I'm passionate about learning and growing as a developer. I'm excited to work on new projects and contribute to creating user-friendly and effective web applications.</p>
        </div>
      </main>
    </>
  );
}
