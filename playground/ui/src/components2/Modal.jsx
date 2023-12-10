import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const Modal = () => {
	return (
		<SectionWrapper {...{ title: 'Modal', anchor: 'modal' }}>
			<div className="mt-3">
				<label
					class="eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white hover:bg-primary-700 hover:border-primary-700 hover:text-white dark:hover:bg-primary-700 dark:hover:border-primary-700 dark:hover:text-white"
					for="modalWindow"
				>
					Open modal
				</label>

				<input type="checkbox" id="modalWindow" class="eolo-modal-toggler" />

				<div class="eolo-modal-wrapper">
					<label class="eolo-overlay bg-black/70" for="modalWindow" />

					<div class="eolo-modal max-w-md space-y-3 p-5">
						<div class="font-semibold flex justify-between">
							<div class="text-primary text-lg">The modal box</div>

							<label for="modalWindow" class="eolo-btn eolo-btn-icon -mt-1.5">
								<i class="ri-close-line" />
							</label>
						</div>

						<div class="space-y-3">
							<div className="font-medium">
								Create a simple modal box using html and css only.
							</div>
							<div className="text-slate-400 text-sm dark:text-slate-500">
								You don't need extra javascript functions to launch a basic
								modal box when you can do it only using the power of html and
								css.
							</div>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
