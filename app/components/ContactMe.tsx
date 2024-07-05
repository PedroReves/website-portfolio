import { IoSend } from "react-icons/io5";

export default function ContactMe() {
	return (
		<section className="text-white">
			<h2 className="text-4xl font-bold pb-2.5 text-center">Contact Me</h2>
			<p className="font-normal text-base pb-5 text-center">
				Please make contact if you want to work with me!
			</p>
			<div>
				<form className="flex flex-col justify-center items-center gap-y-6">
					<div className="flex flex-col">
						<label htmlFor="name" className="pb-2">
							Name:
						</label>
						<input
							type="text"
							className="bg-[#333333]/50 min-w-[600px] py-3 px-4 rounded focus:outline-none"
							id="name"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="email" className="pb-2">
							Email:
						</label>
						<input
							type="email"
							className="bg-[#333333]/50 min-w-[600px] py-3 px-4 rounded focus:outline-none"
							id="email"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="subject" className="pb-2">
							Subject:
						</label>
						<input
							type="text"
							className=" bg-[#333333]/50 min-w-[600px] py-3 px-4 rounded focus:outline-none"
							id="subject"
						/>
					</div>
					<div className="flex flex-col">
						<label htmlFor="message" className="pb-2">
							Message:
						</label>
						<input
							type="text"
							className=" bg-[#333333]/50 min-w-[600px] py-3 px-4 rounded focus:outline-none"
							id="message"
						/>
					</div>
					<button className="flex items-center bg-bg_purple py-2.5 mb-12 px-20 rounded-lg text-white text-base font-bold hover:bg-[#645BD0]">
						Send
						<span className="ml-2">
							<IoSend />
						</span>
					</button>
				</form>
			</div>
		</section>
	);
}
