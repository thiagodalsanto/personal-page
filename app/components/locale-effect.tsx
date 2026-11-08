"use client";

import { useEffect } from "react";
import type { Locale } from "../lib/site";

export function LocaleEffect({ lang }: { lang: Locale }) {
	useEffect(() => {
		document.documentElement.lang = lang;
		try {
			window.localStorage.setItem("tds-lang", lang);
		} catch {
			// Storage can be unavailable in private browsing.
		}
	}, [lang]);

	return null;
}
