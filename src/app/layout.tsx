import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppConcierge from "@/components/common/WhatsAppConcierge";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "C.I.TA.M DÉCOR — Atelier de Haute Tapisserie & Décoration d'Intérieur | Lomé, Togo",
  description:
    "Expert en tapisserie moderne, confection de rideaux sur mesure, décoration intérieure et sellerie automobile à Lomé, Togo. Savoir-faire artisanal d'exception.",
  openGraph: {
    title: "C.I.TA.M DÉCOR — Atelier de Haute Tapisserie, Lomé",
    description:
      "Tapisserie d'ameublement, rideaux sur mesure, décoration intérieure et sellerie automobile d'exception à Lomé, Togo.",
    locale: "fr_TG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      className={`theme-light ${inter.variable} h-full scroll-smooth`}
    >
      <head />
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Navbar />
        <main className="w-full flex-1">{children}</main>
        <Footer />
        <WhatsAppConcierge />
      </body>
    </html>
  );
}
