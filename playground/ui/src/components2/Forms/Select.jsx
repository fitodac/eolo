'use client'
import { SectionWrapper } from '@/app/_components/SectionWrapper'
import { useState } from 'react'

export const Select = () => {
	const [inputState, setInputState] = useState('')

	return (
		<section>
			<div className="font-bold">Select</div>

			<div className="max-w-sm space-y-4 mt-6">
				<div className="space-y-1">
					<label>Basic</label>
					<select className="eolo-input" disabled={inputState === 'disabled'}>
						<option>Select one city</option>
						<option value="new york">New York</option>
						<option value="london">London</option>
						<option value="paris">Paris</option>
						<option value="hong kong">Hong Kong</option>
						<option value="dubai">Dubai</option>
						<option value="tokyo">Tokyo</option>
					</select>

					<div className="pt-2 flex">
						<label className="eolo-input-checkbox">
							<input
								type="checkbox"
								onChange={(e) => {
									setInputState(e.target.checked ? 'disabled' : '')
								}}
							/>
							<span>Disabled</span>
						</label>
					</div>
				</div>

				<div className="space-y-1">
					<label>Optgroup</label>
					<select class="eolo-input">
						<option>Select one city</option>
						<optgroup label="America">
							<option value="new york">New York</option>
							<option value="mexico city">Mexico City</option>
							<option value="sao paulo">São Paulo</option>
							<option value="buenos aires">Buenos Aires</option>
						</optgroup>
						<optgroup label="Europe">
							<option value="london">London</option>
							<option value="paris">Paris</option>
							<option value="berlin">Berlin</option>
						</optgroup>
						<optgroup label="Asia">
							<option value="tokio">Tokio</option>
							<option value="beijing">Beijin</option>
							<option value="mumbai">Mumbai</option>
						</optgroup>
					</select>
				</div>

				<div className="space-y-1">
					<label>Success</label>

					<select class="eolo-input eolo-input-valid">
						<option>Select one city</option>
						<option value="new york">New York</option>
						<option value="london">London</option>
						<option value="paris">Paris</option>
						<option value="hong kong">Hong Kong</option>
						<option value="dubai">Dubai</option>
						<option value="tokyo">Tokyo</option>
					</select>
					<div class="eolo-input-helper eolo-input-helper-valid">
						Your request was approved
					</div>
				</div>

				<div className="space-y-1">
					<label>Error</label>

					<select class="eolo-input eolo-input-error">
						<option>Select one city</option>
						<option value="new york">New York</option>
						<option value="london">London</option>
						<option value="paris">Paris</option>
						<option value="hong kong">Hong Kong</option>
						<option value="dubai">Dubai</option>
						<option value="tokyo">Tokyo</option>
					</select>
					<div class="eolo-input-helper eolo-input-helper-error">
						We're sorry, your request wasn't approved
					</div>
				</div>
			</div>
		</section>
	)
}
