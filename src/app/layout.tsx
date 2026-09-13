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
  title: "Rom Christian LABERINTO | Visual Designer & Video Creator",
  description:
    "Personal creative portfolio of Rom Christian LABERINTO. Turning ideas into visual stories through graphic design, video production, motion graphics, and brand strategy.",
  keywords: [
    "Rom Christian Laberinto",
    "Visual Designer",
    "Video Creator",
    "Creative Director",
    "Motion Graphics",
    "Brand Identity",
    "Portfolio",
  ],
  authors: [{ name: "Rom Christian LABERINTO" }],
  openGraph: {
    title: "Rom Christian LABERINTO | Visual Designer & Video Creator",
    description: "Turning Ideas Into Visual Stories.",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-[#f4f4f6] selection:bg-[#e61e7a] selection:text-white">
        {children}
      </body>
    </html>
  );
}
