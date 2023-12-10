import { SectionWrapper } from '@/app/_components/SectionWrapper'

const Block1 = () => {
	return (
		<>
			<p>
				Our app is designed to provide users with an easy-to-use platform for
				organizing their daily tasks and schedule.
			</p>
			<p>
				Whether it's managing deadlines, setting reminders, or keeping track of
				appointments, our app is designed to help users stay on top of their
				day-to-day activities.
			</p>
			<p>
				With a clean and intuitive interface, users can quickly add and manage
				tasks, set reminders, and receive notifications to stay on track.
			</p>
		</>
	)
}

const Block2 = () => {
	return (
		<>
			<p>
				One of the key features of our app is its integration with other apps
				and services. For example, users can easily connect our app with Appname
				to access additional features and functionality. This integration makes
				our app even more powerful and versatile, allowing users to do more with
				it than they could on their own.
			</p>
			<p>
				In terms of security, our app is built with the latest encryption and
				security protocols to ensure that user data is always safe and
				protected. We take the privacy and security of our users very seriously,
				and we are committed to providing a secure and reliable platform for all
				of our users.
			</p>
			<p>
				Our app is designed to be intuitive and user-friendly, making it easy
				for anyone to use. When a user first launches the app, they will be
				presented with a simple and straightforward interface.
			</p>
		</>
	)
}

const Block3 = () => {
	return (
		<>
			<p>
				To download and install our app, simply visit the App Store or Google
				Play Store on your mobile device and search for our app by name.
			</p>
			<p>
				Once you find our app, click on the download button to begin the
				download process. The app will automatically install on your device once
				the download is complete. You will then be prompted to create an account
				or sign in to an existing account to start using the app. It is
				important to ensure that you have a stable internet connection while
				downloading the app to avoid any interruptions.
			</p>
			<p>
				Also, make sure that you have enough storage space on your device to
				accommodate the app's size.
			</p>
		</>
	)
}

export const Collapsible = () => {
	return (
		<SectionWrapper {...{ title: 'Collapsible', anchor: 'collapsible' }}>
			<div className="max-w-4xl grid gap-x-10 gap-y-4 mt-6 xl:grid-cols-2">
				<div className="space-y-4">
					<div className="eolo-collapsible">
						<input type="checkbox" name="accordion" id="tab-7" />
						<label className="eolo-collapsible-head text-sm" htmlFor="tab-7">
							<span>What is your app about?</span>
						</label>
						<div className="eolo-collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<div className="space-y-5 p-5">
								<Block1 />
							</div>
						</div>
					</div>

					<div className="eolo-collapsible">
						<input type="checkbox" name="accordion" id="tab-8" />
						<label className="eolo-collapsible-head text-sm" htmlFor="tab-8">
							<span>How does your app work?</span>
						</label>
						<div className="eolo-collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<div className="space-y-5 p-5">
								<Block2 />
							</div>
						</div>
					</div>

					<div className="eolo-collapsible">
						<input type="checkbox" name="accordion" id="tab-9" />
						<label className="eolo-collapsible-head text-sm" htmlFor="tab-9">
							<span>Is your app free to use?</span>
						</label>
						<div className="eolo-collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<div className="space-y-5 p-5">
								<Block3 />
							</div>
						</div>
					</div>
				</div>

				<div className="space-y-4">
					<div className="eolo-collapsible">
						<input type="checkbox" name="accordion" id="tab-10" />
						<label className="eolo-collapsible-head text-sm" htmlFor="tab-10">
							<span>What are the features of your app?</span>
						</label>
						<div className="eolo-collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<div className="space-y-5 p-5">
								<Block3 />
							</div>
						</div>
					</div>

					<div className="eolo-collapsible">
						<input type="checkbox" name="accordion" id="tab-11" />
						<label className="eolo-collapsible-head text-sm" htmlFor="tab-11">
							<span>How do I download and install your app?</span>
						</label>
						<div className="eolo-collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<div className="space-y-5 p-5">
								<Block2 />
							</div>
						</div>
					</div>

					<div className="eolo-collapsible">
						<input type="checkbox" name="accordion" id="tab-12" />
						<label className="eolo-collapsible-head text-sm" htmlFor="tab-12">
							<span>What devices is your app compatible with?</span>
						</label>
						<div className="eolo-collapsible-content scrollbar scrollbar-thumb-slate-400 scrollbar-track-slate-100">
							<div className="space-y-5 p-5">
								<Block1 />
							</div>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
