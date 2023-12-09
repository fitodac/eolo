export const Table = () => {
	return (
		<section>
			<div className="font-bold">Table</div>

			<div className="max-w-3xl space-y-12 mt-8">
				<div className="w-full h-72 overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
					<table className="eolo-table eolo-table-bordered">
						<thead>
							<tr>
								<th>
									<div>Package</div>
								</th>
								<th>
									<div>Invoice date</div>
								</th>
								<th>
									<div>Status</div>
								</th>
								<th>
									<div className="text-end">Actions</div>
								</th>
							</tr>
						</thead>
						<TableContent />
					</table>
				</div>

				<div className="w-full h-72 overflow-x-auto scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
					<table className="eolo-table eolo-table-striped eolo-table-hoverable">
						<thead>
							<tr>
								<th>
									<div>Package</div>
								</th>
								<th>
									<div>Invoice date</div>
								</th>
								<th>
									<div>Status</div>
								</th>
								<th>
									<div className="text-end">Actions</div>
								</th>
							</tr>
						</thead>
						<TableContent />
					</table>
				</div>
			</div>
		</section>
	)
}

function TableContent() {
	return (
		<tbody>
			<tr>
				<td>
					<span className="font-semibold block">Free package</span>
					<span>$287</span>
				</td>
				<td>Jan. 13, 2023</td>
				<td>
					<span className="eolo-badge bg-green-600 border-green-600">paid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Standard package</span>
					<span>$530</span>
				</td>
				<td>Mar. 4, 2023</td>
				<td>
					<span className="eolo-badge bg-green-600 border-green-600">paid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Business package</span>
					<span>$122</span>
				</td>
				<td>Jun. 22, 2023</td>
				<td>
					<span className="eolo-badge bg-red-700 border-red-700">unpaid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Basic package</span>
					<span>$890</span>
				</td>
				<td>Nov. 28, 2023</td>
				<td>
					<span className="eolo-badge bg-yellow-600 border-yellow-600">
						pending
					</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Free package</span>
					<span>$287</span>
				</td>
				<td>Jan. 13, 2023</td>
				<td>
					<span className="eolo-badge bg-green-600 border-green-600">paid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Standard package</span>
					<span>$530</span>
				</td>
				<td>Mar. 4, 2023</td>
				<td>
					<span className="eolo-badge bg-green-600 border-green-600">paid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Business package</span>
					<span>$122</span>
				</td>
				<td>Jun. 22, 2023</td>
				<td>
					<span className="eolo-badge bg-red-700 border-red-700">unpaid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Basic package</span>
					<span>$890</span>
				</td>
				<td>Nov. 28, 2023</td>
				<td>
					<span className="eolo-badge bg-yellow-600 border-yellow-600">
						pending
					</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Free package</span>
					<span>$287</span>
				</td>
				<td>Jan. 13, 2023</td>
				<td>
					<span className="eolo-badge bg-green-600 border-green-600">paid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Standard package</span>
					<span>$530</span>
				</td>
				<td>Mar. 4, 2023</td>
				<td>
					<span className="eolo-badge bg-green-600 border-green-600">paid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Business package</span>
					<span>$122</span>
				</td>
				<td>Jun. 22, 2023</td>
				<td>
					<span className="eolo-badge bg-red-700 border-red-700">unpaid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Basic package</span>
					<span>$890</span>
				</td>
				<td>Nov. 28, 2023</td>
				<td>
					<span className="eolo-badge bg-yellow-600 border-yellow-600">
						pending
					</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Free package</span>
					<span>$287</span>
				</td>
				<td>Jan. 13, 2023</td>
				<td>
					<span className="eolo-badge bg-green-600 border-green-600">paid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Standard package</span>
					<span>$530</span>
				</td>
				<td>Mar. 4, 2023</td>
				<td>
					<span className="eolo-badge bg-green-600 border-green-600">paid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Business package</span>
					<span>$122</span>
				</td>
				<td>Jun. 22, 2023</td>
				<td>
					<span className="eolo-badge bg-red-700 border-red-700">unpaid</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
			<tr>
				<td>
					<span className="font-semibold block">Basic package</span>
					<span>$890</span>
				</td>
				<td>Nov. 28, 2023</td>
				<td>
					<span className="eolo-badge bg-yellow-600 border-yellow-600">
						pending
					</span>
				</td>
				<td>
					<div className="text-end">
						<button className="eolo-btn eolo-btn-sm bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
							Edit
						</button>
					</div>
				</td>
			</tr>
		</tbody>
	)
}
