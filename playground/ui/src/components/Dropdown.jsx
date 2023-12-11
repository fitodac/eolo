import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const Dropdown = () => {
	return (
		<SectionWrapper {...{ title: 'Dropdown', anchor: 'dropdown' }}>
			<div className="mt-6">
				<div className="eolo-dropdown">
					<input
						type="checkbox"
						className="eolo-dropdown-toggler"
						id="btnDropdown"
					/>

					<div className="eolo-btn-toggler">
						<label
							className="eolo-btn space-x-2 bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white"
							htmlFor="btnDropdown"
						>
							<span>More</span>
							<i className="ri-arrow-down-s-line" />
						</label>

						<div className="eolo-dropdown-nav w-40">
							<ul className="text-sm">
								<li>
									<a
										href="#"
										className="px-4 py-1 block select-none transition-all hover:bg-black/10 hover:text-primary dark:hover:bg-black/20"
									>
										View
									</a>
								</li>
								<li>
									<a
										href="#"
										className="px-4 py-1 block select-none transition-all hover:bg-black/10 hover:text-primary dark:hover:bg-black/20"
									>
										Details
									</a>
								</li>
								<li>
									<a
										href="#"
										className="px-4 py-1 block select-none transition-all hover:bg-black/10 hover:text-primary dark:hover:bg-black/20"
									>
										Share
									</a>
								</li>
							</ul>
						</div>
					</div>

					<label className="eolo-overlay" htmlFor="btnDropdown" />
				</div>
			</div>
		</SectionWrapper>
	)
}
