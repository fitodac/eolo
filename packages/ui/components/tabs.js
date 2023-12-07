const theme = require('tailwindcss/defaultTheme')

const OPTIONS = {
	'.eolo-tabs .eolo-tabs-nav': {},
	'.eolo-tabs .eolo-tabs-nav::-webkit-scrollbar': {},
	'.eolo-tabs .eolo-tabs-nav .eolo-tab-item': {},
	'.eolo-tabs > input[type=radio]': {},
	'.eolo-tabs .eolo-tabs-content': {},
	'.eolo-tabs .eolo-tabs-content .eolo-tab-body': {},
	'.eolo-tabs.eolo-tabs-vertical': {},
	'.eolo-tabs-vertical': {},
	'.eolo-tabs-vertical .eolo-tabs-nav .eolo-tab-item': {},
	'.eolo-tabs-vertical .eolo-tabs-content': {},
	'.eolo-tabs-vertical .eolo-tabs-content .eolo-tab-body': {},
	'.eolo-tabs-vertical input[type=radio] + .eolo-tabs-nav .eolo-tab-item': {},
	'.eolo-tabs-vertical .eolo-tabs-nav + .eolo-tab-content': {},
	'.eolo-tabs-vertical .eolo-tabs-content + .eolo-tabs-nav .eolo-tab-item': {},
	'.eolo-tabs-vertical input[type=radio] + .eolo-tabs-content': {},
}

const BASE = {
	TABS: {
		NAV: {
			'white-space': 'nowrap',
			display: 'block',
			position: 'relative',
			'overflow-x': 'auto',
			'z-index': theme.zIndex[10],
			'-ms-overflow-style': 'none' /* IE and Edge */,
			'scrollbar-width': 'none',

			SCROLLBAR: { display: 'none' },
			ITEM: {
				'border-bottom-width': '1px',
				'font-size': theme.fontSize.sm,
				'font-weight': theme.fontWeight.normal,
				padding: theme.spacing[4],
				display: 'inline-flex',
				'align-items': 'center',
				position: 'relative',
				'user-select': 'none',
				cursor: 'pointer',
			},
		},
		RADIO: {
			position: 'absolute',
			display: 'none',
		},

		CONTENT: {
			'border-top-width': '1px',
			top: '-1px',
			position: 'relative',

			BODY: {
				padding: theme.spacing[4],
				display: 'none',
			},
		},

		VERTICAL: {
			display: 'grid',
			'grid-template-columns': theme.gridTemplateColumns[4],
			NAV: {
				ITEM: {
					'border-bottom': 'none',
					padding: `${theme.spacing[3]} ${theme.spacing[4]}`,
					display: 'flex',
				},
			},
			NAV_TAB_CONTENT: {
				'border-left-width': '1px',
				left: '-1px',
			},
			CONTENT: {
				'border-top': 'none',
				top: '0',
				'grid-column': theme.gridColumn['span-3'],

				BODY: {
					padding: `0 ${theme.spacing[7]} ${theme.spacing[7]}`,
				},
				NAV: {
					ITEM: { 'border-left-width': '1px' },
				},
			},
			RADIO: {
				NAV: {
					ITEM: { 'border-right-width': '1px' },
				},
				CONTENT: {
					'border-right-width': '1px',
					right: '-1px',
				},
			},
		},
	},
}

const COMPONENTS = (addComponents, options) => {
	addComponents({
		['.eolo-tabs']: {
			['.eolo-tabs-nav']: {
				...BASE.TABS.NAV,
				...options['.eolo-tabs .eolo-tabs-nav'],

				['&::-webkit-scrollbar']: {
					...BASE.TABS.NAV.SCROLLBAR,
					...options['.eolo-tabs .eolo-tabs-nav::-webkit-scrollbar'],
				},

				['.eolo-tab-item']: {
					...BASE.TABS.NAV.ITEM,
					...options['.eolo-tabs .eolo-tabs-nav .eolo-tab-item'],
				},
			},

			['> input[type=radio]']: {
				...BASE.TABS.RADIO,
				...options['.eolo-tabs > input[type=radio]'],
			},

			['.eolo-tabs-content']: {
				...BASE.TABS.CONTENT,
				...options['.eolo-tabs .eolo-tabs-content'],

				['.eolo-tab-body']: {
					...BASE.TABS.CONTENT.BODY,
					...options['.eolo-tabs .eolo-tabs-content .eolo-tab-body'],
				},
			},

			['&.eolo-tabs-vertical']: {
				...BASE.TABS.VERTICAL,
				...options['.eolo-tabs-vertical'],

				['.eolo-tabs-nav']: {
					['.eolo-tab-item']: {
						...BASE.TABS.VERTICAL.NAV.ITEM,
						...options['.eolo-tabs-vertical .eolo-tabs-nav .eolo-tab-item'],
					},
				},

				['.eolo-tabs-content']: {
					...BASE.TABS.VERTICAL.CONTENT,
					...options['.eolo-tabs-vertical .eolo-tabs-content'],

					['.eolo-tab-body']: {
						...BASE.TABS.VERTICAL.CONTENT.BODY,
						...options['.eolo-tabs-vertical .eolo-tabs-content .eolo-tab-body'],
					},
				},

				// Left
				['input[type=radio] + .eolo-tabs-nav .eolo-tab-item']: {
					...BASE.TABS.VERTICAL.RADIO.NAV.ITEM,
					...options[
						'.eolo-tabs-vertical input[type=radio] + .eolo-tabs-nav .eolo-tab-item'
					],
				},
				['.eolo-tabs-nav + .eolo-tab-content']: {
					...BASE.TABS.VERTICAL.NAV_TAB_CONTENT,
					...options['.eolo-tabs-vertical .eolo-tabs-nav + .eolo-tab-content'],
				},

				// Right
				['.eolo-tabs-content + .eolo-tabs-nav .eolo-tab-item']: {
					...BASE.TABS.VERTICAL.CONTENT.NAV.ITEM,
					...options[
						'.eolo-tabs-vertical .eolo-tabs-content + .eolo-tabs-nav .eolo-tab-item'
					],
				},
				['input[type=radio] + .eolo-tabs-content']: {
					...BASE.TABS.VERTICAL.RADIO.CONTENT,
					...options[
						'.eolo-tabs-vertical input[type=radio] + .eolo-tabs-content'
					],
				},
			},
		},
	})

	for (let i = 1; i < 21; i++) {
		addComponents({
			[`.eolo-tabs > input[type=radio]:checked:nth-child(${i}) ~ .eolo-tabs-content .eolo-tab-body:nth-child(${i})`]:
				{ display: 'block' },
		})
	}
}

module.exports = { OPTIONS, COMPONENTS }
