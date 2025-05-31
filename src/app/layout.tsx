import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/headerComponents/Header";
import Footer from "@/components/footerComponents/Footer";
import { ArtworksProvider } from "./store/ArtworksContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project - Art Institute Chicago",
  description: "Proyecto simulado Instituto de arte de Chicago",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ArtworksProvider>
      <html lang="en">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <main className="min-h-[75vh]">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ArtworksProvider>
  );
}
