"use client"
import { FaGithub } from "react-icons/fa6";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { useState } from "react";


export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
  return (
    <header className="relative flex justify-between py-12 px-20 bg-bg_black text-white">
      <h2 className="text-2xl font-bold uppercase">Pedro Reves</h2>
      <nav className="flex items-center">
        <ul className="hidden sm:hidden md:flex text-base font-normal gap-4 mr-4 items-center">
          <li className="hover:underline cursor-pointer">About me</li>
          <li className="hover:underline cursor-pointer">Stack</li>
          <li className="hover:underline cursor-pointer">Projects</li>
          <li className="hover:underline cursor-pointer">Contact Me</li>
        </ul>
        <button className="hidden sm:hidden md:flex items-center bg-bg_purple p-2.5 rounded-lg text-white font-bold hover:bg-[#645BD0]">
          Github
          <span className="ml-2">
            <FaGithub />
          </span>
        </button>
        <IoMdMenu size={30} className="text-white sm:block md:hidden lg:hidden cursor-pointer" onClick={toggleMenu}/>
        {isMenuOpen && (
            <div className="fixed inset-0 bg-white flex flex-col items-center justify-center text-black z-50">
                <IoMdClose size={30} className="text-black cursor-pointer" onClick={toggleMenu}/>
                <ul className="flex flex-col gap-y-4 py-6 text-center">
                    <li className="hover:underline decoration-black cursor-pointer">About me</li>
                    <li className="hover:underline decoration-black cursor-pointer">Stack</li>
                    <li className="hover:underline decoration-black cursor-pointer">Projects</li>
                    <li className="hover:underline decoration-black cursor-pointer">Contact Me</li>
                    <li className="hover:underline decoration-black cursor-pointer">Github</li>
                </ul>
            </div>
        )}
      </nav>
    </header>
  );
}
