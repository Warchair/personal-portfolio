import React, { useState } from "react"
import sayhello from "../assets/pictures/sayhello.png"
import ig from "../assets/logo/instagram.svg"
import gh from "../assets/logo/github.svg"
import tw from "../assets/logo/twitter.svg"

const Contact = () => {
	const [isContact, setIsContact] = useState(false)

	const contactClick = () => {
		setIsContact(!isContact)
	}
	return (
		<div>
			<section>
				<div
					className='container lg:px-24 px-4 mx-auto w-screen py-16 flex flex-col justify-center items-center'
					id='contact'>
					<div className='text-center '>
						<img src={sayhello} className='mx-auto' alt='' />
						<h1 className='font-semibold md:text-5xl sm:text-4xl text-3xl'>
							Get In Touch
						</h1>
						<p className='py-5 font-medium md:w-1/2 mx-auto w-full'>
							Hubungi saya jika ada hal yang ingin dibicarakan, atau adanya
							kerjasama yang ini dilakukan. say Hai. semoga hari ini
							menyenangkan{" "}
						</p>
						<button
							className='py-3 px-6 bg-black text-white'
							onClick={() => contactClick()}>
							Contact Me
						</button>
						<div className='flex md:hidden space-x-6 items-center justify-center mt-5'>
							<a
								className='hover:-translate-y-2 duration-400 transition-all ease-out'
								href='https://instagram.com/anwar.chair'>
								<img className='w-6 h-6' src={ig} alt='' />
							</a>
							<a
								className='hover:-translate-y-2 duration-150 transition-all ease-out'
								href='https://twitter.com/people_bngsd'>
								<img className='w-6 h-6' src={tw} alt='' />
							</a>
							<a
								className='hover:-translate-y-3 duration-150 transition-all ease-out'
								href='https://github.com/warchair'>
								<img className='w-6 h-6' src={gh} alt='' />
							</a>
						</div>
					</div>
					<p className='py-10 font-medium text-lg text-center'>
						@copyright 2022
					</p>
				</div>
			</section>
			<div className={isContact === true ? "contacts active" : "contacts"}>
				<div
					className={
						isContact === true ? "contacts-items active" : "contacts-items"
					}>
					<h1 className='text-2xl font-semibold'>Send Email</h1>
					<a
						className='cursor-pointer absolute top-5 right-5'
						onClick={() => contactClick()}>
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
					<div className='flex flex-col gap-3'>
						<label for='name'>Name</label>
						<input
							type='text'
							placeholder='Your Name'
							className='py-2 px-4 focus:outline-none bg-gray-50'
						/>
					</div>
					<div className='flex flex-col  gap-3'>
						<label for='email'>Email</label>
						<input
							type='text'
							placeholder='Your Email'
							className='py-2 px-4 focus:outline-none bg-gray-50'
						/>
					</div>
					<div className='flex flex-col gap-3'>
						<label for='message'>Message</label>
						<textarea
							name='message'
							id=''
							cols='30'
							rows='5'
							placeholder='Your Message'
							className='py-2 px-4 focus:outline-none bg-gray-50'></textarea>
					</div>
					<button className='w-full bg-blue-500 text-white py-3'>SEND!!</button>
				</div>
			</div>
		</div>
	)
}

export default Contact
