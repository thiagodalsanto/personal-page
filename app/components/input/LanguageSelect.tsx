"use client";

import { useState, type Dispatch, type SetStateAction } from "react";
import { useSettings } from "../../store/useSettings";

const options = [
  { value: "en", label: "EN" },
  { value: "pt", label: "PT" },
  { value: "es", label: "ES" },
  { value: "zh", label: "ZH" },
];

type LanguageSelectProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function LanguageSelect({ open, setOpen }: LanguageSelectProps) {
  const lang = useSettings((s) => s.lang);
  const setLang = useSettings((s) => s.setLang);

  const current = options.find((o) => o.value === lang);

  return (
    <div className="relative text-sm">
      {/* botão */}
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center justify-between gap-2

          px-3 py-1.5
          rounded-full

          bg-white/5 dark:bg-black/40
          backdrop-blur-md

          border border-zinc-200 dark:border-zinc-800

          text-zinc-700 dark:text-zinc-500

          transition-all duration-200

          hover:bg-white/20 dark:hover:bg-black/60
          hover:text-zinc-900 dark:hover:text-white
        "
      >
        <span>{current?.label}</span>

        <svg
          width="14"
          height="14"
          viewBox="0 0 20 20"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
          />
        </svg>
      </button>

      {/* dropdown */}
      {open && (
        <div
          className="
            absolute mt-1 right-0

            w-18

            rounded-2xl

            bg-white/80 dark:bg-black/70
            backdrop-blur-xl

            border border-zinc-200 dark:border-zinc-800

            shadow-lg

            overflow-hidden
          "
        >
          {options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                setLang(opt.value as any);
                setOpen(false);
              }}
              className={`
                w-full text-left px-3 py-2

                hover:bg-zinc-200/60 dark:hover:bg-zinc-800

                transition
                ${
                  lang === opt.value
                    ? "text-black dark:text-white font-medium"
                    : "text-zinc-600 dark:text-zinc-400"
                }
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
