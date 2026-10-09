import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denny Martinez | Full-Stack Web Developer",
  description:
    "Professional portfolio of Denny Carlo T. Martinez — Full-Stack Web Developer with 9+ years experience building enterprise websites, SaaS platforms, and AI-powered applications.",
  keywords: [
    "Denny Martinez",
    "Full-Stack Developer",
    "Web Developer Philippines",
    "CakePHP",
    "Next.js",
    "React",
    "TypeScript",
    "Araneta",
    "TicketNet",
  ],
  authors: [{ name: "Denny Carlo T. Martinez" }],
  openGraph: {
    title: "Denny Martinez | Full-Stack Web Developer",
    description:
      "9+ years building enterprise web platforms and modern full-stack applications.",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "Denny Martinez | Full-Stack Web Developer",
    description:
      "9+ years building enterprise web platforms and modern full-stack applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
