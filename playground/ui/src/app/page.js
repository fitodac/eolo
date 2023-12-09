'use client'
import { useState } from 'react'
import { 
	Avatar, 
	Badge, 
	Collapsible, 
	FormFields,
	Typography, 
	Buttons, 
	Dropdown, 
	ListGroup, 
	Tabs, 
	Table 
} from '@/components'

export default function Home() {
	const [darkMode, setDarkMode] = useState('')

	return (
		<>
			<main className={`${darkMode}`}>
				<div className="bg-gray-100 px-6 py-2 flex justify-end top-0 inset-x-0 fixed z-50 dark:bg-slate-800">
					<div className="space-x-4">
						{'dark' !== darkMode && (
							<button onClick={() => setDarkMode('dark')}>
								<i className="ri-sun-fill ri-fw ri-xl text-slate-500" />
							</button>
						)}
						{'dark' === darkMode && (
							<button onClick={() => setDarkMode('')}>
								<i className="ri-moon-fill ri-fw ri-xl text-slate-300" />
							</button>
						)}
					</div>
				</div>

				<section className="text-gray-700 min-h-screen px-10 py-20 dark:bg-slate-800 dark:text-slate-200">
					<div className="space-y-20">
						<Typography />
						<Buttons />
						<Dropdown />
						<FormFields />
						<Badge />
						<Avatar />
						<ListGroup />
						<Tabs />
						<Collapsible />
						<Table />
					</div>
				</section>
			</main>
		</>
	)
}
