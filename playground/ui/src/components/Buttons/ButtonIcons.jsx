export const ButtonIcons = () => {
	return (
		<div className="space-y-6 pt-4">
			<div className="flex gap-x-10 items-center">
				<div className="text-sm font-semibold w-10">SVG</div>

				<button
					className="eolo-btn eolo-btn-icon bg-primary border-primary text-white 
		dark:bg-primary dark:border-primary dark:text-white"
				>
					<svg>...</svg>
				</button>

				<button
					className="eolo-btn eolo-btn-icon group bg-primary border-primary text-primary bg-opacity-10 
		hover:bg-primary hover:text-white 
		dark:bg-primary dark:border-primary dark:text-primary dark:bg-opacity-10 
		dark:hover:bg-primary dark:hover:text-white"
				>
					<svg className="fill-primary group-hover:fill-white">...</svg>
				</button>

				<button
					className="eolo-btn eolo-btn-icon eolo-ghost group bg-primary text-primary hover:text-white 
		dark:bg-primary dark:text-primary dark:hover:text-white"
				>
					<svg className="fill-primary group-hover:fill-white">...</svg>
				</button>

				<button
					className="eolo-btn eolo-btn-icon bg-primary border-primary text-white 
		dark:bg-primary dark:border-primary dark:text-white rounded-full"
				>
					<svg>...</svg>
				</button>
			</div>

			<div className="flex gap-x-10 items-center">
				<div className="text-sm font-semibold w-10">Icons</div>

				<button
					className="eolo-btn eolo-btn-icon bg-primary border-primary text-white 
		dark:bg-primary dark:border-primary dark:text-white"
				>
					<svg>...</svg>
				</button>

				<button
					className="eolo-btn eolo-btn-icon group bg-primary border-primary text-primary bg-opacity-10 
		hover:bg-primary hover:text-white 
		dark:bg-primary dark:border-primary dark:text-primary dark:bg-opacity-10 
		dark:hover:bg-primary dark:hover:text-white"
				>
					<svg className="fill-primary group-hover:fill-white">...</svg>
				</button>

				<button
					className="eolo-btn eolo-btn-icon eolo-ghost group bg-primary text-primary hover:text-white 
		dark:bg-primary dark:text-primary dark:hover:text-white"
				>
					<svg className="fill-primary group-hover:fill-white">...</svg>
				</button>

				<button
					className="eolo-btn eolo-btn-icon bg-primary border-primary text-white 
		dark:bg-primary dark:border-primary dark:text-white rounded-full"
				>
					<svg>...</svg>
				</button>
			</div>
		</div>
	)
}
