import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

/* ─────────────────────────────────────────────────────────────────
   Hero — design.md
   · Un seul mot géant (typographie comme élément visuel)
   · Image qui chevauche le titre (effet de profondeur)
   · 3 cartes basses, gap 4 px, images fondues
───────────────────────────────────────────────────────────────── */

const NAV_CARDS = [
  {
    label: "Tapisserie",
    href: "#services",
    image: "/images/artisan-workshop.jpg",
    alt: "Atelier de tapisserie d'ameublement à Lomé",
  },
  {
    label: "Réalisations",
    href: "#realisations",
    image: "/images/hero-living-room.jpg",
    alt: "Salon réalisé par C.I.TA.M DÉCOR",
  },
  {
    label: "Contact",
    href: "#contact",
    image: "/images/drapery-curtains.jpg",
    alt: "Rideaux sur mesure de l'atelier C.I.TA.M DÉCOR",
  },
];

export default function ArtVistaHero() {
  return (
    <section
      id="accueil"
      className="relative flex min-h-svh flex-col overflow-hidden bg-background"
    >
      <div className="shell flex flex-1 flex-col">
        {/* ── Titre géant + image en superposition ── */}
        <div className="relative pt-[clamp(96px,13vh,132px)]">
          <h1 className="hero-title whitespace-nowrap text-center text-foreground">
            DÉCOR
          </h1>

          {/* L'image chevauche le bas du titre */}
          <div className="relative z-10 mx-auto -mt-[clamp(24px,6vw,84px)] w-[min(820px,100%)]">
            <div className="relative aspect-[16/8] overflow-hidden rounded-card bg-surface-2">
              <Image
                src="/images/hero-sofa-minimal.jpg"
                alt="Canapé sur mesure dans un intérieur signé C.I.TA.M DÉCOR"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 820px"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background to-transparent" />
            </div>
          </div>
        </div>

        {/* ── Accroche + CTA ── */}
        <div className="flex flex-1 flex-col justify-end gap-8 pb-10 pt-8 sm:flex-row sm:items-end sm:justify-between sm:pb-14">
          <p className="body-lg max-w-xl text-muted-foreground">
            Tapisserie, draperies et sellerie d&apos;exception. Nous donnons à vos
            intérieurs une présence rare, à Lomé.
          </p>
          <a href="#a-propos" className="btn btn-outline self-start sm:self-auto">
            Découvrir l&apos;atelier
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* ── 3 cartes basses ── */}
      <div className="grid grid-cols-3 gap-1 p-1">
        {NAV_CARDS.map((card) => (
          <a
            key={card.label}
            href={card.href}
            className="group relative flex aspect-[3/4] items-end overflow-hidden rounded-card bg-surface sm:aspect-auto sm:h-[clamp(140px,18vh,220px)]"
          >
            <Image
              src={card.image}
              alt={card.alt}
              fill
              className="object-cover object-center opacity-55 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
              sizes="(max-width: 768px) 33vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
            <span className="relative z-10 flex w-full items-center justify-between gap-2 p-3 text-sm text-foreground sm:p-6 sm:text-[clamp(1rem,1.4vw,1.625rem)]">
              {card.label}
              <ArrowUpRight
                className="h-4 w-4 shrink-0 opacity-60 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                aria-hidden="true"
              />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
