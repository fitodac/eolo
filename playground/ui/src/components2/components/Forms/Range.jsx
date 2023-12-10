import { SectionWrapper } from '@/app/_components/SectionWrapper'

export const Range = () => {
	return (
		<SectionWrapper {...{ title: 'Range', anchor: 'range' }}>
			<div className="max-w-lg space-y-8 mt-3">
				<div>
					<input type="range" className="eolo-input" />
				</div>

				<div>
					<input
						type="range"
						class="eolo-input"
						defaultValue={1}
						min={1}
						max={5}
						step={0.5}
					/>

					<div class="font-medium flex justify-between px-2">
						<div class="before:bg-white/50 before:h-1.5 before:w-px before:block before:mx-1 before:mb-1">
							1
						</div>
						<div class="text-xs opacity-60 before:bg-white/50 before:h-1.5 before:w-px before:block before:mx-2 before:mb-1">
							1.5
						</div>
						<div class="before:bg-white/50 before:h-1.5 before:w-px before:block before:mx-1 before:mb-1">
							2
						</div>
						<div class="text-xs opacity-60 before:bg-white/50 before:h-1.5 before:w-px before:block before:mx-2 before:mb-1">
							2.5
						</div>
						<div class="before:bg-white/50 before:h-1.5 before:w-px before:block before:mx-1 before:mb-1">
							3
						</div>
						<div class="text-xs opacity-60 before:bg-white/50 before:h-1.5 before:w-px before:block before:mx-2 before:mb-1">
							3.5
						</div>
						<div class="before:bg-white/50 before:h-1.5 before:w-px before:block before:mx-1 before:mb-1">
							4
						</div>
						<div class="text-xs opacity-60 before:bg-white/50 before:h-1.5 before:w-px before:block before:mx-2 before:mb-1">
							4.5
						</div>
						<div class="before:bg-white/50 before:h-1.5 before:w-px before:block before:mx-1 before:mb-1">
							5
						</div>
					</div>

					<div className="pt-5">
						<input
							type="range"
							class="eolo-input"
							defaultValue={1}
							min={1}
							max={5}
							step={1}
						/>

						<div class="flex justify-between mt-3">
							<i class="ri-circle-line ri-xl"></i>
							<i class="ri-triangle-line ri-xl"></i>
							<i class="ri-pentagon-line ri-xl"></i>
							<i class="ri-hexagon-line ri-xl"></i>
							<i class="ri-square-line ri-xl"></i>
						</div>
					</div>
				</div>
			</div>
		</SectionWrapper>
	)
}
