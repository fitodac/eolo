import {
	Checkbox,
	Input,
	InputGroup,
	InputAddon,
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
			<InputAddon />
			<Checkbox />
			<RadioButton />
			<Toggler />
			<Range />
		</>
	)
}
