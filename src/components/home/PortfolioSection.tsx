import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  number: string;
  src: string;
  alt: string;
}

/*
 * Galerie des réalisations — photos réelles de l'atelier.
 * Pour personnaliser : ajoutez un champ `title` par projet
 * et affichez-le dans la carte ci-dessous.
 */
const PROJECTS: Project[] = [
  {
    number: "01",
    src: "/images/portfolio/portfolio-01.webp",
    alt: "Réalisation N°01 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "02",
    src: "/images/portfolio/portfolio-02.webp",
    alt: "Réalisation N°02 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "03",
    src: "/images/portfolio/portfolio-03.webp",
    alt: "Réalisation N°03 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "04",
    src: "/images/portfolio/portfolio-04.webp",
    alt: "Réalisation N°04 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "05",
    src: "/images/portfolio/portfolio-05.webp",
    alt: "Réalisation N°05 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "06",
    src: "/images/portfolio/portfolio-06.webp",
    alt: "Réalisation N°06 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "07",
    src: "/images/portfolio/portfolio-07.webp",
    alt: "Réalisation N°07 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "08",
    src: "/images/portfolio/portfolio-08.webp",
    alt: "Réalisation N°08 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "09",
    src: "/images/portfolio/portfolio-09.webp",
    alt: "Réalisation N°09 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "10",
    src: "/images/portfolio/portfolio-10.webp",
    alt: "Réalisation N°10 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "11",
    src: "/images/portfolio/portfolio-11.webp",
    alt: "Réalisation N°11 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "12",
    src: "/images/portfolio/portfolio-12.webp",
    alt: "Réalisation N°12 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "13",
    src: "/images/portfolio/portfolio-13.webp",
    alt: "Réalisation N°13 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "14",
    src: "/images/portfolio/portfolio-14.webp",
    alt: "Réalisation N°14 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
  {
    number: "15",
    src: "/images/portfolio/portfolio-15.webp",
    alt: "Réalisation N°15 de l'atelier C.I.TA.M DÉCOR à Lomé",
  },
];

const WHATSAPP_URL =
  "https://wa.me/22870377743?text=Bonjour%20C.I.TA.M%20D%C3%89COR%2C%20je%20suis%20int%C3%A9ress%C3%A9%20par%20un%20projet%20similaire.";

export default function PortfolioSection() {
  return (
    <section
      id="realisations"
      className="border-t border-hairline bg-background"
    >
      <div className="shell py-24 sm:py-32">
        {/* En-tête */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="display text-foreground">
              Chaque projet raconte une transformation.
            </h2>
          </div>

          <p className="body-lg max-w-md text-muted-foreground">
            Une sélection de réalisations livrées et posées par l&apos;atelier,
            chez nos clients du Grand Lomé.
          </p>
        </div>

        {/* Galerie */}
        <div className="mt-14 grid gap-1 sm:grid-cols-2 lg:grid-cols-4">
          {PROJECTS.map((project) => (
            <article
              key={project.number}
              className="group relative overflow-hidden rounded-card bg-surface"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={project.src}
                  alt={project.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <span className="absolute bottom-5 left-5 inline-flex rounded-pill bg-background/75 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-foreground backdrop-blur-sm">
                  Réalisation N°{project.number}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Appel à l'action */}
        <div className="mt-14 flex justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            Commander un projet similaire
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
