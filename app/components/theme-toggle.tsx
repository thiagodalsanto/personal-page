"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle({ label }: { label: string }) {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	return (
		<button
			type="button"
			aria-label={label}
			title={label}
			onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
			className="group grid h-10 w-10 place-items-center border border-line/20 text-muted transition-colors duration-300 hover:border-ink/40 hover:text-ink"
		>
			<span className="grid h-[15px] w-[15px] place-items-center">
				{mounted ? (
					resolvedTheme === "dark" ? (
						<Sun
							size={15}
							strokeWidth={1.6}
							className="transition-transform duration-500 group-hover:rotate-45"
						/>
					) : (
						<Moon
							size={15}
							strokeWidth={1.6}
							className="transition-transform duration-500 group-hover:-rotate-12"
						/>
					)
				) : null}
			</span>
		</button>
	);
}
