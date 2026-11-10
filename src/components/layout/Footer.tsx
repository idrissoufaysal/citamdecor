import { ArrowUpRight } from "lucide-react";

const NAVIGATION = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

const EXPERTISES = [
  { label: "Tapisserie d'ameublement", href: "#services" },
  { label: "Rideaux & voilages", href: "#services" },
  { label: "Décoration intérieure", href: "#services" },
  { label: "Sellerie automobile", href: "#services" },
];

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-background">
      <div className="shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Marque */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="text-lg text-accent">
                ◆
              </span>
              <span className="text-lg font-medium tracking-tight">
                C.I.TA.M DÉCOR
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Centre International de Tapisserie Moderne — Décoration. Un atelier
              d&apos;artisanat d&apos;exception à Lomé : tapisserie, draperies,
              architecture textile et sellerie automobile.
            </p>
            <a
              href="#contact"
              className="mt-6 inline-flex min-h-6 items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
            >
              Prendre contact
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation" className="lg:col-span-2">
            <h2 className="eyebrow">Navigation</h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm leading-6 text-muted-foreground">
              {NAVIGATION.map((link) => (
                <li key={link.label}>
                  <a
                    className="transition-colors hover:text-foreground"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Expertises */}
          <nav aria-label="Expertises" className="lg:col-span-3">
            <h2 className="eyebrow">Expertises</h2>
            <ul className="mt-5 flex flex-col gap-3 text-sm leading-6 text-muted-foreground">
              {EXPERTISES.map((link) => (
                <li key={link.label}>
                  <a
                    className="transition-colors hover:text-foreground"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Atelier */}
          <div className="lg:col-span-3">
            <h2 className="eyebrow">Atelier</h2>
            <address className="mt-5 flex flex-col gap-3 text-sm leading-6 not-italic text-muted-foreground">
              <span>Agbalépédo, non loin de la station NAGODÉ, Lomé — Togo</span>
              <a
                className="transition-colors hover:text-foreground"
                href="tel:+22870377743"
              >
                +228 70 37 77 43
              </a>
              <a
                className="transition-colors hover:text-foreground"
                href="tel:+22879202601"
              >
                +228 79 20 26 01
              </a>
              <span>Lundi — Samedi : 08h00 — 18h30</span>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-hairline pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 C.I.TA.M DÉCOR. Tous droits réservés.</p>
          <p>Atelier de haute tapisserie • Lomé, République Togolaise</p>
        </div>
      </div>
    </footer>
  );
}
