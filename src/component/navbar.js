import React, { useState } from "react"
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
						<img src={pict} className='w-7 h-7' alt='' />
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
							<a href='#'>
								<p>About Me</p>
							</a>
							<a href='#'>
								{/* <i class='fa-solid fa-file'></i> */}
								<p>Resume</p>
							</a>
							<a href='#'>
								{/* <i class='fa-solid fa-file-image'></i> */}
								<p>Project</p>
							</a>
							<a href='#'>
								{/* <i class='fa-solid fa-address-book'></i> */}
								<p>Contact</p>
							</a>
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
