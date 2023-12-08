const theme = require('tailwindcss/defaultTheme')

const OPTIONS = {
	'.eolo-badge': {},
	'.eolo-dot-badge': {},
}

const BASE = {
	BADGE: {
		'border-width': theme.borderWidth.DEFAULT,
		'font-size': theme.fontSize.xs[0],
		'font-weight': theme.fontWeight.medium,
		'line-height': theme.fontSize.xs[1],
		'text-align': 'center',
		padding: `${theme.spacing.px} ${theme.spacing[1]} ${theme.spacing.px}`,
		'border-radius': theme.borderRadius.DEFAULT,
		'user-select': 'none',
	},

	DOT_BADGE: {
		color: 'transparent',
		'font-size': 0,
		width: theme.spacing[3],
		height: theme.spacing[3],
		right: `-${theme.spacing[0.5]}`,
		top: `-${theme.spacing[0.5]}`,
		position: 'absolute',
		overflow: 'hidden',
		'border-radius': theme.borderRadius.full,
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-badge']: { ...BASE.BADGE, ...options['.eolo-badge'] },
	})
	addComponents({
		['.eolo-dot-badge']: { ...BASE.DOT_BADGE, ...options['.eolo-dot-badge'] },
	})
}

module.exports = { OPTIONS, COMPONENTS }
