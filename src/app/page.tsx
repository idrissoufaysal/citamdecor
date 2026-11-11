import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  Clock,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import ArtVistaHero from "@/components/home/ArtVistaHero";
import PortfolioSection from "@/components/home/PortfolioSection";

const SERVICES = [
  {
    index: "01",
    title: "Tapisserie d'ameublement",
    description:
      "Rénovation, réfection et personnalisation de vos fauteuils, canapés et sièges anciens. Nous restaurons le galbe et l'âme de chaque pièce.",
    items: ["Garnissage crin & mousse HR", "Passepoil & clouterie", "Tissus nobles"],
  },
  {
    index: "02",
    title: "Rideaux & draperies",
    description:
      "Des tentures et voilages conçus selon vos envies et les volumes de vos espaces, de la villa balnéaire aux résidences de maître.",
    items: ["Prise de cotes à domicile", "Tringles & rails encastrés", "Confection haute couture"],
  },
  {
    index: "03",
    title: "Décoration intérieure",
    description:
      "Nous concevons des intérieurs harmonieux, chaleureux et durables, de l'agencement mobilier à l'équilibre des palettes minérales et boisées.",
    items: ["Harmonisation colorimétrique", "Matières & textures", "Scénographie complète"],
  },
  {
    index: "04",
    title: "Sellerie automobile",
    description:
      "Redonnez à l'intérieur de votre véhicule une allure d'exception : habillages sur mesure, cuirs sélectionnés et finitions sellier.",
    items: ["Cuir Nappa & Alcantara", "Volants & pavillons", "Surpiqûres piquées main"],
  },
];

const PROCESS = [
  {
    num: "01",
    title: "Diagnostic & écoute",
    description:
      "Prise de cotes à votre domicile ou inspection détaillée de votre mobilier dans notre atelier d'Agbalépédo.",
  },
  {
    num: "02",
    title: "Sélection des matières",
    description:
      "Immersion dans nos nuanciers de toiles, velours, lins et cuirs pleine fleur, avec conseils sur les garnitures.",
  },
  {
    num: "03",
    title: "Confection en atelier",
    description:
      "Découpe, piquage sellier et tapissage traditionnel par nos maîtres artisans togolais.",
  },
  {
    num: "04",
    title: "Livraison & pose",
    description:
      "Installation soignée sur site, pose des tringles et vérification minutieuse de chaque finition.",
  },
];

const MATERIALS = [
  { name: "Lin naturel", sub: "Toile lourde lavée" },
  { name: "Bouclé écru", sub: "Laine & coton peigné" },
  { name: "Velours côtelé", sub: "Profondeur & douceur" },
  { name: "Cuir pleine fleur", sub: "Tannage végétal" },
  { name: "Alcantara", sub: "Microfibre technique" },
  { name: "Voilage brume", sub: "Filtrage solaire" },
];

const TESTIMONIALS = [
  {
    quote:
      "C.I.TA.M DÉCOR a restauré l'ensemble de notre salon d'époque avec un velours d'une qualité exceptionnelle. Travail d'orfèvre, respect des délais et pose impeccable.",
    author: "M. Lawson-Hellu",
    role: "Propriétaire de villa • Lomé 2",
  },
  {
    quote:
      "Les rideaux sur mesure de notre résidence ont totalement transformé la luminosité et l'acoustique de nos pièces de vie. Équipe très professionnelle et discrète.",
    author: "Mme Amouzou",
    role: "Architecte d'intérieur • Baguida",
  },
  {
    quote:
      "La réfection en cuir de l'habitacle de mon véhicule dépasse mes attentes. Le soin apporté aux surpiqûres et à la tension du cuir est digne des meilleurs ateliers.",
    author: "Dr. Mensah",
    role: "Client particulier • Tokoin",
  },
];

