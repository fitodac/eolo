import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const Spinner = () => {
	return (
		<SectionWrapper {...{ title: 'Spinner', anchor: 'spinner' }}>
			<div className="space-y-6 mt-6">
				<div className="flex gap-x-10 items-center">
					<span className="eolo-spinner" />
					<span class="eolo-spinner border-l-pink-400 dark:border-l-pink-400" />

					<span className="eolo-spinner2 w-10 h-10" />

					<div className="eolo-spinner3 scale-75">
						<div className="dot bg-primary shadow-primary" />
						<div className="dot bg-primary shadow-primary" />
						<div className="dot bg-primary shadow-primary" />
						<div className="dot bg-primary shadow-primary" />
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
