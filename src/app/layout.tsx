import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prakash Sharma | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. Building beautiful, performant web applications.",
  keywords: [
    "Prakash Sharma",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Prakash Sharma" }],
  openGraph: {
    title: "Prakash Sharma | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
