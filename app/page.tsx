"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "L'Association", href: "#lassociation" },
  { label: "Commissions", href: "#commissions" },
  { label: "Membres", href: "#contact" },
  { label: "Actualités", href: "#actualits" },
  { label: "La Région", href: "#la-rgion" },
  { label: "Contact", href: "#contact" },
];

const photos = {
  tangierSunset:
    "https://images.unsplash.com/photo-1683982059397-61b853170b8c?auto=format&fit=crop&w=2800&q=82",
  tangierBeach:
    "https://images.unsplash.com/photo-1727793235385-c7b7ea6a70b8?auto=format&fit=crop&w=2200&q=82",
  chefchaouen:
    "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=1800&q=82",
  chefchaouenWide:
    "https://images.unsplash.com/photo-1729866582400-3e0a40c95293?auto=format&fit=crop&w=2200&q=82",
  alHoceima:
    "https://images.unsplash.com/photo-1669735448738-94d9f6de0ef8?auto=format&fit=crop&w=2200&q=82",
  tetouanArches:
    "https://images.unsplash.com/photo-1759234055159-19bcb532cfd9?auto=format&fit=crop&w=2000&q=82",
  tetouanMedina:
    "https://images.unsplash.com/photo-1641734052941-bb57e88f67f2?auto=format&fit=crop&w=1600&q=82",
  tangierCave:
    "https://images.unsplash.com/photo-1771690288491-4de18b75e038?auto=format&fit=crop&w=2200&q=82",
};

const destinations = [
  {
    name: "Tanger",
    line: "Entre Atlantique et Méditerranée",
    image: photos.tangierBeach,
    className: "lg:col-span-6 lg:row-span-2",
  },
  {
    name: "Tétouan",
    line: "Patrimoine andalou et médina vivante",
    image: photos.tetouanArches,
    className: "lg:col-span-3",
  },
  {
    name: "Chefchaouen",
    line: "L'icône bleue du Rif",
    image: photos.chefchaouen,
    className: "lg:col-span-3 lg:row-span-2",
  },
  {
    name: "Al Hoceima",
    line: "La Méditerranée à l'état pur",
    image: photos.alHoceima,
    className: "lg:col-span-3",
  },
];

const missions = [
  {
    number: "01",
    title: "Représenter",
    copy: "Défendre les intérêts professionnels, économiques et institutionnels des agences de voyages.",
  },
  {
    number: "02",
    title: "Fédérer",
    copy: "Créer un environnement de collaboration et de synergie entre les professionnels du secteur.",
  },
  {
    number: "03",
    title: "Accompagner",
    copy: "Soutenir les membres face aux évolutions économiques, réglementaires et technologiques.",
  },
  {
    number: "04",
    title: "Développer",
    copy: "Contribuer au rayonnement et au développement durable du tourisme régional.",
  },
];

const stats = [
  { value: "Réseau", label: "Agences membres" },
  { value: "7", label: "Commissions spécialisées" },
  { value: "2", label: "Façades maritimes" },
  { value: "1", label: "Vision commune" },
];

const commissions = [
  {
    title: "Transport aérien",
    kicker: "Connectivité, compagnies, distribution",
    image: photos.tangierSunset,
  },
  {
    title: "Transport maritime",
    kicker: "Détroit, liaisons, flux voyageurs",
    image: photos.tangierCave,
  },
  {
    title: "Hajj & Omra",
    kicker: "Qualité, encadrement, conformité",
    image: photos.tetouanMedina,
  },
  {
    title: "Réceptif & Outgoing",
    kicker: "Circuits, production, expérience client",
    image: photos.chefchaouenWide,
  },
  {
    title: "MICE",
    kicker: "Rencontres, événements, tourisme d'affaires",
    image: photos.tetouanArches,
  },
  {
    title: "Relations publiques",
    kicker: "Dialogue institutionnel et porte-parole",
    image: photos.tangierBeach,
  },
  {
    title: "Conseil des sages",
    kicker: "Mémoire, arbitrage, transmission",
    image: photos.alHoceima,
  },
];

const news = [
  {
    category: "Institutionnel",
    date: "15 janvier 2026",
    title: "Assemblée régionale et feuille de route professionnelle",
    copy: "Une rencontre consacrée aux priorités des agences de voyages, à la structuration du secteur et aux nouveaux leviers de coopération régionale.",
    image: photos.tetouanArches,
    featured: true,
  },
  {
    category: "Rencontres",
    date: "28 février 2026",
    title: "Dialogue avec les acteurs touristiques du Nord",
    copy: "Un format court pour renforcer les passerelles entre agences, transporteurs, hôteliers et institutions.",
    image: photos.tangierBeach,
  },
  {
    category: "Salons",
    date: "20 mars 2026",
    title: "La destination TTAH mise en avant",
    copy: "Présence régionale, nouveaux itinéraires et valorisation des expériences méditerranéennes.",
    image: photos.chefchaouen,
  },
];

