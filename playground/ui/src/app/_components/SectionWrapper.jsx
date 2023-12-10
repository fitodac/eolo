export const SectionWrapper = ({ anchor, title, children }) => {
	return (
		<section>
			<div id={anchor} className="-top-16 relative" />
			<div className="font-bold">{title}</div>
			{children}
		</section>
	)
}
