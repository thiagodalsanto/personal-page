"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function CopyEmail({
	email,
	label,
	copiedLabel,
}: {
	email: string;
	label: string;
	copiedLabel: string;
}) {
	const [copied, setCopied] = useState(false);
	const timeout = useRef<number | null>(null);

	useEffect(
		() => () => {
			if (timeout.current) window.clearTimeout(timeout.current);
		},
		[],
	);

	const copy = async () => {
		try {
			await navigator.clipboard.writeText(email);
			setCopied(true);
			if (timeout.current) window.clearTimeout(timeout.current);
			timeout.current = window.setTimeout(() => setCopied(false), 2200);
		} catch {
			// Clipboard access can be blocked; the mailto link stays available.
		}
	};

	return (
		<button
			type="button"
			onClick={copy}
			className={copied ? "copy-email is-copied" : "copy-email"}
			aria-label={label}
		>
			{copied ? <Check size={12} /> : <Copy size={12} />}
			<span aria-live="polite">{copied ? copiedLabel : label}</span>
		</button>
	);
}
