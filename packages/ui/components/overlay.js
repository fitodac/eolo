// const theme = require('tailwindcss/defaultTheme')
// const MEDIA = require('./mediaqueries')

const OPTIONS = {
	'.eolo-overlay': {},
	'input[type=checkbox]:checked + .eolo-overlay': {},
	'input[type=radio]:checked + .eolo-overlay': {},
}

const BASE = {
	OVERLAY: {
		// background: 'red',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		position: 'fixed',
		'will-change': 'opacity',
		visibility: 'hidden',
		'pointer-events': 'none',
		'z-index': 99,
		// padding: theme.spacing[6],
		// display: 'grid',
		// 'place-content': 'center',
		// opacity: 0,
		// transition: '.2s ease-in-out',
		// ...MEDIA.query('xl', { padding: 0 }),

		ACTIVE: {
			// opacity: 1,
			// visibility: 'visible',
			// 'pointer-events': 'auto',
		},
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-overlay']: { ...BASE.OVERLAY, ...options['.eolo-overlay'] },
	})
	// addComponents({
	// 	['input[type=checkbox]:checked + .eolo-overlay']: {
	// 		...BASE.OVERLAY.ACTIVE,
	// 		...options['input[type=checkbox]:checked + .eolo-overlay'],
	// 	},
	// })
	// addComponents({
	// 	['input[type=radio]:checked + .eolo-overlay']: {
	// 		...BASE.OVERLAY.ACTIVE,
	// 		...options['input[type=radio]:checked + .eolo-overlay'],
	// 	},
	// })
}

module.exports = { OPTIONS, COMPONENTS }
