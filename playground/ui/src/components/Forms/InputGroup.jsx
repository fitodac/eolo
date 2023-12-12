import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const InputGroup = () => {
	return (
		<SectionWrapper {...{ title: 'Input group', anchor: 'input-group' }}>
			<div className="max-w-4xl mt-6">
				<div className="grid grid-cols-2 gap-x-14 gap-y-6">
					<div>
						<div className="eolo-input-group">
							<input
								type="text"
								placeholder="Find your product..."
								className="eolo-input"
							/>
							<button className="eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
								Search
							</button>
						</div>
					</div>

					<div>
						<div class="eolo-input-group-inset">
							<input
								type="text"
								placeholder="somebody@gmail.com"
								class="eolo-input"
							/>
							<button class="eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
								Ok
							</button>
							<button class="eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
								Cancel
							</button>
						</div>
					</div>

					<div>
						<div className="eolo-input-group">
							<select className="eolo-input">
								<option>Select one city</option>
								<option value="new york">New York</option>
								<option value="london">London</option>
								<option value="paris">Paris</option>
								<option value="hong kong">Hong Kong</option>
								<option value="dubai">Dubai</option>
								<option value="tokyo">Tokyo</option>
							</select>
							<button className="eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
								Submit
							</button>
						</div>
					</div>

					<div>
						<div className="eolo-input-group-inset">
							<select className="eolo-input">
								<option>Select one city</option>
								<option value="new york">New York</option>
								<option value="london">London</option>
								<option value="paris">Paris</option>
								<option value="hong kong">Hong Kong</option>
								<option value="dubai">Dubai</option>
								<option value="tokyo">Tokyo</option>
							</select>
							<button className="eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
