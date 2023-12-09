export const Typography = () => {
	return (
		<section>
			<div className="font-bold">Typography</div>

			<div className="eolo-content space-y-12 mt-3">
				<div className="space-y-5">
					<h1>Heading 1</h1>
					<h2>Heading 2</h2>
					<h3>Heading 3</h3>
					<h4>Heading 4</h4>
					<h5>Heading 5</h5>
				</div>

				<div className="max-w-4xl">
					<p>
						Tailwind 3 is the latest version of the popular utility-first CSS
						framework, Tailwind CSS. It brings a host of new features and
						enhancements that make it even more powerful and flexible for
						building modern web applications. One of the standout features in
						Tailwind 3 is the introduction of Just-in-Time (JIT) mode, which
						allows developers to generate a highly optimized and minimal CSS
						bundle for their projects. This results in faster load times and
						improved performance, as only the necessary CSS classes are included
						in the final output.
					</p>
					<p>
						Another notable addition in Tailwind 3 is the introduction of the
						new "Dark Mode" feature. With this feature, developers can easily
						create dark mode variants for their components and styles. This is
						especially valuable as dark mode has gained significant popularity
						in recent years, providing users with a more comfortable viewing
						experience, reducing eye strain, and saving battery life on devices
						with OLED screens. Tailwind 3's Dark Mode feature makes it
						effortless to implement this design trend, allowing developers to
						cater to the preferences of their users with ease.
					</p>
				</div>

				<div className="space-y-2">
					<div>
						You can use the mark tag to <mark>highlight</mark> text
					</div>
					<div>
						This line of text has a part treated as <del>deleted text</del>
					</div>
					<div>
						<s>
							This line of text is meant to be treated as no longer accurate
						</s>
					</div>
					<div>
						<ins>
							This line of text is meant to be treated as an addition to the
							document
						</ins>
					</div>
					<div>
						<u>This line of text will render as underlined</u>
					</div>
					<div>
						<small>
							This line of text is meant to be treated as fine print
						</small>
					</div>
					<div>
						<strong>This line rendered as bold text</strong>
					</div>
					<div>
						<em>This line rendered as italicized text</em>
					</div>
					<div>
						This is a <sup>Sup text</sup>
					</div>
					<div>
						This is a <sub>Sub text</sub>
					</div>
					<div>
						This is a <code>code tag</code>
					</div>
				</div>

				<div className="max-w-4xl grid grid-cols-3 gap-x-14">
					<ul>
						<li>The Dark Knight (2008)</li>
						<li>Inception (2010)</li>
						<li>The Social Network (2010)</li>
						<li>Parasite (2019)</li>
						<li>Mad Max: Fury Road (2015)</li>
					</ul>

					<ol>
						<li>Inception (2010)</li>
						<li>The Social Network (2010)</li>
						<li>Parasite (2019)</li>
					</ol>

					<ol>
						<li type="A">Inception (2010)</li>
						<li type="A">The Social Network (2010)</li>
						<li type="A">Parasite (2019)</li>
					</ol>

					<ol>
						<li type="a">Inception (2010)</li>
						<li type="a">The Social Network (2010)</li>
						<li type="a">Parasite (2019)</li>
					</ol>

					<ol>
						<li type="I">Inception (2010)</li>
						<li type="I">The Social Network (2010)</li>
						<li type="I">Parasite (2019)</li>
					</ol>

					<ol>
						<li type="i">Inception (2010)</li>
						<li type="i">The Social Network (2010)</li>
						<li type="i">Parasite (2019)</li>
					</ol>
				</div>
			</div>
		</section>
	)
}
