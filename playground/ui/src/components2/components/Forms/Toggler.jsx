import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const Toggler = () => {
	return (
		<SectionWrapper {...{ title: 'Toggler', anchor: 'toggler' }}>
			<div className="max-w-md space-y-6 mt-5">
				<div className="flex items-center gap-x-8">
					<span className="text-sm font-semibold w-14">Checkbox</span>

					<div class="inline-flex items-center gap-x-2">
						<label class="eolo-toggler">
							<input type="checkbox" />
							<span></span>
						</label>
						<span>Like</span>
					</div>

					<div class="inline-flex items-center gap-x-2">
						<span>Yes</span>
						<label class="eolo-toggler">
							<input type="checkbox" />
							<span></span>
						</label>
						<span>No</span>
					</div>

					<div class="inline-flex items-center gap-x-2">
						<label class="eolo-toggler">
							<input type="checkbox" disabled />
							<span></span>
						</label>
						<span>Disabled</span>
					</div>
				</div>

				<div className="flex items-center gap-x-8">
					<span className="text-sm font-semibold w-14">Radio</span>

					<div class="inline-flex items-center gap-x-2">
						<label class="eolo-toggler">
							<input type="radio" name="radioToggler1" id="radioToggler1_1" />
							<span />
						</label>
						<label htmlFor="radioToggler1_1">New York</label>
					</div>

					<div class="inline-flex items-center gap-x-2">
						<label class="eolo-toggler">
							<input type="radio" name="radioToggler1" id="radioToggler1_2" />
							<span />
						</label>
						<label htmlFor="radioToggler1_2">Paris</label>
					</div>

					<div class="inline-flex items-center gap-x-2">
						<label class="eolo-toggler">
							<input type="radio" name="radioToggler1" id="radioToggler1_3" />
							<span />
						</label>
						<label htmlFor="radioToggler1_3">Tokyo</label>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
