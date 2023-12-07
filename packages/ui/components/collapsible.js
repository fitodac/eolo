const theme = require('tailwindcss/defaultTheme')

const OPTIONS = {
	'.eolo-collapsible': {},
}

const BASE = {
	COLLAPSIBLE: {
		'border-width': '1px',
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
		'border-radius': theme.borderRadius.lg,

		INPUT: {
			position: 'absolute',
			display: 'none',

			CHECKED: {
				CONTENT: { 'max-height': theme.spacing[80] },
			},
		},
		HEAD: {
			'background-size': '20px',
			'background-repeat': 'no-repeat',
			'background-position': 'calc(100% - 10px) 10px',
			'line-height': theme.lineHeight.normal,
			padding: `${theme.spacing[3]} ${theme.spacing[5]}`,
			display: 'block',
			cursor: 'pointer',
			'user-select': 'none',
		},
		CONTENT: {
			'line-height': theme.lineHeight.tight,
			'max-height': 0,
			'transition-property': 'all',
			'transition-timing-function': theme.transitionTimingFunction['in-out'],
			'transition-duration': theme.transitionDuration[200],
			overflow: 'auto',
		},
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-collapsible']: {
			...BASE.COLLAPSIBLE,
			...options['.eolo-collapsible'],

			['[type=checkbox]']: {
				...BASE.COLLAPSIBLE.INPUT,

				['&:checked ~ .eolo-collapsible-content']: {
					...BASE.COLLAPSIBLE.INPUT.CHECKED.CONTENT,
				},
			},
			['[type=radio]']: {
				...BASE.COLLAPSIBLE.INPUT,

				['&:checked ~ .eolo-collapsible-content']: {
					...BASE.COLLAPSIBLE.INPUT.CHECKED.CONTENT,
				},
			},
		},
	})

	addComponents({
		['.eolo-collapsible-head']: { ...BASE.COLLAPSIBLE.HEAD },
	})

	addComponents({
		['.eolo-collapsible-content']: { ...BASE.COLLAPSIBLE.CONTENT },
	})
}

module.exports = { OPTIONS, COMPONENTS }
