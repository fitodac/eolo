export const IconBoxWrapper = ({ title, children }) => {
	return (
		<div className="border border-slate-100 p-5 rounded-xl dark:border-slate-700">
			<div className="text-sm font-bold dark:text-slate-300">{title}</div>

			<div className="flex gap-x-8 mt-2">{children}</div>
		</div>
	)
}

export function IconBox({ type, children }) {
	return (
		<>
			<div className="space-y-2">
				{children}
				{type && (
					<p>
						<code>{type}</code>
					</p>
				)}
			</div>
		</>
	)
}
