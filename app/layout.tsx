import type { Metadata } from "next";
import { Public_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Cocoati Café Tulum",
  description: "Donde la tradición clásica se encuentra con el ritual contemporáneo del café.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </head>
      <body
        className={`${publicSans.variable} ${playfair.variable} antialiased bg-background-light dark:bg-background-dark text-slate-800 dark:text-cream transition-colors duration-300 font-sans`}
      >
        {children}
      </body>
    </html>
  );
}

