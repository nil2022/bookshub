import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<div className="w-full min-h-screen bg-zinc-800 p-8">
				<div className="text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-[700] antialiased text-center text-white px-4 pt-24 mx-auto max-w-4xl">
					Read. Dream. Discover. Welcome to {""}
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-400 hover:text-sky-400 hover:to-green-500 transition-all duration-700">
						Verse
					</span>
				</div>
				<p className="w-10/12 sm:max-w-3xl text-center text-md sm:text-2xl py-4 text-white mx-auto">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Facilis odio ipsa dolorem
				</p>
				<div className="w-full text-center font-[500]">
					<Link to='#' 
					className="bg-white text-black my-4 mx-auto px-4 py-2 rounded-md">
						Start Reading
					</Link>
				</div>
				{/* Place images below */}
				<div className="flex flex-wrap justify-center gap-4 p-8 text-white">
					<img src="https://via.placeholder.com/400" alt="left-image" />
					<img src="https://via.placeholder.com/400" alt="right-image" className="hidden lg:block" />
				</div>
			</div>
		</div>
	);
}

export default Home;
