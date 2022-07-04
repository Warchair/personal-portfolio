import React, { useState } from "react"
import Navbar from "./navbar"
import bg from "../assets/pictures/bg.png"
import Contact from "./contact"
import front from "../assets/pictures/front-end.png"
import simple from "../assets/pictures/simple.png"
import mypict from "../assets/pictures/mypict.JPG"
import name from "../assets/pictures/name.png"
import resume from "../assets/resume/resume.pdf"
import { education, skills, project, interest } from "./resume"
import gh from "../assets/logo/github.svg"
import projectimg1 from "../assets/pictures/img1.png"
import projectimg2 from "../assets/pictures/project2.png"
import projectimg3 from "../assets/pictures/img2.png"
import projectimg4 from "../assets/pictures/project4.png"
import sayhello from "../assets/pictures/sayhello.png"

export default function Home() {
	const [active, setActive] = useState(1)
	const [isContact, setIsContact] = useState(false)
	const textData = [
		{
			id: 1,
			text: "Education",
		},
		{
			id: 2,
			text: "Skills",
		},
		{
			id: 3,
			text: "Project",
		},
		{
			id: 4,
			text: "Interest",
		},
	]

	const resultData = [
		{
			id: 1,
			result: education,
		},
		{
			id: 2,
			result: skills,
		},
		{
			id: 3,
			result: project,
		},
		{
			id: 4,
			result: interest,
		},
	]

	const contactClick = () => {
		setIsContact(!isContact)
	}

	const resultbar = resultData.map((item) => {
		return item.id === active ? item.result : ""
	})

	const handleClick = (id) => {
		const element = textData.find((item) => item.id === id)
		element && setActive(id)
	}

	const minibar = textData.map(({ id, text }) => {
		return (
			<a
				key={id}
				onClick={() => handleClick(id)}
				className={
					active === id
						? "cursor-pointer links-active h-full"
						: "cursor-pointer h-full"
				}
			>
				{text}
			</a>
		)
	})

	return (
		<div className='font-rubik relative overflow-x-hidden'>
			<Navbar />
			<Contact />
			<section className='bg-gray-100 bg-opacity-50 pt-36 pb-10 md:h-auto h-screen -z-0'>
				<div class='container lg:px-24 px-4 mx-auto '>
					<div className=' relative'>
						<div className='md:block hidden'>
							<img src={front} alt='' className='absolute top-5 w-full' />
						</div>
						<p className='font-medium text-lg'>Hello, My Name is</p>
						<div className='font-semibold lg:text-8xl md:text-7xl sm:text-6xl text-4xl text-gray-800'>
							<h1>Chairul Anwar</h1>
							<div className='text-gray-500'>
								<h1>I Build Interface</h1>
								<h1>For The Web</h1>
							</div>
							<div className='w-2/3 md:h-2 h-1 bg-gray-800 mt-5'></div>
							<p className='text-lg font-normal md:w-1/2 w-full mt-5'>
								Hallo, saya adalah seorang Front End Developer yang berfokus
								pada menciptakan design web yang simple, interactive, and
								responsive diberbagai device
							</p>
						</div>
						<button className='md:px-6 md:py-4 px-3 py-3 md:text-lg text-md flex gap-2 bg-black text-white mt-5 cursor-pointer'>
							<h5>Let's Started</h5>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
								strokeWidth={2}
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M14 5l7 7m0 0l-7 7m7-7H3'
								/>
							</svg>
						</button>
					</div>
				</div>
			</section>

			<section className=''>
				<div className='container lg:px-24 px-4 mx-auto '>
					<div className='mt-36 text-center relative'>
						<img
							src={simple}
							className='absolute right-0 lg:bottom-0 -bottom-20 lg:h-full h-5/6 '
							alt=''
						/>
						<div className='lg:text-7xl md:text-6xl sm:text-5xl  text-4xl font-bold gap-5 flex flex-col'>
							<h1 className='text-gray-800'>Create</h1>
							<div class='text-slider relative text-center h-8 sm:h-12 md:h-20 lg:24 flex justify-center items-center w-full'>
								<h1 class='big-text' style={{ "--slide": -1 }}>
									an interactive
								</h1>
								<h1 class='big-text' style={{ "--slide": 0 }}>
									a responsive
								</h1>
								<h1 class='big-text' style={{ "--slide": 1 }}>
									a simple & clean
								</h1>
								<h1 class='big-text' style={{ "--slide": 1 }}></h1>
							</div>
							<h1 className='text-gray-800'>Design</h1>
						</div>
						<div>
							<h6 className='font-medium text-center lg:text-lg md:text-md sm:text-sm text-xs py-10 md:w-2/4 w-full mx-auto'>
								Dalam membuat sebuah interface website, banyak element penting
								yang saya terapin, yaitu simple, clean, responsif desain dan
								desain yang interaktif, untuk menambah kesan hidup untuk
								website. dan juga kenyamanan bagi user
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

			<section className='mt-36 py-10 z-30 bg-white'>
				<div className='container lg:px-24 px-4 mx-auto '>
					<div className='flex items-center gap-4'>
						<h5 className='font-medium text-xl'>About Me</h5>
						<div className='h-05 w-1/2  bg-gray-900'></div>
					</div>
					<div class='grid md:grid-cols-2 grid-cols-1 gap-10 mt-10 relative'>
						<div>
							<img
								src={name}
								alt=''
								className='absolute top-0 left-0 md:w-auto w-3/4'
							/>
							<img
								src={mypict}
								alt=''
								className='rounded-t-full w-2/3 mt-20 mx-auto'
							/>
						</div>
						<div className='xl:text-xl lg:text-lg md:text-md sm:text-sm flex flex-col gap-5'>
							<h1 className='font-semibold text-2xl'>HELLO!!</h1>
							<p>
								Hallo, Nama saya Chairul Anwar. Seseorang yang baru saja lulus
								dari Sekolah Menengah Kejuruan dengan jurusan Teknik Komputer
								dan Jaringan pada tahun 2022. Memiliki tempat tinggal dan
								Kelahiran di Kota Serang.{" "}
							</p>
							<p>
								Mulai memiliki ketertarikan pada dunia Teknologi, Pemrograman,
								dan Desain ketika masih menduduki kelas 1 SMK. berawal dari rasa
								penasaran hingga sampe saat ini. Menghabiskan waktu berjam jam
								dalam sehari untuk bisa mengekplorasi lebih untuk meningkatkan
								ilmu Pemrograman dan Desain.
							</p>
							<p>
								Mempunyai semangat yang tinggi dalam mempelajari hal baru, serta
								memiliki prinsip “Belajar tanpa mengenal usia”. Memiliki
								interaksi Komunikasi yang baik. sehingga mudah untuk bergaul dan
								berbaur pada siapapun
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className='pt-24 py-10 z-plus bg-white'>
				<div className='container lg:px-24 px-4 mx-auto'>
					<div className='flex flex-col items-center gap-1'>
						<h5 className='font-medium text-2xl text-center'>Resume</h5>
						<div className='h-05 w-48 bg-gray-900 mx-auto'></div>
					</div>
					<div className='md:mx-auto flex md:flex-row flex-col gap-10 justify-center mt-20'>
						<div
							className='links-verticals links md:w-40 w-auto h-auto md:h-48 items-center'
							style={{ "--items": 4 }}
						>
							{minibar}
							<span class='line-verticals'></span>
							<span class='line'></span>
						</div>
						{resultbar}
					</div>
				</div>
			</section>

			<section className='pt-24 py-10 relative bg-white'>
				<div className='container lg:px-24 px-4 mx-auto z-20'>
					<div className='flex items-center gap-4'>
						<h5 className='font-medium text-xl'>Project</h5>
						<div className='h-05 w-1/2   bg-gray-900'></div>
					</div>
					<div className='flex flex-col gap-10'>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center relative'>
							<div className='mt-20 w-full h-full   rounded-xl drop-shadow-xl lg:bg-transparent bg-white relative '>
								<img
									src={projectimg1}
									className='top-0 absolute object-cover lg:hidden w-full h-full rounded-lg z-0 opacity-10'
									alt=''
								/>
								<div className='z-plus lg:py-0 lg:px-0 px-10 py-10'>
									<p className='font-reguler text-lg'>Featured Project</p>
									<h3 className='font-semibold sm:text-5xl text-4xl md:py-5 py-2'>
										Landing Page Company
									</h3>
									<div className='font-reguler md:text-lg text-md py-2'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illum, possimus, magnam error nobis nesciunt maxime nihil
											quia voluptate vel ea omnis aliquid? Officiis quas, eos
											rerum aspernatur at exercitationem assumenda.
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illum, possimus, magnam error nobis nesciunt maxime nihil
											quia voluptate vel ea omnis aliquid? Officiis quas, eos
											rerum aspernatur at exercitationem assumenda.
										</p>
									</div>
									<div className='flex gap-5 font-medium black py-2'>
										<span>HTML</span>
										<span>TailwindCSS</span>
										<span>React</span>
									</div>
									<div className='flex gap-5 py-2'>
										<a href='https://github.com/Warchair/simple-homepage-2'>
											<img src={gh} alt='' className='w-6 h-6' />
										</a>
										<a href='https://warchair.github.io/simple-homepage-2/'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-7 w-7'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												strokeWidth={2}
											>
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
								{/* <img
									src={projectimg2}
									alt=''
									className='w-1/2 h-1/2 absolute top-0 -right-48 rounded-lg'
								/> */}
								<div className='w-full h-full lg:block hidden'>
									<img
										src={projectimg1}
										className='object-cover w-full h-full rounded-lg drop-shadow-2xl mt-24 z-plus'
										alt=''
									/>
								</div>
							</div>
						</div>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center relative'>
							<div className='mt-20 w-full h-full   rounded-xl drop-shadow-xl lg:bg-transparent bg-white relative '>
								<img
									src={projectimg3}
									className='top-0 absolute object-cover lg:hidden w-full h-full rounded-lg z-0 opacity-10'
									alt=''
								/>
								<div className='z-plus lg:py-0 lg:px-0 px-10 py-10'>
									<p className='font-reguler text-lg'>Featured Project</p>
									<h3 className='font-semibold sm:text-5xl text-4xl md:py-5 py-2'>
										React Movie
									</h3>
									<div className='font-reguler md:text-lg text-md py-2'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illum, possimus, magnam error nobis nesciunt maxime nihil
											quia voluptate vel ea omnis aliquid? Officiis quas, eos
											rerum aspernatur at exercitationem assumenda.
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illum, possimus, magnam error nobis nesciunt maxime nihil
											quia voluptate vel ea omnis aliquid? Officiis quas, eos
											rerum aspernatur at exercitationem assumenda.
										</p>
									</div>
									<div className='flex gap-5 font-medium black py-2'>
										<span>HTML</span>
										<span>TailwindCSS</span>
										<span>React</span>
									</div>
									<div className='flex gap-5 py-2'>
										<a href='https://github.com/Warchair/React-MovieDB-2'>
											<img src={gh} alt='' className='w-6 h-6' />
										</a>
										<a href='https://anwarmovie.netlify.app/React-MovieDB-2/'>
											<svg
												xmlns='http://www.w3.org/2000/svg'
												className='h-7 w-7'
												fill='none'
												viewBox='0 0 24 24'
												stroke='currentColor'
												strokeWidth={2}
											>
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
								{/* <img
									src={projectimg2}
									alt=''
									className='w-1/2 h-1/2 absolute top-0 -right-48 rounded-lg'
								/> */}
								<div className='w-full h-full lg:block hidden'>
									<img
										src={projectimg3}
										className='object-cover w-full h-full rounded-lg drop-shadow-2xl mt-24 z-plus'
										alt=''
									/>
								</div>
							</div>
						</div>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center relative'>
							<div className='mt-20 w-full h-full   rounded-xl drop-shadow-xl lg:bg-transparent bg-white relative '>
								<img
									src={projectimg1}
									className='top-0 absolute object-cover lg:hidden w-full h-full rounded-lg z-0 opacity-10'
									alt=''
								/>
								<div className='z-plus lg:py-0 lg:px-0 px-10 py-10'>
									<p className='font-reguler text-lg'>Featured Project</p>
									<h3 className='font-semibold sm:text-5xl text-4xl md:py-5 py-2'>
										Landing Page Company
									</h3>
									<div className='font-reguler md:text-lg text-md py-2'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illum, possimus, magnam error nobis nesciunt maxime nihil
											quia voluptate vel ea omnis aliquid? Officiis quas, eos
											rerum aspernatur at exercitationem assumenda.
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illum, possimus, magnam error nobis nesciunt maxime nihil
											quia voluptate vel ea omnis aliquid? Officiis quas, eos
											rerum aspernatur at exercitationem assumenda.
										</p>
									</div>
									<div className='flex gap-5 font-medium black py-2'>
										<span>HTML</span>
										<span>TailwindCSS</span>
										<span>React</span>
									</div>
									<div className='flex gap-5 py-2'>
										<a href='https://github.com/Warchair/simple-homepage-2'>
											<img src={gh} alt='' className='w-6 h-6' />
										</a>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-7 w-7'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
											/>
										</svg>
									</div>
								</div>
							</div>
							<div>
								{/* <img
									src={projectimg2}
									alt=''
									className='w-1/2 h-1/2 absolute top-0 -right-48 rounded-lg'
								/> */}
								<div className='w-full h-full lg:block hidden'>
									<img
										src={projectimg1}
										className='object-cover w-full h-full rounded-lg drop-shadow-2xl mt-24 z-plus'
										alt=''
									/>
								</div>
							</div>
						</div>
						<div className='grid lg:grid-cols-2 grid-cols-1 gap-5 items-center relative'>
							<div className='mt-20 w-full h-full   rounded-xl drop-shadow-xl lg:bg-transparent bg-white relative '>
								<img
									src={projectimg1}
									className='top-0 absolute object-cover lg:hidden w-full h-full rounded-lg z-0 opacity-10'
									alt=''
								/>
								<div className='z-plus lg:py-0 lg:px-0 px-10 py-10'>
									<p className='font-reguler text-lg'>Featured Project</p>
									<h3 className='font-semibold sm:text-5xl text-4xl md:py-5 py-2'>
										Landing Page Company
									</h3>
									<div className='font-reguler md:text-lg text-md py-2'>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illum, possimus, magnam error nobis nesciunt maxime nihil
											quia voluptate vel ea omnis aliquid? Officiis quas, eos
											rerum aspernatur at exercitationem assumenda.
										</p>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit.
											Illum, possimus, magnam error nobis nesciunt maxime nihil
											quia voluptate vel ea omnis aliquid? Officiis quas, eos
											rerum aspernatur at exercitationem assumenda.
										</p>
									</div>
									<div className='flex gap-5 font-medium black py-2'>
										<span>HTML</span>
										<span>TailwindCSS</span>
										<span>React</span>
									</div>
									<div className='flex gap-5 py-2'>
										<img src={gh} alt='' className='w-6 h-6' />
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-7 w-7'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
											strokeWidth={2}
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
											/>
										</svg>
									</div>
								</div>
							</div>
							<div>
								{/* <img
									src={projectimg2}
									alt=''
									className='w-1/2 h-1/2 absolute top-0 -right-48 rounded-lg'
								/> */}
								<div className='w-full h-full lg:block hidden'>
									<img
										src={projectimg1}
										className='object-cover w-full h-full rounded-lg drop-shadow-2xl mt-24 z-plus'
										alt=''
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section>
				<div className='container lg:px-24 px-4 mx-auto w-screen h-screen flex flex-col justify-center items-center '>
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
							onClick={() => contactClick()}
						>
							Contact Me
						</button>
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
					}
				>
					<h1 className='text-2xl font-semibold'>Send Email</h1>
					<a
						className='cursor-pointer absolute top-5 right-5'
						onClick={() => contactClick()}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
							strokeWidth={2}
						>
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
							className='py-2 px-4 focus:outline-none bg-gray-50'
						></textarea>
					</div>
					<button className='w-full bg-blue-500 text-white py-3'>SEND!!</button>
				</div>
			</div>
		</div>
	)
}
