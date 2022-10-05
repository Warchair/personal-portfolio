import React, { useState } from "react"
import { resultData, textData } from "./data/data"

const Resume = () => {
	const [active, setActive] = useState(1)
	const resultbar = resultData.map((item) => {
		return item.id === active ? item.result : ""
	})

	const handleClick = (id) => {
		const element = textData.find((item) => item.id === id)
		element && setActive(id)
	}

	const minibar = textData.map(({ id, text }) => {
		return (
			// eslint-disable-next-line jsx-a11y/anchor-is-valid
			<a
				key={id}
				onClick={() => handleClick(id)}
				className={`font-medium text-black p-3 cursor-pointer h-full transition-all duration-500 text-base md:border-l-[3px] md:border-l-gray-300 border-l-0 md:border-b-0  border-b-[3px] border-b-gray-300 ${
					active === id ? " links-active " : ""
				}`}>
				{text}
			</a>
		)
	})
	return (
		<section className='pt-24 py-24 z-[999] bg-white' id='resume'>
			<div className='container lg:px-24 px-6 mx-auto'>
				<div className='flex flex-col items-center gap-1'>
					<h5 className='font-medium text-2xl text-center'>Resume</h5>
					<div className='h-[0.2px] w-48 bg-gray-500 mx-auto'></div>
				</div>
				<div className='md:mx-auto flex md:flex-row flex-col gap-10 justify-center mt-20 '>
					<div
						className='links links-verticals relative font-normal md:w-40 md:h-48 items-center overflow-x-auto'
						style={{ "--items": 4 }}>
						{minibar}
						<div class='line-verticals'></div>
					</div>
					{resultbar}
				</div>
			</div>
		</section>
	)
}

export default Resume
