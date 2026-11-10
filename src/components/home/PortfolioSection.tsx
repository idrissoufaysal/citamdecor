"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Category = "all" | "fauteuils" | "rideaux" | "decor";

interface Project {
  id: string;
  title: string;
  category: Exclude<Category, "all">;
  badge: string;
  description: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Canapé trois places en similicuir terracotta",
    category: "fauteuils",
    badge: "Tapisserie & Salon",
    description:
      "Habillage complet d'un canapé trois places, coussins assortis et piètement noir mat.",
    image: "/images/portfolio/image.webp",
  },
  {
    id: "2",
    title: "Rideaux œillets graphite sur mesure",
    category: "rideaux",
    badge: "Chambre & Intimité",
    description:
      "Panneaux thermiques montés sur tringle, tombé net et occultation maîtrisée.",
    image: "/images/portfolio/image copy.webp",
  },
  {
    id: "3",
    title: "Triple rideau lin, taupe et anthracite",
    category: "rideaux",
    badge: "Séjour & Volume",
    description:
      "Composition de trois panneaux pour rythmer une grande baie de séjour.",
    image: "/images/portfolio/image copy 2.webp",
  },
  {
    id: "4",
    title: "Salon bleu nuit & fauteuils inclinables",
    category: "decor",
    badge: "Ambiance & Lumière",
    description:
      "Rideaux bleu profond et éclairage indirect pour une pièce de détente feutrée.",
    image: "/images/portfolio/image copy 3.webp",
  },
  {
    id: "5",
    title: "Voilages et rideaux à nouettes ivoire",
    category: "rideaux",
    badge: "Rideaux Architecturaux",
    description:
      "Superposition d'un voilage solaire et de panneaux ivoire retenus par des embrasses.",
    image: "/images/portfolio/image copy 4.webp",
  },
  {
    id: "6",
    title: "Rideaux contrastés gris et rose poudré",
    category: "rideaux",
    badge: "Salle à Manger",
    description:
      "Panneaux alternés sur mesure pour habiller l'ensemble des ouvertures d'une salle à manger.",
    image: "/images/portfolio/image copy 5.webp",
  },
  {
    id: "7",
    title: "Rideaux gris perle et voilage",
    category: "rideaux",
    badge: "Chambre & Intimité",
    description:
      "Double rideau œillets pour une chambre lumineuse, avec voilage filtrant.",
    image: "/images/portfolio/image copy 6.webp",
  },
  {
    id: "8",
    title: "Tenture murale plissée taupe",
    category: "rideaux",
    badge: "Rideaux Architecturaux",
    description:
      "Habillage intégral d'un pan de mur en plis réguliers, du sol au plafond.",
    image: "/images/portfolio/image copy 7.webp",
  },
  {
    id: "9",
    title: "Rideaux sable et brun en double rideau",
    category: "rideaux",
    badge: "Rideaux sur Mesure",
    description:
      "Superposition de deux tons chauds et d'un voilage pour adoucir la lumière.",
    image: "/images/portfolio/image copy 8.webp",
  },
  {
    id: "10",
    title: "Coin lecture : fauteuil capitonné et rideaux sable",
    category: "decor",
    badge: "Décoration Résidentielle",
    description:
      "Mise en scène d'un fauteuil à motif et de rideaux ton sable dans un salon lumineux.",
    image: "/images/portfolio/image copy 9.webp",
  },
  {
    id: "11",
    title: "Séjour en cuir caramel et drapés bronze",
    category: "decor",
    badge: "Décoration Résidentielle",
    description:
      "Canapé d'angle en cuir associé à des rideaux bronze et un sol en marbre clair.",
    image: "/images/portfolio/image copy 10.webp",
  },
  {
    id: "12",
    title: "Rénovation d'un fauteuil club noir",
    category: "fauteuils",
    badge: "Restauration",
    description:
      "Réfection du garnissage et habillage cuir noir, accoudoirs en bois verni.",
    image: "/images/portfolio/image copy 11.webp",
  },
  {
    id: "13",
    title: "Séjour ivoire et rideaux bronze",
    category: "decor",
    badge: "Décoration Résidentielle",
    description:
      "Canapé d'angle ivoire, tapis texturé et rideaux bronze pour un séjour apaisé.",
    image: "/images/portfolio/image copy 12.webp",
  },
  {
    id: "14",
    title: "Rideaux bleu nuit et voilage solaire",
    category: "rideaux",
    badge: "Rideaux sur Mesure",
    description:
      "Panneaux bleu nuit et voilage lumineux, soulignés par un éclairage de corniche.",
    image: "/images/portfolio/image copy 13.webp",
  },
  {
    id: "15",
    title: "Salon crème et boiseries",
    category: "decor",
    badge: "Décoration Résidentielle",
    description:
      "Canapé crème, fauteuil assorti, poufs et table basse sculpturale sur sol marbré.",
    image: "/images/portfolio/image copy 14.webp",
  },
];

const FILTERS: { label: string; cat: Category }[] = [
  { label: "Tous", cat: "all" },
  { label: "Fauteuils", cat: "fauteuils" },
  { label: "Rideaux", cat: "rideaux" },
  { label: "Décoration", cat: "decor" },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filteredProjects =
    activeCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === activeCategory);

  return (
    <section
      id="realisations"
      className="border-t border-hairline bg-background"
    >
      <div className="shell py-24 sm:py-32">
        {/* En-tête + filtres */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="display text-foreground">
              Chaque projet raconte une transformation.
            </h2>
          </div>

          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrer les réalisations"
          >
            {FILTERS.map((filter) => {
              const isActive = activeCategory === filter.cat;
              return (
                <button
                  key={filter.cat}
                  type="button"
                  onClick={() => setActiveCategory(filter.cat)}
                  aria-pressed={isActive}
                  className={`rounded-pill border px-4 py-2 text-[11px] uppercase tracking-[0.16em] transition-colors ${
                    isActive
                      ? "border-foreground bg-foreground text-background"
                      : "border-hairline text-muted-foreground hover:border-border hover:text-foreground"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grille — 4 colonnes en desktop */}
        <div className="mt-12 grid gap-x-4 gap-y-10 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <article key={project.id} className="group flex flex-col">
              {/* Les visuels sont majoritairement verticaux (3:4) : un cadre 4:5
                  les révèle presque entièrement au lieu de les rogner. */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-hairline bg-surface-2">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                {/* Voile discret au survol pour faire ressortir la photo */}
                <div className="pointer-events-none absolute inset-0 bg-foreground/0 transition-colors duration-500 group-hover:bg-foreground/10" />

                <span className="absolute left-3 top-3 rounded-pill bg-background/90 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-foreground backdrop-blur-sm">
                  {project.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col pt-4">
                <h3 className="card-title text-foreground transition-colors group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <a
                  href="https://wa.me/22870377743?text=Bonjour%20C.I.TA.M%20D%C3%89COR%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20un%20projet%20similaire."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex min-h-6 items-center gap-0.5 self-start pt-4 text-sm text-foreground transition-colors hover:text-accent"
                >
                  <span className="border-b border-hairline pb-0.5 transition-colors group-hover:border-accent">
                    Projet similaire
                  </span>
                  <ArrowUpRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
