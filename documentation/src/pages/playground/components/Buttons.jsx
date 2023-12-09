import { useContext } from 'react'
import { mainContext } from '../context'
import { ComponentHead } from '.'

export const Buttons = () => {
	const { bg } = useContext(mainContext)

	return (
		<section>
			<ComponentHead title="Buttons" />
			<button className={`eolo-btn ${bg.primary()}`}>Default</button>
		</section>
	)
}
