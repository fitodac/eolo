import { SectionWrapper } from '@/app/_components/SectionWrapper'
import { ButtonIcons } from './ButtonIcons'

const btn = {
	sm: {
		basic: {
			default: `eolo-btn eolo-btn-sm`,

			primary: `eolo-btn eolo-btn-sm bg-primary border-primary 
								hover:bg-primary-600 hover:border-primary-600 
								dark:bg-primary dark:border-primary dark:text-white 
								dark:hover:bg-primary-600 dark:hover:border-primary-600`,

			secondary: `eolo-btn eolo-btn-sm bg-secondary border-secondary 
									hover:bg-secondary-600 hover:border-secondary-600 
									dark:bg-secondary dark:border-secondary dark:text-white 
									dark:hover:bg-secondary-600 dark:hover:border-secondary-600`,

			alt: `eolo-btn eolo-btn-sm bg-alt border-alt
						hover:bg-alt-600 hover:border-alt-600 
						dark:bg-alt dark:border-alt dark:text-white
						dark:hover:bg-alt-600 dark:hover:border-alt-600`,
		},
		outline: {
			default: `eolo-btn eolo-btn-sm bg-opacity-5 border-opacity-90 text-slate-600/50 
								hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
								dark:bg-opacity-20 dark:border-white/30
								dark:hover:bg-opacity-100 dark:hover:border-opacity-90 dark:hover:border-slate-900`,

			primary: `eolo-btn eolo-btn-sm bg-primary border-primary bg-opacity-5 border-opacity-90 text-primary 
								hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
								dark:bg-primary/10 dark:border-primary-400 dark:text-primary-400
								dark:hover:bg-primary dark:hover:border-primary dark:hover:text-white`,

			secondary: `eolo-btn eolo-btn-sm bg-secondary border-secondary bg-opacity-5 border-opacity-90 text-secondary 
								hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
								dark:bg-secondary/10 dark:border-secondary-200 dark:text-secondary-200
								dark:hover:bg-secondary dark:hover:border-secondary dark:hover:text-white`,

			alt: `eolo-btn eolo-btn-sm bg-alt border-alt bg-opacity-5 border-opacity-90 text-alt-600 
						hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
						dark:bg-alt/10 dark:border-alt-600 dark:text-alt-600
						dark:hover:bg-alt dark:hover:border-alt dark:hover:text-white`,
		},
		ghost: {
			default: `eolo-btn eolo-btn-sm bg-opacity-20 border-transparent text-slate-400 
								hover:bg-slate-500 hover:text-white
								dark:bg-opacity-40 dark:border-transparent
								dark:hover:bg-slate-900`,

			primary: `eolo-btn eolo-btn-sm bg-primary/10 border-transparent text-primary 
								hover:bg-primary hover:text-white
								dark:bg-primary/10 dark:border-transparent dark:text-primary-300
								dark:hover:bg-primary dark:hover:text-white`,

			secondary: `eolo-btn eolo-btn-sm bg-secondary/10 border-transparent text-secondary 
								hover:bg-secondary hover:text-white
								dark:bg-secondary/10 dark:border-transparent dark:text-secondary-300
								dark:hover:bg-secondary dark:hover:text-white`,

			alt: `eolo-btn eolo-btn-sm bg-alt/10 border-transparent text-alt-600 
						hover:bg-alt hover:text-white
						dark:bg-alt/10 dark:border-transparent dark:text-alt-300
						dark:hover:bg-alt dark:hover:text-white`,
		},
	},
	md: {
		basic: {
			default: `eolo-btn`,

			primary: `eolo-btn bg-primary border-primary 
								hover:bg-primary-600 hover:border-primary-600 
								dark:bg-primary dark:border-primary dark:text-white 
								dark:hover:bg-primary-600 dark:hover:border-primary-600`,

			secondary: `eolo-btn bg-secondary border-secondary 
									hover:bg-secondary-600 hover:border-secondary-600 
									dark:bg-secondary dark:border-secondary dark:text-white 
									dark:hover:bg-secondary-600 dark:hover:border-secondary-600`,

			alt: `eolo-btn bg-alt border-alt
						hover:bg-alt-600 hover:border-alt-600 
						dark:bg-alt dark:border-alt dark:text-white
						dark:hover:bg-alt-600 dark:hover:border-alt-600`,
		},
		outline: {
			default: `eolo-btn bg-opacity-5 border-opacity-90 text-slate-600/50 
								hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
								dark:bg-opacity-20 dark:border-white/30
								dark:hover:bg-opacity-100 dark:hover:border-opacity-90 dark:hover:border-slate-900`,

			primary: `eolo-btn bg-primary border-primary bg-opacity-5 border-opacity-90 text-primary 
								hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
								dark:bg-primary/10 dark:border-primary dark:text-primary
								dark:hover:bg-primary dark:hover:border-primary dark:hover:text-white`,

			secondary: `eolo-btn bg-secondary border-secondary bg-opacity-5 border-opacity-90 text-secondary-600 
									hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
									dark:bg-secondary/10 dark:border-secondary-200 dark:text-secondary-200
									dark:hover:bg-secondary dark:hover:border-secondary dark:hover:text-white`,

			alt: `eolo-btn bg-alt border-alt bg-opacity-5 border-opacity-90 text-alt-600 
						hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
						dark:bg-alt/10 dark:border-alt-600 dark:text-alt-600
						dark:hover:bg-alt dark:hover:border-alt dark:hover:text-white`,
		},
		ghost: {
			default: `eolo-btn bg-opacity-20 border-transparent text-slate-400 
								hover:bg-slate-500 hover:text-white
								dark:bg-opacity-40 dark:border-transparent
								dark:hover:bg-slate-900`,

			primary: `eolo-btn bg-primary/10 border-transparent text-primary 
								hover:bg-primary hover:text-white
								dark:bg-primary/10 dark:border-transparent dark:text-primary-300
								dark:hover:bg-primary dark:hover:text-white`,

			secondary: `eolo-btn bg-secondary/10 border-transparent text-secondary 
									hover:bg-secondary hover:text-white
									dark:bg-secondary/10 dark:border-transparent dark:text-secondary-300
									dark:hover:bg-secondary dark:hover:text-white`,

			alt: `eolo-btn bg-alt/10 border-transparent text-alt-600 
						hover:bg-alt hover:text-white
						dark:bg-alt/10 dark:border-transparent dark:text-alt-300
						dark:hover:bg-alt dark:hover:text-white`,
		},
	},
	lg: {
		basic: {
			default: `eolo-btn eolo-btn-lg`,

			primary: `eolo-btn eolo-btn-lg bg-primary border-primary 
								hover:bg-primary-600 hover:border-primary-600 
								dark:bg-primary dark:border-primary dark:text-white 
								dark:hover:bg-primary-600 dark:hover:border-primary-600`,

			secondary: `eolo-btn eolo-btn-lg bg-secondary border-secondary 
									hover:bg-secondary-600 hover:border-secondary-600 
									dark:bg-secondary dark:border-secondary dark:text-white 
									dark:hover:bg-secondary-600 dark:hover:border-secondary-600`,

			alt: `eolo-btn eolo-btn-lg bg-alt border-alt
						hover:bg-alt-600 hover:border-alt-600 
						dark:bg-alt dark:border-alt dark:text-white
						dark:hover:bg-alt-600 dark:hover:border-alt-600`,
		},
		outline: {
			default: `eolo-btn eolo-btn-lg bg-opacity-5 border-opacity-90 text-slate-600/50 
								hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
								dark:bg-opacity-20 dark:border-white/30
								dark:hover:bg-opacity-100 dark:hover:border-opacity-90 dark:hover:border-slate-900`,

			primary: `eolo-btn eolo-btn-lg bg-primary border-primary bg-opacity-5 border-opacity-90 text-primary 
								hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
								dark:bg-primary/10 dark:border-primary dark:text-primary
								dark:hover:bg-primary dark:hover:border-primary dark:hover:text-white`,

			secondary: `eolo-btn eolo-btn-lg bg-secondary border-secondary bg-opacity-5 border-opacity-90 text-secondary-600 
								hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
								dark:bg-secondary/10 dark:border-secondary-200 dark:text-secondary-200
								dark:hover:bg-secondary dark:hover:border-secondary dark:hover:text-white`,

			alt: `eolo-btn eolo-btn-lg bg-alt border-alt bg-opacity-5 border-opacity-90 text-alt-600 
						hover:bg-opacity-100 hover:border-opacity-90 hover:text-white
						dark:bg-alt/10 dark:border-alt-600 dark:text-alt-600
						dark:hover:bg-alt dark:hover:border-alt dark:hover:text-white`,
		},
		ghost: {
			default: `eolo-btn bg-opacity-20 border-transparent text-slate-400 
								hover:bg-slate-500 hover:text-white
								dark:bg-opacity-40 dark:border-transparent
								dark:hover:bg-slate-900`,

			primary: `eolo-btn eolo-btn-lg bg-primary/10 border-transparent text-primary 
								hover:bg-primary hover:text-white
								dark:bg-primary/10 dark:border-transparent dark:text-primary-300
								dark:hover:bg-primary dark:hover:text-white`,

			secondary: `eolo-btn eolo-btn-lg bg-secondary/10 border-transparent text-secondary 
									hover:bg-secondary hover:text-white
									dark:bg-secondary/10 dark:border-transparent dark:text-secondary-300
									dark:hover:bg-secondary dark:hover:text-white`,

			alt: `eolo-btn eolo-btn-lg bg-alt/10 border-transparent text-alt-600 
						hover:bg-alt hover:text-white
						dark:bg-alt/10 dark:border-transparent dark:text-alt-300
						dark:hover:bg-alt dark:hover:text-white`,
		},
	},
}

