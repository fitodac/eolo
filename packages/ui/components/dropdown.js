const theme = require('tailwindcss/defaultTheme')
const { GLOBALS } = require('../utilities/utils')
const MEDIA = require('./mediaqueries')

const OPTIONS = {
	'.eolo-dropdown': {},
	'.eolo-dropdown > .eolo-btn-toggler': {},
	'.eolo-dropdown > .eolo-dropdown-toggler': {},
	'.eolo-dropdown > .eolo-dropdown-toggler:checked ~ .eolo-btn-toggler .eolo-dropdown-nav':
		{},
	'.eolo-dropdown .eolo-dropdown-nav': {},
	'.eolo-dropdown > .eolo-overlay': {},
	'.eolo-dropdown > .eolo-dropdown-toggler:checked ~ .eolo-overlay': {},
	'.eolo-dropdown .ri-arrow-down-s-line': {},
	'.eolo-dropdown > .eolo-dropdown-toggler:checked ~ .eolo-btn-toggler .ri-arrow-down-s-line':
		{},
}

const BASE = {
	DROPDOWN: {
		display: 'inline-flex',
	},
	BTN_TOGGLER: {
		'z-index': 110,
	},
	DROPDOWN_TOGGLER: {
		visibility: 'hidden',
		display: 'none',
		CHECKED: {
			BTN_TOGGLER: {
				'z-index': 120,

				ARROW: {
					transform: 'rotate(180deg)',
				},
			},
			DROPDOWN_NAV: {
				'margin-top': 0,
				opacity: '1',
				visibility: 'visible',
				'pointer-events': 'auto',
			},
			OVERLAY: {
				opacity: '1',
				visibility: 'visible',
			},
		},
	},
	DROPDOWN_NAV: {
		'border-width': '1px',
		visibility: 'hidden',
		opacity: 0,
		'margin-top': theme.spacing[2],
		position: 'absolute',
		'will-change': 'opacity',
		transition: theme.transitionProperty.all,
		'transition-duration': theme.transitionDuration['150'],
		'border-radius': theme.borderRadius.lg,
		'pointer-events': 'none',

		UL: {
			'padding-top': theme.spacing[3],
			'padding-bottom': theme.spacing[3],

			LI: {
				'font-weight': theme.fontWeight.medium,
			},
		},
	},
	ARROW: {
		transition: theme.transitionProperty.all,
		'transition-duration': theme.transitionDuration['100'],
	},
	OVERLAY: {
		'pointer-events': 'initial',
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-dropdown']: {
			...BASE.DROPDOWN,

			['> .eolo-btn-toggler']: {
				...BASE.BTN_TOGGLER,
			},

			['> .eolo-dropdown-toggler']: {
				...BASE.DROPDOWN_TOGGLER,
			},

			['.eolo-dropdown-nav']: {
				...BASE.DROPDOWN_NAV,

				['> ul']: {
					...BASE.DROPDOWN_NAV.UL,

					['> li']: {
						...BASE.DROPDOWN_NAV.UL.LI,
					},
				},
			},

			['> .eolo-dropdown-toggler:checked ~ .eolo-btn-toggler .eolo-dropdown-nav']:
				{
					...BASE.DROPDOWN_TOGGLER.CHECKED.DROPDOWN_NAV,
				},

			['> .eolo-overlay']: {
				...BASE.OVERLAY,
			},

			['> .eolo-dropdown-toggler:checked ~ .eolo-overlay']: {
				...BASE.DROPDOWN_TOGGLER.CHECKED.OVERLAY,
			},

			['.ri-arrow-down-s-line']: {
				...BASE.ARROW,
			},

			['> .eolo-dropdown-toggler:checked ~ .eolo-btn-toggler']: {
				...BASE.DROPDOWN_TOGGLER.CHECKED.BTN_TOGGLER,
			},
			['> .eolo-dropdown-toggler:checked ~ .eolo-btn-toggler .ri-arrow-down-s-line']:
				{
					...BASE.DROPDOWN_TOGGLER.CHECKED.BTN_TOGGLER.ARROW,
				},
		},
	})
}

module.exports = { OPTIONS, COMPONENTS }
