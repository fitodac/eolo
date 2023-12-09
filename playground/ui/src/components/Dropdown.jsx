export const Dropdown = () => {
	return (
		<section>
			<div className="font-bold">Dropdown</div>

			<div className="mt-3">
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
									<a href="#">View</a>
								</li>
								<li>
									<a href="#">Details</a>
								</li>
								<li>
									<a href="#">Share</a>
								</li>
							</ul>
						</div>
					</div>

					<label className="eolo-overlay" htmlFor="btnDropdown" />
				</div>
			</div>
		</section>
	)
}
