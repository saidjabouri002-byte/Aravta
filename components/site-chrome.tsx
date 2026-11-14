"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp, ArrowUpRight, Check, ChevronDown, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { languages, useLanguage, useT, type Lang } from "@/lib/i18n";

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

/* Inline SVG flags: emoji flags do not show on Windows. */
function Flag({ code }: { code: Lang }) {
  const shape = "h-[14px] w-[21px] shrink-0 overflow-hidden rounded-[2px] ring-1 ring-[#FAFAFA]/25";
  if (code === "fr") {
    return (
      <svg viewBox="0 0 3 2" className={shape} aria-hidden="true">
        <rect width="1" height="2" fill="#002654" />
        <rect x="1" width="1" height="2" fill="#FFFFFF" />
        <rect x="2" width="1" height="2" fill="#CE1126" />
      </svg>
    );
  }
  if (code === "es") {
    return (
      <svg viewBox="0 0 3 2" className={shape} aria-hidden="true">
        <rect width="3" height="2" fill="#AA151B" />
        <rect y="0.5" width="3" height="1" fill="#F1BF00" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 60 30" className={shape} aria-hidden="true" preserveAspectRatio="none">
      <clipPath id="uk-flag-clip">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#uk-flag-clip)" stroke="#C8102E" strokeWidth="4" />
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </svg>
  );
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const current = languages.find((item) => item.code === lang) ?? languages[0];

  useEffect(() => {
    if (!open) return;
    const onPointer = (event: PointerEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={wrapper} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={t("Choisir la langue")}
        onClick={() => setOpen((value) => !value)}
        className="inline-flex h-11 items-center gap-1.5 rounded-[8px] border border-[#FAFAFA]/45 px-3 text-sm font-black text-[#FAFAFA] transition hover:bg-[#FAFAFA]/10"
      >
        <Flag code={current.code} />
        {current.short}
        <ChevronDown size={14} aria-hidden="true" className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div className="absolute right-0 top-[calc(100%+8px)] z-[70] min-w-[180px] overflow-hidden rounded-[10px] border border-[#FAFAFA]/15 bg-[#152641]/95 p-1 shadow-[0_18px_50px_rgb(21_38_65/35%)] backdrop-blur">
          {languages.map((item) => (
            <button
              key={item.code}
              type="button"
              lang={item.code}
              onClick={() => {
                setLang(item.code);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between gap-3 rounded-[7px] px-3 py-2.5 text-left text-sm font-semibold transition hover:bg-[#FAFAFA]/10 ${
                item.code === lang ? "text-[#C3F84A]" : "text-[#FAFAFA]/85"
              }`}
            >
              <span className="inline-flex items-center gap-2.5">
                <Flag code={item.code} />
                <span className="font-black">{item.short}</span>
                {item.label}
              </span>
              {item.code === lang ? <Check size={15} aria-hidden="true" /> : null}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function DesktopDropdown({ item, pathname }: { item: NavItem; pathname: string }) {
  const t = useT();
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
        className={`nav-link inline-flex items-center gap-1 whitespace-nowrap ${isActive(pathname, item.href) ? "is-active" : ""}`}
      >
        {t(item.label)}
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
            {t(child.label)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function SiteHeader() {
  const t = useT();
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
          ? "border-[#FAFAFA]/20 bg-[#152641]/80 shadow-[0_18px_60px_rgb(21_38_65/18%)]"
          : "border-[#FAFAFA]/28 bg-[#152641]/55"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-[1500px] items-center justify-between gap-3 px-5 sm:h-[78px] sm:gap-6 sm:px-8 lg:px-10 xl:gap-4">
        <Link href="/" className="flex shrink-0 items-center" aria-label={t("ARAVTTA accueil")} onClick={closeMenu}>
          <Image
            src="/aravtta-logo.png"
            alt="ARAVTTA"
            width={1262}
            height={320}
            priority
            className="h-auto w-[150px] brightness-0 invert sm:w-[190px] xl:w-[150px] 2xl:w-[210px]"
          />
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-semibold xl:flex 2xl:gap-7" aria-label={t("Navigation principale")}>
          {navItems.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.label} item={item} pathname={pathname} />
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link whitespace-nowrap ${isActive(pathname, item.href) ? "is-active" : ""}`}
              >
                {t(item.label)}
              </Link>
            ),
          )}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LanguageSwitcher />
          <div className="hidden xl:flex">
          <Link
            href="/#adhesion-form"
            className="inline-flex h-11 items-center whitespace-nowrap rounded-[8px] border border-[#FAFAFA]/85 px-4 text-sm font-black 2xl:px-5 text-[#FAFAFA] transition hover:bg-[#FAFAFA] hover:text-[#152641]"
          >
            {t("Devenir membre")}
          </Link>
          </div>

        <button
          type="button"
          aria-label={menuOpen ? t("Fermer le menu") : t("Ouvrir le menu")}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((value) => !value)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-[8px] border border-[#FAFAFA]/65 transition hover:bg-[#FAFAFA]/10 xl:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu xl:hidden ${menuOpen ? "is-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mx-auto grid max-w-[900px] px-5 py-4 sm:px-8" aria-label={t("Navigation mobile")}>
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
                  {t(item.label)}
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
                        className={`rounded-[8px] px-3 py-2.5 text-base font-semibold text-[#FAFAFA]/78 transition hover:bg-[#FAFAFA]/8 hover:text-[#C3F84A] ${
                          pathname === child.href ? "bg-[#136CFC]/40 text-[#FAFAFA]" : ""
                        }`}
                      >
                        {t(child.label)}
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
                className={`border-b border-[#FAFAFA]/14 py-4 text-xl font-black transition hover:text-[#C3F84A] sm:text-2xl ${
                  isActive(pathname, item.href) ? "text-[#C3F84A]" : ""
                }`}
              >
                {t(item.label)}
              </Link>
            ),
          )}
          <Link
            href="/#adhesion-form"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="mt-6 inline-flex h-12 items-center justify-center rounded-[8px] bg-[linear-gradient(135deg,#152641,#0F4FC4_48%,#136CFC)] px-5 text-sm font-black text-[#FAFAFA]"
          >
            {t("Devenir membre")}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  const t = useT();

  return (
    <footer className="relative overflow-hidden border-t border-[#152641]/8 bg-white px-5 text-[#152641] sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#152641,#136CFC,#4D94FF,#C3F84A)]" />

      <div className="relative mx-auto max-w-[1500px] pt-12 sm:pt-16">
        <div className="relative grid gap-6 overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#152641,#0F4FC4_52%,#136CFC)] p-7 text-[#FAFAFA] sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <svg aria-hidden="true" viewBox="0 0 480 260" className="pointer-events-none absolute -right-16 -top-10 w-[460px] text-[#C3F84A]/30">
            <path d="M18 181 C102 62 169 223 249 98 C304 13 358 80 452 24" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M50 225 C142 130 199 250 284 156 C333 101 371 118 460 75" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="relative">
            <p className="text-xs font-black tracking-[0.2em] text-[#C3F84A]">{t("Adhésion")}</p>
            <p className="mt-3 max-w-2xl text-3xl font-black leading-[1.1] tracking-[-0.01em] sm:text-4xl">
              {t("Rejoignez le réseau qui avance.")}
            </p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <Link
              href="/#adhesion-form"
              className="inline-flex h-12 items-center gap-2 rounded-[8px] bg-[#FAFAFA] px-5 text-sm font-black text-[#136CFC] transition hover:bg-[#C3F84A] hover:text-[#152641]"
            >
              {t("Devenir membre")}
              <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
            <a
              href="mailto:contact@aravta.org"
              className="inline-flex h-12 items-center rounded-[8px] border border-[#FAFAFA]/70 px-5 text-sm font-black text-[#FAFAFA] transition hover:bg-[#FAFAFA]/12"
            >
              {t("Nous contacter")}
            </a>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-[1500px] grid-cols-2 gap-x-6 gap-y-10 py-12 sm:py-16 lg:grid-cols-[1.3fr_0.75fr_0.85fr_1.1fr] lg:gap-12">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" aria-label={t("ARAVTTA accueil")} className="inline-block">
            <Image src="/aravtta-logo.png" alt="ARAVTTA" width={1262} height={320} className="h-auto w-[200px] sm:w-[230px]" />
          </Link>
          <p className="mt-5 max-w-sm leading-7 text-[#152641]/62">
            {t("Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima.")}
          </p>
          <p className="mt-5 inline-flex rounded-full bg-[#136CFC]/8 px-3.5 py-1.5 text-xs font-black tracking-[0.04em] text-[#136CFC]">
            {t("Tanger · Tétouan · Al Hoceima")}
          </p>
        </div>

        <div>
          <h3 className="footer-title">{t("Navigation")}</h3>
          <ul className="mt-5 space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="footer-link">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer-title">{t("L'Association")}</h3>
          <ul className="mt-5 space-y-3">
            {associationLinks.slice(1).map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="footer-link">
                  {t(item.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h3 className="footer-title">{t("Contact")}</h3>
          <address className="mt-5 grid gap-4 not-italic">
            <p className="flex gap-3 leading-6 text-[#152641]/70">
              <span className="footer-icon">
                <MapPin size={16} aria-hidden="true" />
              </span>
              139 Av. Louis Van Beethoven, Tanger 90060
            </p>
            <a href="tel:+212539325004" className="group flex items-center gap-3 text-[#152641]/70 transition hover:text-[#136CFC]">
              <span className="footer-icon">
                <Phone size={16} aria-hidden="true" />
              </span>
              05393-25004
            </a>
            <a href="mailto:contact@aravta.org" className="group flex items-center gap-3 text-[#152641]/70 transition hover:text-[#136CFC]">
              <span className="footer-icon">
                <Mail size={16} aria-hidden="true" />
              </span>
              contact@aravta.org
            </a>
          </address>
          <p className="mt-6 text-xs font-black tracking-[0.04em] text-[#152641]/40">LinkedIn · Facebook · Instagram</p>
        </div>
      </div>

      <div className="relative mx-auto flex max-w-[1500px] flex-col gap-4 border-t border-[#152641]/10 py-6 text-sm text-[#152641]/50 sm:flex-row sm:items-center sm:justify-between">
        <p>{t("© 2026 ARAVTTA. Tous droits réservés.")}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/" className="transition hover:text-[#136CFC]">
            {t("Mentions légales")}
          </Link>
          <Link href="/" className="transition hover:text-[#136CFC]">
            {t("Confidentialité")}
          </Link>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex items-center gap-2 font-semibold text-[#136CFC] transition hover:text-[#152641]"
          >
            {t("Haut de page")}
            <span className="grid h-8 w-8 place-items-center rounded-full border border-[#136CFC]/30">
              <ArrowUp size={15} aria-hidden="true" />
            </span>
          </button>
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
  const t = useT();
  return (
    <section className="relative overflow-hidden bg-[#152641] px-5 pb-14 pt-32 text-[#FAFAFA] sm:px-8 sm:pb-16 sm:pt-40 lg:px-10 lg:pb-20 lg:pt-44">
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
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgb(21_38_65/0.86),rgb(19_108_252/0.5)_50%,rgb(21_38_65/0.62))]" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(21_38_65/0.55),rgb(21_38_65/0)_75%)]" />
      <div className="relative z-10 mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.58fr_0.42fr] lg:items-end">
        <div>
          <p className="section-label text-[#C3F84A]">{t(label)}</p>
          <h1 className="mt-5 display-title display-title-hero">{t(title)}</h1>
        </div>
        {intro ? <p className="max-w-xl text-lg leading-8 text-[#FAFAFA]/80 sm:text-xl sm:leading-9">{t(intro)}</p> : null}
      </div>
    </section>
  );
}
