"use client";

import { useState } from "react";
import Image from "next/image";

type Category = "all" | "fauteuils" | "rideaux" | "decor" | "auto";

interface Project {
  id: string;
  title: string;
  category: "fauteuils" | "rideaux" | "decor" | "auto";
  badge: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "Rénovation d'un canapé contemporain en bouclé ivoire",
    category: "fauteuils",
    badge: "Tapisserie & Salon",
    description: "Conception modulaire organique, mousse haute résilience et textile texturé haut de gamme pour une villa à Lomé 2.",
    image: "/images/sofa-modern.jpg",
  },
  {
    id: "2",
    title: "Transformation d'un fauteuil classique d'époque",
    category: "fauteuils",
    badge: "Restauration d'Époque",
    description: "Rembourrage crin végétal traditionnel, point invisible et finition cloutée bronze pour une suite privée.",
    image: "/images/artisan-workshop.jpg",
  },
  {
    id: "3",
    title: "Confection de voilages & tentures occultantes",
    category: "rideaux",
    badge: "Rideaux Architecturaux",
    description: "Hauteur sous plafond de 4,20m, retombée vague Wave et rails invisibles encastrés pour résidence balnéaire.",
    image: "/images/drapery-curtains.jpg",
  },
  {
    id: "4",
    title: "Aménagement complet & scénographie textile",
    category: "decor",
    badge: "Décoration Résidentielle",
    description: "Harmonisation complète d'un séjour de maître à Lomé : banquettes, coussins d'éditeur et tapis sur-mesure.",
    image: "/images/hero-living-room.jpg",
  },
  {
    id: "5",
    title: "Sellerie cuir perforé & surpiqûres bronze",
    category: "auto",
    badge: "Sellerie Automobile",
    description: "Réfection intégrale des sièges et panneaux de portes d'un SUV de luxe, cuir Nappa thermorégulateur.",
    image: "/images/car-interior.jpg",
  },
  {
    id: "6",
    title: "Agencement lounge & espace de réception",
    category: "decor",
    badge: "Espaces Professionnels",
    description: "Mobilier sur-mesure et traitement acoustique textile pour une galerie privée et bureau de direction.",
    image: "/images/villa-living.jpg",
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");

  const filterButtons: { label: string; cat: Category }[] = [
    { label: "Tous", cat: "all" },
    { label: "Fauteuils & Canapés", cat: "fauteuils" },
    { label: "Rideaux & Voilages", cat: "rideaux" },
    { label: "Décoration intérieure", cat: "decor" },
    { label: "Automobile", cat: "auto" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full py-16 sm:py-24 bg-surface-container-low" id="realisations">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="font-label-md text-xs text-secondary uppercase tracking-widest mb-2 block font-semibold">
              NOS RÉALISATIONS
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-4xl text-primary font-normal leading-tight">
              Chaque projet raconte une transformation.
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 bg-surface p-1.5 rounded-lg shadow-sm border border-outline-variant/30">
            {filterButtons.map((btn) => (
              <button
                key={btn.cat}
                type="button"
                onClick={() => setActiveCategory(btn.cat)}
                className={`px-3 sm:px-4 py-2 rounded text-xs uppercase tracking-wider transition-all font-label-sm font-medium ${
                  activeCategory === btn.cat
                    ? "bg-primary text-surface shadow-sm"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-surface rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-outline-variant/30 flex flex-col"
            >
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-surface-container">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-primary/85 backdrop-blur-sm text-surface font-label-sm text-[11px] uppercase tracking-wider rounded font-medium">
                  {project.badge}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-headline-sm text-lg sm:text-xl text-primary mb-2.5 font-medium leading-snug">
                    {project.title}
                  </h3>
                  <p className="font-body-sm text-sm text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="font-label-sm text-[11px] text-secondary uppercase tracking-widest font-semibold">
                    Atelier Lomé
                  </span>
                  <a
                    href="https://wa.me/22870377743?text=Bonjour,%20je%20suis%20int%C3%A9ress%C3%A9%20par%20un%20projet%20similaire%20%C3%A0%20votre%20r%C3%A9alisation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-primary hover:text-secondary transition-colors font-medium"
                  >
                    <span>Demander l&apos;équivalent</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
