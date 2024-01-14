/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				background: "#FFFEEB",
				tangerine: "#FB6131",
				apricot: "#FFBD59",
				black: "000000",
        white: "FFFFFF"
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			}
    },
  },
  plugins: [],
}

