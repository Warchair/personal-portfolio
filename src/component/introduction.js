import React from "react"
import { Link } from "react-scroll"
import front from "../assets/pictures/front-end.png"

const Introduction = () => {
	return (
		<section
			className='bg-gray-100 bg-opacity-50 md:pt-28 pt-36 pb-10 md:h-auto h-screen -z-0 '
			id='Top'>
			<div class='container lg:px-24 px-4 mx-auto '>
				<div className=' relative'>
					<div className='md:block hidden'>
						<img src={front} alt='' className='absolute bottom-5 w-full' />
					</div>
					<p className='font-normal lg:text-lg text-sm py-2'>
						Hello, My Name is
					</p>
					<div className='font-semibold  text-gray-800'>
						<h1 className='lg:text-8xl md:text-7xl sm:text-6xl xs:text-5xl text-4xl py-2'>
							Chairul Anwar
						</h1>
						<div className='lg:text-7xl md:text-6xl sm:text-5xl xs:text-4xl text-3xl text-gray-500 lg:w-3/4 w-full'>
							<h1>
								Create & Build{" "}
								<span className=' text-sky-800'>User Interface</span> For The
								Web
							</h1>
						</div>
						<h6 className='lg:text-lg text-base font-normal md:w-1/2 w-full mt-5'>
							Hallo, saya adalah seorang Front End Developer yang berfokus pada
							menciptakan design web yang simple, interactive, and responsive
							diberbagai device
						</h6>
					</div>
					<button>
						<Link
							to='getResume'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}
							className='md:px-6 md:py-4 px-3 py-3 md:text-lg text-md flex gap-2 bg-black text-white mt-5 cursor-pointer'>
							Let's Started
						</Link>
					</button>
				</div>
			</div>
		</section>
	)
}

export default Introduction
