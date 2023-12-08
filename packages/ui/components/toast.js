const theme = require('tailwindcss/defaultTheme')


const OPTIONS = {
	'.eolo-toast': {},
	'&:not([class*=top-]):not([class*=left-]):not([class*=right-])': {},
	'input[type=checkbox]:checked + .eolo-toast': {},
	'input[type=radio]:checked + .eolo-toast': {}
}


const BASE = {
	TOAST: {
		'border-width': '1px',
		'font-size': theme.fontSize.sm,
		'font-weight': theme.fontWeight.normal,
		'max-width': '300px',
		'padding': `${theme.spacing[2]} ${theme.spacing[3]}`,
		'position': 'fixed',
		'opacity': 0,
		'visibility': 'hidden',
		'border-radius': theme.borderRadius.md,
		'will-change': 'opacity',
		'transition': '.2s ease-in-out',
		'pointer-events': 'none',
		'z-index': 99,

		POSITION: {
			'right': theme.spacing[2],
			'bottom': theme.spacing[2],
		}
	},


	CHECKED: {
		TOAST:{
			'opacity': 1,
			'visibility': 'visible',
			'pointer-events': 'auto'
		}
	}
}


const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-toast']: { 
			...BASE.TOAST,
			...options['.eolo-toast'],

			['&:not([class*=top-]):not([class*=left-]):not([class*=right-])']: {
				...BASE.TOAST.POSITION,
				...options['&:not([class*=top-]):not([class*=left-]):not([class*=right-])']
			}
		}
	})

	addComponents({
		['input[type=checkbox]:checked + .eolo-toast']: { ...BASE.CHECKED.TOAST, ...options['input[type=checkbox]:checked + .eolo-toast'] }
	})

	addComponents({
		['input[type=radio]:checked + .eolo-toast']: { ...BASE.CHECKED.TOAST, ...options['input[type=radio]:checked + .eolo-toast'] }
	})
}




module.exports = { OPTIONS, COMPONENTS }