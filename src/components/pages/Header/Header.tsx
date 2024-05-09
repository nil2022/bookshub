import { Link, useNavigate } from "react-router-dom";

function Header() {
	const authStatus = localStorage.getItem("authStatus") === "true";
	const navigate = useNavigate();

	const navitems = [
		{
			name: "Log in",
			slug: "/login",
			active: !authStatus,
		},
		{
			name: "Logout",
			slug: "/login",
			active: authStatus,
		},
	];

	return (
		<header className="w-full bg-zinc-800 z-10 fixed top-0">
			<div className="flex justify-between items-center mx-auto p-4">
				<div className="px-2 sm:px-8">
					<Link to={"/"} className="flex justify-start">
						<div>
							<img
								src="/Verse.png"
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
						{navitems.map((item) =>
							item.active ? (
								<li key={item.slug}>
									<button
										onClick={() => navigate(item.slug)}
										className="sm:px-6 sm:py-2 mx-4 sm:hover:bg-zinc-700/40 rounded-md transition-all 
										duration-700 sm:text-white/50 sm:hover:text-white"
									>
										{item.name}
									</button>
								</li>
							) : null
						)}
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
