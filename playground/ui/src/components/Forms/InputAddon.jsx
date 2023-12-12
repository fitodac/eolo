import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const InputAddon = () => {
	return (
		<SectionWrapper {...{ title: 'Input addon', anchor: 'input-addon' }}>
			<div className="max-w-4xl mt-6">
				<div className="grid grid-cols-2 gap-x-14 gap-y-6">
					<div>
						<div className="eolo-input-group">
							<i className="ri-instagram-line ri-2x text-primary" />
							<input
								type="text"
								placeholder="Instagram account"
								className="eolo-input"
							/>
							<button className="eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
								Follow
							</button>
						</div>
					</div>

					<div>
						<div className="eolo-input-group">
							<input
								type="text"
								placeholder="Change your password"
								className="eolo-input"
							/>
							<i className="ri-shield-user-line ri-2x text-primary" />
						</div>
					</div>

					<div>
						<div className="eolo-input-group">
							<input
								type="text"
								placeholder="email address"
								className="eolo-input"
							/>
							<i className="ri-at-line ri-2x" />
							<input
								type="text"
								placeholder="company name"
								className="eolo-input"
							/>
							<span>.com</span>
						</div>
					</div>
					<div>
						<div>
							<div className="eolo-input-group-inset">
								<input
									type="text"
									placeholder="Search for happiness"
									className="eolo-input"
								/>
								<i className="ri-search-line ri-2x text-primary" />
							</div>
						</div>
					</div>

					<div>
						<div className="eolo-input-group-inset">
							<i className="ri-bit-coin-line ri-xl opacity-60" />
							<input
								type="text"
								placeholder="BTC to USD"
								className="eolo-input"
							/>
							<button className="eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
								Calculate
							</button>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
