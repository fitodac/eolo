import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const Avatar = () => {
	return (
		<SectionWrapper {...{ title: 'Avatar', anchor: 'avatar' }}>
			<div className="flex gap-x-10 mt-3">
				<div>
					<div className="eolo-avatar w-16">
						<img src="users/user-10.png" alt="user 10" />
					</div>
				</div>

				<div>
					<div className="eolo-avatar w-16 rounded-full">
						<img src="users/user-2.png" alt="user 2" />
					</div>
				</div>

				<div>
					<div className="eolo-avatar eolo-avatar-squircle w-16">
						<img src="users/user-3.png" alt="user 3" />
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
