import type { Metadata } from "next";
import styles from "./page.module.scss";

export const metadata: Metadata = {
  title: "Dan Champion | Portfolio",
  description: "Portfolio of Dan Champion"
};

import { Lexend } from "next/font/google";
const lexend = Lexend({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "sans-serif"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lexend.className} ${styles.html}`}>
      <body {...{ style: { margin: 0 }, className:styles.body, suppressHydrationWarning: true }}>
        {children}
      </body>
    </html>
  );
}
