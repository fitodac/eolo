const theme = require('tailwindcss/defaultTheme')
const { GLOBALS } = require('../utilities/utils')
const MEDIA = require('./mediaqueries')


const OPTIONS = {
	'.eolo-btn': {},
	'.eolo-btn-sm': {},
	'.eolo-btn-lg': {},
	'.eolo-btn.eolo-ghost': {},
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
	/// Button basics:
	BTN: {
		'border-width': theme.borderWidth.DEFAULT,
		'font-size': theme.fontSize.xs[0],
		'line-height': theme.lineHeight.none,
		'font-weight': theme.fontWeight.medium,
		'max-height': theme.spacing[10],
		'padding': `${theme.spacing[2.5]} ${theme.spacing[5]}`,
		'display': 'inline-flex',
		'justify-content': 'center',
		'align-items': 'center',
		'transition': theme.transitionProperty.all,
		'transition-duration': theme.transitionDuration[300],
		'border-radius': theme.borderRadius.md,
		'cursor': 'pointer',
		'overflow': 'hidden',
		'text-overflow': 'ellipsis',
		'white-space': 'nowrap',
		'user-select': 'none',
		...MEDIA.query('md', {'padding': `${GLOBALS.spacing.y} ${GLOBALS.spacing.x}`}),

		SM: {
			'font-size': theme.fontSize.xs[0],
			'padding': `${GLOBALS.spacing.sm.y} ${GLOBALS.spacing.sm.x}`
		},

		LG: {
			'padding': `${GLOBALS.spacing.lg.y} ${GLOBALS.spacing.lg.x}`,
			'max-height': theme.spacing[14],
		},

		GHOST: { 'border': 'transparent' },
		
		/// Button icon:
		ICON: {
			'width': theme.spacing[10],
			'height': theme.spacing[10],
			'padding': theme.spacing[0],
			'display': 'inline-grid',
			'place-content': 'center',

			SVG: { 'transition': theme.transitionProperty.all }
		},
		ROUNDED: { 'border-radius': theme.borderRadius.full },
		BLOCK: { 'text-align': 'center' }
	},

	LINK: {
		'border': 'none',
		'padding': 0
	},

	TOGGLER: { 'display': 'none' },

	/// Button group:
	GROUP: {
		GROUP: { 'display': 'inline-flex' },
		CHILDREN: {
			'font-size': theme.fontSize.sm[0],
			'border-radius': theme.borderRadius.none,
			'padding-left': theme.spacing[5],
			'padding-right': theme.spacing[5],
		},
		CHILDREN_FIRST: { 'border-radius': `${theme.borderRadius.md} 0 0 ${theme.borderRadius.md}` },
		CHILDREN_LAST: { 'border-radius': `0 ${theme.borderRadius.md} ${theme.borderRadius.md} 0` },

		LABEL: {
			display: 'inline-flex',
			cursor: 'pointer',

			BTN: {
				'padding-left': theme.spacing[5],
				'padding-right': theme.spacing[5],
			}
		},

		SM: {
			BTN: {
				'font-size': theme.fontSize.xs[0],
				'padding': `${theme.spacing[1.5]} ${theme.spacing[3]}`,
			}
		},

		LG: {
			BTN: {
				'padding': `${GLOBALS.spacing.lg.y} ${GLOBALS.spacing.lg.x}`,
				'max-height': theme.spacing[14],

				FIRST_CHILD: { 'border-radius': `${theme.borderRadius.lg} 0 0 ${theme.borderRadius.lg}` },
				LAST_CHILD: { 'border-radius': `0 ${theme.borderRadius.lg} ${theme.borderRadius.lg} 0` },
			}
		}
	},
	
	RI: { 'font-size': '1.2rem' }
}


