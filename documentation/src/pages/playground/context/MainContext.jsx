import { createContext, useContext, useState } from 'react'

export const mainContext = createContext()

export const MainContext = ({ children }) => {
	const [settings, setSettings] = useState({
		color: {
			primary: '#FFCC00',
			secondary: '',
			alt: '',
		},
	})

	const [color, setColor] = useState({
		primary: 'primary',
		secondary: '',
		alt: '',
	})


	const bg = {
		primary: () => {
			switch(color.primary){
				case 'primary': return 'bg-primary'
				case 'red': return 'bg-red-500'
			}
		}
	}
	// const bg = () => {
	// 	switch (color) {
	// 		case 'primary':
	// 			return 'bg-primary'
	// 		case 'red':
	// 			return 'bg-red-500'
	// 	}
	// }

	return (
		<mainContext.Provider
			value={{
				color,
				setColor,

				// settings,
				// setSettings,
				bg
			}}
		>
			{children}
		</mainContext.Provider>
	)
}
