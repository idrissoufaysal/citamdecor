import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Domaines d'Expertise — C.I.TA.M DÉCOR Lomé",
  description:
    "Découvrez les 4 départements d'artisanat d'exception de C.I.TA.M DÉCOR à Lomé : tapisserie d'ameublement, rideaux sur mesure, décoration intérieure et sellerie automobile.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      {/* ========================================== */}
      {/* 1. HERO / HEADER SECTION                   */}
      {/* ========================================== */}
      <section className="relative w-full py-12 sm:py-20 bg-surface-container-low border-b border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col max-w-4xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-secondary" />
              <span className="font-label-md text-xs uppercase text-secondary tracking-widest font-semibold">
                Savoir-Faire &amp; Ateliers Lomé
              </span>
            </div>
            <h1 className="font-display-lg text-3xl sm:text-5xl text-primary tracking-tight mb-4 font-normal">
              Nos Domaines d&apos;Expertise
            </h1>
            <p className="font-body-lg text-base sm:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
              De la réfection d’assises de collection à la confection de tentures architecturales et sellerie automobile d’exception à Lomé. Un artisanat de précision alliant le geste séculaire à la modernité des matières.
            </p>
          </div>

          {/* Quick-Nav Anchor Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              {
                id: "ameublement",
                step: "01 / Ameublement",
                title: "Fauteuils & Sièges",
              },
              {
                id: "draperies",
                step: "02 / Draperies",
                title: "Rideaux Sur Mesure",
              },
              {
                id: "amenagement",
                step: "03 / Intérieurs",
                title: "Espaces & Décoration",
              },
              {
                id: "automobile",
                step: "04 / Sellerie",
                title: "Cabines Automobiles",
              },
            ].map((dep) => (
              <a
                key={dep.id}
                href={`#${dep.id}`}
                className="group p-5 bg-surface-container-lowest rounded-lg hover:bg-surface-container transition-all flex flex-col justify-between border border-outline-variant/30 shadow-sm"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-label-sm text-xs text-secondary uppercase font-semibold">
                    {dep.step}
                  </span>
                  <span className="material-symbols-outlined text-secondary transition-transform group-hover:translate-x-1 text-[18px]">
                    arrow_forward
                  </span>
                </div>
                <p className="font-title-md text-sm sm:text-base text-primary font-medium">
                  {dep.title}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 2. DÉPARTEMENT 1 : AMEUBLEMENT             */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-surface" id="ameublement">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-semibold mb-2">
                Département I • Assises d&apos;Art
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-4xl text-primary tracking-tight mb-4 font-normal">
                Tapisserie d’Ameublement &amp; Restauration
              </h2>
              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mb-6 leading-relaxed">
                Rénovation et personnalisation de vos fauteuils et sièges pour leur redonner confort, élégance et une seconde vie. Nos maîtres artisans restaurent le galbe et l&apos;âme de vos pièces patrimoniales ou contemporaines.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-5 bg-surface-container-low rounded-lg border border-outline-variant/20">
                  <span className="font-title-md text-base text-primary font-semibold block mb-1">
                    Rénovation &amp; Réfection
                  </span>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                    Ressorts hélicoïdaux, sanglage traditionnel, et garnissage en crin ou mousse haute résilience 45kg/m³.
                  </p>
                </div>
                <div className="p-5 bg-surface-container-low rounded-lg border border-outline-variant/20">
                  <span className="font-title-md text-base text-primary font-semibold block mb-1">
                    Finitions &amp; Clouterie
                  </span>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                    Pose méticuleuse de passepoils sur-mesure, double corde, clous tapissiers bronze et coutures anglaises.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <span className="font-label-sm text-xs uppercase tracking-widest text-on-surface font-semibold block mb-3">
                  Matières &amp; Tissus en Atelier :
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Bouclés écru", "Velours de coton ras", "Lin lourd naturel", "Cuirs pleine fleur", "Mousses HR 45kg/m³"].map((mat) => (
                    <span
                      key={mat}
                      className="font-label-sm text-xs px-3.5 py-1.5 bg-surface-container-high text-on-surface rounded-full border border-outline-variant/30"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-on-secondary rounded-lg font-label-md text-xs uppercase tracking-wider hover:bg-primary transition-colors font-semibold"
                  href="https://wa.me/22870377743?text=Bonjour%20C.I.TA.M%20D%C3%89COR,%20je%20souhaite%20un%20devis%20pour%20la%20r%C3%A9fection%20de%20fauteuils."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Demander un devis pour vos assises</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="w-full h-[460px] sm:h-[520px] rounded-lg overflow-hidden relative shadow-lg bg-surface-container">
                <Image
                  src="/images/artisan-workshop.jpg"
                  alt="Atelier de tapisserie C.I.TA.M DÉCOR à Lomé"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-on-primary p-4 rounded-lg hidden sm:flex items-center gap-3 shadow-xl">
                <span className="material-symbols-outlined text-secondary-fixed text-[26px]">verified</span>
                <div>
                  <p className="font-label-sm text-xs uppercase tracking-wider text-secondary-fixed font-semibold">
                    Atelier Lomé Agbalépédo
                  </p>
                  <p className="font-body-sm text-xs text-surface-container-lowest">
                    Façonnage 100% fait main
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 3. DÉPARTEMENT 2 : RIDEAUX & DRAPERIES    */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-surface-container-low" id="draperies">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="w-full h-[460px] sm:h-[520px] rounded-lg overflow-hidden relative shadow-lg bg-surface-container">
                <Image
                  src="/images/drapery-curtains.jpg"
                  alt="Confection de draperies et rideaux sur mesure à Lomé"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-surface-container-lowest p-4 rounded-lg hidden sm:flex items-center gap-3 shadow-md border border-outline-variant/30">
                <span className="material-symbols-outlined text-secondary text-[26px]">square_foot</span>
                <div>
                  <p className="font-label-sm text-xs uppercase tracking-wider text-secondary font-semibold">
                    Service Clé-en-main
                  </p>
                  <p className="font-body-sm text-xs text-primary">
                    Prise de mesure &amp; Pose à domicile
                  </p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
              <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-semibold mb-2">
                Département II • Architecture Textile
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-4xl text-primary tracking-tight mb-4 font-normal">
                Rideaux &amp; Draperies Sur Mesure
              </h2>
              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mb-6 leading-relaxed">
                Des tentures et voilages conçus selon vos envies et les volumes de vos espaces pour créer une ambiance feutrée et harmonieuse. De la villa balnéaire aux résidences consulaires de Lomé.
              </p>

              <div className="flex flex-col gap-3.5 mb-6">
                {[
                  {
                    title: "Prise de cotes in situ :",
                    desc: "Déplacement de notre équipe technique partout dans le Grand Lomé.",
                  },
                  {
                    title: "Tringles architecturales :",
                    desc: "Rails encastrés, systèmes motorisés invisibles, finitions laiton vieilli ou noir mat.",
                  },
                  {
                    title: "Confection haute couture :",
                    desc: "Têtes flamandes, plis vagues Wave, œillets martelés, embrasses artisanales coordonnées.",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5 shrink-0">
                      check_circle
                    </span>
                    <div>
                      <strong className="font-body-md text-sm text-primary">{item.title} </strong>
                      <span className="font-body-md text-sm text-on-surface-variant">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5 bg-surface-container rounded-lg mb-8 border border-outline-variant/30">
                <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-semibold block mb-1">
                  Typologies disponibles :
                </span>
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                  Voilages en lin aéré, rideaux occultants thermiques adaptés au climat tropical, velours de scène acoustiques et doubles-rideaux doublés satinette.
                </p>
              </div>

              <div>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-on-secondary rounded-lg font-label-md text-xs uppercase tracking-wider hover:bg-primary transition-colors font-semibold"
                  href="https://wa.me/22870377743?text=Bonjour%20C.I.TA.M%20D%C3%89COR,%20je%20d%C3%A9sire%20une%20visite%20pour%20la%20prise%20de%20cotes%20de%20rideaux."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Programmer une prise de cotes</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 4. DÉPARTEMENT 3 : DÉCORATION D'INTÉRIEUR  */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-surface" id="amenagement">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text Column */}
            <div className="lg:col-span-6 flex flex-col">
              <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-semibold mb-2">
                Département III • Espaces Résidentiels &amp; Hôteliers
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-4xl text-primary tracking-tight mb-4 font-normal">
                Décoration &amp; Aménagement d’Intérieur
              </h2>
              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mb-6 leading-relaxed">
                Nous concevons des intérieurs harmonieux, chaleureux et durables. Notre maîtrise textile s&apos;étend à l&apos;agencement mobilier complet, aux luminaires et à l&apos;équilibre subtil des palettes minérales et boisées.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-5 bg-surface-container-low rounded-lg border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-[24px] mb-2 block">palette</span>
                  <h3 className="font-title-md text-base text-primary font-semibold mb-1">
                    Harmonisation Colorimétrique
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                    Équilibre entre luminosité naturelle côtière et nuances terreuses élégantes.
                  </p>
                </div>
                <div className="p-5 bg-surface-container-low rounded-lg border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-[24px] mb-2 block">hotel</span>
                  <h3 className="font-title-md text-base text-primary font-semibold mb-1">
                    Projets Privés &amp; Hôteliers
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                    Salons de prestige, suites d&apos;hôtels d&apos;affaires et réceptions diplomatiques.
                  </p>
                </div>
              </div>

              <div className="mb-8 p-4 bg-surface-container-low rounded border-l-4 border-secondary">
                <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant italic leading-relaxed">
                  « L’intérieur parfait n’est pas une accumulation d&apos;objets, mais une orchestration fluide de textures, de lumière et de confort ergonomique. »
                </p>
              </div>

              <div>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-on-secondary rounded-lg font-label-md text-xs uppercase tracking-wider hover:bg-primary transition-colors font-semibold"
                  href="https://wa.me/22870377743?text=Bonjour,%20je%20souhaite%20un%20accompagnement%20en%20am%C3%A9nagement%20d%27int%C3%A9rieur."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Consulter notre bureau de style</span>
                  <span className="material-symbols-outlined text-[18px]">brush</span>
                </a>
              </div>
            </div>

            {/* Image Column */}
            <div className="lg:col-span-6 relative">
              <div className="w-full h-[460px] sm:h-[520px] rounded-lg overflow-hidden relative shadow-lg bg-surface-container">
                <Image
                  src="/images/hero-living-room.jpg"
                  alt="Aménagement de salon de standing par C.I.TA.M DÉCOR"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 5. DÉPARTEMENT 4 : SELLERIE AUTOMOBILE     */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-surface-container-low" id="automobile">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Image Column */}
            <div className="lg:col-span-6 order-2 lg:order-1 relative">
              <div className="w-full h-[460px] sm:h-[520px] rounded-lg overflow-hidden relative shadow-lg bg-surface-container">
                <Image
                  src="/images/car-interior.jpg"
                  alt="Sellerie automobile en cuir sur-mesure par C.I.TA.M DÉCOR"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-on-primary p-4 rounded-lg hidden sm:flex items-center gap-3 shadow-xl">
                <span className="material-symbols-outlined text-secondary-fixed text-[26px]">directions_car</span>
                <div>
                  <p className="font-label-sm text-xs uppercase tracking-wider text-secondary-fixed font-semibold">
                    Sellerie Sellier
                  </p>
                  <p className="font-body-sm text-xs text-surface-container-lowest">
                    Cuirs automobiles traités UV
                  </p>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col">
              <span className="font-label-sm text-xs uppercase tracking-widest text-secondary font-semibold mb-2">
                Département IV • Sellerie Automobile de Luxe
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-4xl text-primary tracking-tight mb-4 font-normal">
                Tapisserie &amp; Sellerie Automobile
              </h2>
              <p className="font-body-lg text-base sm:text-lg text-on-surface-variant mb-6 leading-relaxed">
                Redonnez à l’intérieur de votre véhicule une apparence soignée, confortable et personnalisée. Nous confectionnons des habillages sur-mesure pour berlines de maître, 4x4 tout-terrain et véhicules de collection à Lomé.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-5 bg-surface-container rounded-lg border border-outline-variant/30">
                  <span className="font-title-md text-base text-primary font-semibold block mb-1">
                    Sièges &amp; Banquettes
                  </span>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                    Garnissage anatomique en cuir Nappa, surpiqûres diamantées et micro-perforations respirantes.
                  </p>
                </div>
                <div className="p-5 bg-surface-container rounded-lg border border-outline-variant/30">
                  <span className="font-title-md text-base text-primary font-semibold block mb-1">
                    Cockpit &amp; Volants
                  </span>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant">
                    Gainage de volants au point sellier, consoles centrales, panneaux de portières et pavillons de toit.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <span className="font-label-sm text-xs uppercase tracking-widest text-on-surface font-semibold block mb-3">
                  Revêtements Sélectionnés :
                </span>
                <div className="flex flex-wrap gap-2">
                  {["Cuir Nappa véritable", "Alcantara technique", "Similicuir marin haute résistance"].map((r) => (
                    <span
                      key={r}
                      className="font-label-sm text-xs px-3.5 py-1.5 bg-surface-container-high text-on-surface rounded-full border border-outline-variant/30"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <a
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-secondary text-on-secondary rounded-lg font-label-md text-xs uppercase tracking-wider hover:bg-primary transition-colors font-semibold"
                  href="https://wa.me/22870377743?text=Bonjour%20C.I.TA.M%20D%C3%89COR,%20je%20souhaite%20un%20devis%20de%20sellerie%20automobile."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Devis sellerie automobile</span>
                  <span className="material-symbols-outlined text-[18px]">drive_eta</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 6. PROCESSUS ARTISANAL EN 4 ÉTAPES         */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-surface">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="font-label-md text-xs uppercase text-secondary tracking-widest block mb-2 font-semibold">
              Méthode de Travail
            </span>
            <h2 className="font-headline-lg text-2xl sm:text-4xl text-primary tracking-tight font-normal">
              Notre Processus Artisanal en 4 Étapes
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant mt-3 leading-relaxed">
              Une rigueur d&apos;exécution sans compromis, de la première écoute à l&apos;installation finale chez vous.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                icon: "search",
                title: "Diagnostic & Écoute",
                desc: "Prise de cotes à votre domicile ou inspection détaillée de votre mobilier et véhicule dans nos ateliers d'Agbalépédo.",
                tag: "Étape Initiale",
              },
              {
                num: "02",
                icon: "texture",
                title: "Sélection des Matières",
                desc: "Immersion dans nos nuanciers de toiles d'éditeurs, velours, cuirs pleine fleur et choix des garnitures de confort sur mesure.",
                tag: "Curation Textile",
              },
              {
                num: "03",
                icon: "handyman",
                title: "Confection en Atelier",
                desc: "Découpe, piquage sellier, tapissage traditionnel sur carcasse et finitions de précision par nos maîtres artisans togolais.",
                tag: "Façonnage Lomé",
              },
              {
                num: "04",
                icon: "task_alt",
                title: "Livraison & Pose",
                desc: "Installation soignée sur site, pose des tringles et vérification minutieuse avec garantie d'excellence signée C.I.TA.M DÉCOR.",
                tag: "Satisfaction Totale",
              },
            ].map((step) => (
              <div
                key={step.num}
                className="p-6 bg-surface-container-lowest rounded-lg shadow-sm flex flex-col justify-between border border-outline-variant/30"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display-lg text-3xl text-secondary font-semibold">
                      {step.num}
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[28px]">
                      {step.icon}
                    </span>
                  </div>
                  <h3 className="font-title-lg text-lg text-primary font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-outline-variant/20">
                  <span className="font-label-sm text-[11px] text-outline uppercase font-semibold">
                    {step.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 7. MATIÉROTHÈQUE / TEXTURES               */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-20 bg-surface-container-high border-t border-outline-variant/30">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="font-label-md text-xs uppercase text-secondary tracking-widest block mb-1 font-semibold">
                Matiérothèque Permanente
              </span>
              <h2 className="font-headline-md text-2xl sm:text-3xl text-primary font-normal">
                Les Textures Sélectionnées par l&apos;Atelier
              </h2>
            </div>
            <p className="font-body-sm text-xs sm:text-sm text-on-surface-variant max-w-md">
              Chaque étoffe et peau est testée pour résister à la température et à l’hygrométrie de Lomé tout en conservant sa noblesse tactile.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "Lin Naturel", sub: "Toile lourde lavée", icon: "dry_cleaning" },
              { title: "Bouclé Écru", sub: "Laine & coton peigné", icon: "grain" },
              { title: "Velours Côtelé", sub: "Profondeur & douceur", icon: "brush" },
              { title: "Cuir Pleine Fleur", sub: "Tannage végétal", icon: "shield" },
              { title: "Alcantara Auto", sub: "Microfibre technique", icon: "speed" },
              { title: "Voilage Brume", sub: "Filtrage solaire tamisé", icon: "curtains" },
            ].map((mat, i) => (
              <div
                key={i}
                className="p-5 bg-surface-container-lowest rounded-lg flex flex-col items-center text-center border border-outline-variant/30 shadow-sm"
              >
                <div className="w-12 h-12 rounded-full bg-surface-container mb-3 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[24px]">{mat.icon}</span>
                </div>
                <span className="font-title-md text-sm text-primary font-semibold mb-1">
                  {mat.title}
                </span>
                <span className="font-label-sm text-[11px] text-on-surface-variant">
                  {mat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 8. CTA SECTION                             */}
      {/* ========================================== */}
      <section className="w-full py-16 sm:py-24 bg-primary text-on-primary">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="bg-primary-container p-8 sm:p-12 lg:p-16 rounded-xl flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl border border-secondary/30">
            <div className="flex flex-col max-w-2xl text-center lg:text-left">
              <span className="font-label-sm text-xs uppercase tracking-widest text-secondary-fixed block mb-2 font-semibold">
                Conseil • Devis Sans Engagement
              </span>
              <h2 className="font-headline-md text-2xl sm:text-4xl text-surface-container-lowest tracking-tight mb-3">
                Un projet spécifique pour votre intérieur ?
              </h2>
              <p className="font-body-md text-sm sm:text-base text-outline-variant leading-relaxed">
                Nos artisans et décorateurs vous conseillent sur les métrages, le choix des matières et la réalisation.
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

