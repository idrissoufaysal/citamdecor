"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   Hero Section — Style « Powerful » (design.md)
   · Desktop : image du canapé en fond plein écran, grand titre
     typographique, texte à gauche, 3 cartes en bas.
   · Mobile / tablette : l'image garde un cadrage dédié et généreux
     (4/3 puis 16/9) pour que le fauteuil reste bien visible, avec
     un fondu qui la raccorde au fond noir.
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

function HeroCopy({ className = "" }: { className?: string }) {
  return (
    <div className={`max-w-[280px] sm:max-w-[340px] ${className}`}>
      <p className="mb-5 text-lg font-light leading-snug tracking-tight text-[#E8E0D5] drop-shadow-sm sm:text-xl lg:text-[28px]">
        Une déclaration
        <br />
        minimaliste et puissante.
      </p>
      <Link
        href="/services"
        className="group inline-flex min-h-11 items-center gap-2 rounded-full border border-[rgba(232,224,213,0.5)] bg-[#0F1112]/40 px-7 py-3.5 font-sans text-sm tracking-wide text-[#E8E0D5] shadow-md backdrop-blur-md transition-all duration-300 hover:border-[#E8E0D5] hover:bg-[#E8E0D5] hover:text-[#0F1112] active:scale-95 sm:text-base lg:text-lg"
      >
        <span>Découvrir</span>
        <ChevronRight
          className="h-4 w-4 transition-all group-hover:translate-x-0.5 group-hover:text-[#0F1112]"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}

export default function ArtVistaHero() {
  return (
    <section
      id="accueil"
      className="relative flex w-full select-none flex-col overflow-hidden bg-[#0F1112] lg:min-h-[100svh]"
    >
      {/* ══════════════════════════════════════════════════════════════
          1. IMAGE DE FOND PLEIN ÉCRAN — desktop uniquement
      ══════════════════════════════════════════════════════════════ */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <Image
          src="/images/hero-sofa-minimal.jpg"
          alt="Canapé minimaliste contemporain C.I.TA.M DÉCOR"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Dégradé vertical pour la lisibilité du titre et des cartes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(15,17,18,0.85) 0%, rgba(15,17,18,0.3) 25%, rgba(15,17,18,0.05) 50%, rgba(15,17,18,0.7) 85%, #0F1112 100%)",
          }}
        />

        {/* Halo doux à gauche pour détacher le texte éditorial */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 15% 55%, rgba(15,17,18,0.7) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* ══════════════════════════════════════════════════════════════
          2. CONTENU
      ══════════════════════════════════════════════════════════════ */}
      <div className="relative z-10 flex w-full flex-col lg:flex-1 lg:justify-between">
        {/* Grand titre ultra-large centré — style « Powerful » */}
        <div className="pointer-events-none flex w-full justify-center overflow-hidden px-4 pb-1 pt-24 sm:pt-28 lg:pt-32">
          <h1
            className="text-center font-sans font-bold leading-[0.88] tracking-[-0.04em] text-[#E8E0D5]"
            style={{ fontSize: "clamp(3.25rem, 17vw, 15rem)" }}
          >
            Décor
          </h1>
        </div>

        {/* ════════════════════════════════════════════════════════════
            3. IMAGE + TEXTE — mobile & tablette
            Cadrage 4/3 puis 16/9 : le canapé reste entier et lisible,
            le texte se pose sur le fondu du bas.
        ════════════════════════════════════════════════════════════ */}
        <div className="relative mt-4 lg:hidden">
          <div className="relative aspect-[4/3] max-h-[58svh] w-full overflow-hidden sm:aspect-[16/9]">
            <Image
              src="/images/hero-sofa-minimal.jpg"
              alt="Canapé minimaliste contemporain C.I.TA.M DÉCOR"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />

            {/* Fondu haut : raccorde l'image au grand titre */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-0 h-1/3"
              style={{
                background:
                  "linear-gradient(180deg, #0F1112 0%, rgba(15,17,18,0.5) 45%, transparent 100%)",
              }}
            />

            {/* Fondu bas : le texte se pose sur le sol de la scène */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2"
              style={{
                background:
                  "linear-gradient(0deg, #0F1112 0%, rgba(15,17,18,0.85) 35%, rgba(15,17,18,0.2) 70%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative z-10 -mt-12 px-5 sm:-mt-16 sm:px-8">
            <HeroCopy />
          </div>
        </div>

        {/* ════════════════════════════════════════════════════════════
            4. TEXTE — desktop, superposé à la scène
        ════════════════════════════════════════════════════════════ */}
        <div className="my-auto hidden w-full max-w-[1440px] px-12 py-8 lg:flex xl:px-16">
          <HeroCopy />
        </div>

        {/* ════════════════════════════════════════════════════════════
            5. CARTES INFÉRIEURES — rail horizontal sur mobile,
            grille 3 colonnes à partir de la tablette
        ════════════════════════════════════════════════════════════ */}
        <div className="w-full max-w-[1440px] self-center px-4 pb-4 sm:px-8 sm:pb-6 lg:px-12">
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-2.5 overflow-x-auto overscroll-x-contain scroll-px-4 px-4 pb-1 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:px-0 sm:pb-0">
            {NAV_CARDS.map((card) => (
              <Link
                key={card.label}
                href={card.href}
                className="group relative flex h-28 w-[72vw] max-w-[300px] shrink-0 snap-start items-start justify-between overflow-hidden rounded-[18px] border border-white/5 bg-[#1A1C1D]/90 p-5 shadow-xl backdrop-blur-md transition-all duration-300 hover:border-[rgba(232,224,213,0.3)] sm:h-32 sm:w-auto sm:max-w-none sm:p-6 lg:h-36"
              >
                {/* Textes de la carte à gauche */}
                <div className="relative z-10 flex h-full max-w-[60%] flex-col justify-between">
                  <h2 className="font-sans text-lg font-normal tracking-tight text-[#E8E0D5] sm:text-xl lg:text-[26px]">
                    {card.label}
                  </h2>
                  <p className="text-xs font-light tracking-wide text-[#B5ADA3]">
                    {card.sublabel}
                  </p>
                </div>

                {/* Miniature produit fondue à droite */}
                <div className="relative h-full w-28 overflow-hidden rounded-lg sm:w-36">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover object-center opacity-65 transition-all duration-500 group-hover:scale-105 group-hover:opacity-95"
                    sizes="180px"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#1A1C1D] via-transparent to-transparent"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
