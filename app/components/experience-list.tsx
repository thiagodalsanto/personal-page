import type { Dictionary } from "../lib/i18n";
import { SectionHead } from "./section-head";

export function ExperienceList({ dict }: { dict: Dictionary }) {
	return (
		<section id="experience" className="shell section border-t border-line/15">
			<SectionHead
				index="02"
				label={dict.experience.label}
				title={dict.experience.title}
				aside={`${dict.experience.items.length} ${dict.experience.rolesLabel} · 2023 — ${dict.experience.present}`}
			/>

			<div className="exp-list">
				{dict.experience.items.map((item, index) => (
					<article key={`${item.company}-${item.period}`} className="exp-item">
						<div className="exp-meta">
							<span className="exp-period">{item.period}</span>
							{index === 0 ? (
								<span className="exp-now">{dict.experience.present}</span>
							) : null}
							<span className="exp-location">{item.location}</span>
						</div>

						<div className="exp-main">
							<div className="exp-heading">
								<h3 className="exp-role">{item.role}</h3>
								<span className="exp-company">{item.company}</span>
							</div>

							<ul className="exp-points">
								{item.highlights.map((highlight) => (
									<li key={highlight}>{highlight}</li>
								))}
							</ul>

							<div className="exp-stack">
								{item.stack.map((tech) => (
									<span key={tech} className="tag">
										{tech}
									</span>
								))}
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}
