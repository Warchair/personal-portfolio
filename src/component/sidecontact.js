import React from "react"
import ig from "../assets/logo/instagram.svg"
import gh from "../assets/logo/github.svg"
import tw from "../assets/logo/twitter.svg"

export default function SideContact() {
	return (
		<div className='md:block hidden '>
			<div className='fixed flex flex-col items-center gap-10 bottom-5 -left-10 z-[999]'>
				<div className='-rotate-90 mb-20 font-medium text-md'>
					<a href='mailto:chairulsp2@gmail.com' className=''>
						chairulsp2@gmail.com
					</a>
				</div>
				<div className='flex flex-col gap-10 '>
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
		</div>
	)
}
