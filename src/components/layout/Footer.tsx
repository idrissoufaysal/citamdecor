import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const NAVIGATION = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

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
            <Image
              src="/images/logo/image.png"
              alt="C.I.TA.M DÉCOR — Tapisserie Moderne et Décoration"
              width={743}
              height={336}
              className="h-16 w-auto invert sm:h-20"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Centre International de Tapisserie Moderne — Décoration. Un atelier
              d&apos;artisanat d&apos;exception à Lomé : tapisserie, draperies,
              architecture textile et sellerie automobile.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <a
                href="#contact"
                className="inline-flex min-h-6 items-center gap-2 text-foreground transition-colors hover:text-accent"
              >
                Prendre contact
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://www.tiktok.com/@citamdecor1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-6 items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <TikTokIcon className="h-4 w-4" />
                TikTok
              </a>
            </div>
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
