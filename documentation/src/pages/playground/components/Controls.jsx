import { useContext } from 'react'
import { mainContext } from '../context'

export const Controls = () => {
	const { color, setColor } = useContext(mainContext)
	// const Context = useContext(mainContext)

	return (
		<div className="bg-gray-100 h-96 px-6 py-5 shadow-lg">
			<button
				className="eolo-btn bg-primary"
				onClick={() => setColor({...color, primary: 'red'})}
			>
				Color primario rojo
			</button>

			<div className="mt-6">
				<pre>{JSON.stringify(color, null, 2)}</pre>
			</div>
		</div>
	)
}
