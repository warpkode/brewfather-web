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
  title: "Brewfather - Tools for your brewing needs",
  description: "Powerful and easy to use tool for your brewing needs",
  metadataBase: new URL('https://brewfather.app'),
  openGraph: {
    title: "Brewfather",
    description: "Powerful and easy to use tool for your brewing needs",
    url: "https://brewfather.app",
    siteName: "Brewfather",
    images: [
      {
        url: "/images/logo_full.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
