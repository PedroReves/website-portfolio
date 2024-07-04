import { FaGithub } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="flex justify-between py-12 px-20 bg-bg_black text-white">
      <h2 className="text-2xl font-bold uppercase">Pedro Reves</h2>
      <nav className="flex items-center">
        <ul className="flex text-base font-normal gap-4 mr-4 items-center">
          <li className="hover:underline cursor-pointer">About me</li>
          <li className="hover:underline cursor-pointer">Stack</li>
          <li className="hover:underline cursor-pointer">Projects</li>
          <li className="hover:underline cursor-pointer">Contact Me</li>
        </ul>
        <button className="flex items-center bg-bg_purple p-2.5 rounded-lg text-white font-bold hover:bg-[#645BD0]">
          Github
          <span className="ml-2">
            <FaGithub />
          </span>
        </button>
      </nav>
    </header>
  );
}
