import Image from "next/image";

export default function Stack() {
	return (
		<section className="text-center flex flex-col justify-center">
			<h2 className="text-4xl font-bold text-white pb-2.5">My Stack</h2>
			<p className="text-white font-normal text-base pb-5">
				Technologies that i’ve been working recently
			</p>
			<div>
				<div className="flex justify-center space-x-16 py-[78px]">
					<Image
						src="/html-logo.svg"
						width={100}
						height={100}
						alt="HTML Logo"
					/>
					<Image src="/css-logo.svg" width={100} height={100} alt="CSS Logo" />
					<Image
						src="/js-logo.svg"
						width={100}
						height={100}
						alt="Javascript Logo"
					/>
					<Image
						src="/tailwind-logo.svg"
						width={100}
						height={100}
						alt="TailwindCSS Logo"
					/>
					<Image
						src="/nextjs-logo.svg"
						width={100}
						height={100}
						alt="NextJS Logo"
					/>
				</div>
				<div className="flex justify-center space-x-16 pb-[70px]">
					<Image
						src="/typescript-logo.svg"
						width={100}
						height={100}
						alt="Typescript Logo"
					/>
					<Image
						src="/nodejs-logo.svg"
						width={100}
						height={100}
						alt="NodeJS Logo"
					/>
					<Image
						src="/rust-logo.svg"
						width={100}
						height={100}
						alt="Rust Logo"
					/>
					<Image
						src="/golang-logo.svg"
						width={100}
						height={100}
						alt="Golang Logo"
					/>
					<Image
						src="/postgres-logo.svg"
						width={100}
						height={100}
						alt="Postgres Logo"
					/>
				</div>
				<div className="flex justify-center space-x-16 pb-[78px]">
					<Image src="/git-logo.svg" width={100} height={100} alt="Git Logo" />
					<Image
						src="/figma-logo.svg"
						width={100}
						height={100}
						alt="Figma Logo"
					/>
					<Image src="/vim-logo.svg" width={100} height={100} alt="Vim Logo" />
				</div>
			</div>
		</section>
	);
}
