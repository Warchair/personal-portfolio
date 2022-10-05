import bg from "./assets/pictures/bg.png"
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
