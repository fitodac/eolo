// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Eolo',
	tagline: 'Tailwind css UI kit',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://eolo.vercel.app',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'fitodac', // Usually your GitHub org/user name.
	projectName: 'eolo', // Usually your repo name.

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'es'],
		path: 'i18n',
		localeConfigs: {
			en: {
				label: 'English',
				htmlLang: 'en-US',
				path: 'en',
			},
			es: {
				label: 'Spanish',
				htmlLang: 'es',
				path: 'es',
			},
		},
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					// editUrl:
					// 	'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: [
						'./src/css/custom.min.css',
						'./node_modules/remixicon/fonts/remixicon.css',
					],
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'Eolo',
				logo: {
					alt: 'Eolo',
					src: 'img/logo.svg',
				},
				items: [
					{
						type: 'docSidebar',
						sidebarId: 'tutorialSidebar',
						position: 'left',
						label: 'Docs',
					},

					// { to: '/blog', label: 'Blog', position: 'left' },

					// {
					// 	href: 'https://github.com/facebook/docusaurus',
					// 	label: 'GitHub',
					// 	position: 'right',
					// },
					{
						type: 'localeDropdown',
						position: 'right',
					},
				],
			},
			docs: {
				// sidebar: {
				// 	hideable: true,
				// 	autoCollapseCategories: false
				// },
			},
			footer: {
				// style: 'dark',
				// links: [
				// 	{
				// 		title: 'Docs',
				// 		items: [
				// 			{
				// 				label: 'Tutorial',
				// 				to: '/docs/getting-started',
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: 'Community',
				// 		items: [
				// 			{
				// 				label: 'Stack Overflow',
				// 				href: 'https://stackoverflow.com/questions/tagged/docusaurus',
				// 			},
				// 			{
				// 				label: 'Discord',
				// 				href: 'https://discordapp.com/invite/docusaurus',
				// 			},
				// 			{
				// 				label: 'Twitter',
				// 				href: 'https://twitter.com/docusaurus',
				// 			},
				// 		],
				// 	},
				// 	{
				// 		title: 'More',
				// 		items: [
				// 			{
				// 				label: 'Blog',
				// 				to: '/blog',
				// 			},
				// 			{
				// 				label: 'GitHub',
				// 				href: 'https://github.com/facebook/docusaurus',
				// 			},
				// 		],
				// 	},
				// ],
				copyright: `&copy; ${new Date().getFullYear()} Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.nightOwlLight,
				darkTheme: prismThemes.nightOwl,
			},
		}),
}

export default config
