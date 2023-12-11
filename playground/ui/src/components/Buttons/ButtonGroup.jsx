import { SectionWrapper } from '@/app/_components/SectionWrapper'

const btnClass = {
	primary: `eolo-btn bg-primary border-primary 
				hover:bg-primary-600 hover:border-primary-600 
				dark:bg-primary dark:border-primary dark:text-white 
				dark:hover:bg-primary-600 dark:hover:border-primary-600`,
	toggler: `eolo-btn bg-primary border-primary 
						peer-checked:bg-primary-700 peer-checked:border-primary-700
						dark:bg-primary dark:border-primary dark:text-white
						dark:peer-checked:bg-primary-700 dark:peer-checked:border-primary-700`,
}

export const ButtonGroup = () => {
	return (
		<SectionWrapper {...{ title: 'Button Group', anchor: 'button-group' }}>
			<div className="max-w-4xl space-y-8 mt-6 divide-y">
				<div className="flex justify-start gap-x-8">
					<div className="space-y-6">
						<div className="eolo-btn-group-sm">
							<button className="eolo-btn">One</button>
							<button className="eolo-btn">Two</button>
							<button className="eolo-btn">Three</button>
						</div>

						<div className="eolo-btn-group-sm">
							<button className={btnClass.primary}>One</button>
							<button className={btnClass.primary}>Two</button>
							<button className={btnClass.primary}>Three</button>
						</div>
					</div>

					<div className="space-y-6">
						<div className="eolo-btn-group">
							<button className="eolo-btn">One</button>
							<button className="eolo-btn">Two</button>
							<button className="eolo-btn">Three</button>
						</div>

						<div className="eolo-btn-group">
							<button className={btnClass.primary}>One</button>
							<button className={btnClass.primary}>Two</button>
							<button className={btnClass.primary}>Three</button>
						</div>
					</div>

					<div className="space-y-6">
						<div className="eolo-btn-group-lg">
							<button className="eolo-btn">One</button>
							<button className="eolo-btn">Two</button>
							<button className="eolo-btn">Three</button>
						</div>

						<div className="eolo-btn-group-lg">
							<button className={btnClass.primary}>One</button>
							<button className={btnClass.primary}>Two</button>
							<button className={btnClass.primary}>Three</button>
						</div>
					</div>
				</div>

				<div className="pt-5">
					<span className="text-sm font-semibold">Checkbox</span>

					<div className="flex gap-x-8 mt-3">
						<div className="eolo-btn-group-sm">
							<label>
								<input type="checkbox" className="peer" />
								<span className={btnClass.toggler}>One</span>
							</label>
							<label>
								<input type="checkbox" className="peer" />
								<span className={btnClass.toggler}>Two</span>
							</label>
							<label>
								<input type="checkbox" className="peer" />
								<span className={btnClass.toggler}>Three</span>
							</label>
						</div>

						<div className="eolo-btn-group">
							<label>
								<input type="checkbox" className="peer" />
								<span className={btnClass.toggler}>One</span>
							</label>
							<label>
								<input type="checkbox" className="peer" />
								<span className={btnClass.toggler}>Two</span>
							</label>
							<label>
								<input type="checkbox" className="peer" />
								<span className={btnClass.toggler}>Three</span>
							</label>
						</div>

						<div className="eolo-btn-group-lg">
							<label>
								<input type="checkbox" className="peer" />
								<span className={btnClass.toggler}>One</span>
							</label>
							<label>
								<input type="checkbox" className="peer" />
								<span className={btnClass.toggler}>Two</span>
							</label>
							<label>
								<input type="checkbox" className="peer" />
								<span className={btnClass.toggler}>Three</span>
							</label>
						</div>
					</div>
				</div>

				<div className="pt-5">
					<span className="text-sm font-semibold">Radio button</span>

					<div className="flex gap-x-8 mt-3">
						<div className="eolo-btn-group-sm">
							<label>
								<input type="radio" name="btnGroupSM" className="peer" />
								<span className={btnClass.toggler}>One</span>
							</label>
							<label>
								<input type="radio" name="btnGroupSM" className="peer" />
								<span className={btnClass.toggler}>Two</span>
							</label>
							<label>
								<input type="radio" name="btnGroupSM" className="peer" />
								<span className={btnClass.toggler}>Three</span>
							</label>
						</div>

						<div className="eolo-btn-group">
							<label>
								<input type="radio" name="btnGroup" className="peer" />
								<span className={btnClass.toggler}>One</span>
							</label>
							<label>
								<input type="radio" name="btnGroup" className="peer" />
								<span className={btnClass.toggler}>Two</span>
							</label>
							<label>
								<input type="radio" name="btnGroup" className="peer" />
								<span className={btnClass.toggler}>Three</span>
							</label>
						</div>

						<div className="eolo-btn-group-lg">
							<label>
								<input type="radio" name="btnGroupLG" className="peer" />
								<span className={btnClass.toggler}>One</span>
							</label>
							<label>
								<input type="radio" name="btnGroupLG" className="peer" />
								<span className={btnClass.toggler}>Two</span>
							</label>
							<label>
								<input type="radio" name="btnGroupLG" className="peer" />
								<span className={btnClass.toggler}>Three</span>
							</label>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
