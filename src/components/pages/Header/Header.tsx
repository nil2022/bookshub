import { Link } from "react-router-dom";

function Header() {
	return (
		<div className="w-full bg-zinc-800 z-10 fixed top-0 shadow-sm">
			<div className="flex justify-end xs:justify-between items-center mx-auto p-4">
				<div className="px-8">
					<Link to={"/"} className="flex justify-start">
						<div>
							<img
								src="/Verse-1.jpeg"
								alt="image"
								width={50}
								className="rounded-full"
							/>
						</div>
						<p className="hidden xs:block text-white text-lg font-[700] items-center justify-center px-2 my-auto">
							Verse
						</p>
					</Link>
				</div>
				<div className="text-md text-white font-[500]">
					<ul className="flex justify-end">
						<li>
							<Link
								to={"#"}
								className="sm:px-6 sm:py-2 mx-4 sm:hover:bg-zinc-700/40 rounded-md transition-all duration-700 sm:text-white/50 sm:hover:text-white"
							>
								Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Header;
