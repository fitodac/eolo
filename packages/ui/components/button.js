const theme = require('tailwindcss/defaultTheme')
const { GLOBALS } = require('../utilities/utils')
const MEDIA = require('./mediaqueries')

const OPTIONS = {
	'.eolo-btn': {},
	'.eolo-btn-sm': {},
	'.eolo-btn-lg': {},
	'.eolo-btn-icon': {},
	'.eolo-btn_icon > svg': {},
	'.eolo-btn.rounded': {},
	'.eolo-btn.block': {},
	'.eolo-btn-link': {},
	'.eolo-btn > [class^=ri-]': {},
	'.eolo-btn-group': {},
	'.eolo-btn-group > .eolo-btn': {},
	'.eolo-btn-group > .eolo-btn:first-child': {},
	'.eolo-btn-group > .eolo-btn:last-child': {},
	'.eolo-btn-group > label': {},
	'.eolo-btn-group-sm': {},
	'.eolo-btn-group-lg': {},
	'.eolo-btn-group-sm > .eolo-btn': {},
	'.eolo-btn-group-lg > .eolo-btn': {},
	'.eolo-btn-group-sm > .eolo-btn:first-child': {},
	'.eolo-btn-group-sm > .eolo-btn:last-child': {},
	'.eolo-btn-group-lg > .eolo-btn:first-child': {},
	'.eolo-btn-group-lg > .eolo-btn:last-child': {},
}

