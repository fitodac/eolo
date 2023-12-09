import { MainContext } from './context'
import Layout from '@theme/Layout'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import { Controls, Buttons, Table } from './components'

export default function PlaygroundPage() {
	const { siteConfig } = useDocusaurusContext()

	return (
		<>
			<Layout
				title={`${siteConfig.title} playground`}
				description="An open source component library for building modern apps that helps you build faster and makes it easy to create beautiful, accessible interfaces that are a breeze to maintain."
			>
				<MainContext>
					<div className="bg-white w-full px-10 pt-10 grid grid-cols-12 relative dark:bg-slate-800">
						<div className="col-span-9 space-y-14">
							<Buttons />
							<Table />
						</div>

						<div className="col-span-3">
							<Controls />
						</div>
					</div>
					{/* <div className="max-w-5xl px-10 pt-20">
						<div className="space-y-14">
							<section className="content">
								<div className="space-y-5">
									<h1>Heading 1</h1>
									<h2>Heading 2</h2>
									<h3>Heading 3</h3>
									<h4>Heading 4</h4>
									<h5>Heading 5</h5>
								</div>
							</section>

						</div>
					</div> */}
				</MainContext>
			</Layout>
		</>
	)
}
