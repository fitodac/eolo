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
								placeholder="somebody@gmail.com"
								className="eolo-input"
							/>
							<button
								className="eolo-btn bg-primary border-primary 
                hover:bg-primary-600 hover:border-primary-600
                dark:bg-primary-400 dark:border-primary-400 dark:text-white
                hover:dark:bg-primary-600 hover:dark:border-primary-600"
							>
								Ok
							</button>
							<button
								className="eolo-btn bg-primary border-primary 
                hover:bg-primary-600 hover:border-primary-600
                dark:bg-primary-400 dark:border-primary-400 dark:text-white
                hover:dark:bg-primary-600 hover:dark:border-primary-600"
							>
								Cancel
							</button>
						</div>
					</div>

					<div>
						<div className="eolo-input-group">
							<input
								type="text"
								placeholder="Find your product..."
								className="eolo-input"
							/>
							<button
								className="eolo-btn eolo-btn-icon bg-transparent border-transparent text-slate-500 
                dark:bg-transparent dark:border-transparent
                hover:text-primary"
							>
								<i className="ri-search-line"></i>
							</button>
						</div>
					</div>

					<div>
						<div className="eolo-input-group">
							<input type="text" placeholder="Name" className="eolo-input" />
							<div className="bg-slate-300 w-px h-full" />
							<input
								type="text"
								placeholder="Lastname"
								className="eolo-input ml-2"
							/>
							<button className="eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