const BASE = {
	BTN: {
		'border-width': theme.borderWidth.DEFAULT,
		'font-size': theme.fontSize.xs[0],
		'line-height': theme.lineHeight.none,
		'font-weight': theme.fontWeight.medium,
		'max-height': theme.spacing[10],
		padding: `${theme.spacing[2.5]} ${theme.spacing[5]}`,
		display: 'inline-flex',
		'justify-content': 'center',
		'align-items': 'center',
		transition: '.25 eas-in-out',
		'transition-duration': theme.transitionDuration[300],
		'border-radius': theme.borderRadius.md,
		cursor: 'pointer',
		overflow: 'hidden',
		'text-overflow': 'ellipsis',
		'white-space': 'nowrap',
		'user-select': 'none',
		...MEDIA.query('md', {
			padding: `${GLOBALS.spacing.y} ${GLOBALS.spacing.x}`,
		}),

		SM: {
			'font-size': theme.fontSize.xs[0],
			padding: `${GLOBALS.spacing.sm.y} ${GLOBALS.spacing.sm.x}`,
		},

		LG: {
			padding: `${GLOBALS.spacing.lg.y} ${GLOBALS.spacing.lg.x}`,
		},

		/// Button icon:
		ICON: {
			width: theme.spacing[10],
			height: theme.spacing[10],
			padding: theme.spacing[0],
			display: 'inline-grid',
			'place-content': 'center',

			SVG: { transition: theme.transitionProperty.all },
		},
		ROUNDED: { 'border-radius': theme.borderRadius.full },
		BLOCK: { 'text-align': 'center' },
	},

	LINK: {
		border: 'none',
		padding: 0,
	},

	TOGGLER: { display: 'none' },

	/// Button group:
	GROUP: {
		GROUP: { display: 'inline-flex' },
		CHILDREN: {
			'font-size': theme.fontSize.sm[0],
			'border-radius': theme.borderRadius.none,
			'padding-left': theme.spacing[5],
			'padding-right': theme.spacing[5],
		},
		CHILDREN_FIRST: {
			'border-radius': `${theme.borderRadius.md} 0 0 ${theme.borderRadius.md}`,
		},
		CHILDREN_LAST: {
			'border-radius': `0 ${theme.borderRadius.md} ${theme.borderRadius.md} 0`,
		},

		LABEL: {
			display: 'inline-flex',
			cursor: 'pointer',

			BTN: {
				'padding-left': theme.spacing[5],
				'padding-right': theme.spacing[5],
			},
		},

		SM: {
			BTN: {
				'font-size': theme.fontSize.xs[0],
				padding: `${theme.spacing[1.5]} ${theme.spacing[3]}`,
			},
		},

		LG: {
			BTN: {
				padding: `${GLOBALS.spacing.lg.y} ${GLOBALS.spacing.lg.x}`,
				'max-height': theme.spacing[14],

				FIRST_CHILD: {
					'border-radius': `${theme.borderRadius.lg} 0 0 ${theme.borderRadius.lg}`,
				},
				LAST_CHILD: {
					'border-radius': `0 ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0`,
				},
			},
		},
	},

	HEIGHT: {
		SM: {
			height: '1.6rem',
		},
		DEFAULT: {
			height: '2.4rem',
		},
		LG: {
			height: '2.9rem',
			'max-height': theme.spacing[14],
		},
	},

	RI: { 'font-size': '1.2rem' },
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-btn']: {
			...BASE.BTN,
			...BASE.HEIGHT.DEFAULT,

			['&.eolo-btn-sm']: {
				...BASE.BTN.SM,
				...BASE.HEIGHT.SM,
			},
			['&.eolo-btn-lg']: {
				...BASE.BTN.LG,
				...BASE.HEIGHT.LG,
			},
			['&.eolo-btn-icon']: {
				...BASE.BTN.ICON,

				['svg']: { ...BASE.BTN.ICON.SVG },
			},
			['&.rounded-full']: {
				...BASE.BTN.ROUNDED,
			},
			['&.eolo-btn-link']: { ...BASE.LINK },
			['> [class^=ri-]']: {
				...BASE.RI,
			},
			['&.block']: { ...BASE.BTN.BLOCK },
		},
	})

	addComponents({
		['.eolo-btn-group']: {
			...BASE.GROUP.GROUP,

			['> .eolo-btn']: {
				...BASE.GROUP.CHILDREN,
				...BASE.HEIGHT.DEFAULT,

				['&:first-child']: {
					...BASE.GROUP.CHILDREN_FIRST,
				},
				['&:last-child']: {
					...BASE.GROUP.CHILDREN_LAST,
				},
			},

			['> label']: {
				...BASE.GROUP.LABEL,

				['> [type=checkbox], > [type=radio]']: { display: 'none' },
				['> .eolo-btn']: {
					...BASE.GROUP.CHILDREN,
					...BASE.HEIGHT.DEFAULT,
				},
				['&:first-child > .eolo-btn']: {
					...BASE.GROUP.CHILDREN_FIRST,
				},
				['&:last-child > .eolo-btn']: {
					...BASE.GROUP.CHILDREN_LAST,
				},
			},

			['> .eolo-dropdown > .eolo-btn-toggler > .eolo-btn']: {
				...BASE.GROUP.CHILDREN,
			},
			['> .eolo-dropdown:first-child > .eolo-btn-toggler > .eolo-btn']: {
				...BASE.GROUP.CHILDREN_FIRST,
			},
			['> .eolo-dropdown:last-child > .eolo-btn-toggler > .eolo-btn']: {
				...BASE.GROUP.CHILDREN_LAST,
			},
		},
	})

	addComponents({
		['.eolo-btn-group-sm']: {
			...BASE.GROUP.GROUP,

			['& > .eolo-btn']: {
				...BASE.GROUP.CHILDREN,
				...BASE.GROUP.SM.BTN,
				...BASE.HEIGHT.SM,

				['&:first-child']: {
					...BASE.GROUP.CHILDREN_FIRST,
				},
				['&:last-child']: {
					...BASE.GROUP.CHILDREN_LAST,
				},
			},

			['> label']: {
				...BASE.GROUP.LABEL,

				['> [type=checkbox], > [type=radio]']: { display: 'none' },
				['> .eolo-btn']: {
					...BASE.GROUP.CHILDREN,
					...BASE.GROUP.SM.BTN,
					...BASE.HEIGHT.SM,
				},
				['&:first-child > .eolo-btn']: {
					...BASE.GROUP.CHILDREN_FIRST,
				},
				['&:last-child > .eolo-btn']: {
					...BASE.GROUP.CHILDREN_LAST,
				},
			},

			['> .eolo-dropdown > .eolo-btn-toggler > .eolo-btn']: {
				...BASE.GROUP.CHILDREN,
			},
			['> .eolo-dropdown:first-child > .eolo-btn-toggler > .eolo-btn']: {
				...BASE.GROUP.CHILDREN_FIRST,
			},
			['> .eolo-dropdown:last-child > .eolo-btn-toggler > .eolo-btn']: {
				...BASE.GROUP.CHILDREN_LAST,
			},
		},
	})

	addComponents({
		['.eolo-btn-group-lg']: {
			...BASE.GROUP.GROUP,

			['& > .eolo-btn']: {
				...BASE.GROUP.CHILDREN,
				...BASE.GROUP.LG.BTN,
				...BASE.HEIGHT.LG,

				['&:first-child']: {
					...BASE.GROUP.LG.BTN.FIRST_CHILD,
				},
				['&:last-child']: {
					...BASE.GROUP.LG.BTN.LAST_CHILD,
				},
			},

			['> label']: {
				...BASE.GROUP.LABEL,

				['> [type=checkbox], > [type=radio]']: { display: 'none' },
				['> .eolo-btn']: {
					...BASE.GROUP.CHILDREN,
					...BASE.GROUP.LG.BTN,
					...BASE.HEIGHT.LG,
				},
				['&:first-child > .eolo-btn']: {
					...BASE.GROUP.CHILDREN_FIRST,
				},
				['&:last-child > .eolo-btn']: {
					...BASE.GROUP.CHILDREN_LAST,
				},
			},

			['> .eolo-dropdown > .eolo-btn-toggler > .eolo-btn']: {
				...BASE.GROUP.CHILDREN,
			},
			['> .eolo-dropdown:first-child > .eolo-btn-toggler > .eolo-btn']: {
				...BASE.GROUP.CHILDREN_FIRST,
			},
			['> .eolo-dropdown:last-child > .eolo-btn-toggler > .eolo-btn']: {
				...BASE.GROUP.CHILDREN_LAST,
			},
		},
	})

	addComponents({
		['.eolo-btn-toggler']: {
			['> [type=checkbox], > [type=radio]']: { display: 'none' },
		},
	})
}

module.exports = { OPTIONS, COMPONENTS }
