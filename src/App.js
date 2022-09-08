import Navbar from "./component/navbar"
import bg from "./assets/pictures/bg.png"
import ig from "./assets/logo/instagram.svg"
import gh from "./assets/logo/github.svg"
import tw from "./assets/logo/twitter.svg"
import Contact from "./component/contact"
import front from "./assets/pictures/front-end.png"
import simple from "./assets/pictures/simple.png"
import mypict from "./assets/pictures/mypict.JPG"
import name from "./assets/pictures/name.png"
import resume from "./assets/resume/resume.pdf"
import Home from "./component/home"

function App() {
	return (
		<div>
			<div className='fixed h-full w-full z-0'>
				<img src={bg} alt='' className='h-screen w-screen object-cover' />
				<img src={bg} alt='' className='h-screen w-screen object-cover -z-0' />
			</div>
			<Home />
		</div>
	)
}

export default App