const partners = ["ONMT", "CRT TTA", "FNAVM", "ISITT", "Région TTAH"];

function SiteImage({
  src,
  alt,
  priority,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
      className={`object-cover ${className}`}
      unoptimized
    />
  );
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeCommission, setActiveCommission] = useState(0);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f7f3] text-[#102a35]">
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled || menuOpen
            ? "border-[#d7c2a3]/45 bg-[#f8f7f3]/95 text-[#063247] shadow-[0_14px_45px_rgba(6,50,71,0.08)] backdrop-blur"
            : "border-white/15 bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#accueil" className="flex items-center gap-3" aria-label="ARAVTTA accueil">
            <span
              className={`grid h-11 w-11 place-items-center border text-[15px] font-semibold ${
                scrolled || menuOpen
                  ? "border-[#063247] text-[#063247]"
                  : "border-white/70 text-white"
              }`}
            >
              A
            </span>
            <span className="leading-none">
              <span className="block font-serif text-2xl font-semibold">ARAVTTA</span>
              <span className="mt-1 hidden text-[11px] uppercase tracking-[0.18em] opacity-75 sm:block">
                Tanger Tétouan Al Hoceima
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm lg:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-link opacity-85 transition hover:opacity-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] opacity-80">
              <span>FR</span>
              <span className="h-3 w-px bg-current opacity-30" />
              <span>AR</span>
              <span className="h-3 w-px bg-current opacity-30" />
              <span>EN</span>
            </div>
            <a
              href="#contact"
              className={`border px-5 py-3 text-sm font-semibold transition ${
                scrolled
                  ? "border-[#063247] bg-[#063247] text-white hover:bg-[#087a9a]"
                  : "border-white/65 bg-white/10 text-white hover:bg-white hover:text-[#063247]"
              }`}
            >
              Devenir membre
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((value) => !value)}
            className={`grid h-11 w-11 place-items-center border lg:hidden ${
              scrolled || menuOpen ? "border-[#063247]" : "border-white/70"
            }`}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-[#d7c2a3]/45 bg-[#f8f7f3] px-5 py-5 text-[#063247] lg:hidden">
            <nav className="grid gap-3" aria-label="Navigation mobile">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#d7c2a3]/35 py-2 text-lg font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="uppercase tracking-[0.18em]">FR / AR / EN</span>
              <a href="#contact" className="border border-[#063247] px-4 py-3 font-semibold">
                Devenir membre
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section id="accueil" className="relative min-h-[92svh] overflow-hidden bg-[#063247] text-white">
        <SiteImage src={photos.tangierSunset} alt="Côte de Tanger au coucher du soleil" priority />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,50,71,0.78),rgba(6,50,71,0.42)_46%,rgba(6,50,71,0.18))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(184,154,97,0.18),transparent_38%)]" />

        <div className="relative z-10 mx-auto flex min-h-[92svh] max-w-7xl items-center px-5 pb-40 pt-28 sm:px-8 lg:px-10">
          <div className="max-w-3xl reveal">
            <p className="mb-7 max-w-xl text-[12px] font-semibold uppercase tracking-[0.22em] text-[#d7c2a3]">
              Association Régionale des Agences de Voyages
            </p>
            <h1 className="font-serif text-5xl font-semibold leading-[0.98] sm:text-6xl md:text-7xl">
              Ensemble,
              <br />
              faisons <span className="text-[#d7c2a3]">rayonner</span>
              <br />
              le tourisme régional.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/86">
              L&apos;ARAVTTA fédère les professionnels du voyage de Tanger-Tétouan-Al Hoceima
              et agit pour une industrie touristique plus forte, responsable et tournée vers l&apos;avenir.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#lassociation"
                className="inline-flex h-12 items-center justify-center border border-white bg-white px-6 text-sm font-semibold text-[#063247] transition hover:border-[#d7c2a3] hover:bg-[#d7c2a3]"
              >
                Découvrir l&apos;ARAVTTA
              </a>
              <a
                href="#commissions"
                className="inline-flex h-12 items-center justify-center border border-white/60 px-6 text-sm font-semibold text-white transition hover:border-white hover:bg-white/12"
              >
                Nos commissions
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 z-20 w-[min(1120px,calc(100%-40px))] translate-y-1/2 -translate-x-1/2 bg-[#f8f7f3] text-[#063247] shadow-[0_25px_70px_rgba(6,50,71,0.18)]">
          <div className="grid grid-cols-2 divide-x divide-y divide-[#d7c2a3]/45 border border-[#d7c2a3]/45 md:grid-cols-4 md:divide-y-0">
            {["Agences membres", "Commissions spécialisées", "Destinations", "Une vision commune"].map(
              (item, index) => (
                <div key={item} className="px-5 py-5 sm:px-7">
                  <span className="mb-2 block text-xs font-semibold text-[#b89a61]">
                    0{index + 1}
                  </span>
                  <span className="block font-serif text-xl font-semibold">{item}</span>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section id="la-rgion" className="px-5 pb-24 pt-36 sm:px-8 lg:px-10 lg:pt-44">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.7fr_1fr] lg:items-end">
            <div>
              <p className="section-label">Notre territoire</p>
              <h2 className="mt-4 max-w-xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Une région.
                <br />
                Des destinations d&apos;exception.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#52636a]">
              Entre détroit, Atlantique, Méditerranée et montagnes du Rif, le nord du Maroc
              concentre des paysages complémentaires et une profondeur culturelle rare.
            </p>
          </div>

          <div className="grid auto-rows-[260px] gap-4 lg:grid-cols-12 lg:auto-rows-[300px]">
            {destinations.map((destination) => (
              <article
                key={destination.name}
                className={`image-panel group relative overflow-hidden ${destination.className}`}
              >
                <SiteImage src={destination.image} alt={`${destination.name}, région Tanger-Tétouan-Al Hoceima`} />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(6,50,71,0.72))]" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                  <h3 className="text-2xl font-semibold uppercase tracking-[0.16em]">
                    {destination.name}
                  </h3>
                  <p className="mt-2 text-base text-white/82">{destination.line}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="lassociation" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-10">
        <span className="pointer-events-none absolute left-1/2 top-8 -translate-x-1/2 font-serif text-8xl font-semibold text-[#063247]/[0.045] sm:text-9xl lg:text-[12rem]">
          ARAVTTA
        </span>
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden border border-[#d7c2a3]/50">
            <SiteImage
              src={photos.tetouanMedina}
              alt="Rue historique de Tétouan"
              className="scale-[1.02]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,50,71,0.03),rgba(6,50,71,0.24))]" />
            <div className="absolute bottom-6 left-6 border border-white/50 bg-white/12 px-4 py-3 text-sm text-white backdrop-blur">
              Tanger-Tétouan-Al Hoceima
            </div>
          </div>

          <div className="relative z-10 lg:pl-8">
            <p className="section-label">L&apos;association</p>
            <h2 className="mt-5 max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Une voix commune
              <br />
              pour les professionnels
              <br />
              du voyage.
            </h2>
            <div className="mt-8 max-w-2xl space-y-5 text-lg leading-8 text-[#52636a]">
              <p>
                L&apos;Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima
                rassemble et représente les professionnels du secteur touristique de la région.
              </p>
              <p>
                Elle agit comme un interlocuteur privilégié entre les agences de voyages,
                les institutions publiques et l&apos;ensemble des acteurs de l&apos;écosystème touristique.
              </p>
            </div>
            <a href="#mission" className="text-link mt-8 inline-flex">
              Découvrir notre histoire
            </a>
          </div>
        </div>
      </section>

      <section id="mission" className="bg-white px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-label">Mission</p>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-none sm:text-6xl">
              Notre
              <br />
              mission
            </h2>
            <div className="mt-9 h-[420px] overflow-hidden border border-[#d7c2a3]/50">
              <SiteImage src={photos.tangierCave} alt="Vagues atlantiques à Tanger" />
            </div>
          </div>

          <div className="divide-y divide-[#d7c2a3]/55 border-y border-[#d7c2a3]/55">
            {missions.map((mission) => (
              <article
                key={mission.number}
                className="grid gap-5 py-9 reveal md:grid-cols-[90px_0.55fr_1fr] md:items-start"
              >
                <span className="font-serif text-4xl text-[#b89a61]">{mission.number}</span>
                <h3 className="text-xl font-semibold uppercase tracking-[0.14em] text-[#063247]">
                  {mission.title}
                </h3>
                <p className="text-lg leading-8 text-[#52636a]">{mission.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#063247] px-5 py-24 text-white sm:px-8 lg:px-10">
        <SiteImage src={photos.alHoceima} alt="Littoral d'Al Hoceima" />
        <div className="absolute inset-0 bg-[#063247]/75" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="section-label text-[#d7c2a3]">Impact régional</p>
          <div className="mt-12 grid divide-y divide-white/20 border-y border-white/20 md:grid-cols-4 md:divide-x md:divide-y-0">
            {stats.map((stat) => (
              <div key={stat.label} className="py-8 md:px-8">
                <span className="block font-serif text-5xl font-semibold sm:text-6xl">{stat.value}</span>
                <span className="mt-3 block text-sm uppercase tracking-[0.18em] text-white/72">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="commissions" className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-7 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="section-label">Nos expertises</p>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
                Des expertises au service
                <br />
                de toute la profession.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#52636a]">
              Des commissions spécialisées structurent la réflexion, accélèrent les réponses
              opérationnelles et portent les sujets clés auprès des partenaires publics et privés.
            </p>
          </div>

          <div className="grid overflow-hidden border border-[#d7c2a3]/55 bg-white lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[440px] lg:min-h-[620px]">
              {commissions.map((commission, index) => (
                <Image
                  key={commission.title}
                  src={commission.image}
                  alt={commission.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={`object-cover transition duration-700 ${
                    activeCommission === index ? "opacity-100" : "opacity-0"
                  }`}
                  unoptimized
                />
              ))}
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,50,71,0.02),rgba(6,50,71,0.45))]" />
              <div className="absolute bottom-6 left-6 max-w-xs text-white">
                <span className="text-xs uppercase tracking-[0.18em] text-[#d7c2a3]">
                  Commission active
                </span>
                <h3 className="mt-2 font-serif text-4xl font-semibold">
                  {commissions[activeCommission].title}
                </h3>
              </div>
            </div>
            <div className="divide-y divide-[#d7c2a3]/45">
              {commissions.map((commission, index) => (
                <button
                  key={commission.title}
                  type="button"
                  onMouseEnter={() => setActiveCommission(index)}
                  onFocus={() => setActiveCommission(index)}
                  className={`grid w-full gap-4 px-6 py-6 text-left transition sm:grid-cols-[64px_1fr] sm:px-8 ${
                    activeCommission === index ? "bg-[#063247] text-white" : "hover:bg-[#f3eee6]"
                  }`}
                >
                  <span
                    className={`font-serif text-3xl ${
                      activeCommission === index ? "text-[#d7c2a3]" : "text-[#b89a61]"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-xl font-semibold">{commission.title}</span>
                    <span
                      className={`mt-2 block text-sm leading-6 ${
                        activeCommission === index ? "text-white/72" : "text-[#52636a]"
                      }`}
                    >
                      {commission.kicker}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-[#063247] text-white lg:grid-cols-2">
        <div className="relative min-h-[520px]">
          <SiteImage src={photos.tangierBeach} alt="Littoral nord marocain" />
        </div>
        <div className="relative overflow-hidden px-5 py-20 sm:px-10 lg:px-16 lg:py-28">
          <svg
            aria-hidden="true"
            viewBox="0 0 420 260"
            className="absolute right-0 top-8 h-64 w-96 text-[#d7c2a3]/20"
          >
            <path
              d="M20 180 C95 70 168 220 245 100 C300 16 352 72 402 28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M56 214 C140 132 196 248 278 156 C326 101 365 118 404 82"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
          <div className="relative z-10 max-w-xl">
            <p className="section-label text-[#d7c2a3]">La Région</p>
            <h2 className="mt-5 font-serif text-5xl font-semibold leading-none sm:text-6xl">
              Un territoire
              <br />
              entre deux mers.
            </h2>
            <p className="mt-8 text-lg leading-8 text-white/76">
              De Tanger à Al Hoceima, la région Tanger-Tétouan-Al Hoceima possède
              une diversité exceptionnelle : littoral méditerranéen et atlantique,
              villes historiques, patrimoine culturel, montagnes du Rif et destinations emblématiques.
            </p>
            <a href="#la-rgion" className="mt-9 inline-flex border border-white/50 px-6 py-3 font-semibold transition hover:bg-white hover:text-[#063247]">
              Explorer la région
            </a>
          </div>
        </div>
      </section>

      <section id="actualits" className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-label">Vie associative</p>
              <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
                Actualités & événements
              </h2>
            </div>
            <a href="#contact" className="text-link inline-flex self-start md:self-auto">
              Toutes les actualités
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="group grid overflow-hidden border border-[#d7c2a3]/55 bg-white md:grid-cols-[1fr_0.72fr]">
              <div className="relative min-h-[360px]">
                <SiteImage src={news[0].image} alt={news[0].title} />
              </div>
              <div className="flex flex-col justify-end p-7 sm:p-9">
                <div className="mb-5 flex flex-wrap gap-3 text-xs uppercase tracking-[0.16em] text-[#087a9a]">
                  <span>{news[0].category}</span>
                  <span>{news[0].date}</span>
                </div>
                <h3 className="font-serif text-3xl font-semibold leading-tight">{news[0].title}</h3>
                <p className="mt-4 leading-7 text-[#52636a]">{news[0].copy}</p>
              </div>
            </article>

            <div className="grid gap-5">
              {news.slice(1).map((item) => (
                <article
                  key={item.title}
                  className="grid overflow-hidden border border-[#d7c2a3]/55 bg-white sm:grid-cols-[210px_1fr]"
                >
                  <div className="relative min-h-[220px] sm:min-h-full">
                    <SiteImage src={item.image} alt={item.title} />
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.16em] text-[#087a9a]">
                      <span>{item.category}</span>
                      <span>{item.date}</span>
                    </div>
                    <h3 className="font-serif text-2xl font-semibold leading-tight">{item.title}</h3>
                    <p className="mt-3 leading-7 text-[#52636a]">{item.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d7c2a3]/45 bg-white px-5 py-20 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-label">Partenaires</p>
            <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              Ensemble pour développer
              <br />
              le tourisme régional.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#52636a]">
              L&apos;ARAVTTA travaille aux côtés des institutions, écoles, fédérations et opérateurs
              pour renforcer la compétitivité touristique du Nord.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-7 border-y border-[#d7c2a3]/45 py-8">
            {partners.map((partner) => (
              <span
                key={partner}
                className="partner-logo text-2xl font-semibold uppercase tracking-[0.12em] text-[#063247]/40 transition hover:text-[#087a9a]"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden px-5 py-28 text-center text-white sm:px-8 lg:px-10">
        <SiteImage src={photos.tangierSunset} alt="Côte de Tanger pendant l'heure dorée" />
        <div className="absolute inset-0 bg-[#063247]/70" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <h2 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl">
            Rejoignez le réseau
            <br />
            qui fait avancer le tourisme régional.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/78">
            Vous êtes une agence de voyages ou un acteur du secteur touristique ?
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="mailto:contact@aravtta.org"
              className="inline-flex h-12 items-center justify-center border border-white bg-white px-6 font-semibold text-[#063247] transition hover:border-[#d7c2a3] hover:bg-[#d7c2a3]"
            >
              Devenir membre
            </a>
            <a
              href="tel:+212539325004"
              className="inline-flex h-12 items-center justify-center border border-white/60 px-6 font-semibold text-white transition hover:bg-white/12"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[#052838] px-5 py-16 text-white sm:px-8 lg:px-10">
        <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 font-serif text-8xl font-semibold text-white/[0.035] sm:text-9xl lg:text-[12rem]">
          ARAVTTA
        </span>
        <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.75fr_0.75fr_1fr]">
          <div>
            <h2 className="font-serif text-4xl font-semibold">ARAVTTA</h2>
            <p className="mt-4 max-w-sm leading-7 text-white/68">
              Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Navigation</h3>
            <ul className="mt-5 space-y-3 text-white/68">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Informations</h3>
            <ul className="mt-5 space-y-3 text-white/68">
              <li>Commissions</li>
              <li>Adhésion</li>
              <li>Partenariats</li>
              <li>Presse</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">Contact</h3>
            <address className="mt-5 space-y-3 not-italic leading-7 text-white/68">
              <p>139 Av. Louis Van Beethoven, Tanger 90060</p>
              <p>
                <a href="tel:+212539325004" className="hover:text-white">
                  05393-25004
                </a>
              </p>
              <p>
                <a href="mailto:contact@aravtta.org" className="hover:text-white">
                  contact@aravtta.org
                </a>
              </p>
              <p>LinkedIn · Facebook · Instagram</p>
            </address>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-14 flex max-w-7xl flex-col gap-4 border-t border-white/12 pt-6 text-sm text-white/48 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 ARAVTTA. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="#accueil" className="hover:text-white">
              Mentions légales
            </a>
            <a href="#accueil" className="hover:text-white">
              Confidentialité
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
