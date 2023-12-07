const theme = require('tailwindcss/defaultTheme')

const OPTIONS = {
	'.eolo-table': {},
	'.eolo-table > thead': {},
	'.eolo-table > thead > tr': {},
	'.eolo-table > thead > tr > th': {},
	'.eolo-table > tbody > tr': {},
	'.eolo-table > tbody > tr > td': {},
	'.eolo-table > tfoot': {},
	'.eolo-table-bordered > tbody > tr > td': {},
	'.eolo-table-compact > thead > tr > th': {},
	'.eolo-table-compact > tbody > tr > td': {},
}

const BASE = {
	TABLE: {
		width: '100%',
		display: 'table',

		HEAD: {
			'background-color': 'transparent',
			'user-select': 'none',

			TR: {
				'background-color': 'transparent',
				border: 'none',
			},
			TH: {
				'background-color': 'transparent',
				border: 'none',
				'font-weight': theme.fontWeight.medium,
				'text-align': 'left',
				padding: theme.spacing[3],
				'vertical-align': 'top',
			},
		},
		BODY: {
			TR: {
				'background-color': 'transparent',
				border: 'none',
			},
			TD: {
				'background-color': 'transparent',
				border: 'none',
				padding: `${theme.spacing[2]} ${theme.spacing[3]}`,
				'vertical-align': 'top',
			},
		},
		FOOTER: {},
		BORDERED: {
			BODY: {
				TR: {
					'border-top-width': '1px',
					'border-top-style': 'solid',
				},
			},
		},
		COMPACT: {
			THEAD: {
				TH: {
					'font-size': theme.fontSize.sm[0],
					'line-height': theme.fontSize.sm[1].lineHeight,
					padding: `${theme.spacing[1.5]} ${theme.spacing[3]}`,
				},
			},
			BODY: {
				TD: {
					'font-size': theme.fontSize.sm[0],
					'line-height': theme.fontSize.sm[1].lineHeight,
					padding: `${theme.spacing[1.5]} ${theme.spacing[3]}`,
				},
			},
		},
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['table.eolo-table']: {
			...BASE.TABLE,
			...options['.table'],

			['> thead']: {
				...BASE.TABLE.HEAD,
				...options['.eolo-table > thead'],

				['> tr']: {
					...BASE.TABLE.HEAD.TR,
					...options['.eolo-table > thead > tr'],
				},
				['> tr > th']: {
					...BASE.TABLE.HEAD.TH,
					...options['.eolo-table > thead > tr > th'],
				},
			},

			['> tbody']: {
				['> tr']: {
					...BASE.TABLE.BODY.TR,
					...options['.eolo-table > tbody > tr'],
				},
				['> tr > td']: {
					...BASE.TABLE.BODY.TD,
					...options['.eolo-table > tbody > tr > td'],
				},
			},

			['> tfoot']: { ...BASE.TABLE.FOOTER, ...options['.table > tfoot'] },
		},
	})

	addComponents({
		['table.eolo-table.eolo-table-bordered']: {
			['> tbody']: {
				['> tr']: {
					...BASE.TABLE.BORDERED.BODY.TR,
					...options['.eolo-table-bordered > tbody > tr'],
				},
			},
		},
	})

	addComponents({
		['table.eolo-table.eolo-table-compact']: {
			['> thead']: {
				['> tr > th']: {
					...BASE.TABLE.COMPACT.THEAD.TH,
					...options['.eolo-table-compact > thead > tr > th'],
				},
			},

			['> tbody']: {
				['> tr > td']: {
					...BASE.TABLE.COMPACT.BODY.TD,
					...options['.eolo-table-compact > tbody > tr > td'],
				},
			},
		},
	})
}

module.exports = { OPTIONS, COMPONENTS }
