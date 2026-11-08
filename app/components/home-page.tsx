import { getDictionary } from "../lib/i18n";
import { type Locale } from "../lib/site";
import { About } from "./about";
import { Contact } from "./contact";
import { Education } from "./education";
import { Experience } from "./experience";
import { Hero } from "./hero";
import { LocaleEffect } from "./locale-effect";
import { Marquee } from "./marquee";
import { Publications } from "./publications";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { HomeStructuredData } from "./structured-data";
import { Work } from "./work";

export function HomePage({ lang }: { lang: Locale }) {
	const dict = getDictionary(lang);

	return (
		<>
			<a href="#main" className="skip-link">
				{dict.nav.skip}
			</a>
			<div className="page-frame hidden xl:block" aria-hidden="true" />

			<SiteHeader lang={lang} dict={dict} />

			<main id="main">
				<Hero dict={dict} />
				<Marquee items={dict.about.stack} />
				<About dict={dict} />
				<Work lang={lang} dict={dict} />
				<Experience dict={dict} />
				<Education dict={dict} />
				<Publications dict={dict} />
				<Contact dict={dict} />
			</main>

			<SiteFooter lang={lang} dict={dict} />
			<LocaleEffect lang={lang} />
			<HomeStructuredData lang={lang} dict={dict} />
		</>
	);
}
