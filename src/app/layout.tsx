import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajit Pal Singh — Business Analyst · Data Analytics · Software Engineer",
  description:
    "Portfolio of Ajit Pal Singh — IIT Bombay graduate, Business Analyst at Emoha Elder Care, Bangalore. Specializing in data analytics, business intelligence, software engineering, and AI/ML.",
  keywords: [
    "Ajit Pal Singh",
    "Ajit Pal Singh IIT Bombay",
    "Business Analyst Bangalore",
    "Data Analyst Bangalore",
    "Business Intelligence Analyst",
    "Power BI Analyst",
    "Data Analyst IIT Bombay",
    "Software Engineer IIT Bombay",
    "Python Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Ajit Pal Singh" }],
  openGraph: {
    title: "Ajit Pal Singh — Business Analyst · Data Analytics · Software Engineer",
    description:
      "IIT Bombay graduate working at the intersection of business, data, and technology.",
    type: "website",
    locale: "en_IN",
    siteName: "Ajit Pal Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Pal Singh — Business Analyst · Data Analytics · Software Engineer",
    description:
      "IIT Bombay graduate working at the intersection of business, data, and technology.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
