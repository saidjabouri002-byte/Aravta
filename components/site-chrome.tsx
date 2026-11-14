"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type NavChild = { label: string; href: string };
type NavItem = { label: string; href: string; children?: NavChild[] };

export const associationLinks: NavChild[] = [
  { label: "Présentation", href: "/association" },
  { label: "Mot du Président", href: "/association/mot-du-president" },
  { label: "Les Commissions", href: "/association/commissions" },
  { label: "Plan d'Action", href: "/association/plan-action" },
  { label: "Plan Stratégique", href: "/association/plan-strategique" },
  { label: "Anciens Présidents", href: "/association/anciens-presidents" },
];

export const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "L'Association", href: "/association", children: associationLinks },
  { label: "Réseau membre", href: "/membres" },
  { label: "Partenaires", href: "/partenaires" },
  { label: "La Région", href: "/region" },
  { label: "Actualités", href: "/actualites" },
  { label: "Événements", href: "/evenements" },
  { label: "Contact", href: "/#contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href.startsWith("/#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);

  const show = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    const onPointer = (event: PointerEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) close();
    };
    window.addEventListener("scroll", close, { passive: true });
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("scroll", close);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <div
      ref={wrapper}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node)) hide();
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((value) => !value)}
        className={`nav-link inline-flex items-center gap-1 ${isActive(pathname, item.href) ? "is-active" : ""}`}
      >
        {item.label}
        <ChevronDown size={15} aria-hidden="true" className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      <div className={`nav-dropdown ${open ? "is-open" : ""}`}>
        {item.children?.map((child) => (
          <Link
            key={child.href}
            href={child.href}
            onClick={() => setOpen(false)}
            className={pathname === child.href ? "is-active" : ""}
          >
            {child.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [associationOpen, setAssociationOpen] = useState(false);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const close = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false);
    };
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b text-[#FAFAFA] backdrop-blur transition duration-500 ${
        scrolled || menuOpen
          ? "border-[#FAFAFA]/20 bg-[#0D0D0D]/80 shadow-[0_18px_60px_rgb(13_13_13/18%)]"
          : "border-[#FAFAFA]/28 bg-[#0D0D0D]/55"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between gap-6 px-5 sm:h-[78px] sm:px-8 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center" aria-label="ARAVTTA accueil" onClick={closeMenu}>
          <Image
            src="/aravtta-logo.png"
            alt="ARAVTTA"
            width={1262}
            height={320}
            priority
            className="h-auto w-[150px] sm:w-[190px] 2xl:w-[230px]"
          />
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold xl:flex 2xl:gap-8" aria-label="Navigation principale">
          {navItems.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} pathname={pathname} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link whitespace-nowrap ${isActive(pathname, item.href) ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden shrink-0 xl:flex">
          <Link
            href="/#adhesion-form"
            className="inline-flex h-11 items-center whitespace-nowrap rounded-[8px] border border-[#FAFAFA]/85 px-5 text-sm font-black uppercase text-[#FAFAFA] transition hover:bg-[#FAFAFA] hover:text-[#0D0D0D]"
          >
            Devenir membre
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-[#FAFAFA]/65 transition hover:bg-[#FAFAFA]/10 xl:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu xl:hidden ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto grid max-w-[900px] px-5 py-4 sm:px-8" aria-label="Navigation mobile">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-[#FAFAFA]/14">
                <button
                  type="button"
                  aria-expanded={associationOpen}
                  onClick={() => setAssociationOpen((value) => !value)}
                  tabIndex={menuOpen ? 0 : -1}
                  className="flex w-full items-center justify-between py-4 text-left text-xl font-black sm:text-2xl"
                >
                  {item.label}
                  <ChevronDown size={22} className={`transition ${associationOpen ? "rotate-180" : ""}`} />
                </button>
                <div className={`mobile-submenu ${associationOpen ? "is-open" : ""}`}>
                  <div className="grid gap-1 pb-4 sm:grid-cols-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={closeMenu}
                        tabIndex={menuOpen && associationOpen ? 0 : -1}
                        className={`rounded-[8px] px-3 py-2.5 text-base font-semibold text-[#FAFAFA]/78 transition hover:bg-[#FAFAFA]/8 hover:text-[#8EC5FF] ${
                          pathname === child.href ? "bg-[#1538D6]/40 text-[#FAFAFA]" : ""
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                tabIndex={menuOpen ? 0 : -1}
                className={`border-b border-[#FAFAFA]/14 py-4 text-xl font-black transition hover:text-[#8EC5FF] sm:text-2xl ${
                  isActive(pathname, item.href) ? "text-[#8EC5FF]" : ""
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
          <Link
            href="/#adhesion-form"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-[8px] bg-[linear-gradient(135deg,#071394,#1538D6_48%,#4F7CFF)] px-5 text-sm font-black uppercase text-[#FAFAFA]"
          >
            Devenir membre
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0D0D0D] px-5 py-16 text-[#FAFAFA] sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-2 bg-[linear-gradient(90deg,#1538D6,#4F7CFF,#8EC5FF)]" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.8fr_0.8fr_1fr]">
        <div>
          <Image
            src="/aravtta-logo.png"
            alt="ARAVTTA"
            width={1262}
            height={320}
            className="h-auto w-[220px] drop-shadow-[0_0_22px_rgb(79_124_255/36%)] sm:w-[250px]"
          />
          <p className="mt-5 max-w-sm leading-7 text-[#FAFAFA]/62">
            Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima.
          </p>
        </div>
        <div>
          <h3 className="footer-title">Navigation</h3>
          <ul className="mt-5 space-y-3 text-[#FAFAFA]/62">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-[#8EC5FF]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="footer-title">L&apos;Association</h3>
          <ul className="mt-5 space-y-3 text-[#FAFAFA]/62">
            {associationLinks.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-[#8EC5FF]">
                  {item.label}
                </Link>
              </li>
            ))}
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
        <p>© 2026 ARAVTTA. Tous droits réservés.</p>
        <div className="flex gap-5">
          <Link href="/" className="hover:text-[#8EC5FF]">
            Mentions légales
          </Link>
          <Link href="/" className="hover:text-[#8EC5FF]">
            Confidentialité
          </Link>
        </div>
      </div>
    </footer>
  );
}

/* Shared hero used by inner pages. */
export function PageHero({
  label,
  title,
  intro,
  image,
  imagePosition = "50% 45%",
}: {
  label: string;
  title: string;
  intro?: string;
  image: string;
  imagePosition?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#0D0D0D] px-5 pb-14 pt-32 text-[#FAFAFA] sm:px-8 sm:pb-16 sm:pt-40 lg:px-10 lg:pb-20 lg:pt-44">
      <Image
        src={image}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition: imagePosition }}
        unoptimized
      />
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(7_19_148/0.86),rgb(21_56_214/0.5)_50%,rgb(13_13_13/0.62))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(13_13_13/0.55),rgb(13_13_13/0)_75%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
        <div>
          <p className="section-label text-[#8EC5FF]">{label}</p>
          <h1 className="mt-5 display-title display-title-hero">{title}</h1>
        </div>
        {intro ? <p className="max-w-xl text-lg leading-8 text-[#FAFAFA]/80 sm:text-xl sm:leading-9">{intro}</p> : null}
      </div>
    </section>
  );
}
