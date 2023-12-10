'use client'
import { SectionWrapper } from '@/app/_components/SectionWrapper'
import { useState } from 'react'

export const Input = () => {
	const [inputState, setInputState] = useState('')

	return (
		<SectionWrapper {...{ title: 'Input', anchor: 'input' }}>
			<div className="max-w-sm space-y-4 mt-6">
				<div className="space-y-1">
					<label>Basic</label>
					<input
						type="text"
						placeholder="Insert text here..."
						className="eolo-input"
						disabled={inputState === 'disabled'}
					/>
					<div className="eolo-input-helper text-right">
						This is a helper text
					</div>

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
					<label>Email</label>
					<div className="eolo-input-group-inset">
						<i className="ri-at-line ri-xl" />
						<input
							type="email"
							placeholder="somebody@gmail.com"
							className="eolo-input"
						/>
					</div>
				</div>

				<div className="space-y-1">
					<label>Data list</label>
					<input list="cities" type="text" className="eolo-input" />

					<datalist id="cities">
						<option value="new york" />
						<option value="london" />
						<option value="paris" />
						<option value="hong kong" />
						<option value="dubai" />
						<option value="tokyo" />
					</datalist>
				</div>

				<div className="space-y-1">
					<label>Sucess</label>
					<input type="text" className="eolo-input eolo-input-valid" />
					<div className="eolo-input-helper eolo-input-helper-valid">
						Your request was approved
					</div>
				</div>

				<div className="space-y-1">
					<label>Error</label>
					<input type="text" className="eolo-input eolo-input-error" />
					<div className="eolo-input-helper eolo-input-helper-error">
						We're sorry, your request wasn't approved
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
