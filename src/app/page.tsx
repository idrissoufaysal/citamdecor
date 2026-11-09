import Image from "next/image";
import Link from "next/link";
import PortfolioSection from "@/components/home/PortfolioSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* ========================================== */}
      {/* 1. HERO SECTION                            */}
      {/* ========================================== */}
      <section className="relative w-full overflow-hidden -mt-28">
        <div className="relative w-full min-h-[92vh] flex items-center bg-primary">
          {/* Background image */}
          <Image
            src="/images/hero-living-room.jpg"
            alt="Salon de luxe tapissé par C.I.TA.M DÉCOR"
            fill
            priority
            className="object-cover object-center brightness-75"
            sizes="100vw"
          />

          {/* Gradients Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/40 pointer-events-none" />

          {/* Content */}
          <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 pt-36 pb-20 flex flex-col justify-between">
            <div className="max-w-3xl">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-surface-container-high/20 backdrop-blur-md rounded-full mb-6 border border-secondary-fixed/30">
                <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse" />
                <span className="font-label-sm text-xs uppercase tracking-widest text-secondary-fixed font-semibold">
                  ATELIER D&apos;ART &amp; DÉCORATION D&apos;INTÉRIEUR • LOMÉ, TOGO
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="font-display-xl text-3xl sm:text-5xl lg:text-6xl text-surface font-normal leading-tight tracking-tight mb-6">
                L&apos;art de sublimer <br />
                <span className="italic font-normal text-secondary-fixed">
                  vos espaces.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="font-body-lg text-base sm:text-lg text-surface-container-highest/90 max-w-2xl mb-8 leading-relaxed">
                Expert en tapisserie moderne et décoration intérieure, C.I.TA.M DÉCOR transforme vos meubles, vos espaces et vos intérieurs avec élégance et savoir-faire artisanal de haute précision.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <Link
                  className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-on-secondary rounded font-label-md text-sm uppercase tracking-wider hover:bg-surface hover:text-primary transition-all duration-300 shadow-lg font-semibold"
                  href="/services"
                >
                  <span>Découvrir nos services</span>
                  <span className="material-symbols-outlined text-[18px] ml-2">north_east</span>
                </Link>
                <a
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-surface/10 hover:bg-surface/20 text-surface backdrop-blur-md rounded font-label-md text-sm uppercase tracking-wider transition-all duration-300 border border-surface/20"
                  href="https://wa.me/22870377743"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px] text-secondary-fixed">chat</span>
                  <span>Discuter sur WhatsApp</span>
                </a>
              </div>

              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 text-surface-container-highest/80 font-body-sm text-xs sm:text-sm">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">verified</span>
                <span>Votre partenaire de référence en haute tapisserie et décoration sur-mesure à Lomé.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Ribbon */}
        <div className="w-full bg-surface-container-low shadow-sm border-b border-outline-variant/20">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-[26px]">history_edu</span>
                </div>
                <div>
                  <p className="font-headline-sm text-2xl font-bold text-primary leading-none mb-1">15+ Ans</p>
                  <p className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                    De savoir-faire artisanal togolais
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-[26px]">design_services</span>
                </div>
                <div>
                  <p className="font-headline-sm text-2xl font-bold text-primary leading-none mb-1">100%</p>
                  <p className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                    Confections personnalisées &amp; sur mesure
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-surface-container-high flex items-center justify-center shrink-0 text-secondary">
                  <span className="material-symbols-outlined text-[26px]">hotel</span>
                </div>
                <div>
                  <p className="font-headline-sm text-2xl font-bold text-primary leading-none mb-1">Excellence</p>
                  <p className="font-label-sm text-xs uppercase tracking-wider text-on-surface-variant font-medium">
                    Particuliers, Villas &amp; Hôtels de prestige
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. INTRODUCTION SECTION                   */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-surface" id="a-propos">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 flex flex-col items-start pr-0 lg:pr-6">
              <span className="font-label-md text-xs text-secondary uppercase tracking-widest mb-3 font-semibold">
                BIENVENUE CHEZ C.I.TA.M DÉCOR
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-4xl text-primary font-normal leading-tight mb-6">
                Le savoir-faire artisanal au service de vos intérieurs.
              </h2>
              <p className="font-body-md text-base text-on-surface-variant mb-4 leading-relaxed">
                Nous donnons une nouvelle vie à vos meubles et transformons vos espaces grâce à des solutions de tapisserie et de décoration pensées pour allier esthétique intemporelle, confort ergonomique et durabilité d&apos;exception.
              </p>
              <p className="font-body-sm text-sm text-on-surface-variant/80 mb-8 leading-relaxed">
                Installé à Lomé dans le quartier Agbalépédo, notre atelier réunit des maîtres tapissiers, couturières de voilages et selliers passionnés par le geste précis, la tension parfaite du textile et l’harmonie des teintes naturelles.
              </p>

              {/* Master artisan quote */}
              <div className="p-6 bg-surface-container-low rounded-lg mb-8 w-full border-l-4 border-secondary">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-secondary text-[32px] shrink-0">format_quote</span>
                  <div>
                    <p className="font-headline-sm text-base sm:text-lg italic text-primary leading-snug mb-2 font-normal">
                      « Chaque tissu est sélectionné pour sa noblesse, chaque piqûre témoigne d&apos;une exigence sans compromis. »
                    </p>
                    <p className="font-label-sm text-xs uppercase tracking-widest text-secondary font-semibold">
                      Direction de l&apos;Atelier • Lomé, Togo
                    </p>
                  </div>
                </div>
              </div>

              <Link
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-surface rounded font-label-md text-xs uppercase tracking-wider hover:bg-secondary transition-colors duration-300 font-semibold"
                href="/services"
              >
                <span>Découvrir notre histoire &amp; nos ateliers</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>

            {/* Right Visual Showcase */}
            <div className="lg:col-span-6 relative mt-8 lg:mt-0">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-surface-container-high h-[460px] sm:h-[540px]">
                <Image
                  src="/images/artisan-workshop.jpg"
                  alt="Maître artisan tapissier à l'atelier C.I.TA.M DÉCOR Agbalépédo Lomé"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Atelier badge pill overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-primary/90 backdrop-blur-md rounded-lg text-surface flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-surface text-[20px]">handyman</span>
                  </div>
                  <div>
                    <p className="font-label-sm text-xs uppercase tracking-wider text-secondary-fixed font-semibold">
                      Atelier d&apos;Agbalépédo
                    </p>
                    <p className="font-body-sm text-xs sm:text-sm text-surface-container-highest">
                      Couture à la main &amp; Restauration d&apos;art
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. SERVICES OVERVIEW                      */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-surface-container-low" id="services">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="font-label-md text-xs text-secondary uppercase tracking-widest mb-2 block font-semibold">
                NOTRE EXPERTISE
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-4xl text-primary font-normal leading-tight">
                Des solutions adaptées à chaque espace.
              </h2>
            </div>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant max-w-md">
              De la réfection d&apos;un fauteuil familial à la scénographie textile complète de résidences et palaces, découvrez l’étendue de nos interventions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* SERVICE 01: TAPISSERIE */}
            <div className="bg-surface rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group border border-outline-variant/30">
              <div>
                <div className="relative h-48 w-full rounded overflow-hidden mb-6 bg-surface-container">
                  <Image
                    src="/images/artisan-workshop.jpg"
                    alt="Tapisserie d'ameublement et réfection de chaises"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary/85 text-surface font-label-sm text-[11px] uppercase tracking-wider rounded font-medium">
                    Service 01
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg sm:text-xl text-primary mb-2 font-medium">
                  Tapisserie d&apos;Ameublement
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mb-5 leading-relaxed">
                  Rénovation et personnalisation de vos fauteuils et sièges pour leur redonner confort, élégance et une seconde vie.
                </p>
                <ul className="flex flex-col gap-2 font-body-sm text-xs text-on-surface-variant mb-6">
                  {["Rénovation de fauteuils", "Réfection de sièges", "Personnalisation des meubles", "Changement de tissus nobles", "Finitions passepoil / clouterie"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                className="inline-flex items-center gap-2 font-label-md text-xs uppercase tracking-wider text-secondary group-hover:text-primary transition-colors pt-4 border-t border-outline-variant/20 font-semibold"
                href="/services#ameublement"
              >
                <span>En savoir plus</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>

            {/* SERVICE 02: RIDEAUX SUR MESURE */}
            <div className="bg-surface rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group border border-outline-variant/30">
              <div>
                <div className="relative h-48 w-full rounded overflow-hidden mb-6 bg-surface-container">
                  <Image
                    src="/images/drapery-curtains.jpg"
                    alt="Confection de rideaux sur mesure et voilages à Lomé"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary/85 text-surface font-label-sm text-[11px] uppercase tracking-wider rounded font-medium">
                    Service 02
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg sm:text-xl text-primary mb-2 font-medium">
                  Rideaux Sur Mesure
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mb-5 leading-relaxed">
                  Des rideaux conçus selon vos envies et les dimensions de vos espaces pour créer une ambiance harmonieuse et feutrée.
                </p>
                <ul className="flex flex-col gap-2 font-body-sm text-xs text-on-surface-variant mb-6">
                  {["Prise de mesures à domicile", "Conseils sur le choix des tissus", "Confection haute couture", "Pose soignée et tringles", "Accessoires & embrasses"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                className="inline-flex items-center gap-2 font-label-md text-xs uppercase tracking-wider text-secondary group-hover:text-primary transition-colors pt-4 border-t border-outline-variant/20 font-semibold"
                href="/services#draperies"
              >
                <span>En savoir plus</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>

            {/* SERVICE 03: DÉCORATION INTÉRIEURE */}
            <div className="bg-surface rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group border border-outline-variant/30">
              <div>
                <div className="relative h-48 w-full rounded overflow-hidden mb-6 bg-surface-container">
                  <Image
                    src="/images/hero-living-room.jpg"
                    alt="Décoration intérieure et agencement haut de gamme"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary/85 text-surface font-label-sm text-[11px] uppercase tracking-wider rounded font-medium">
                    Service 03
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg sm:text-xl text-primary mb-2 font-medium">
                  Décoration Intérieure
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mb-5 leading-relaxed">
                  Nous vous accompagnons dans la création d&apos;intérieurs élégants, harmonieux et rigoureusement adaptés à votre style.
                </p>
                <ul className="flex flex-col gap-2 font-body-sm text-xs text-on-surface-variant mb-6">
                  {["Conseils décoratifs personnalisés", "Harmonisation des couleurs", "Choix des matières & textures", "Aménagement global de salon", "Scénographie résidentielle"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                className="inline-flex items-center gap-2 font-label-md text-xs uppercase tracking-wider text-secondary group-hover:text-primary transition-colors pt-4 border-t border-outline-variant/20 font-semibold"
                href="/services#amenagement"
              >
                <span>En savoir plus</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>

            {/* SERVICE 04: TAPISSERIE AUTOMOBILE */}
            <div className="bg-surface rounded-lg p-6 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 group border border-outline-variant/30">
              <div>
                <div className="relative h-48 w-full rounded overflow-hidden mb-6 bg-surface-container">
                  <Image
                    src="/images/car-interior.jpg"
                    alt="Tapisserie et sellerie automobile cuir haut de gamme"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="25vw"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-primary/85 text-surface font-label-sm text-[11px] uppercase tracking-wider rounded font-medium">
                    Service 04
                  </span>
                </div>
                <h3 className="font-headline-sm text-lg sm:text-xl text-primary mb-2 font-medium">
                  Tapisserie Automobile
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant mb-5 leading-relaxed">
                  Redonnez à l&apos;intérieur de votre véhicule une allure d&apos;exception, confortable, luxueuse et sur mesure.
                </p>
                <ul className="flex flex-col gap-2 font-body-sm text-xs text-on-surface-variant mb-6">
                  {["Réfection de sièges auto", "Personnalisation cuir & alcantara", "Remplacement des revêtements", "Rénovation du ciel de pavillon", "Finitions sellier piquées main"].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-secondary text-[16px]">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                className="inline-flex items-center gap-2 font-label-md text-xs uppercase tracking-wider text-secondary group-hover:text-primary transition-colors pt-4 border-t border-outline-variant/20 font-semibold"
                href="/services#automobile"
              >
                <span>En savoir plus</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. WHY CHOOSE US                           */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-label-md text-xs text-secondary uppercase tracking-widest mb-2 block font-semibold">
              L&apos;EXCELLENCE C.I.TA.M
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-4xl text-primary font-normal leading-tight">
              Pourquoi choisir C.I.TA.M DÉCOR ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "PILIER 01",
                icon: "handyman",
                title: "Savoir-faire artisanal",
                desc: "Une attention méticuleuse portée aux détails, à la tension des tissus et à l’exactitude de chaque piqûre.",
              },
              {
                num: "PILIER 02",
                icon: "tune",
                title: "Solutions personnalisées",
                desc: "Des réalisations sur mesure créées selon vos goûts, la configuration de vos pièces et vos exigences d'usage.",
              },
              {
                num: "PILIER 03",
                icon: "palette",
                title: "Qualité des matériaux",
                desc: "Une sélection soignée de velours, lins, bouclés, similis et cuirs de première qualité testés pour résister au temps.",
              },
              {
                num: "PILIER 04",
                icon: "support_agent",
                title: "Accompagnement pro",
                desc: "Des conseils avisés dès la conception, un devis clair et un suivi rigoureux jusqu’à la pose finale à Lomé.",
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="p-8 bg-surface-container-low rounded-lg flex flex-col justify-start border border-outline-variant/30"
              >
                <div className="w-14 h-14 rounded bg-surface-container flex items-center justify-center text-secondary mb-6 shadow-sm">
                  <span className="material-symbols-outlined text-[28px]">{pillar.icon}</span>
                </div>
                <span className="font-label-sm text-[11px] text-secondary uppercase tracking-wider mb-2 font-semibold">
                  {pillar.num}
                </span>
                <h3 className="font-headline-sm text-lg sm:text-xl text-primary mb-3 font-medium">
                  {pillar.title}
                </h3>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. PORTFOLIO SECTION                       */}
      {/* ========================================== */}
      <PortfolioSection />

      {/* ========================================== */}
      {/* 6. TESTIMONIALS SECTION                   */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-label-md text-xs text-secondary uppercase tracking-widest mb-2 block font-semibold">
              TÉMOIGNAGES
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-4xl text-primary font-normal leading-tight">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "C.I.TA.M DÉCOR a restauré l'ensemble de notre salon d'époque avec un velours d'une qualité exceptionnelle. Travail d'orfèvre, respect des délais et pose impeccable.",
                author: "M. Lawson-Hellu",
                role: "Propriétaire de villa • Lomé 2",
              },
              {
                quote: "Les rideaux sur mesure de notre résidence ont totalement transformé la luminosité et l'acoustique de nos pièces de vie. Équipe très professionnelle et discrète.",
                author: "Mme Amouzou",
                role: "Architecte d'intérieur • Baguida",
              },
              {
                quote: "La réfection en cuir de l'habitacle de mon véhicule dépasse mes attentes. Le soin apporté aux surpiqûres et à la tension du cuir est digne des meilleurs ateliers.",
                author: "Dr. Mensah",
                role: "Client Particulier • Tokoin",
              },
            ].map((t, idx) => (
              <div
                key={idx}
                className="p-8 bg-surface-container-low rounded-lg flex flex-col justify-between border border-outline-variant/30 shadow-sm"
              >
                <div>
                  <div className="flex items-center gap-1 text-secondary mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-[18px]">star</span>
                    ))}
                  </div>
                  <p className="font-body-md text-sm sm:text-base text-primary italic leading-relaxed mb-6">
                    « {t.quote} »
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant/20">
                  <p className="font-title-md text-sm font-semibold text-primary">{t.author}</p>
                  <p className="font-label-sm text-xs text-on-surface-variant mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. CTA BANNER                              */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-primary text-on-primary">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="bg-primary-container p-8 sm:p-12 lg:p-16 rounded-xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-secondary/30">
            <div className="flex flex-col max-w-2xl text-center lg:text-left">
              <span className="font-label-sm text-xs uppercase tracking-widest text-secondary-fixed block mb-2 font-semibold">
                Conseil • Devis Sans Engagement
              </span>
              <h2 className="font-headline-md text-2xl sm:text-4xl text-surface-container-lowest tracking-tight mb-3">
                Un projet spécifique en tête ?
              </h2>
              <p className="font-body-md text-sm sm:text-base text-outline-variant leading-relaxed">
                Nos maîtres tapissiers vous répondent directement au{" "}
                <a className="text-surface-container-lowest font-medium hover:underline" href="tel:+22870377743">
                  +228 70 37 77 43
                </a>{" "}
                ou sur WhatsApp pour échanger autour de vos plans, photos ou envies.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-secondary text-on-secondary rounded font-label-md text-xs sm:text-sm uppercase tracking-wider hover:bg-surface hover:text-primary transition-all duration-300 font-semibold"
                href="/contact"
              >
                <span>Demander un devis en ligne</span>
                <span className="material-symbols-outlined text-[18px] ml-2">send</span>
              </Link>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-surface/10 hover:bg-surface/20 text-surface rounded font-label-md text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 border border-surface/20"
                href="https://wa.me/22870377743"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">chat</span>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
