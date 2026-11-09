import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppConcierge from "@/components/common/WhatsAppConcierge";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "C.I.TA.M DÉCOR — Atelier de Haute Tapisserie & Décoration d'Intérieur | Lomé, Togo",
  description:
    "Expert en tapisserie moderne, confection de rideaux sur mesure, décoration intérieure et sellerie automobile à Lomé, Togo. Savoir-faire artisanal d'exception.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${manrope.variable} h-full scroll-smooth`}>
      <head />
      <body className="min-h-full flex flex-col bg-background text-on-background selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <Navbar />
        <main className="flex-1 w-full pt-28">{children}</main>
        <Footer />
        <WhatsAppConcierge />
      </body>
    </html>
  );
}
