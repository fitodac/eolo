export const DropdownNav = ({ className = '' }) => {
	return (
		<div className={`eolo-dropdown-nav w-40 ${className}`}>
			<ul className="text-sm">
				<li>
					<a href="#" className="px-4 py-1">
						View
					</a>
				</li>
				<li>
					<a href="#" className="px-4 py-1">
						Details
					</a>
				</li>
				<li>
					<a href="#" className="px-4 py-1">
						Share
					</a>
				</li>
			</ul>

			<ul className="text-sm border-t border-black/10 dark:border-black/70">
				<li>
					<a href="#" className="px-4 py-1">
						Unpublish
					</a>
				</li>
				<li>
					<a href="#" className="px-4 py-1">
						Archive
					</a>
				</li>
				<li>
					<a href="#" className="px-4 py-1">
						Delete
					</a>
				</li>
			</ul>
		</div>
	)
}
