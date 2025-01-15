/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
			"./index.html",
			"./src/**/*.{js,ts,jsx,tsx}",
		],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
				primary: '#087F5B',
			},
			fontFamily: {
				sans: ["DM Sans", 'sans-serif'],
			}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
