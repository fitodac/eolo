import { useState } from 'react'

export const DemoCard = ({ title, children }) => {
	return (
		<div
			className="bg-white border border-slate-100 max-w-5xl mx-auto rounded-xl
			dark:bg-slate-900 dark:border-slate-800 dark:bg-opacity-60
			lg:mx-0"
		>
			<div className="flex justify-between items-center px-6 pt-5">
				<div className="text-slate-600 font-bold select-none dark:text-slate-200">
					{title}
				</div>
			</div>
			<div className="px-6 pb-8">{children}</div>
		</div>
	)
}

export const DemoCardDescription = ({ children }) => {
	return (
		<div className="text-sm font-light leading-relaxed mt-2 pb-8 break-words dark:text-slate-300">
			{children}
		</div>
	)
}

export const DemoCardCode = ({ children }) => {
	const [state, setState] = useState(false)

	return (
		<div className="bg-slate-950 px-6 pt-4 pb-5 -mx-6 mt-5 -mb-8 rounded-b-xl">
			<div className="flex justify-end">
				<button
					className="text-sm font-medium space-x-2 select-none"
					onClick={() => setState(!state)}
				>
					<span>{!state ? 'Show code' : 'Hide code'}</span>
					<i className={!state ? 'ri-arrow-down-line' : 'ri-arrow-up-line'} />
				</button>
			</div>

			{state && <div>{children}</div>}
		</div>
	)
}
