const theme = require('tailwindcss/defaultTheme')

const OPTIONS = {
	'.eolo-content h1': {},
	'.eolo-content h2': {},
	'.eolo-content h3': {},
	'.eolo-content h4': {},
	'.eolo-content h5': {},
	'.eolo-content p + p': {},
	'.eolo-content ul': {},
	'.eolo-content ol': {},
	'.eolo-content code': {},
	'.eolo-content pre': {},
}

const BASE = {
	H1: { fontSize: theme.fontSize['5xl'], lineHeight: 1 },
	H2: { fontSize: theme.fontSize['4xl'], lineHeight: 1 },
	H3: { fontSize: theme.fontSize['3xl'], lineHeight: 1 },
	H4: { fontSize: theme.fontSize['2xl'], lineHeight: 1 },
	H5: { fontWeight: theme.fontWeight.bold },

	P_P: { marginTop: theme.spacing[8] },

	UL: { 
		listStyleType: 'disc',
		'padding-left': '1.1rem'
	},
	OL: { 
		listStyleType: 'decimal',
		'padding-left': '1.1rem'
	},

	CODE: {
		'font-size': theme.fontSize.sm[0],
		'line-height': 1,
		'letter-spacing': theme.letterSpacing.tight,
	},

	PRE: {
		'font-size': theme.fontSize.sm[0],
		'letter-spacing': theme.letterSpacing.tight,
		'white-space': 'pre',
		padding: `${theme.spacing[3]} ${theme.spacing[5]}`,
		'border-radius': theme.borderRadius.lg,
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-content']: {
			['h1']: { ...BASE.H1, ...options['.eolo-content h1'] },
			['h2']: { ...BASE.H2, ...options['.eolo-content h2'] },
			['h3']: { ...BASE.H3, ...options['.eolo-content h3'] },
			['h4']: { ...BASE.H4, ...options['.eolo-content h4'] },
			['h5']: { ...BASE.H5, ...options['.eolo-content h5'] },
			['p + p']: { ...BASE.P_P, ...options['.eolo-content p+p'] },
			['ul']: { ...BASE.UL, ...options['.eolo-content ul'] },
			['ol']: { ...BASE.OL, ...options['.eolo-content ol'] },
			['code']: { ...BASE.CODE, ...options['.eolo-content code'] },
			['pre']: { ...BASE.PRE, ...options['.eolo-content pre'] },
		},
	})
}

module.exports = { OPTIONS, COMPONENTS }
