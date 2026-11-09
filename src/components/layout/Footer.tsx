import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-container text-surface-container-high pt-16 sm:pt-20 pb-12 border-t border-outline-variant/20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Presentation */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded bg-surface flex items-center justify-center text-primary font-serif font-bold text-lg">
                C
              </div>
              <span className="font-headline-sm text-xl text-surface-container-lowest font-medium tracking-tight">
                C.I.TA.M DÉCOR
              </span>
            </div>
            <p className="font-body-sm text-sm text-outline-variant max-w-sm mb-2 leading-relaxed font-semibold">
              Centre International de Tapisserie Moderne - Décoration
            </p>
            <p className="font-body-sm text-sm text-outline-variant/80 max-w-sm mb-6 leading-relaxed">
              Atelier d&apos;artisanat de luxe à Lomé. Confection haute couture de salons, draperies raffinées, architecture textile et habillage sellier automobile de prestige.
            </p>
            <div className="flex items-center gap-2 text-secondary-fixed font-label-sm text-xs uppercase tracking-widest">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>Excellence &amp; Précision Artisanale</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-label-lg text-xs uppercase tracking-widest text-surface-container-lowest mb-4">
              Navigation
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-sm text-sm text-outline-variant">
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/">
                  Accueil
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/#a-propos">
                  À propos
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/services">
                  Nos services
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/#realisations">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-secondary-fixed transition-colors" href="/contact">
                  Demande de devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Expertises */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-label-lg text-xs uppercase tracking-widest text-surface-container-lowest mb-4">
              Expertises &amp; Savoir-Faire
            </h4>
            <ul className="flex flex-col gap-3 font-body-sm text-sm text-outline-variant">
              <li>
                <Link
                  className="hover:text-secondary-fixed transition-colors flex items-center justify-between group"
                  href="/services#ameublement"
                >
                  <span>Tapisserie d&apos;Ameublement</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary-fixed transition-colors flex items-center justify-between group"
                  href="/services#draperies"
                >
                  <span>Rideaux Sur Mesure &amp; Voilages</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary-fixed transition-colors flex items-center justify-between group"
                  href="/services#amenagement"
                >
                  <span>Décoration Intérieure</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-secondary-fixed transition-colors flex items-center justify-between group"
                  href="/services#automobile"
                >
                  <span>Tapisserie &amp; Sellerie Auto</span>
                  <span className="material-symbols-outlined text-[14px] opacity-0 group-hover:opacity-100 transition-opacity">
                    arrow_forward
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Atelier & Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-label-lg text-xs uppercase tracking-widest text-surface-container-lowest mb-4">
              Atelier &amp; Contact
            </h4>
            <div className="flex flex-col gap-3.5 font-body-sm text-sm text-outline-variant">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed shrink-0 mt-0.5">
                  location_on
                </span>
                <span>Agbalépédo, non loin de la station NAGODÉ, Lomé — Togo</span>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed shrink-0 mt-0.5">
                  phone_in_talk
                </span>
                <div className="flex flex-col">
                  <a className="hover:text-secondary-fixed transition-colors" href="tel:+22870377743">
                    +228 70 37 77 43
                  </a>
                  <a className="hover:text-secondary-fixed transition-colors" href="tel:+22879202601">
                    +228 79 20 26 01
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed shrink-0 mt-0.5">
                  schedule
                </span>
                <span>Lundi — Samedi : 08h00 — 18h30</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-outline-variant/15 flex flex-col md:flex-row items-center justify-between gap-4 font-label-sm text-xs text-outline-variant/70">
          <p>© 2026 C.I.TA.M DÉCOR. Tous droits réservés.</p>
          <div className="flex items-center gap-6 font-body-sm text-xs">
            <span className="text-outline-variant/60">
              Atelier Haute Tapisserie • Lomé, République Togolaise
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
