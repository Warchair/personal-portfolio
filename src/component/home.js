import React from "react"
import Navbar from "./navbar"
import Project from "./project"
import Resume from "./resume"
import GetResume from "./getResume"
import About from "./about"
import SideContact from "./sidecontact"
import Contact from "./contact"
import Introduction from "./introduction"

export default function Home() {
	return (
		<div className='font-rubik relative overflow-x-hidden'>
			<Navbar />
			<SideContact />
			<Introduction />
			<GetResume />
			<About />
			<Resume />
			<Project />
			<Contact />
		</div>
	)
}
