const theme = require('tailwindcss/defaultTheme')

const OPTIONS = {
	'.eolo-input-checkbox': {},
	'.eolo-input-checkbox input': {},
	'.eolo-input-checkbox input + span': {},
	'.eolo-input-checkbox input + span::before': {},
	'.eolo-input-checkbox.input-lg input + span::before': {},
	'.eolo-input-checkbox input:disabled + span::before': {},
	'.eolo-input-checkbox.checked input + span::before': {},
	'.eolo-input-checkbox.checked input:checked + span::before': {},
}

const BASE = {
	CHECKBOX: {
		'font-size': theme.fontSize.sm[0],
		'font-weight': theme.fontWeight.normal,
		'line-height': theme.fontSize.sm[1].lineHeight,
		display: 'inline-flex',
		'align-items': 'center',
		gap: theme.spacing[2],
		cursor: 'pointer',

		INPUT: {
			display: 'none',

			DISABLED: {
				SPAN: {
					BEFORE: { cursor: 'auto' },
				},
			},
		},
		SPAN: {
			'line-height': theme.fontSize.sm[1].lineHeight,
			display: 'flex',
			'align-items': 'center',
			gap: theme.spacing[2],
			transition: theme.transitionProperty.all,
			'user-select': 'none',

			BEFORE: {
				content: '""',
				'background-repeat': 'no-repeat',
				'background-position': 'center',
				'border-width': '1px',
				width: theme.spacing[5],
				height: theme.spacing[5],
				display: 'flex',
				transition: theme.transitionProperty.all,
				'border-radius': theme.borderRadius.md,
			},
		},
		INPUT_LG: {
			SPAN: {
				BEFORE: {
					width: theme.spacing[7],
					height: theme.spacing[7],
					'border-radius': theme.borderRadius.lg,
				},
			},
		},

		// Checked
		CHECKED: {
			SPAN: {
				BEFORE: {
					width: theme.spacing[6],
					height: theme.spacing[6],
					'border-radius': theme.borderRadius.full,
				},
			},
			CHECKED: {
				SPAN: {
					BEFORE: { 'background-size': '70%' },
				},
			},
		},
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-input-checkbox']: {
			...BASE.CHECKBOX,
			...options['.eolo-input-checkbox'],

			['input']: {
				...BASE.CHECKBOX.INPUT,
				...options['.eolo-input-checkbox input'],
			},
			['input + span']: {
				...BASE.CHECKBOX.SPAN,
				...options['.eolo-input-checkbox input + span'],

				['&::before']: {
					...BASE.CHECKBOX.SPAN.BEFORE,
					...options['.eolo-input-checkbox input + span::before'],
				},
			},
			['&.eolo-input-lg input + span::before']: {
				...BASE.CHECKBOX.INPUT_LG.SPAN.BEFORE,
				...options['.eolo-input-checkbox.eolo-input-lg input + span::before'],
			},
			['input:disabled + span::before']: {
				...BASE.CHECKBOX.INPUT.DISABLED.SPAN.BEFORE,
				...options['.eolo-input-checkbox input:disabled + span::before'],
			},

			['&.checked']: {
				['input + span::before']: {
					...BASE.CHECKBOX.CHECKED.SPAN.BEFORE,
					...options['.eolo-input-checkbox.checked input + span::before'],
				},
				['input:checked + span::before']: {
					...BASE.CHECKBOX.CHECKED.CHECKED.SPAN.BEFORE,
					...options[
						'.eolo-input-checkbox.checked input:checked + span::before'
					],
				},
			},
		},
	})
}

module.exports = { OPTIONS, COMPONENTS }
