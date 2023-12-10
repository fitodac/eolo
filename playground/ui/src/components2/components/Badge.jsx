import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const Badge = () => {
	return (
		<SectionWrapper {...{ title: 'Badge', anchor: 'badge' }}>
			<div className="space-y-3 mt-3">
				<div className="space-x-4">
					<span className="eolo-badge">Badge</span>
					<span className="eolo-badge bg-primary border-primary">Primary</span>
					<span className="eolo-badge bg-secondary border-secondary">
						Secondary
					</span>
					<span className="eolo-badge bg-alt border-alt">Alternative</span>
				</div>

				<div className="space-x-4">
					<span className="eolo-badge rounded-full">Badge</span>
					<span className="eolo-badge bg-primary border-primary rounded-full">
						Primary
					</span>
					<span className="eolo-badge bg-secondary border-secondary rounded-full">
						Secondary
					</span>
					<span className="eolo-badge bg-alt border-alt rounded-full">
						Alternative
					</span>
				</div>

				<div className="space-x-4">
					<span className="eolo-badge bg-transparent bg-opacity-60 text-slate-400 rounded-full">
						Badge
					</span>
					<span className="eolo-badge bg-transparent border-primary text-primary">
						Primary
					</span>
					<span className="eolo-badge bg-transparent border-secondary text-secondary">
						Secondary
					</span>
					<span className="eolo-badge bg-transparent border-alt text-alt">
						Alternative
					</span>
				</div>

				<div className="space-x-4">
					<span className="eolo-badge eolo-ghost text-slate-400">Badge</span>
					<span className="eolo-badge eolo-ghost bg-primary border-primary text-primary">
						Primary
					</span>
					<span className="eolo-badge eolo-ghost bg-secondary border-secondary text-secondary">
						Secondary
					</span>
					<span className="eolo-badge eolo-ghost bg-alt border-alt text-alt">
						Alternative
					</span>
				</div>
			</div>

			<div className="flex gap-x-8 items-start mt-8">
				<div className="relative w-14">
					<div className="eolo-avatar eolo-avatar-squircle">
						<img src="users/user-3.png" alt="user 3" />
					</div>
					<span className="eolo-badge bg-red-500 border-red-500 top-auto -right-1 -bottom-1 absolute rounded-full">
						83
					</span>
				</div>

				<div className="eolo-avatar w-14 rounded-full">
					<img src="users/user-3.png" alt="user 3" />
					<span className="eolo-dot-badge top-auto bottom-0.5 right-0.5 animate-pulse" />
				</div>

				<div className="inline-flex relative">
					<button className="eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white">
						Action required
					</button>
					<span className="eolo-dot-badge animate-pulse" />
				</div>

				<div className="space-x-2">
					<span className="text-red-600 font-medium">Unread emails</span>
					<span className="eolo-badge bg-red-600 border-red-600 rounded-full animate-pulse">
						+99
					</span>
				</div>
			</div>
		</SectionWrapper>
	)
}