export const Button = () => {
	return (
		<SectionWrapper {...{ title: 'Buttons', anchor: 'buttons' }}>
			<div className="max-w-3xl space-y-10 mt-6">
				<div className="grid grid-cols-3">
					<div className="grid gap-y-3">
						{Object.keys(btn.sm.basic).map((i) => (
							<div key={i}>
								<button className={btn.sm.basic[i]}>Small {i}</button>
							</div>
						))}
					</div>

					<div className="grid gap-y-3">
						{Object.keys(btn.sm.outline).map((i) => (
							<div key={i}>
								<button className={btn.sm.outline[i]}>Small {i}</button>
							</div>
						))}
					</div>

					<div className="grid gap-y-3">
						{Object.keys(btn.sm.ghost).map((i) => (
							<div key={i}>
								<button className={btn.sm.ghost[i]}>Small {i}</button>
							</div>
						))}
					</div>
				</div>

				<div className="grid grid-cols-3">
					<div className="grid gap-y-3">
						{Object.keys(btn.md.basic).map((i) => (
							<div key={i}>
								<button className={btn.md.basic[i]}>Button {i}</button>
							</div>
						))}
					</div>

					<div className="grid gap-y-3">
						{Object.keys(btn.md.outline).map((i) => (
							<div key={i}>
								<button className={btn.md.outline[i]}>Button {i}</button>
							</div>
						))}
					</div>

					<div className="grid gap-y-3">
						{Object.keys(btn.md.ghost).map((i) => (
							<div key={i}>
								<button className={btn.md.ghost[i]}>Button {i}</button>
							</div>
						))}
					</div>
				</div>

				<div className="grid grid-cols-3">
					<div className="grid gap-y-3">
						{Object.keys(btn.lg.basic).map((i) => (
							<div key={i}>
								<button className={btn.lg.basic[i]}>Large {i}</button>
							</div>
						))}
					</div>

					<div className="grid gap-y-3">
						{Object.keys(btn.lg.outline).map((i) => (
							<div key={i}>
								<button className={btn.lg.outline[i]}>Large {i}</button>
							</div>
						))}
					</div>

					<div className="grid gap-y-3">
						{Object.keys(btn.lg.ghost).map((i) => (
							<div key={i}>
								<button className={btn.lg.ghost[i]}>Large {i}</button>
							</div>
						))}
					</div>
				</div>

				<ButtonIcons />
			</div>
		</SectionWrapper>
	)
}
