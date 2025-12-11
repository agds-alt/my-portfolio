import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { LanguageProvider } from "@/lib/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://abdulgofur.vercel.app'),
  title: {
    default: "Abdul Gofur - Full-stack Developer Portfolio",
    template: "%s | Abdul Gofur"
  },
  description: "Portfolio of Abdul Gofur (agds-dev), a Full-stack Developer specializing in Next.js, React, TypeScript, and PostgreSQL. Featuring production web applications: WC Check, AGDS POS, and Selisih Berat.",
  keywords: [
    "Abdul Gofur",
    "agds-dev",
    "Full-stack Developer",
    "Web Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Portfolio",
    "Indonesia Developer",
    "WC Check",
    "AGDS POS",
    "Selisih Berat"
  ],
  authors: [{ name: "Abdul Gofur", url: "https://github.com/agds-alt" }],
  creator: "Abdul Gofur",
  publisher: "Abdul Gofur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/avatar.jpg' },
      { url: '/favicon.ico' },
    ],
    apple: '/avatar.jpg',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://abdulgofur.vercel.app',
    title: 'Abdul Gofur - Full-stack Developer Portfolio',
    description: 'Portfolio showcasing production web applications built with modern technologies like Next.js, React, and TypeScript.',
    siteName: 'Abdul Gofur Portfolio',
    images: [
      {
        url: '/avatar.jpg',
        width: 800,
        height: 800,
        alt: 'Abdul Gofur Profile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Abdul Gofur - Full-stack Developer',
    description: 'Portfolio showcasing production web applications built with modern technologies.',
    creator: '@agdscID',
    images: ['/avatar.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
