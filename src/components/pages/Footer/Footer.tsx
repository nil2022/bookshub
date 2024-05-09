import { Link } from "react-router-dom";

function Footer() {
	return (
		<div className="w-full bg-zinc-800 shadow-sm">
			<div className="flex flex-col sm:flex-row justify-end xs:justify-between items-center mx-auto">
				<div className="hidden lg:flex px-8">
					<div>
						<img src="/Verse.png" 
						alt="image"
						width={50}
						className="rounded-full"
						/>
					</div>
					<p className="text-white text-lg font-[700] items-center justify-center px-2 my-auto">
						Verse
					</p>
				</div>
				<div className="text-sm sm:text-sm text-white/40 font-[400] text-center px-2 md:pl-24 mt-2 sm:-mt-0">
					Copyright © 2024 Verse. All Rights Reserved.
				</div>
				<div className="text-sm sm:text-md text-white font-[500] my-2 md:mr-4">
					<ul className="flex flex-col sm:flex-row gap-y-2 mt-2 sm:mt-0 text-center">
						<li className="">
							<Link
								to={"#"}
								className="py-2 px-2 rounded-md hover:bg-zinc-700/40 transition-all duration-700 text-white/50 hover:text-white"
							>
								Privacy Policy
							</Link>
						</li>
						<li className="mt-2 sm:mt-0">
							<Link
								to={"#"}
								className="py-2 px-2 rounded-md hover:bg-zinc-700/40 transition-all duration-700 text-white/50 hover:text-white"
							>
								Terms & Conditions
							</Link>
						</li>
						<li className="mt-2 sm:mt-0">
							<Link
								to={"#"}
								className="py-2 px-2 rounded-md hover:bg-zinc-700/40 transition-all duration-700 text-white/50 hover:text-white"
							>
								Contact Us
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Footer;
