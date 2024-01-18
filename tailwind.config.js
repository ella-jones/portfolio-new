/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				background: "#FFFEEB",
				'tangerine': "#FB6131",
				'apricot': "#FFBD59",
			},
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			}
    },
  },
  plugins: [],
}

