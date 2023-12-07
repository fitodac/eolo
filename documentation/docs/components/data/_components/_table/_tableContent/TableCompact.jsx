export const TableCompact = ({ className = '' }) => {
	return (
		<>
			<span className="text-slate-300 text-xs font-medium flex justify-end items-center mb-4 md:hidden">
				scroll to see more...
				<i className="ri-arrow-right-double-fill"></i>
			</span>

			<div className="w-full overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
				<table className={`eolo-table ${className}`}>
					<thead>
						<tr>
							<th>Package</th>
							<th>Invoice date</th>
							<th>Amount</th>
							<th>
								<div className="text-right">Actions</div>
							</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>
								<span className="font-medium">Free package</span>
							</td>
							<td>Jan. 13, 2023</td>
							<td>
								<span className="font-semibold">$287</span>
							</td>
							<td>
								<div className="text-end">
									<button className="btn btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
										Edit
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<span className="font-medium">Standard package</span>
							</td>
							<td>Mar. 4, 2023</td>
							<td>
								<span className="font-semibold">$530</span>
							</td>
							<td>
								<div className="text-end">
									<button className="btn btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
										Edit
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<span className="font-medium">Business package</span>
							</td>
							<td>Jun. 22, 2023</td>
							<td>
								<span className="font-semibold">$122</span>
							</td>
							<td>
								<div className="text-end">
									<button className="btn btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
										Edit
									</button>
								</div>
							</td>
						</tr>
						<tr>
							<td>
								<span className="font-medium">Basic package</span>
							</td>
							<td>Nov. 28, 2023</td>
							<td>
								<span className="font-semibold">$890</span>
							</td>
							<td>
								<div className="text-end">
									<button className="btn btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
										Edit
									</button>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	)
}
