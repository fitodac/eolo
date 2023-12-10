'use client'
import { useState } from 'react'
import Link from 'next/link'

const LinkItem = ({ anchor, text }) => {
	return (
		<Link
			href={`#${anchor}`}
			className="text-sm py-1 px-2 select-none transition-all rounded-md hover:bg-primary hover:text-white"
		>
			{text}
		</Link>
	)
}

export const Control = () => {
	const [blueprint, setBlueprint] = useState(false)

	return (
		<>
			<div className="bg-white w-96 right-6 top-16 fixed z-20 rounded-lg shadow-md dark:bg-slate-900">
				<div className="space-y-6 divide-y p-5">
					<section>
						<div className="text-sm font-semibold">Sections</div>

						<div className="h-40 mt-3 scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100 dark:scrollbar-thumb-white/30 dark:scrollbar-track-black/30">
							<div className="grid">
								<LinkItem {...{ anchor: 'typography', text: 'Typography' }} />
								<LinkItem {...{ anchor: 'buttons', text: 'Buttons' }} />
								<LinkItem {...{ anchor: 'dropdown', text: 'Dropdown' }} />
								<LinkItem
									{...{ anchor: 'button-group', text: 'Button group' }}
								/>
								<LinkItem {...{ anchor: 'input', text: 'Input' }} />
								<LinkItem {...{ anchor: 'input-group', text: 'Input group' }} />
								<LinkItem {...{ anchor: 'checkbox', text: 'Checkbox' }} />
								<LinkItem {...{ anchor: 'radio', text: 'Radio buttons' }} />
								<LinkItem {...{ anchor: 'toggler', text: 'Toggler' }} />
								<LinkItem {...{ anchor: 'range', text: 'Range' }} />
								<LinkItem {...{ anchor: 'badge', text: 'Badge' }} />
								<LinkItem {...{ anchor: 'avatar', text: 'Avatar' }} />
								<LinkItem {...{ anchor: 'list-group', text: 'List group' }} />
								<LinkItem {...{ anchor: 'tabs', text: 'Tabs' }} />
								<LinkItem {...{ anchor: 'collapsible', text: 'Collapsible' }} />
								<LinkItem {...{ anchor: 'table', text: 'Table' }} />
								<LinkItem {...{ anchor: 'spinner', text: 'Spinner' }} />
								<LinkItem {...{ anchor: 'modal', text: 'Modal' }} />
							</div>
						</div>
					</section>

					<section>
						<div className="text-sm font-semibold mt-6">
							Background blueprint
						</div>

						<div className="mt-3">
							<label className="eolo-toggler">
								<input
									type="checkbox"
									onChange={(e) => {
										setBlueprint(e.target.checked ? true : false)
									}}
								/>
								<span />
							</label>
						</div>
					</section>
				</div>
			</div>

			{blueprint && (
				<style>
					{`#wrapper{
							background-image: url('/blueprint-bg.svg');
							background-size: 1rem;
						}`}
				</style>
			)}
		</>
	)
}
