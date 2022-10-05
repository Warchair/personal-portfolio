import React, { useState } from "react"
import { Link } from "react-scroll"
import pict from "../assets/logo/logo.png"

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const handleClick = () => {
		setOpen(!open)
	}

	return (
		<div className='w-full fixed backdrop-blur-lg z-[999]'>
			<div
				className={`backdrop-blur-lg w-screen h-screen ${
					open ? "md:hidden block" : "hidden"
				}`}></div>
			<div className='container px-8 py-8 mx-auto w-full'>
				<div className='flex justify-between'>
					<div>
						<Link
							className='cursor-pointer'
							to='Top'
							spy={true}
							smooth={true}
							offset={0}
							duration={500}>
							<img src={pict} className='w-7 h-7' alt='' />
						</Link>
					</div>
					<div>
						<div
							className={`md:relative absolute flex md:flex-row flex-col justify-center items-center md:bg-transparent bg-white drop-shadow-md gap-10 md:w-auto md:h-auto w-[300px] h-screen top-0 right-0 md:p-0 p-8 transition-all duration-300 ease-in-out ${
								open ? "translate-x-0" : "md:translate-x-0 translate-x-[300px]"
							} `}>
							<span
								className='md:hidden block cursor-pointer absolute top-8 right-8'
								onClick={() => handleClick()}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-7 w-7'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
									strokeWidth={2}>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</span>
							<div className='flex md:flex-row flex-col gap-10 md:text-base text-2xl '>
								<Link
									className='cursor-pointer'
									onClick={() => setOpen(!open)}
									to='aboutme'
									spy={true}
									smooth={true}
									offset={0}
									duration={500}>
									<p>About Me</p>
								</Link>
								<Link
									className='cursor-pointer'
									onClick={() => setOpen(!open)}
									to='resume'
									spy={true}
									smooth={true}
									offset={0}
									duration={500}>
									<p>Resume</p>
								</Link>
								<Link
									className='cursor-pointer'
									onClick={() => setOpen(!open)}
									to='project'
									spy={true}
									smooth={true}
									offset={0}
									duration={500}>
									<p>Project</p>
								</Link>
								<Link
									className='cursor-pointer'
									onClick={() => setOpen(!open)}
									to='contact'
									spy={true}
									smooth={true}
									offset={0}
									duration={500}>
									<p>Contact</p>
								</Link>
							</div>
						</div>
					</div>
					<a
						className='md:hidden block cursor-pointer'
						onClick={() => handleClick()}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M4 6h16M4 12h16m-7 6h7'
							/>
						</svg>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar
