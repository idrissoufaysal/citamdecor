"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/#a-propos" },
    { label: "Nos services", href: "/services" },
    { label: "Réalisations", href: "/#realisations" },
    { label: "Contact & Devis", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(40,35,31,0.06)] border-b border-outline-variant/30">
      {/* Top Bar - Contact & Location */}
      <div className="bg-primary-container text-surface-container-high py-1.5 px-4 sm:px-8 lg:px-16 text-xs">
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2 font-label-sm text-label-sm tracking-widest text-outline-variant">
            <span className="material-symbols-outlined text-[14px] text-secondary-fixed">
              location_on
            </span>
            <span>Lomé, Togo • Agbalépédo, près de la station NAGODÉ</span>
          </div>
          <div className="flex items-center gap-4 font-label-sm text-label-sm text-outline-variant tracking-wider">
            <a
              className="hover:text-surface-container-lowest transition-colors flex items-center gap-1.5"
              href="tel:+22870377743"
            >
              <span className="material-symbols-outlined text-[13px] text-secondary-fixed">
                call
              </span>
              <span>+228 70 37 77 43</span>
            </a>
            <span className="opacity-40">|</span>
            <a
              className="hover:text-surface-container-lowest transition-colors"
              href="tel:+22879202601"
            >
              +228 79 20 26 01
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="h-20 max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded bg-primary flex items-center justify-center text-surface shadow-sm group-hover:bg-secondary transition-colors">
            <span className="font-serif text-xl font-bold tracking-tighter">C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-lg sm:text-xl font-semibold tracking-tight text-primary leading-none group-hover:text-secondary transition-colors">
              C.I.TA.M DÉCOR
            </span>
            <span className="font-label-sm text-[9px] text-on-surface-variant uppercase tracking-widest mt-1">
              Atelier Lomé • Tapisserie Moderne
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 font-label-lg text-label-lg uppercase tracking-wider transition-all rounded-lg ${
                  isActive
                    ? "bg-surface-container-high text-on-surface font-semibold"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <a
            className="hidden xl:flex items-center gap-2 px-3 py-2 bg-surface-container text-on-surface rounded-lg hover:bg-surface-container-high transition-colors font-label-sm text-label-sm tracking-wider uppercase border border-outline-variant/30"
            href="https://wa.me/22870377743"
            rel="noopener noreferrer"
            target="_blank"
          >
            <span className="material-symbols-outlined text-[16px] text-secondary">
              chat
            </span>
            <span>WhatsApp Direct</span>
          </a>
          <Link
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 bg-secondary text-on-secondary rounded-lg font-label-md text-label-md uppercase tracking-wider hover:bg-primary transition-all duration-300 shadow-[0_4px_16px_-4px_rgba(124,87,48,0.3)] text-xs sm:text-sm"
            href="/contact"
          >
            <span>Demander un devis</span>
          </Link>

          {/* Mobile hamburger menu toggle */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-primary hover:bg-surface-container-low transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-surface border-b border-outline-variant/30 px-6 py-6 flex flex-col gap-3 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-2.5 px-4 font-label-md text-sm uppercase tracking-wider text-on-surface hover:bg-surface-container-low rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            className="mt-2 flex items-center justify-center gap-2 py-3 bg-secondary/10 text-secondary font-semibold rounded-lg text-sm uppercase tracking-wider"
            href="https://wa.me/22870377743"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="material-symbols-outlined text-lg">chat</span>
            <span>Échanger sur WhatsApp (+228 70 37 77 43)</span>
          </a>
        </div>
      )}
    </header>
  );
}
