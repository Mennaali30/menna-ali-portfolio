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
  themeColor: "#060913",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Menna Ali Abdelrahman | AI & Machine Learning Engineer",
  description:
    "Personal portfolio of Menna Ali Abdelrahman, AI & Machine Learning Engineer and Computer Science & Artificial Intelligence graduate with Excellent with Honors from Capital University. Specialized in Deep Learning, Computer Vision, NLP, and Agentic AI.",
  keywords: [
    "Menna Ali Abdelrahman",
    "Menna Ali",
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning",
    "Computer Vision",
    "NLP",
    "WASLA Sign Language",
    "Capital University",
    "Helwan University",
    "Egypt AI Engineer"
  ],
  authors: [{ name: "Menna Ali Abdelrahman" }],
  openGraph: {
    title: "Menna Ali Abdelrahman | AI & Machine Learning Engineer",
    description:
      "Specialized in designing and deploying machine learning systems, from classification models to deep learning and computer vision pipelines.",
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
      <body className="min-h-full flex flex-col bg-[#060913] text-slate-100 selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
