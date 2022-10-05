import React from "react"
import { dataproject } from "./data/data"
import gh from "../assets/logo/github.svg"

const Project = () => {
	return (
		<section className='pt-24 py-10 relative bg-white' id='project'>
			<div className='container lg:px-24 px-4 mx-auto z-20'>
				<div className='flex items-center gap-4'>
					<h5 className='font-medium text-xl'>Project</h5>
					<div className='h-[0.1px] w-1/2   bg-gray-400'></div>
				</div>
				<div className='flex flex-col gap-10'>
					{dataproject.map((item, index) => (
						<div
							key={index}
							className='grid lg:grid-cols-2 grid-cols-1 gap-5 py-8 items-center relative'>
							<div className='mt-20 w-full h-full rounded-xl drop-shadow-xl lg:bg-transparent bg-white relative '>
								<img
									src={item.img1}
									className='top-0 absolute object-cover lg:hidden w-full h-full rounded-lg z-0 opacity-10'
									alt=''
								/>
								<div className='z-[999] lg:py-0 lg:px-0 px-10 py-10 '>
									<p className='font-reguler text-lg'>Featured Project</p>
									<h3 className='font-semibold sm:text-5xl text-4xl md:py-5 py-2'>
										{item.title}
									</h3>
									<div className='font-reguler md:text-lg text-md py-2'>
										<p>{item.desc}</p>
									</div>
									<div className='flex gap-5 font-medium black py-2'>
										{item.tech?.map((i) => (
											<span>{i}</span>
										))}
									</div>
									<div className='flex gap-5 py-2'>
										<a href={item.github}>
											<img src={gh} alt='' className='w-6 h-6' />
										</a>
										<a href={item.demo}>
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
													d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
												/>
											</svg>
										</a>
									</div>
								</div>
							</div>
							<div>
								<div className='w-full h-full lg:block hidden relative group'>
									<img
										src={item.img1}
										className='object-cover w-full h-full rounded-lg drop-shadow-xl mt-24 z-[99] relative group-hover:scale-105 transform transition-all duration-200 ease-in-out'
										alt=''
									/>
									<img
										src={item?.img2}
										className='absolute top-0 right-0 opacity-60  object-cover w-full h-full rounded-lg transition-all duration-500 ease-out group-hover:top-1/4 group-hover:right-2/4 z-[9]'
										alt=''
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Project
