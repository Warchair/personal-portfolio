import React from "react"
import ig from "../assets/logo/instagram.svg"
import gh from "../assets/logo/github.svg"
import tw from "../assets/logo/twitter.svg"

export default function Contact() {
	return (
		<div className='md:block hidden '>
			<div className='fixed flex flex-col items-center gap-10 bottom-5 -left-10 z-plus'>
				<div className='-rotate-90 mb-20 font-medium text-lg'>
					<a href='mailto:chairulsp2@gmail.com' className=''>
						chairulsp2@gmail.com
					</a>
				</div>
				<div className='flex flex-col gap-10 '>
					<a href='https://instagram.com/anwar.chair'>
						<img className='w-8 h-8' src={ig} alt='' />
					</a>
					<a href='https://twitter.com/people_bngsd'>
						<img className='w-8 h-8' src={tw} alt='' />
					</a>
					<a href='https://github.com/warchair'>
						<img className='w-8 h-8' src={gh} alt='' />
					</a>
				</div>
			</div>
		</div>
	)
}
