import { ButtonIcons } from './ButtonIcons'

const btn = {
	sm: {
		basic: {
			default: `eolo-btn eolo-btn-sm`,
			primary: `eolo-btn eolo-btn-sm bg-primary border-primary`,
			secondary: `eolo-btn eolo-btn-sm bg-secondary border-secondary`,
			alt: `eolo-btn eolo-btn-sm bg-alt border-alt`,
		},
		outline: {
			default: `eolo-btn eolo-btn-sm bg-opacity-20 hover:bg-opacity-100 dark:bg-opacity-20 dark:hover:bg-opacity-100`,
			primary: `eolo-btn eolo-btn-sm bg-primary border-primary text-primary bg-opacity-10 hover:bg-primary hover:text-white dark:bg-primary dark:border-primary dark:text-primary dark:bg-opacity-10 dark:hover:bg-primary dark:hover:text-white`,
			secondary: `eolo-btn eolo-btn-sm bg-secondary border-secondary text-secondary bg-opacity-10 hover:bg-secondary hover:text-white dark:bg-secondary dark:border-secondary dark:text-secondary dark:bg-opacity-10 dark:hover:bg-secondary dark:hover:text-white`,
			alt: `eolo-btn eolo-btn-sm bg-alt border-alt text-alt bg-opacity-10 hover:bg-alt hover:text-white dark:bg-alt dark:border-alt dark:text-alt dark:bg-opacity-10 dark:hover:bg-alt dark:hover:text-white`,
		},
		ghost: {
			default: `eolo-btn eolo-btn-sm eolo-ghost`,
			primary: `eolo-btn eolo-btn-sm eolo-ghost bg-primary text-primary hover:text-white dark:bg-primary dark:text-primary dark:hover:text-white`,
			secondary: `eolo-btn eolo-btn-sm eolo-ghost bg-secondary text-secondary hover:text-white dark:bg-secondary dark:text-secondary dark:hover:text-white`,
			alt: `eolo-btn eolo-btn-sm eolo-ghost bg-alt text-alt-600 hover:text-white dark:bg-alt dark:text-alt-600 dark:hover:text-white`,
		},
	},
	md: {
		basic: {
			default: `eolo-btn`,
			primary: `eolo-btn bg-primary border-primary text-white dark:bg-primary dark:border-primary dark:text-white`,
			secondary: `eolo-btn bg-secondary border-secondary text-white dark:bg-secondary dark:border-secondary dark:text-white`,
			alt: `eolo-btn bg-alt border-alt text-white dark:bg-alt dark:border-alt dark:text-white`,
		},
		outline: {
			default: `eolo-btn bg-opacity-20 hover:bg-opacity-100 dark:bg-opacity-20 dark:hover:bg-opacity-100`,
			primary: `eolo-btn bg-primary border-primary text-primary bg-opacity-10 hover:bg-primary hover:text-white dark:bg-primary dark:border-primary dark:text-primary dark:bg-opacity-10 dark:hover:bg-primary dark:hover:text-white`,
			secondary: `eolo-btn bg-secondary border-secondary text-secondary bg-opacity-10 hover:bg-secondary hover:text-white dark:bg-secondary dark:border-secondary dark:text-secondary dark:bg-opacity-10 dark:hover:bg-secondary dark:hover:text-white`,
			alt: `eolo-btn bg-alt border-alt text-alt bg-opacity-10 hover:bg-alt hover:text-white dark:bg-alt dark:border-alt dark:text-alt dark:bg-opacity-10 dark:hover:bg-alt dark:hover:text-white`,
		},
		ghost: {
			default: `eolo-btn eolo-ghost`,
			primary: `eolo-btn eolo-ghost bg-primary text-primary hover:text-white dark:bg-primary dark:text-primary dark:hover:text-white`,
			secondary: `eolo-btn eolo-ghost bg-secondary text-secondary hover:text-white dark:bg-secondary dark:text-secondary dark:hover:text-white`,
			alt: `eolo-btn eolo-ghost bg-alt text-alt-600 hover:text-white dark:bg-alt dark:text-alt-600 dark:hover:text-white`,
		},
	},
	lg: {
		basic: {
			default: `eolo-btn eolo-btn-lg`,
			primary: `eolo-btn eolo-btn-lg bg-primary border-primary`,
			secondary: `eolo-btn eolo-btn-lg bg-secondary border-secondary`,
			alt: `eolo-btn eolo-btn-lg bg-alt border-alt`,
		},
		outline: {
			default: `eolo-btn eolo-btn-lg bg-opacity-20 hover:bg-opacity-100 dark:bg-opacity-20 dark:hover:bg-opacity-100`,
			primary: `eolo-btn eolo-btn-lg bg-primary border-primary text-primary bg-opacity-10 hover:bg-primary hover:text-white dark:bg-primary dark:border-primary dark:text-primary dark:bg-opacity-10 dark:hover:bg-primary dark:hover:text-white`,
			secondary: `eolo-btn eolo-btn-lg bg-secondary border-secondary text-secondary bg-opacity-10 hover:bg-secondary hover:text-white dark:bg-secondary dark:border-secondary dark:text-secondary dark:bg-opacity-10 dark:hover:bg-secondary dark:hover:text-white`,
			alt: `eolo-btn eolo-btn-lg bg-alt border-alt text-alt bg-opacity-10 hover:bg-alt hover:text-white dark:bg-alt dark:border-alt dark:text-alt dark:bg-opacity-10 dark:hover:bg-alt dark:hover:text-white`,
		},
		ghost: {
			default: `eolo-btn eolo-btn-lg eolo-ghost`,
			primary: `eolo-btn eolo-btn-lg eolo-ghost bg-primary text-primary hover:text-white dark:bg-primary dark:text-primary dark:hover:text-white`,
			secondary: `eolo-btn eolo-btn-lg eolo-ghost bg-secondary text-secondary hover:text-white dark:bg-secondary dark:text-secondary dark:hover:text-white`,
			alt: `eolo-btn eolo-btn-lg eolo-ghost bg-alt text-alt-600 hover:text-white dark:bg-alt dark:text-alt-600 dark:hover:text-white`,
		},
	},
}

export const Buttons = () => {
	return (
		<section>
			<div className="font-bold">Buttons</div>

			<div className="space-y-10 mt-3">
				<div className="grid grid-cols-6">
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

				<div className="grid grid-cols-6">
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

				<div className="grid grid-cols-6">
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
		</section>
	)
}
