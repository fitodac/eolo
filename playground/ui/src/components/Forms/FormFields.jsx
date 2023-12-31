import {
	Checkbox,
	Input,
	InputGroup,
	RadioButton,
	Range,
	Select,
	Toggler,
} from '.'

export const FormFields = () => {
	return (
		<>
			<div className="max-w-4xl grid grid-cols-2 gap-x-14">
				<Input />
				<Select />
			</div>
			<InputGroup />
			<Checkbox />
			<RadioButton />
			<Toggler />
			<Range />
		</>
	)
}
