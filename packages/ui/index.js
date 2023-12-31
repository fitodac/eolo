/**
 * EOLO - TailwindCSS UI Kit
 */
const plugin = require('tailwindcss/plugin')

const base = require('./base/base')
const content = require('./components/content')
const button = require('./components/button')
const dropdown = require('./components/dropdown')
const form_input = require('./components/form-input')
const form_select = require('./components/form-select')
const form_checkbox = require('./components/form-checkbox')
const form_radiobutton = require('./components/form-radiobutton')
const toggler = require('./components/toggler')
const scroll_bar_base = require('./base/scroll-bar.js')
const scroll_bar_utilities = require('./utilities/scroll-bar.js')
const avatar = require('./components/avatar')
const table = require('./components/table')
const list_group = require('./components/list-group')
const badge = require('./components/badge')
const tabs = require('./components/tabs')
const spinner = require('./components/spinner')
const modal = require('./components/modal')
const overlay = require('./components/overlay')
const collapsible = require('./components/collapsible')

module.exports = plugin.withOptions(
	(
		options = {
			...content.OPTIONS,
			...button.OPTIONS,
			...dropdown.OPTIONS,
			...form_input.OPTIONS,
			...form_select.OPTIONS,
			...form_checkbox.OPTIONS,
			...form_radiobutton.OPTIONS,
			...toggler.OPTIONS,
			...avatar.OPTIONS,
			...table.OPTIONS,
			...list_group.OPTIONS,
			...badge.OPTIONS,
			...tabs.OPTIONS,
			...spinner.OPTIONS,
			...modal.OPTIONS,
			...overlay.OPTIONS,
			...collapsible.OPTIONS,
		}
	) => {
		return function ({
			addComponents,
			addBase,
			addUtilities,
			matchUtilities,
			theme,
		}) {
			base.BASE(addBase)
			button.COMPONENTS(addComponents, options)
			dropdown.COMPONENTS(addComponents, options)
			content.COMPONENTS(addComponents, options)
			form_input.COMPONENTS(addComponents, options)
			form_select.COMPONENTS(addComponents, options)
			form_checkbox.COMPONENTS(addComponents, options)
			form_radiobutton.COMPONENTS(addComponents, options)
			toggler.COMPONENTS(addComponents, options)
			scroll_bar_base.STYLES(addBase)
			scroll_bar_utilities.SCROLLBAR_SIZE_UTILITIES(addUtilities)
			scroll_bar_utilities.ADD_COLOR_UTILITIES({ matchUtilities, theme })
			avatar.COMPONENTS(addComponents, options)
			table.COMPONENTS(addComponents, options)
			list_group.COMPONENTS(addComponents, options)
			badge.COMPONENTS(addComponents, options)
			tabs.COMPONENTS(addComponents, options)
			spinner.COMPONENTS(addComponents, options)
			modal.COMPONENTS(addComponents, options)
			overlay.COMPONENTS(addComponents, options)
			collapsible.COMPONENTS(addComponents, options)

			if (options.nocompatible) {
				scroll_bar_utilities.ADD_ROUNDED_UTILITIES({ matchUtilities, theme })
				scroll_bar_utilities.ADD_SIZE_UTILITIES({ matchUtilities, theme })
			}
		}
	},
	() => {
		return {
			theme: {
				extend: {
					colors: base.COLORS,
					fontSize: { xxs: '9px' },
				},
			},
		}
	}
)

exports.printMsg = function () {
	console.log('This is a message from the npm package')
}