const COMPONENTS = (addComponents, options) => {
	
	addComponents({
		['.eolo-btn']: {
			...BASE.BTN, 
			...options['.btn'],
			
			['&.eolo-btn-sm']: {...BASE.BTN.SM, ...options['.eolo-btn-sm']},
			['&.eolo-btn-lg']: {...BASE.BTN.LG, ...options['.eolo-btn-lg']},
			['&.eolo-ghost']: {...BASE.BTN.GHOST, ...options['.eolo-btn.eolo-ghost']},
			['&.eolo-btn-icon']: {
				...BASE.BTN.ICON, 
				...options['.eolo-btn-icon'],

				['svg']: {...BASE.BTN.ICON.SVG, ...options['.eolo-btn_icon > svg']}
			},
			['&.rounded-full']: {...BASE.BTN.ROUNDED, ...options['.eolo-btn.rounded']},
			['&.eolo-btn-link']: {...BASE.LINK, ...options['.eolo-btn-link']},
			['> [class^=ri-]']: {...BASE.RI, ...options['.eolo-btn > [class^=ri-]']},
			['&.block']: {...BASE.BTN.BLOCK, ...options['.eolo-btn.block']},
		}
	})

	addComponents({
		['.eolo-btn-group']: {
			...BASE.GROUP.GROUP,
			...options['.eolo-btn-group'],

			['> .eolo-btn']: {
				...BASE.GROUP.CHILDREN,
				...options['.eolo-btn-group > .eolo-btn'],

				['&:first-child']: {...BASE.GROUP.CHILDREN_FIRST, ...options['.eolo-btn-group > .eolo-btn:first-child']},
				['&:last-child']: {...BASE.GROUP.CHILDREN_LAST, ...options['.eolo-btn-group > .eolo-btn:last-child']}
			},

			['> label']: {
				...BASE.GROUP.LABEL,
				...options['.eolo-btn-group > label'],

				['> [type=checkbox], > [type=radio]']: { display: 'none' },
				['> .eolo-btn']: {
					...BASE.GROUP.CHILDREN,
					...BASE.GROUP.LABEL.BTN,
					...options['.eolo-btn-group > .eolo-btn'],
				},
				['&:first-child > .eolo-btn']: {...BASE.GROUP.CHILDREN_FIRST, ...options['.eolo-btn-group > .eolo-btn:first-child']},
				['&:last-child > .eolo-btn']: {...BASE.GROUP.CHILDREN_LAST, ...options['.eolo-btn-group > .eolo-btn:last-child']},
			},

			['> .eolo-dropdown > .eolo-btn-toggler > .btn']: {...BASE.GROUP.CHILDREN, ...options['.eolo-btn-group > .eolo-btn']},
			['> .eolo-dropdown:first-child > .eolo-btn-toggler > .btn']: {...BASE.GROUP.CHILDREN_FIRST, ...options['.eolo-btn-group > .eolo-btn:first-child']},
			['> .eolo-dropdown:last-child > .eolo-btn-toggler > .btn']: {...BASE.GROUP.CHILDREN_LAST, ...options['.eolo-btn-group > .eolo-btn:last-child']}

		}
	})

	addComponents({
		['.eolo-btn-group-sm']: {
			...BASE.GROUP.GROUP,
			...options['.eolo-btn-group-sm'],

			['& > .eolo-btn']: {
				...BASE.GROUP.CHILDREN,
				...BASE.GROUP.SM.BTN,
				...options['.eolo-btn-group-sm > .eolo-btn'],

				['&:first-child']: {...BASE.GROUP.CHILDREN_FIRST, ...options['.eolo-btn-group-sm > .eolo-btn:first-child']},
				['&:last-child']: {...BASE.GROUP.CHILDREN_LAST, ...options['.eolo-btn-group-sm > .eolo-btn:last-child']},
			}
		}
	})
	
	addComponents({
		['.eolo-btn-group-lg']: {
			...BASE.GROUP.GROUP,
			...options['.eolo-btn-group-lg'],

			['& > .eolo-btn']: {
				...BASE.GROUP.CHILDREN,
				...BASE.GROUP.LG.BTN,
				...options['.eolo-btn-group-lg > .eolo-btn'],

				['&:first-child']: {...BASE.GROUP.LG.BTN.FIRST_CHILD, ...options['.eolo-btn-group-lg > .eolo-btn:first-child']},
				['&:last-child']: {...BASE.GROUP.LG.BTN.LAST_CHILD, ...options['.eolo-btn-group-lg > .eolo-btn:last-child']},
			}
		}
	})

	addComponents({
		['.eolo-btn-toggler']: {
			['> [type=checkbox], > [type=radio]']: { display: 'none' }
		}
	})

}


module.exports = { OPTIONS, COMPONENTS }