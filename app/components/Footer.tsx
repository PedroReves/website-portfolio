import { FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="text-center text-white py-12 bg-bg_black">
      <h2 className="text-5xl font-bold pb-2.5">Pedro Reves</h2>
      <p className="text-2xl font-normal pb-5">FullStack Developer</p>
      <div className="flex justify-center gap-x-6">
        <span className="bg-[#2C2C2C] p-2 rounded-full cursor-pointer hover:bg-[#212121]">
          <FaGithub size={25} />
        </span>
        <span className="bg-[#2C2C2C] p-2 rounded-full cursor-pointer hover:bg-[#212121]">
          <FaInstagram size={25} />
        </span>
      </div>
    </footer>
  );
}
