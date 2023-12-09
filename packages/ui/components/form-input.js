const theme = require('tailwindcss/defaultTheme')
const { GLOBALS, FIELD_STYLE_BASE } = require('../utilities/utils')

const OPTIONS = {
	input: {},
	'.eolo-input:focus': {},
	'.eolo-input:placeholder': {},
	'.eolo-input-group': {},
	'.eolo-input-group > .eolo-btn': {},
	'.eolo-input-group > input': {},
	'.eolo-input-group > select': {},
	'.eolo-input-group-inset': {},
	'.eolo-input-group-inset > input': {},
	'.eolo-input-group-inset > input:first-child': {},
	'.eolo-input-group-inset > input:last-child': {},
	'.eolo-input-group-inset > .eolo-btn': {},
	'.eolo-input-helper': {},
}

const BASE = {
	INPUT: {
		...FIELD_STYLE_BASE,
		height: '2.5rem',
		appearance: 'none',
		'-webkit-appearance': 'none',

		FOCUS: { 'outline-style': 'none' },
		PLACEHOLDER: {
			color: 'var(--tw-global-text-color)',
			opacity: '.4',
		},
		CALENDAR_PICKER_INDICATOR: {
			display: 'none',
			opacity: 0,
		},
	},

	GROUP: {
		DEFAULT: {
			display: 'inline-flex',
			'align-items': 'center',
			'column-gap': theme.spacing[1.5],
			width: '100%',

			BTN: {
				'padding-left': theme.spacing[4],
				'padding-right': theme.spacing[4],
			},
			INPUT: {
				height: 'fit-content',
				flex: 1,
			},
		},

		INSET: {
			'border-width': theme.borderWidth.DEFAULT,
			width: '100%',
			height: '2.5rem',
			padding: theme.spacing[2],
			display: 'inline-flex',
			'align-items': 'center',
			'column-gap': theme.spacing[1.5],
			'border-radius': theme.borderRadius.md,

			BTN: {
				height: '1.6rem',
				padding: `${theme.spacing[1]} ${theme.spacing[3]}`,
				'border-radius': theme.borderRadius.md,
			},
			INPUT: {
				background: 'transparent',
				border: 'none',
				padding: 0,
				flex: 1,
				'border-radius': 0,

				FIRTST_CHILD: { padding: `0 0 0 ${GLOBALS.spacing.DEFAULT}` },
				LAST_CHILD: { padding: `0 ${GLOBALS.spacing.DEFAULT} 0 0` },
			},
		},
	},

	RANGE: {
		'background-color': 'transparent',
		width: '100%',
		cursor: 'pointer',
		appearance: 'none',
		'-webkit-appearance': 'none',

		TRACK: {
			height: '0.75rem',
			'border-radius': theme.borderRadius.full,
		},
		BALL: {
			border: 'none',
			width: '1.4rem',
			height: '1.4rem',
			'margin-top': '-.3rem',
			'border-radius': theme.borderRadius.full,
			appearance: 'none',
			'-webkit-appearance': 'none',
		},
	},

	FILE: {
		padding: `${theme.spacing[1]} ${theme.spacing[1]}`,
		cursor: 'pointer',
		BUTTON: {
			border: 'none',
			'font-size': theme.fontSize.xs,
			'font-weight': theme.fontWeight['medium'],
			padding: `.3rem ${GLOBALS.spacing.sm.x}`,
			'margin-right': '.75rem',
			'border-radius': '.24rem',
			cursor: 'pointer',
			transition: '.3s',
		},
	},

	HELPER: {
		'font-size': theme.fontSize.xs,
		'font-weight': theme.fontWeight['medium'],
		'line-height': theme.lineHeight['tight'],
		padding: `${theme.spacing['0.5']} ${theme.spacing['0.5']}`,
	},
}

const TYPES = [
	'[type=text]',
	'[type=password]',
	'[type=email]',
	'[type=number]',
	'[type=tel]',
	'[type=search]',
	'[type=url]',
	'[type=date]',
	'[type=time]',
	'[type=datetime-local]',
	'[type=week]',
	'[type=file]',
]

const COMPONENTS = (addComponents, options) => {
	TYPES.forEach((e) => {
		addComponents({
			[`.eolo-input${e}`]: {
				...BASE.INPUT,
				...options['input'],

				['&:focus, &:focus-visible']: {
					...BASE.INPUT.FOCUS,
					...options['input:focus'],
				},
				['&::placeholder']: {
					...BASE.INPUT.PLACEHOLDER,
					...options['input:placeholder'],
				},
				['&::-webkit-calendar-picker-indicator']: {
					...BASE.INPUT.CALENDAR_PICKER_INDICATOR,
				},
			},
		})
	})

	addComponents({
		['.eolo-input-group']: {
			...BASE.GROUP.DEFAULT,
			...options['.eolo-input-group'],

			['& > .btn']: {
				...BASE.GROUP.DEFAULT.BTN,
				...options['.eolo-input-group > .btn'],
			},

			['& > input, & > select']: {
				...BASE.GROUP.DEFAULT.INPUT,
				...options['.eolo-input-group > input'],
				...options['.eolo-input-group > select'],
			},
		},
	})

	addComponents({
		['.eolo-input-group-inset']: {
			...BASE.GROUP.INSET,
			...options['.eolo-input-group-inset'],

			['& > input, & > .eolo-input']: {
				...BASE.GROUP.INSET.INPUT,
				...options['.eolo-input-group-inset > input'],

				['&:first-child']: {
					...BASE.GROUP.INSET.INPUT.FIRTST_CHILD,
					...options['.eolo-input-group-inset > input:first-child'],
				},
				['&:last-child']: {
					...BASE.GROUP.INSET.INPUT.LAST_CHILD,
					...options['.eolo-input-group-inset > input:last-child'],
				},
			},

			['& > .eolo-btn']: {
				...BASE.GROUP.INSET.BTN,
				...options['.eolo-input-group-inset > .btn'],
			},
		},
	})

	addComponents({
		['.eolo-input[type=color]']: {
			padding: 0,
			['&::-webkit-color-swatch-wrapper']: {
				padding: 0,
			},
			['&::-webkit-color-swatch']: {
				border: 'none',
			},
		},
	})

	addComponents({
		['.eolo-input-helper']: {
			...BASE.HELPER,
		},
	})

	addComponents({
		['.eolo-input[type=range]']: {
			...BASE.RANGE,

			['&::-webkit-slider-runnable-track']: { ...BASE.RANGE.TRACK },
			['&::-moz-range-track']: { ...BASE.RANGE.TRACK },
			['&::-webkit-slider-thumb']: { ...BASE.RANGE.BALL },
			['&::-moz-range-thumb']: { ...BASE.RANGE.BALL },
		},
	})

	addComponents({
		['.eolo-input[type=file]']: {
			...BASE.FILE,

			['&::file-selector-button']: {
				...BASE.FILE.BUTTON,
			},
		},
	})
}

module.exports = { OPTIONS, COMPONENTS }
