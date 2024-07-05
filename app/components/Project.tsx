import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

interface ProjectProps {
	project_name: string;
	project_desc: string;
	project_stack: string[];
	project_year: string;
	project_img: string;
	project_github_link: string;
	project_live_demo: string;
}

export default function Project({
	project_name,
	project_desc,
	project_stack,
	project_year,
	project_img,
	project_github_link,
	project_live_demo,
}: ProjectProps) {
	return (
		<div className="flex justify-center text-white px-32 py-24">
			<div className="bg-[#252525] py-[84px] px-[57px] max-w-xl rounded-2xl">
				<Image
					src={project_img}
					width={300}
					height={300}
					alt="Project's Image"
					className="border-black border-2 rounded"
				/>
			</div>
			<div className="pl-11 max-w-[546px]">
				<h2 className="font-bold text-3xl text-left pb-5">{project_name}</h2>
				<p className="font-normal text-base text-left">{project_desc}</p>
				<div className="pt-4 flex flex-col gap-y-6">
					<h2 className="text-left font-bold text-2xl">Project Info</h2>
					<div className="flex justify-between py-2.5 border-y border-[#505050]">
						<h3 className="font-bold text-xl pl-3">Year</h3>
						<p className="font-normal text-xl">{project_year}</p>
					</div>
					<div className="flex justify-between py-2.5 border-y border-[#505050]">
						<h3 className="font-bold text-xl pl-3">Stack</h3>
						<div className="flex gap-x-4">
							{project_stack.map((img, idx) => (
								<Image
									key={idx}
									src={img}
									alt="Programming Language Icons"
									width={30}
									height={30}
								/>
							))}
						</div>
					</div>
					<div className="flex gap-x-8">
						<p>
							<a
								href={project_live_demo}
								className="flex items-center gap-x-1 uppercase underline font-bold text-[#A259FF]"
							>
								Live Demo
								<span>
									<MdOutlineArrowOutward />
								</span>
							</a>
						</p>
						<p>
							<a
								href={project_github_link}
								className="flex items-center gap-x-1 uppercase font-bold text-[#A259FF] underline"
							>
								View on Github
								<span>
									<FaGithub />
								</span>
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
