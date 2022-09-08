/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				rubik: "Rubik",
			},
			animation: {
				slideVer: "slide infinite 9s linear",
			},
			keyframes: {
				slider: {
					"0%": {
						opacity: 0,
						transform: "translateY(-70px)",
					},

					"5%:": {
						opacity: 1,
						transform: "translateY(0%)",
					},
					"30%": {
						opacity: 1,
						transform: "translateY(0%)",
					},
					"35%": {
						opacity: 0,
						transform: "translateY(70%)",
					},
					"60%": {
						opacity: 0,
						transform: "translateY(70%)",
					},
					"65%": {
						opacity: 0,
						transform: "translateY(70%)",
					},
					"100%": {
						opacity: 0,
						transform: "translateY(70%)",
					},
				},
			},
		},
	},
	plugins: [],
}
