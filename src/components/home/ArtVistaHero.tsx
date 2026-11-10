"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   Hero Section — Style « Powerful » (design.md)
   · Image du fauteuil/canapé en fond plein écran (full-bleed background)
   · Grand titre typographique ultra-large (clamp(120px, 18vw, 240px))
   · Sous-titre & bouton outline pill à gauche
   · 3 cartes de navigation en bas (Products, Features, Contact)
───────────────────────────────────────────────────────────────── */

const NAV_CARDS = [
  {
    label: "Produits",
    sublabel: "Collections & Mobilier",
    href: "/services",
    image: "/images/sofa-modern.jpg",
    alt: "Fauteuils et canapés sur-mesure",
  },
  {
    label: "Savoir-Faire",
    sublabel: "Tapisserie & Rideaux",
    href: "/#services",
    image: "/images/artisan-workshop.jpg",
    alt: "Atelier et savoir-faire C.I.TA.M DÉCOR",
  },
  {
    label: "Contact",
    sublabel: "Atelier d'Agbalépédo",
    href: "/contact",
    image: "/images/villa-living.jpg",
    alt: "Prendre contact avec notre atelier",
  },
];

export default function ArtVistaHero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#0F1112] select-none">
      
      {/* ══════════════════════════════════════════════════════════════
          1. IMAGE DE FOND PLEIN ÉCRAN (Fauteuil / Canapé contemporain)
      ══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/hero-sofa-minimal.jpg"
          alt="Canapé minimaliste contemporain C.I.TA.M DÉCOR"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dégradé zénithal pour la lisibilité de la barre de navigation et du grand titre */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,17,18,0.85) 0%, rgba(15,17,18,0.3) 25%, rgba(15,17,18,0.05) 50%, rgba(15,17,18,0.7) 85%, #0F1112 100%)",
          }}
        />

        {/* Halo doux sur la gauche pour détacher le texte éditorial */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 15% 55%, rgba(15,17,18,0.7) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          2. ZONE CENTRALE : GRAND TITRE « Powerful » + TEXTE GAUCHE
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-4">
        
        {/* Grand Titre ultra-large centré en haut — Style « Powerful » */}
        <div className="w-full flex justify-center px-4 overflow-hidden pointer-events-none">
          <h1
            className="text-[#E8E0D5] font-sans font-bold tracking-[-0.04em] leading-[0.88] select-none text-center"
            style={{
              fontSize: "clamp(4.75rem, 16vw, 15rem)",
            }}
          >
            Powerful
          </h1>
        </div>

        {/* Sous-titre & Bouton d'action à gauche — superposés à la scène */}
        <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 my-auto py-8">
          <div className="max-w-[280px] sm:max-w-[340px]">
            <p className="text-[#E8E0D5] text-lg sm:text-xl lg:text-2xl font-light leading-snug mb-5 tracking-tight drop-shadow-sm">
              Une déclaration
              <br />
              minimaliste et puissante.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(232,224,213,0.5)] text-[#E8E0D5] font-sans text-sm sm:text-base tracking-wide bg-[#0F1112]/40 backdrop-blur-md hover:bg-[#E8E0D5] hover:text-[#0F1112] hover:border-[#E8E0D5] active:scale-95 transition-all duration-300 shadow-md group"
            >
              <span>Découvrir</span>
              <ChevronRight className="w-4 h-4 text-[#E8E0D5] group-hover:text-[#0F1112] group-hover:translate-x-0.5 transition-all" />
            </Link>
          </div>
        </div>

        {/* Espace tampon flexible */}
        <div className="hidden sm:block sm:h-4" />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          3. CARTES INFÉRIEURES (Products, Features, Contact)
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 pb-4 sm:pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 sm:gap-3">
          {NAV_CARDS.map((card) => (
            <Link
              key={card.label}
              href={card.href}
              className="group relative flex items-start justify-between overflow-hidden rounded-[18px] sm:rounded-[20px] p-5 sm:p-6 h-28 sm:h-32 lg:h-36 bg-[#1A1C1D]/90 backdrop-blur-md border border-white/5 hover:border-[rgba(232,224,213,0.3)] transition-all duration-300 shadow-xl"
            >
              {/* Textes de la carte à gauche */}
              <div className="relative z-10 flex flex-col justify-between h-full max-w-[60%]">
                <h3 className="text-[#E8E0D5] font-sans text-lg sm:text-xl font-normal tracking-tight">
                  {card.label}
                </h3>
                <p className="text-[#B5ADA3] text-xs font-light tracking-wide">
                  {card.sublabel}
                </p>
              </div>

              {/* Miniature produit fondue à droite */}
              <div className="relative w-28 sm:w-36 h-full overflow-hidden rounded-lg">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  className="object-cover object-center opacity-65 group-hover:opacity-95 group-hover:scale-105 transition-all duration-500"
                  sizes="180px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A1C1D] via-transparent to-transparent pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
