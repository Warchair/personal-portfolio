import React from "react"
import simple from "../assets/pictures/simple.png"
import resume from "../assets/resume/resume.pdf"

const GetResume = () => {
	return (
		<section className='' id='getResume'>
			<div className='container lg:px-24 px-4 mx-auto md:h-auto h-screen flex justify-center items-center'>
				<div className='text-center relative md:pt-24 '>
					<img
						src={simple}
						className='absolute right-0 lg:bottom-0 -top-0 lg:h-full h-5/6 '
						alt=''
					/>
					<div className='md:text-7xl sm:text-6xl  xs:text-5xl text-4xl font-bold gap-5 flex flex-col'>
						<h1 className='text-gray-800'>Create</h1>
						<div class='text-slider relative text-center h-6 sm:h-12 md:h-20 lg:24 flex justify-center items-center w-full text-sky-800'>
							<h1 style={{ "--slide": -1 }}>an Interactive</h1>
							<h1 style={{ "--slide": 0 }}>a Responsive</h1>
							<h1 style={{ "--slide": 1 }}>a Simple & Clean</h1>
							<h1 style={{ "--slide": 1 }}></h1>
						</div>
						<h1 className='text-gray-800'>Design</h1>
					</div>
					<div>
						<h6 className='font-normal text-center lg:text-lg md:text-base text-sm  py-10 md:w-2/4 w-full mx-auto text-gray-500'>
							Dalam membuat sebuah interface website, banyak element penting
							yang saya terapin, yaitu simple, clean, responsif desain dan
							desain yang interaktif, untuk menambah kesan hidup untuk website.
							dan juga kenyamanan bagi user
						</h6>
					</div>
					<a href={resume} download='anwar-resume.pdf'>
						<button className='px-5 py-3 bg-black text-white mx-auto text-center'>
							Get Resume
						</button>
					</a>
				</div>
			</div>
		</section>
	)
}

export default GetResume
