//** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				nobel: '#b4b4b4',
				'lucky-point': '#1c1464',
				'green-vogue': '#042c54',
				olivine: '#8cb884',
				paradiso: '#307484',
				'bay-of-many': '#302c88',
				martinique: '#342c54',
				madison: '#082c54',
			},
		},
	},
	plugins: [],
};
