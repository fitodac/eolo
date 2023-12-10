import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const RadioButton = () => {
	return (
		<SectionWrapper {...{ title: 'Radio button', anchor: 'radio' }}>
			<div className="max-w-lg space-y-8 mt-6">
				<div className="space-x-8">
					<label className="eolo-input-radio">
						<input type="radio" name="rg1" />
						<span>Option 1</span>
					</label>

					<label className="eolo-input-radio">
						<input type="radio" name="rg1" />
						<span>Option 2</span>
					</label>

					<label className="eolo-input-radio">
						<input type="radio" name="rg1" checked />
						<span>Checked</span>
					</label>

					<label className="eolo-input-radio">
						<input type="radio" name="rg1" disabled />
						<span>Disabled</span>
					</label>
				</div>

				<div className="space-x-8">
					<label className="eolo-input-radio eolo-input-lg">
						<input type="radio" name="rg2" />
						<span>Option 1</span>
					</label>

					<label className="eolo-input-radio eolo-input-lg">
						<input type="radio" name="rg2" />
						<span>Option 2</span>
					</label>

					<label className="eolo-input-radio eolo-input-lg">
						<input type="radio" name="rg2" checked />
						<span>Option 3</span>
					</label>

					<label className="eolo-input-radio eolo-input-lg">
						<input type="radio" name="rg2" disabled />
						<span>Disabled</span>
					</label>
				</div>

				<div className="space-y-6">
					<div className="flex gap-6 items-start">
						<label className="eolo-input-radio">
							<input type="radio" name="rg3" />
							<span />
						</label>

						<div className="flex gap-6 items-start">
							In "Star Wars: The Force Awakens," the Millennium Falcon briefly
							appears in the background of a junkyard scene, paying homage to
							its iconic status in the series.
						</div>
					</div>

					<div className="flex gap-6 items-start">
						<label className="eolo-input-radio">
							<input type="radio" name="rg3" />
							<span />
						</label>

						<div className="flex gap-6 items-start">
							In "Star Wars: The Last Jedi," the ancient Jedi texts seen in the
							movie's final scenes are written in Aurebesh, the fictional
							writing system used in the Star Wars universe.
						</div>
					</div>

					<div className="flex gap-6 items-start">
						<label className="eolo-input-radio">
							<input type="radio" name="rg3" />
							<span />
						</label>

						<div className="flex gap-6 items-start">
							In "Star Wars: Rogue One," the droid character, Chopper, from the
							animated series "Star Wars Rebels," can be spotted in the
							background during the Battle of Scarif sequence.
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