const COMMITMENTS = [
  "Échantillons de tissus consultables sur place",
  "Proposition claire, transparente et sans engagement",
  "Déplacement pour prise de cotes in situ",
  "Garantie de tenue des coutures et garnitures",
];

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <ArtVistaHero />

      {/* ═══════════ À PROPOS ═══════════ */}
      <section
        id="a-propos"
        className="theme-light border-t border-hairline bg-background"
      >
        <div className="shell py-24 sm:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display text-foreground">
                Le geste juste,
                <br />
                la matière noble.
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pt-14">
              <p className="body-lg text-foreground/90">
                Centre International de Tapisserie Moderne — Décoration. Depuis
                notre atelier d&apos;Agbalépédo, nous habillons les intérieurs de
                Lomé avec une exigence d&apos;artisan.
              </p>
              <p className="mt-6 max-w-[58ch] text-base leading-relaxed text-muted-foreground">
                Nous donnons une nouvelle vie à vos meubles et transformons vos
                espaces grâce à des solutions de tapisserie et de décoration
                pensées pour allier esthétique intemporelle, confort ergonomique
                et durabilité. Maîtres tapissiers, couturières de voilages et
                selliers travaillent la tension du textile, la précision du geste
                et l&apos;harmonie des teintes naturelles.
              </p>

              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-hairline pt-8">
                <div>
                  <dt className="eyebrow">Savoir-faire</dt>
                  <dd className="mt-2 text-3xl font-medium tracking-tight text-foreground">
                    04
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Fait main</dt>
                  <dd className="mt-2 text-3xl font-medium tracking-tight text-foreground">
                    100%
                  </dd>
                </div>
                <div>
                  <dt className="eyebrow">Atelier</dt>
                  <dd className="mt-2 text-3xl font-medium tracking-tight text-foreground">
                    Lomé
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="mt-16 grid gap-1 sm:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-surface-2">
              <Image
                src="/images/portfolio/portfolio-01.webp"
                alt="Canapé trois places rhabillé en similicuir terracotta par l'atelier"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-surface-2">
              <Image
                src="/images/portfolio/portfolio-05.webp"
                alt="Rideaux ivoire et voilages sur mesure posés dans un séjour"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section id="services" className="border-t border-hairline bg-surface/40">
        <div className="shell py-24 sm:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="display text-foreground">
                Quatre savoir-faire,
                <br />
                une même exigence.
              </h2>
            </div>
            <p className="body-lg max-w-md text-muted-foreground md:justify-self-end">
              De la réfection d&apos;un fauteuil familial à la scénographie
              textile complète d&apos;une résidence.
            </p>
          </div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-card bg-hairline sm:grid-cols-2">
            {SERVICES.map((service) => (
              <article
                key={service.index}
                className="flex flex-col bg-background p-8 transition-colors hover:bg-surface sm:p-10"
              >
                <span className="text-sm tracking-[0.2em] text-accent">
                  {service.index}
                </span>
                <h3 className="card-title mt-4 text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-col gap-2 text-sm text-muted-foreground">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span
                        aria-hidden="true"
                        className="h-1 w-1 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm text-foreground transition-colors hover:text-accent"
                >
                  Discuter de ce savoir-faire
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PROCESSUS ═══════════ */}
      <section className="theme-light border-t border-hairline bg-background">
        <div className="shell py-24 sm:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="display text-foreground">
                De la première écoute
                <br />
                à la pose finale.
              </h2>
            </div>
            <p className="body-lg max-w-md text-muted-foreground md:justify-self-end">
              Une rigueur d&apos;exécution sans compromis, à chaque étape du
              projet.
            </p>
          </div>

          <ol className="mt-14 border-y border-hairline">
            {PROCESS.map((step) => (
              <li
                key={step.num}
                className="grid gap-3 border-b border-hairline py-8 last:border-b-0 sm:grid-cols-12 sm:items-baseline sm:gap-6"
              >
                <span className="text-sm tracking-[0.2em] text-accent sm:col-span-2">
                  {step.num}
                </span>
                <h3 className="card-title text-foreground sm:col-span-4">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground sm:col-span-6">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══════════ MATIÈRES ═══════════ */}
      <section className="border-t border-hairline bg-surface/40">
        <div className="shell py-24 sm:py-32">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <h2 className="display text-foreground">
                Les textures
                <br />
                de l&apos;atelier.
              </h2>
            </div>
            <p className="body-lg max-w-md text-muted-foreground md:justify-self-end">
              Chaque étoffe est choisie pour sa noblesse tactile et sa tenue sous
              le climat de Lomé.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-card bg-hairline sm:grid-cols-3 lg:grid-cols-6">
            {MATERIALS.map((material) => (
              <div key={material.name} className="bg-background p-6">
                <p className="text-base text-foreground">{material.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {material.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ RÉALISATIONS ═══════════ */}
      <PortfolioSection />

      {/* ═══════════ TÉMOIGNAGES ═══════════ */}
      <section className="theme-light border-t border-hairline bg-surface">
        <div className="shell py-24 sm:py-32">
          <div className="max-w-2xl">
            <h2 className="display text-foreground">
              Ce que disent nos clients.
            </h2>
          </div>

          <div className="mt-14 grid gap-1 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <figure
                key={testimonial.author}
                className="flex flex-col justify-between rounded-card bg-background p-8"
              >
                <blockquote className="text-base leading-relaxed text-foreground/90">
                  <span aria-hidden="true" className="text-accent">
                    “
                  </span>
                  {testimonial.quote}
                  <span aria-hidden="true" className="text-accent">
                    ”
                  </span>
                </blockquote>
                <figcaption className="mt-8 border-t border-hairline pt-5">
                  <p className="text-sm text-foreground">{testimonial.author}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CONTACT — INFORMATIONS UNIQUEMENT ═══════════ */}
      <section id="contact" className="border-t border-hairline bg-background">
        <div className="shell py-24 sm:py-32">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <h2 className="display text-foreground">
                Venez pousser
                <br />
                la porte de l&apos;atelier.
              </h2>
              <p className="body-lg mt-6 max-w-md text-muted-foreground">
                Notre atelier d&apos;Agbalépédo vous accueille, et notre équipe se
                déplace dans tout le Togo.
              </p>
              <a
                href="https://wa.me/22870377743?text=Bonjour%20C.I.TA.M%20D%C3%89COR%2C%20je%20souhaite%20un%20conseil."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-solid mt-10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Écrire sur WhatsApp
              </a>
            </div>

            <div className="grid gap-px overflow-hidden rounded-card bg-hairline sm:grid-cols-2 lg:col-span-7">
              {/* Adresse */}
              <div className="bg-surface p-8">
                <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="eyebrow mt-5">Adresse</p>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  Agbalépédo, non loin de la station NAGODÉ
                  <br />
                  Lomé — Togo
                </p>
              </div>

              {/* Téléphones */}
              <div className="bg-surface p-8">
                <Phone className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="eyebrow mt-5">Téléphones</p>
                <div className="mt-3 flex flex-col gap-1 text-base text-foreground">
                  <a
                    href="tel:+22870377743"
                    className="transition-colors hover:text-accent"
                  >
                    +228 70 37 77 43
                  </a>
                  <a
                    href="tel:+22879202601"
                    className="transition-colors hover:text-accent"
                  >
                    +228 79 20 26 01
                  </a>
                </div>
              </div>

              {/* Horaires */}
              <div className="bg-surface p-8">
                <Clock className="h-5 w-5 text-accent" aria-hidden="true" />
                <p className="eyebrow mt-5">Horaires</p>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  Lundi — Samedi
                  <br />
                  08h00 — 18h30
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  Fermé le dimanche
                </p>
              </div>

              {/* WhatsApp */}
              <div className="bg-surface p-8">
                <MessageCircle
                  className="h-5 w-5 text-accent"
                  aria-hidden="true"
                />
                <p className="eyebrow mt-5">WhatsApp</p>
                <p className="mt-3 text-base leading-relaxed text-foreground">
                  Un conseil, une photo, une question : écrivez-nous directement.
                </p>
                <a
                  href="https://wa.me/22870377743"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex min-h-6 items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
                >
                  Ouvrir la conversation
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Engagements */}
          <ul className="mt-14 grid gap-4 border-t border-hairline pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {COMMITMENTS.map((commitment) => (
              <li
                key={commitment}
                className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
              >
                <Check
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                {commitment}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
