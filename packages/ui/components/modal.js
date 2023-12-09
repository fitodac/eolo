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
		'border-radius': theme.borderRadius.xl,
		'z-index': 30,
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

	TOGGLER: {
		display: 'none',
	},

	WRAPPER: {
		display: 'grid',
		'place-content': 'center',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		position: 'fixed',
		visibility: 'hidden',
		opacity: 0,
		transition: '.3s ease-in-out',
		'pointer-events': 'none',
		'z-index': '-1',

		OVERLAY: {
			'z-index': 1,
		},

		ACTIVE: {
			'pointer-events': 'initial',
			visibility: 'visible',
			opacity: 1,
			'z-index': '999',

			OVERLAY: {
				visibility: 'visible',
				opacity: 1,
				'pointer-events': 'initial',
			},
		},
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-modal']: {
			...BASE.MODAL,
			...options['.modal'],
		},

		['.eolo-modal-toggler']: {
			...BASE.TOGGLER,
		},

		['.eolo-modal-wrapper']: {
			...BASE.WRAPPER,
		},

		['.eolo-modal-wrapper .eolo-overlay']: {
			...BASE.WRAPPER.OVERLAY,
		},

		['.eolo-modal-toggler[type=checkbox]:checked + .eolo-modal-wrapper']: {
			...BASE.WRAPPER.ACTIVE,
		},

		['.eolo-modal-toggler[type=checkbox]:checked + .eolo-modal-wrapper .eolo-overlay']:
			{
				...BASE.WRAPPER.ACTIVE.OVERLAY,
			},
	})
}

module.exports = { OPTIONS, COMPONENTS }
