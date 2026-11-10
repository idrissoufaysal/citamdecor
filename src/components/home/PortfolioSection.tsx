"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

type Category = "all" | "fauteuils" | "rideaux" | "decor" | "auto";

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
    title: "Canapé contemporain en bouclé ivoire",
    category: "fauteuils",
    badge: "Tapisserie & Salon",
    description:
      "Conception modulaire organique, mousse haute résilience et textile texturé pour une villa à Lomé 2.",
    image: "/images/sofa-modern.jpg",
  },
  {
    id: "2",
    title: "Restauration d'un fauteuil d'époque",
    category: "fauteuils",
    badge: "Restauration",
    description:
      "Rembourrage crin végétal traditionnel, point invisible et finition cloutée bronze.",
    image: "/images/artisan-workshop.jpg",
  },
  {
    id: "3",
    title: "Voilages & tentures occultantes",
    category: "rideaux",
    badge: "Rideaux Architecturaux",
    description:
      "Retombée vague Wave et rails invisibles encastrés pour une résidence balnéaire.",
    image: "/images/drapery-curtains.jpg",
  },
  {
    id: "4",
    title: "Scénographie d'un séjour de maître",
    category: "decor",
    badge: "Décoration Résidentielle",
    description:
      "Harmonisation complète d'un séjour : banquettes, coussins d'éditeur et tapis sur mesure.",
    image: "/images/hero-living-room.jpg",
  },
  {
    id: "5",
    title: "Sellerie cuir Nappa & surpiqûres",
    category: "auto",
    badge: "Sellerie Automobile",
    description:
      "Réfection intégrale des sièges et panneaux de portes d'un SUV de luxe, cuir thermorégulateur.",
    image: "/images/car-interior.jpg",
  },
  {
    id: "6",
    title: "Agencement lounge & réception",
    category: "decor",
    badge: "Espaces Professionnels",
    description:
      "Mobilier sur mesure et traitement acoustique textile pour une galerie privée.",
    image: "/images/villa-living.jpg",
  },
];

const FILTERS: { label: string; cat: Category }[] = [
  { label: "Tous", cat: "all" },
  { label: "Fauteuils", cat: "fauteuils" },
  { label: "Rideaux", cat: "rideaux" },
  { label: "Décoration", cat: "decor" },
  { label: "Automobile", cat: "auto" },
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

        {/* Grille */}
        <div className="mt-14 grid gap-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-card bg-surface"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-center opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/35 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="inline-flex rounded-pill bg-background/75 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-foreground backdrop-blur-sm">
                    {project.badge}
                  </span>
                  <h3 className="card-title mt-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <a
                    href="https://wa.me/22870377743?text=Bonjour%20C.I.TA.M%20D%C3%89COR%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20un%20projet%20similaire."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-6 items-center gap-1.5 text-sm text-foreground transition-colors hover:text-accent"
                  >
                    Projet similaire
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
