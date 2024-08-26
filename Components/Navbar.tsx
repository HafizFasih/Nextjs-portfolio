import Link from "next/link";
import React from "react";

export default function MyNavbar() {
  return (
    <>
      <header className="flex h-16 w-screen justify-center bg-clr1 text-white">
        <nav className="flex items-center justify-end h-full sm:w-4/5 w-[95%] bg-transparent relative ">
          <span className="absolute left-0 sm:left-2 sm:h-2/3 h-2/4 sm:w-14 w-12 inline-block bg-[url('Assets/myLogo.png')] bg-center bg-cover bg-no-repeat cursor-pointer"></span>
          <ul className="flex h-full w-auto sm:mx-2 cursor-pointer">
            <li className="flex justify-center items-center h-full w-16 sm:w-24 text-purple-800 hover:text-white duration-500">
              <Link href="/">
              Home
              </Link>
            </li>
            <li className="flex justify-center items-center h-full w-16 sm:w-24 hover:text-purple-800 duration-500 text-white">
              <Link href="/Skills">Skills</Link>
            </li>
            <li className="flex justify-center items-center h-full w-16 sm:w-24 hover:text-purple-800 duration-500 text-white">
              <Link href="/Contact">Contact</Link>
            </li>
            <li className="flex justify-center items-center h-full w-16 sm:w-24 hover:text-purple-800 duration-500 text-white">
              <Link href="/About">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
