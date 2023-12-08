const theme = require('tailwindcss/defaultTheme')

const OPTIONS = {
	'.eolo-modal': {},
	'input[type=checkbox]:checked + .eolo-overlay > .eolo-modal': {},
	'input[type=radio]:checked + .eolo-overlay > .eolo-modal': {},
}

const BASE = {
	MODAL: {
		top: theme.spacing[8],
		position: 'relative',
		opacity: 0,
		'border-radius': theme.borderRadius.xl,
		transition: '.2s ease-in-out',
	},

	INPUT: {
		OVERLAY: {
			MODAL: {
				top: 0,
				opacity: 1,
				'transition-delay': theme.transitionDelay[75],
			},
		},
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({ ['.eolo-modal']: { ...BASE.MODAL, ...options['.modal'] } })
	addComponents({
		['input[type=checkbox]:checked + .eolo-overlay > .eolo-modal']: {
			...BASE.INPUT.OVERLAY.MODAL,
			...options['input[type=checkbox]:checked + .eolo-overlay > .eolo-modal'],
		},
	})
	addComponents({
		['input[type=radio]:checked + .eolo-overlay > .eolo-modal']: {
			...BASE.INPUT.OVERLAY.MODAL,
			...options['input[type=radio]:checked + .eolo-overlay > .eolo-modal'],
		},
	})
}

module.exports = { OPTIONS, COMPONENTS }
