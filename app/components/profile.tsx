import type { Dictionary } from "../lib/i18n";
import { SectionHead } from "./section-head";

export function Profile({ dict }: { dict: Dictionary }) {
	const current = dict.experience.items[0];

	return (
		<section id="about" className="shell section border-t border-line/15">
			<SectionHead
				index="01"
				label={dict.about.label}
				title={dict.about.title}
				aside={dict.about.tagline}
			/>

			<div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
				<div className="lg:col-span-7">
					<p className="profile-lead">{dict.about.paragraphs[0]}</p>
					<p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
						{dict.about.paragraphs[1]}
					</p>

					<div className="mt-10">
						<p className="eyebrow text-muted">{dict.about.focusLabel}</p>
						<ul className="profile-focus mt-4">
							{dict.about.focus.map((item, index) => (
								<li key={item.title}>
									<span className="font-mono text-[10px] tracking-[0.1em] text-accent">
										0{index + 1}
									</span>
									<h3 className="mt-2 text-sm font-medium tracking-[-0.01em]">
										{item.title}
									</h3>
									<p className="mt-1.5 text-xs leading-relaxed text-muted">
										{item.description}
									</p>
								</li>
							))}
						</ul>
					</div>
				</div>

				<aside className="lg:col-span-4 lg:col-start-9">
					<dl className="fact-list">
						<div className="fact-row">
							<dt>{dict.about.basedLabel}</dt>
							<dd>{dict.hero.location}</dd>
						</div>
						<div className="fact-row">
							<dt>{dict.about.currentlyLabel}</dt>
							<dd>
								{current.role} · {current.company}
							</dd>
						</div>
						{dict.about.stats.map((stat) => (
							<div key={stat.label} className="fact-row">
								<dt>{stat.label}</dt>
								<dd>{stat.value}</dd>
							</div>
						))}
					</dl>

					<div className="mt-6">
						<p className="eyebrow text-muted">{dict.about.languagesLabel}</p>
						<p className="mt-2 text-sm">{dict.about.languages.join(" · ")}</p>
					</div>

					<div className="mt-6">
						<p className="eyebrow text-muted">{dict.about.stackLabel}</p>
						<ul className="mt-3 flex flex-wrap gap-1.5">
							{dict.about.stack.map((item) => (
								<li key={item} className="tag">
									{item}
								</li>
							))}
						</ul>
					</div>
				</aside>
			</div>
		</section>
	);
}
