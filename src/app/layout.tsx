import type { Metadata } from "next";
import { Chakra_Petch, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const displayFont = Chakra_Petch({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Nikhil Sangamkar",
  description: "Portfolio for Nikhil Sangamkar, software engineer building AI systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${displayFont.variable} ${bodyFont.variable} antialiased`}>
        {children}
        <div id="my-modal"></div>
      </body>
    </html>
  );
}
