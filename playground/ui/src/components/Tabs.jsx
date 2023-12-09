export const Tabs = () => {
	return (
		<section>
			<div className="font-bold">Tabs</div>

			<div className="max-w-6xl mt-3">
				<div className="grid grid-cols-7 gap-10">
					<div className="col-span-3">
						<div className="eolo-tabs">
							<input id="t1" type="radio" name="tabs1" defaultChecked />
							<input id="t2" type="radio" name="tabs1" />
							<input id="t3" type="radio" name="tabs1" />

							<nav className="eolo-tabs-nav">
								<label htmlFor="t1" className="eolo-tab-item">
									<i className="ri-user-3-line ri-lg" />
									<span>Profile</span>
								</label>
								<label htmlFor="t2" className="eolo-tab-item">
									<i className="ri-chat-smile-2-line ri-lg" />
									<span>Account</span>
								</label>
								<label htmlFor="t3" className="eolo-tab-item">
									<i className="ri-notification-2-line ri-lg" />
									<span>Notifications</span>
								</label>
							</nav>

							<div className="eolo-tabs-content">
								<div className="eolo-tab-body">
									<h4 className="text-xl font-medium">Profile</h4>
									<div className="mt-3 space-y-3">
										<p>
											Est sed vel ratione neque quos laboriosam. Numquam
											incidunt natus asperiores laborum delectus error iste.
											Exercitationem suscipit repellat nam voluptates.
										</p>
										<p>
											Architecto nostrum at nisi doloremque magnam blanditiis
											doloremque. Eligendi repudiandae voluptate dignissimos
											minima ad aspernatur provident tempore rem. Nulla
											exercitationem hic dolorem incidunt soluta hic maxime.
										</p>
									</div>
								</div>

								<div className="eolo-tab-body">
									<h4 className="text-xl font-medium">Account</h4>
									<div className="mt-3 space-y-3">
										<p>
											Eligendi deleniti blanditiis. Culpa et similique minima
											autem facilis voluptates molestiae corporis. Quia
											molestias provident quisquam rerum minima culpa at.
										</p>
										<p>
											Facere exercitationem eos eveniet. Quibusdam
											exercitationem quas aut saepe vel amet ipsam deleniti
											aspernatur. Veniam repellendus facilis voluptatum at vero
											sit delectus tempora.
										</p>
									</div>
								</div>

								<div className="eolo-tab-body">
									<h4 className="text-xl font-medium">Notifications</h4>
									<div className="mt-3 space-y-3">
										<p>
											Cumque non eaque blanditiis repellat perferendis nihil
											dolorem. Quae beatae asperiores perferendis alias nam
											libero suscipit optio repellat. Natus labore alias tenetur
											illum iusto possimus nihil.
										</p>
										<p>
											Temporibus officia voluptates sint vitae consequatur
											doloremque nostrum earum cumque. Non hic alias amet nam
											quam voluptatum ipsam eius voluptatum. Cupiditate voluptas
											voluptatum temporibus tempore unde incidunt.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="col-span-4">
						<div className="eolo-tabs eolo-tabs-vertical">
							<input id="t4" type="radio" name="tabs2" defaultChecked />
							<input id="t5" type="radio" name="tabs2" />
							<input id="t6" type="radio" name="tabs2" />

							<nav className="eolo-tabs-nav">
								<label htmlFor="t4" className="eolo-tab-item">
									Profile
								</label>
								<label htmlFor="t5" className="eolo-tab-item">
									Account
								</label>
								<label htmlFor="t6" className="eolo-tab-item">
									Notifications
								</label>
							</nav>

							<div className="eolo-tabs-content">
								<div className="eolo-tab-body">
									<h4 className="text-xl font-medium">Profile</h4>
									<div className="mt-3 space-y-3">
										<p>
											Est sed vel ratione neque quos laboriosam. Numquam
											incidunt natus asperiores laborum delectus error iste.
											Exercitationem suscipit repellat nam voluptates.
										</p>
										<p>
											Architecto nostrum at nisi doloremque magnam blanditiis
											doloremque. Eligendi repudiandae voluptate dignissimos
											minima ad aspernatur provident tempore rem. Nulla
											exercitationem hic dolorem incidunt soluta hic maxime.
										</p>
									</div>
								</div>

								<div className="eolo-tab-body">
									<h4 className="text-xl font-medium">Account</h4>
									<div className="mt-3 space-y-3">
										<p>
											Eligendi deleniti blanditiis. Culpa et similique minima
											autem facilis voluptates molestiae corporis. Quia
											molestias provident quisquam rerum minima culpa at.
										</p>
										<p>
											Facere exercitationem eos eveniet. Quibusdam
											exercitationem quas aut saepe vel amet ipsam deleniti
											aspernatur. Veniam repellendus facilis voluptatum at vero
											sit delectus tempora.
										</p>
									</div>
								</div>

								<div className="eolo-tab-body">
									<h4 className="text-xl font-medium">Notifications</h4>
									<div className="mt-3 space-y-3">
										<p>
											Cumque non eaque blanditiis repellat perferendis nihil
											dolorem. Quae beatae asperiores perferendis alias nam
											libero suscipit optio repellat. Natus labore alias tenetur
											illum iusto possimus nihil.
										</p>
										<p>
											Temporibus officia voluptates sint vitae consequatur
											doloremque nostrum earum cumque. Non hic alias amet nam
											quam voluptatum ipsam eius voluptatum. Cupiditate voluptas
											voluptatum temporibus tempore unde incidunt.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
