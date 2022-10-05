import React, { useState } from "react"
import { Link } from "react-scroll"
import pict from "../assets/logo/logo.png"

const Navbar = () => {
	const [open, setOpen] = useState(false)
	const handleClick = () => {
		setOpen(!open)
	}
	const [show, setShow] = useState(true)

	const navScroll = () => {
		if (window.scrollY >= this.lastScroll) {
			setShow(true)
		} else {
			setShow(false)
		}
		this.lastScroll = window.scrollY
	}
	return (
		<div
			className='w-full fixed backdrop-blur-lg drop-shadow-lg z-[999]'
			onScroll={() => navScroll()}>
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
					<div className={open === true ? "navigation active" : "navigation"}>
						<div class='nav-items flex gap-10 '>
							<a
								className='md:hidden block close cursor-pointer'
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
										d='M6 18L18 6M6 6l12 12'
									/>
								</svg>
							</a>
							<Link
								className='cursor-pointer'
								to='aboutme'
								spy={true}
								smooth={true}
								offset={0}
								duration={500}>
								<p>About Me</p>
							</Link>
							<Link
								className='cursor-pointer'
								to='resume'
								spy={true}
								smooth={true}
								offset={0}
								duration={500}>
								<p>Resume</p>
							</Link>
							<Link
								className='cursor-pointer'
								to='project'
								spy={true}
								smooth={true}
								offset={0}
								duration={500}>
								<p>Project</p>
							</Link>
							<Link
								className='cursor-pointer'
								to='contact'
								spy={true}
								smooth={true}
								offset={0}
								duration={500}>
								<p>Contact</p>
							</Link>
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
