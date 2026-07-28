import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agung Pratama — Principal Product Manager II",
  description:
    "Principal Product Manager II at tiket.com, working across customer-facing travel journeys and shared platform products including Order, Atlas Geo, Ground Transport, and rail.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Dark is the default. A visitor's explicit stored preference still wins before first paint.
const themeScript = `try{var s=localStorage.getItem('theme');var d=s?s==='dark':true;document.documentElement.classList.toggle('dark',d);document.documentElement.classList.toggle('light',!d)}catch(e){document.documentElement.classList.add('dark')}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>{children}</body>
    </html>
  );
}
