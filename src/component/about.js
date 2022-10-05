import React from "react"
import mypict from "../assets/pictures/mypict.JPG"
import name from "../assets/pictures/name.png"

const About = () => {
	return (
		<section className='mt-36 py-10 z-30 bg-white' id='aboutme'>
			<div className='container lg:px-24 px-6 mx-auto '>
				<div className='flex items-center gap-4'>
					<h5 className='font-medium text-xl'>About Me</h5>
					<div className='h-[0.2px] w-1/2  bg-gray-500'></div>
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
					<div className='xl:text-xl lg:text-lg md:text-md text-sm flex flex-col gap-5'>
						<h1 className='font-semibold text-2xl'>HELLO!!</h1>
						<p>
							Hallo, Nama saya Chairul Anwar. Seseorang yang baru saja lulus
							dari Sekolah Menengah Kejuruan dengan jurusan Teknik Komputer dan
							Jaringan pada tahun 2022. Memiliki tempat tinggal dan Kelahiran di
							Kota Serang.{" "}
						</p>
						<p>
							Mulai memiliki ketertarikan pada dunia Teknologi, Pemrograman, dan
							Desain ketika masih menduduki kelas 1 SMK. berawal dari rasa
							penasaran hingga sampe saat ini. Menghabiskan waktu berjam jam
							dalam sehari untuk bisa mengekplorasi lebih untuk meningkatkan
							ilmu Pemrograman dan Desain.
						</p>
						<p>
							Mempunyai semangat yang tinggi dalam mempelajari hal baru, serta
							memiliki prinsip “Belajar tanpa mengenal usia”. Memiliki interaksi
							Komunikasi yang baik. sehingga mudah untuk bergaul dan berbaur
							pada siapapun
						</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
