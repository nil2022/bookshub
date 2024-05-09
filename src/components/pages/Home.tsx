import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<div className="w-full min-h-screen bg-zinc-800 p-8">
				<div className="text-4xl md:text-6xl sm:text-5xl font-[700] antialiased text-center text-white px-4 pt-24 mx-auto max-w-4xl">
					Read. Dream. Discover. Welcome to {""}
					<span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-400 hover:text-sky-400 hover:to-green-500 transition-all duration-700">
						Verse
					</span>
				</div>
				<p className="w-10/12 sm:max-w-3xl text-center text-lg sm:text-2xl font-semibold py-4 text-white mx-auto">
					Unlock your next great read.
				</p>
				<div className="w-full text-center font-[500] mt-3">
					<Link
						to={"/register"}
						className="bg-white text-black my-4 mx-auto px-4 py-2 rounded-md"
					>
						Start Reading
					</Link>
				</div>
				{/* Place images below */}
				<div className="flex flex-wrap justify-center gap-4 py-8 text-white transition-all duration-500">
					<img
						src="/books-1.jpg"
						alt="left-image"
						width={800}
						className="hidden sm:block rounded-3xl"
					/>
					<img
						src="/ebook.jpg"
						alt="left-image"
						width={'fit-content'}
						height={700}
						className="sm:hidden rounded-3xl"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
