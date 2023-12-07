export const TableScrolleable = ({ className = '' }) => {
	return (
		<>
			<span className="text-slate-300 text-xs font-medium flex justify-end items-center mb-4 md:hidden">
				scroll to see more...
				<i className="ri-arrow-right-double-fill"></i>
			</span>

			<div className="w-full h-72 overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
				<table className={`eolo-table ${className}`}>
					<thead>
						<tr>
							<th>Package</th>
							<th>Invoice date</th>
							<th>Status</th>
							<th>
								<div className="text-right">Actions</div>
							</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>
								<span className="font-semibold">Free package</span>
								<br />
								<span>$287</span>
							</td>
							<td>Jan. 13, 2023</td>
							<td>
								<span className="badge bg-green-600 border-green-600">
									paid
								</span>
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
								<span className="font-semibold">Standard package</span>
								<br />
								<span>$530</span>
							</td>
							<td>Mar. 4, 2023</td>
							<td>
								<span className="badge bg-green-600 border-green-600">
									paid
								</span>
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
								<span className="font-semibold">Business package</span>
								<br />
								<span>$122</span>
							</td>
							<td>Jun. 22, 2023</td>
							<td>
								<span className="badge bg-red-700 border-red-700">unpaid</span>
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
								<span className="font-semibold">Basic package</span>
								<br />
								<span>$890</span>
							</td>
							<td>Nov. 28, 2023</td>
							<td>
								<span className="badge bg-yellow-600 border-yellow-600">
									pending
								</span>
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
								<span className="font-semibold">Free package</span>
								<br />
								<span>$287</span>
							</td>
							<td>Jan. 13, 2023</td>
							<td>
								<span className="badge bg-green-600 border-green-600">
									paid
								</span>
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
								<span className="font-semibold">Standard package</span>
								<br />
								<span>$530</span>
							</td>
							<td>Mar. 4, 2023</td>
							<td>
								<span className="badge bg-green-600 border-green-600">
									paid
								</span>
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
								<span className="font-semibold">Business package</span>
								<br />
								<span>$122</span>
							</td>
							<td>Jun. 22, 2023</td>
							<td>
								<span className="badge bg-red-700 border-red-700">unpaid</span>
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
								<span className="font-semibold">Basic package</span>
								<br />
								<span>$890</span>
							</td>
							<td>Nov. 28, 2023</td>
							<td>
								<span className="badge bg-yellow-600 border-yellow-600">
									pending
								</span>
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
