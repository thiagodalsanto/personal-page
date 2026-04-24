"use client";

export default function Chevron() {
  return (
    <a
        href="#about"
        className="absolute bottom-10 flex items-center justify-center"
      >
        <div className="relative flex items-center justify-center animate-title leading-[0.95]">
          <svg
            className="absolute w-8 h-8 dark:text-zinc-400 text-zinc-500 opacity-0 animate-chevron-echo-1"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 9l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>

          <svg
            className="absolute w-8 h-8 dark:text-zinc-400 text-zinc-500 opacity-0 animate-chevron-echo-2"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 9l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>

          <svg
            className="w-8 h-8 dark:text-zinc-400 text-zinc-500 animate-chevron-main"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 9l7 7 7-7"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </div>
      </a>
  );
}