import { getDictionary } from "../lib/i18n";
import { type Locale } from "../lib/site";
import { ContactPanel } from "./contact-panel";
import { Cover } from "./cover";
import { ExperienceList } from "./experience-list";
import { LocaleEffect } from "./locale-effect";
import { Profile } from "./profile";
import { Research } from "./research";
import { SiteFooter } from "./site-footer";
import { SiteMotion } from "./site-motion";
import { SiteHeader } from "./site-header";
import { HomeStructuredData } from "./structured-data";
import { WorkList } from "./work-list";

export function HomePage({ lang }: { lang: Locale }) {
	const dict = getDictionary(lang);

	return (
		<>
			<a href="#main" className="skip-link">
				{dict.nav.skip}
			</a>
			<span id="top" />

			<SiteHeader lang={lang} dict={dict} />

			<main id="main" className="with-rail">
				<Cover dict={dict} />
				<Profile dict={dict} />
				<ExperienceList dict={dict} />
				<WorkList lang={lang} dict={dict} />
				<Research dict={dict} />
				<ContactPanel dict={dict} />
			</main>

			<SiteFooter lang={lang} dict={dict} />
			<SiteMotion />
			<LocaleEffect lang={lang} />
			<HomeStructuredData lang={lang} dict={dict} />
		</>
	);
}
