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
				fadein: "fade 1s ease-in-out",
			},
			keyframes: {
				fade: {
					"0%": {
						opacity: 0,
					},
					"100%": {
						opacity: 1,
					},
				},
				slider: {
					"0%": {
						opacity: 0,
						transform: "translateY(-70px)",
					},

					"5%, 30%": {
						opacity: 1,
						transform: "translateY(0%)",
					},
					"35%, 60%": {
						opacity: 0,
						transform: "translateY(70%)",
					},
					"65%, 100%": {
						opacity: 0,
						transform: "translateY(70%)",
					},
				},
			},
		},
	},
	plugins: [],
}
