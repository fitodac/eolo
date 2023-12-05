export const DemoCard = ({ title, children }) => {
	return (
		<div
			className="bg-white border border-slate-100 max-w-5xl mx-auto rounded-xl shadow-dark-100 shadow-md
			dark:bg-slate-700 dark:border-slate-700 dark:bg-opacity-60
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
		<div className="text-sm font-light leading-tight mt-2 pb-8 dark:text-slate-300">
			{children}
		</div>
	)
}
