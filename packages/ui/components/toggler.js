const theme = require('tailwindcss/defaultTheme')

const OPTIONS = {
	'.eolo-toggler': {},
	'.eolo-toggler input + span::before': {},
}

const BASE = {
	TOGGLER: {
		display: 'inline-flex',
		cursor: 'pointer',

		INPUT: {
			display: 'none',
		},

		SPAN: {
			border: 'none',
			width: '2.5rem',
			height: '1.25rem',
			position: 'relative',
			transition: '.3s ease-in-out',
			'border-radius': theme.borderRadius.full,

			BEFORE: {
				content: `''`,
				width: '.75rem',
				height: '.75rem',
				left: theme.spacing['1'],
				top: theme.spacing['1'],
				position: 'absolute',
				transition: '.3s ease-in-out',
				'border-radius': theme.borderRadius.full,
			},
		},
		CHECKED: {
			SPAN: {
				BEFORE: {
					marginLeft: `calc(100% - ${theme.spacing['5']})`,
				},
			},
		},
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-toggler']: {
			...BASE.TOGGLER,

			['> input[type=checkbox], > input[type=radio]']: {
				...BASE.TOGGLER.INPUT,
			},
			['> input[type=checkbox] + span, > input[type=radio] + span']: {
				...BASE.TOGGLER.SPAN,
			},

			['> input[type=checkbox] + span::before, > input[type=radio] + span::before']:
				{
					...BASE.TOGGLER.SPAN.BEFORE,
				},

			['> input[type=checkbox]:checked + span, > input[type=radio]:checked + span']:
				{
					...BASE.TOGGLER.CHECKED.SPAN,
				},

			['> input[type=checkbox]:checked + span::before, > input[type=radio]:checked + span::before']:
				{
					...BASE.TOGGLER.CHECKED.SPAN.BEFORE,
				},
		},
	})
}

module.exports = { OPTIONS, COMPONENTS }
