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
  title: "KI-Kurs | Einfach KI nutzen – Kreative Power mit ChatGPT, Bild & Video",
  description: "Lerne in nur 3 Abenden die wichtigsten KI-Tools: ChatGPT, DALL·E, Canva, ElevenLabs, Descript & Beautiful.ai. Für Kreative, Unternehmer & Einsteiger ohne Vorkenntnisse.",
  keywords: ["KI-Kurs", "ChatGPT", "DALL-E", "Künstliche Intelligenz", "AI Training", "Online Kurs"],
  authors: [{ name: "KI-Kurs Team" }],
  openGraph: {
    title: "KI-Kurs | Einfach KI nutzen – Kreative Power mit ChatGPT, Bild & Video",
    description: "Lerne in nur 3 Abenden die wichtigsten KI-Tools für kreative Projekte. Ohne Vorkenntnisse.",
    type: "website",
    locale: "de_DE",
  },
  robots: {
    index: true,
    follow: true,
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
