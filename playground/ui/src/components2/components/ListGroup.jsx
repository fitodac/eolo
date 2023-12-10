import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const ListGroup = () => {
	return (
		<SectionWrapper {...{ title: 'List group', anchor: 'list-group' }}>
			<div className="max-w-2xl mt-3">
				<div className="grid grid-cols-2 gap-14">
					<div>
						<div className="eolo-list-group hoverable">
							<div className="eolo-list-group-item">Luke Skywalker</div>
							<div className="eolo-list-group-item">Leia Organa</div>
							<div className="eolo-list-group-item">Han Solo</div>
							<div className="eolo-list-group-item">Darth Vader</div>
							<div className="eolo-list-group-item">Yoda</div>
							<div className="eolo-list-group-item">Chewbacca</div>
						</div>
					</div>

					<div>
						<div className="eolo-list-group striped hoverable">
							<div className="eolo-list-group-item">Luke Skywalker</div>
							<div className="eolo-list-group-item">Leia Organa</div>
							<div className="eolo-list-group-item">Han Solo</div>
							<div className="eolo-list-group-item">Darth Vader</div>
							<div className="eolo-list-group-item">Yoda</div>
							<div className="eolo-list-group-item">Chewbacca</div>
						</div>
					</div>

					<div>
						<div className="eolo-list-group">
							<div className="eolo-list-group-head">Primary list</div>
							<div className="eolo-list-group-item">Luke Skywalker</div>
							<div className="eolo-list-group-item">Leia Organa</div>
							<div className="eolo-list-group-head">Secondary list</div>
							<div className="eolo-list-group-item">Han Solo</div>
							<div className="eolo-list-group-item">Darth Vader</div>
							<div className="eolo-list-group-item">Yoda</div>
							<div className="eolo-list-group-item">Chewbacca</div>
						</div>
					</div>

					<div>
						<div className="eolo-list-group striped">
							<div className="eolo-list-group-head">Primary list</div>
							<div className="eolo-list-group-item">Luke Skywalker</div>
							<div className="eolo-list-group-item">Leia Organa</div>
							<div className="eolo-list-group-head">Secondary list</div>
							<div className="eolo-list-group-item">Han Solo</div>
							<div className="eolo-list-group-item">Darth Vader</div>
							<div className="eolo-list-group-item">Yoda</div>
							<div className="eolo-list-group-item">Chewbacca</div>
						</div>
					</div>
				</div>

				<div className="mt-8">
					<div className="eolo-list-group hoverable">
						<div className="eolo-list-group-item">
							<div className="flex gap-x-8 items-start py-3">
								<div className="eolo-avatar eolo-avatar-squircle w-12">
									<img src="/users/user-10.png" alt="user" />
								</div>
								<div className="flex-1">
									Face time knowledge is power, and marginalised key performance
									indicators.
								</div>
							</div>
						</div>
						<div className="eolo-list-group-item">
							<div className="flex gap-x-8 items-start py-3">
								<div className="eolo-avatar eolo-avatar-squircle w-12">
									<img src="/users/user-9.png" alt="user" />
								</div>
								<div className="flex-1">
									High turnaround rate note for the previous submit: the devil
									should be on the left shoulder we should have a meeting to
									discuss the details of the next meeting, nor thought shower
									future-proof let's put a pin in that.
								</div>
							</div>
						</div>
						<div className="eolo-list-group-item">
							<div className="flex gap-x-8 items-start py-3">
								<div className="eolo-avatar eolo-avatar-squircle w-12">
									<img src="/users/user-3.png" alt="user" />
								</div>
								<div className="flex-1">
									Sacred cow we can't hear you fast track, or identify pain
									points hop on the bandwagon, so we need a recap by eod, cob or
									whatever comes first.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
