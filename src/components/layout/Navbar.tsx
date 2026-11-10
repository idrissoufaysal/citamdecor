"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Accueil", href: "#accueil" },
  { label: "À propos", href: "#a-propos" },
  { label: "Services", href: "#services" },
  { label: "Réalisations", href: "#realisations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-hairline bg-background/85 py-3 backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-5 sm:py-6"
      }`}
    >
      <div className="shell flex items-center justify-between gap-4">
        {/* Marque */}
        <a href="#accueil" className="group flex shrink-0 items-center gap-3">
          <span
            aria-hidden="true"
            className="text-lg leading-none text-foreground transition-colors group-hover:text-accent"
          >
            ◆
          </span>
          <span className="flex flex-col">
            <span className="text-base font-medium tracking-tight text-foreground sm:text-lg">
              C.I.TA.M DÉCOR
            </span>
            <span className="mt-0.5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Atelier d&apos;art • Lomé
            </span>
          </span>
        </a>

        {/* Liens centrés — desktop */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA + menu mobile */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn btn-outline hidden sm:inline-flex"
          >
            Nous écrire
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="rounded-full p-2 text-foreground transition-colors hover:bg-surface-2 md:hidden"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {mobileMenuOpen && (
        <div className="mt-4 border-t border-hairline bg-background/97 px-5 pb-6 pt-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="border-b border-hairline py-4 text-lg text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn btn-solid mt-6 w-full"
          >
            Nous écrire
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
}
