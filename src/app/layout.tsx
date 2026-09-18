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
  title: "Ajit Pal Singh — Data Analyst | Business Analyst | IIT Bombay Graduate",
  description:
    "Portfolio of Ajit Pal Singh — IIT Bombay graduate and Business Analyst in Bangalore. Turning business data into actionable insights through SQL, Advanced Excel, Power BI, Python, and reporting automation.",
  keywords: [
    "Ajit Pal Singh",
    "Data Analyst",
    "Business Analyst",
    "Product Analyst",
    "BI Analyst",
    "MIS Analyst",
    "SQL",
    "Excel",
    "Power BI",
    "Python",
    "Zoho Analytics",
    "IIT Bombay",
    "Customer Lifetime Value",
    "LTV Analysis",
    "Reporting Automation",
    "Bangalore",
  ],
  authors: [{ name: "Ajit Pal Singh" }],
  creator: "Ajit Pal Singh",
  openGraph: {
    title: "Ajit Pal Singh — Data Analyst | Business Analyst | IIT Bombay Graduate",
    description:
      "Turning business data into actionable insights through SQL, Excel, Power BI, Python, and automation.",
    type: "website",
    locale: "en_IN",
    siteName: "Ajit Pal Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajit Pal Singh — Data Analyst | Business Analyst | IIT Bombay Graduate",
    description:
      "Turning business data into actionable insights through SQL, Excel, Power BI, Python, and automation.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
