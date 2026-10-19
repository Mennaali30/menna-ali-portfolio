import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#F8F7F4",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Menna Ali Abdelrahman | AI & ML Engineer & Frontend Developer",
  description:
    "Portfolio of Menna Ali Abdelrahman — AI & Machine Learning Engineer and Frontend Developer (React.js, Next.js). Computer Science and Artificial Intelligence graduate from Capital University (formerly Helwan University) with Excellent with Honors (GPA 3.67/4.00).",
  keywords: [
    "Menna Ali Abdelrahman",
    "Menna Ali",
    "AI & Machine Learning Engineer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "WASLA Sign Language",
    "Capital University",
    "Helwan University",
    "Egypt Software Engineer"
  ],
  authors: [{ name: "Menna Ali Abdelrahman" }],
  openGraph: {
    title: "Menna Ali Abdelrahman | AI & ML Engineer & Frontend Developer",
    description:
      "Dual-specialized in building modern, responsive React/Next.js frontend applications and practical AI/Machine Learning pipelines.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F8F7F4] text-[#202124] selection:bg-[#FFCAD4] selection:text-[#202124]">
        {children}
      </body>
    </html>
  );
}
