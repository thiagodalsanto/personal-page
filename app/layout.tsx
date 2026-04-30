import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Thiago Dal Santo - Portfolio",
    template: "%s | Thiago Dal Santo",
  },
  description: "Web & Mobile Developer with 4+ years of experience",
  icons: {
    icon: "favicon.png",
    shortcut: "favicon.png",
    apple: "favicon.png",
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head>
        <Analytics />
      </head>

      <body className="bg-white dark:bg-black">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}