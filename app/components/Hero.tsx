import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Image from "next/image";

export default function Hero() {
	return (
		<section className="text-center text-white py-48">
			<h1 className="font-bold text-6xl/[50px]">
				Hi
				<Image
					src="/emoji.svg"
					width={100}
					height={100}
					alt="An image of an hand icon"
					className="inline align-middle"
				/>
				, I am{" "}
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8176FF] to-[#4D4799]">
					Pedro Reves
				</span>
				<br /> and I am a{" "}
				<span className="bg-clip-text text-transparent bg-gradient-to-r from-[#8176FF] to-[#4D4799]">
					FullStack Developer
				</span>
			</h1>
			<p className="font-light text-xl text-white py-6">
				I am a passionate developer skilled in both frontend and backend. I love
				<br />
				creating either user friendly websites, and robust backend!
			</p>
			<div className="flex text-white items-center justify-center gap-x-6">
				<button className="flex items-center bg-bg_purple py-2 px-3 rounded-lg text-white text-base font-bold hover:bg-[#645BD0]">
					<a href="mailto:pedroreves11@gmail.com">Contact Me</a>
					<span className="ml-2">
						<a href="mailto:pedroreves11@gmail.com"><MdOutlineEmail size={25} /></a>					
                    </span>
				</button>
				<span className="bg-[#2C2C2C] p-2 rounded-full cursor-pointer hover:bg-[#212121]">
					<a href="https://github.com/PedroReves"><FaGithub size={25} /></a>
				</span>
				<span className="bg-[#2C2C2C] p-2 rounded-full cursor-pointer hover:bg-[#212121]">
					<a href="https://instagram.com/pedroreves_"><FaInstagram size={25} /></a>
				</span>
			</div>
		</section>
	);
}
