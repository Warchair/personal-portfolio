import img1_1 from "../../assets/pictures/1_1.png"
import img1_2 from "../../assets/pictures/1_2.png"
import img2_1 from "../../assets/pictures/2_1.png"
import img2_2 from "../../assets/pictures/2_2.png"
import img3_1 from "../../assets/pictures/3_1.png"
import img4_1 from "../../assets/pictures/4_1.png"
import img4_2 from "../../assets/pictures/4_2.png"
import img5_1 from "../../assets/pictures/5_1.png"
import img5_2 from "../../assets/pictures/5_2.png"

// resume
import { education, skills, project, interest } from "../resumeData"

export const dataproject = [
	{
		title: "Landing Page Company",
		desc: "Ini adalah sebuah Project Landing Page perusahaan yangdibuat menggunakan HTML dan Framework TailwindCSS, design UInya diambil dari Figma. Dibuat semirip mungkin dengan UI design yang sudah ada",
		tech: ["HTML", "TailwindCSS", "React"],
		link: "https://www.figma.com/file/0z9t5dX3lLPovHATcwPz6W/EdTech-Landing-Page-(Community)?node-id=0%3A1",
		github: "https://github.com/Warchair/simple-homepage-2",
		demo: "https://warchair.github.io/simple-homepage-2/",
		img1: img1_1,
		img2: img1_2,
	},
	{
		title: "React Movie",
		desc: "Project ini dibuat menggunakan Framework react js, bootstrap, dan sass dengan restfull API dari themoviedb.org. terdapat favorit movie, search movie, details movie, recomended movie dan tv shows",
		tech: ["React", "Bootstrap", "react-router-dom"],
		github: "https://github.com/Warchair/React-MovieDB-2",
		demo: "https://anwarmovie.netlify.app/React-MovieDB-2/",
		img1: img2_1,
		img2: img2_2,
	},

	{
		title: "Template Dashboard Course App",
		desc: "Ini adalah sebuah template dashboard yang dibuat menggunakan sebuah Library Framework React dan Tailwind. serta beberapa library javascript lainnya",
		tech: ["React", "TailwindCSS", "react-chart-js-2", "react-router-dom"],
		github: "https://github.com/Warchair/dashboard-course-app",
		demo: "https://dashboard-course-app.netlify.app",
		img1: img4_1,
		img2: img4_2,
	},
	{
		title: "Notes App",
		desc: "Notes App adalah sebuah project CRUD yang menginputkan judul, deskripsi dan gambar menggunakan sebuah Google Firebase sebagai penyimpanan data.",
		tech: ["React", "TailwindCSS", "Firebase"],
		github: "https://github.com/Warchair/notes-app",
		demo: "https://warchair-notes-app.netlify.app",
		img1: img3_1,
	},
	{
		title: "E-Commerce",
		desc: "web-app e-commerce ini dibuat menggunakan firebase sebagai penyimpanan data serta google authentication sebagai login, fitur interfacenya adalah, menambahkan produk ke cart dan quantity dari produk hingga total harga dari setiap produk yang ingin di checkout",
		tech: [
			"React",
			"TailwindCSS",
			"Firebase",
			"ContextAPI",
			"react-router-dom",
		],
		github: "https://github.com/Warchair/react-firebase-commerce",
		demo: "https://warchair-ecommerce.netlify.app",
		img1: img5_1,
		img2: img5_2,
	},
]

export const textData = [
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

export const resultData = [
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
