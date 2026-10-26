"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export const navItems = [
  { label: "Accueil", href: "/#accueil" },
  { label: "L'Association", href: "/#association" },
  { label: "Commissions", href: "/#commissions" },
  { label: "Membres", href: "/membres" },
  { label: "Actualités", href: "/#actualites" },
  { label: "La Région", href: "/#region" },
  { label: "Contact", href: "/#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-[#FAFAFA] backdrop-blur transition duration-500 ${
        scrolled || menuOpen
          ? "border-[#FAFAFA]/20 bg-[#0D0D0D]/68 shadow-[0_18px_60px_rgb(13_13_13/18%)]"
          : "border-[#FAFAFA]/28 bg-[#0D0D0D]/55"
      }`}
    >
      <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="/#accueil" className="group flex items-center transition" aria-label="ARAVTTA accueil">
          <Image
            src="/aravtta-logo.png"
            alt="ARAVTTA"
            width={1262}
            height={320}
            priority
            className="h-auto w-[172px] sm:w-[214px] xl:w-[244px]"
          />
        </Link>

        <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Navigation principale">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <Link
            href="/#adhesion-form"
            className="inline-flex h-12 items-center rounded-[8px] border border-[#FAFAFA]/85 bg-transparent px-5 text-sm font-black uppercase text-[#FAFAFA] transition hover:border-[#FAFAFA]"
          >
            Devenir membre
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-12 w-12 place-items-center border border-[#FAFAFA]/65 lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {menuOpen ? (
        <div className="border-t border-[#FAFAFA]/18 bg-[#0D0D0D]/80 px-5 py-5 text-[#FAFAFA] backdrop-blur lg:hidden">
          <nav className="grid" aria-label="Navigation mobile">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-[#FAFAFA]/16 py-3 text-xl font-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-5 flex justify-end text-sm">
            <Link
              href="/#adhesion-form"
              onClick={() => setMenuOpen(false)}
              className="rounded-[8px] border border-[#FAFAFA]/85 bg-transparent px-4 py-3 font-black uppercase text-[#FAFAFA]"
            >
              Devenir membre
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0D0D0D] px-5 py-16 text-[#FAFAFA] sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#1538D6,#4F7CFF,#8EC5FF)]" />
      <div
        aria-hidden="true"
        className="absolute inset-x-[-6vw] -bottom-12 z-0 h-[clamp(7rem,18vw,18rem)] opacity-70 sm:-bottom-16"
      >
        <TextHoverEffect text="ARAVTTA" duration={0.14} />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.25fr_0.7fr_0.7fr_1fr]">
        <div>
          <Image
            src="/aravtta-logo.png"
            alt="ARAVTTA"
            width={1262}
            height={320}
            className="h-auto w-[220px] drop-shadow-[0_0_22px_rgb(79_124_255/36%)] sm:w-[260px]"
          />
          <p className="mt-5 max-w-sm leading-7 text-[#FAFAFA]/62">
            Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima.
          </p>
        </div>
        <div>
          <h3 className="footer-title">Navigation</h3>
          <ul className="mt-5 space-y-3 text-[#FAFAFA]/62">
            {navItems.slice(0, 5).map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-[#8EC5FF]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Informations</h3>
          <ul className="mt-5 space-y-3 text-[#FAFAFA]/62">
            <li>Commissions</li>
            <li>Adhésion</li>
            <li>Partenariats</li>
            <li>Presse</li>
          </ul>
        </div>
        <div>
          <h3 className="footer-title">Contact</h3>
          <address className="mt-5 space-y-3 not-italic leading-7 text-[#FAFAFA]/62">
            <p>139 Av. Louis Van Beethoven, Tanger 90060</p>
            <p>
              <a href="tel:+212539325004" className="hover:text-[#8EC5FF]">
                05393-25004
              </a>
            </p>
            <p>
              <a href="mailto:contact@aravta.org" className="hover:text-[#8EC5FF]">
                contact@aravta.org
              </a>
            </p>
            <p>LinkedIn · Facebook · Instagram</p>
          </address>
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-14 flex max-w-[1500px] flex-col gap-4 border-t border-[#FAFAFA]/14 pt-6 text-sm text-[#FAFAFA]/42 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright 2026 ARAVTTA. Tous droits réservés.</p>
        <div className="flex gap-5">
          <Link href="/#accueil" className="hover:text-[#8EC5FF]">
            Mentions légales
          </Link>
          <Link href="/#accueil" className="hover:text-[#8EC5FF]">
            Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}
