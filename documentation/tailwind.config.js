/** @type {import('tailwindcss').Config} */
// import eolo from 'eolo'
import eolo from '../packages/ui'

module.exports = {
	content: [
		'./src/**/*.{js,jsx,ts,tsx,.css}',
		'./docs/**/*.{md,mdx}',
		'./i18n/**/*.{md,mdx,js,jsx,ts,tsx,.css}',
	],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		extend: {},
	},
	plugins: [eolo],
}
