"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Accueil", href: "#accueil" },
  { label: "L'Association", href: "#association" },
  { label: "Commissions", href: "#commissions" },
  { label: "Membres", href: "#contact" },
  { label: "Actualités", href: "#actualites" },
  { label: "La Région", href: "#region" },
  { label: "Contact", href: "#contact" },
];

const photos = {
  hero:
    "https://images.unsplash.com/photo-1683982059397-61b853170b8c?auto=format&fit=crop&w=3000&q=86",
  tangier:
    "https://images.unsplash.com/photo-1727793235385-c7b7ea6a70b8?auto=format&fit=crop&w=2400&q=84",
  chefchaouen:
    "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?auto=format&fit=crop&w=1800&q=84",
  chefchaouenWide:
    "https://images.unsplash.com/photo-1729866582400-3e0a40c95293?auto=format&fit=crop&w=2200&q=84",
  alHoceima:
    "https://images.unsplash.com/photo-1669735448738-94d9f6de0ef8?auto=format&fit=crop&w=2400&q=84",
  tetouan:
    "https://images.unsplash.com/photo-1759234055159-19bcb532cfd9?auto=format&fit=crop&w=2200&q=84",
  medina:
    "https://images.unsplash.com/photo-1641734052941-bb57e88f67f2?auto=format&fit=crop&w=1800&q=84",
  cave:
    "https://images.unsplash.com/photo-1771690288491-4de18b75e038?auto=format&fit=crop&w=2400&q=84",
};

const destinations = [
  {
    name: "Tanger",
    line: "Ville-pivot entre Atlantique, détroit et Méditerranée.",
    image: photos.tangier,
    mark: "01",
  },
  {
    name: "Tétouan",
    line: "Une écriture andalouse, blanche, patrimoniale.",
    image: photos.tetouan,
    mark: "02",
  },
  {
    name: "Chefchaouen",
    line: "L'icône bleue du Rif, magnétique et singulière.",
    image: photos.chefchaouen,
    mark: "03",
  },
  {
    name: "Al Hoceima",
    line: "Criques, falaises et lumière méditerranéenne.",
    image: photos.alHoceima,
    mark: "04",
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
    copy: "Créer des passerelles concrètes entre les professionnels, les institutions et les opérateurs du secteur.",
  },
  {
    number: "03",
    title: "Accompagner",
    copy: "Soutenir les membres face aux mutations réglementaires, technologiques et commerciales.",
  },
  {
    number: "04",
    title: "Développer",
    copy: "Porter une croissance touristique responsable, lisible et durable pour tout le territoire régional.",
  },
];

const commissions = [
  {
    title: "Transport aérien",
    scope: "Connectivité, compagnies, distribution",
    image: photos.hero,
  },
  {
    title: "Transport maritime",
    scope: "Détroit, flux voyageurs, coordination portuaire",
    image: photos.cave,
  },
  {
    title: "Hajj & Omra",
    scope: "Conformité, qualité, encadrement",
    image: photos.medina,
  },
  {
    title: "Réceptif & Outgoing",
    scope: "Circuits, production, expérience client",
    image: photos.chefchaouenWide,
  },
  {
    title: "MICE",
    scope: "Rencontres, événements, tourisme d'affaires",
    image: photos.tetouan,
  },
  {
    title: "Relations publiques",
    scope: "Dialogue institutionnel et porte-parole",
    image: photos.tangier,
  },
  {
    title: "Conseil des sages",
    scope: "Transmission, arbitrage, mémoire professionnelle",
    image: photos.alHoceima,
  },
];

const news = [
  {
    category: "Institutionnel",
    date: "15 janvier 2026",
    title: "Assemblée régionale et feuille de route professionnelle",
    copy: "Les agences du Nord consolident une vision commune autour de la qualité, de l'éthique et de la coopération.",
    image: photos.tetouan,
  },
  {
    category: "Rencontres",
    date: "28 février 2026",
    title: "Dialogue avec les acteurs touristiques du Nord",
    copy: "Un format de travail resserré pour renforcer les passerelles entre agences, transporteurs et hôteliers.",
    image: photos.tangier,
  },
  {
    category: "Salons",
    date: "20 mars 2026",
    title: "La destination TTAH mise en avant",
    copy: "Nouveaux itinéraires, expériences bleues et valorisation des savoir-faire régionaux.",
    image: photos.chefchaouen,
  },
];

const partners = ["ONMT", "CRT TTA", "FNAVM", "ISITT", "Région TTAH"];

function Photo({
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
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
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
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0D0D0D]">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition duration-500 ${
          scrolled || menuOpen
            ? "border-[#0D0D0D]/10 bg-[#FAFAFA]/95 text-[#0D0D0D] backdrop-blur"
            : "border-[#FAFAFA]/20 bg-transparent text-[#FAFAFA]"
        }`}
      >
        <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#accueil" className="group flex items-center gap-3" aria-label="ARAVTTA accueil">
            <span
              className={`grid h-12 w-12 place-items-center border text-base font-black transition ${
                scrolled || menuOpen
                  ? "border-[#1E466B] bg-[#1E466B] text-[#FAFAFA]"
                  : "border-[#FAFAFA] text-[#FAFAFA]"
              }`}
            >
              A
            </span>
            <span className="leading-none">
              <span className="block text-2xl font-black tracking-[-0.04em]">ARAVTTA</span>
              <span className="mt-1 hidden text-[10px] font-bold uppercase tracking-[0.22em] opacity-70 sm:block">
                Tanger · Tétouan · Al Hoceima
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em]">
              <span>FR</span>
              <span className="h-3 w-px bg-current opacity-25" />
              <span>AR</span>
              <span className="h-3 w-px bg-current opacity-25" />
              <span>EN</span>
            </div>
            <a
              href="#contact"
              className={`inline-flex h-12 items-center border px-5 text-sm font-black transition ${
                scrolled
                  ? "border-[#1E466B] bg-[#1E466B] text-[#FAFAFA] hover:bg-[#67BAF4] hover:text-[#0D0D0D]"
                  : "border-[#FAFAFA] bg-[#FAFAFA] text-[#0D0D0D] hover:border-[#67BAF4] hover:bg-[#67BAF4]"
              }`}
            >
              Devenir membre
            </a>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMenuOpen((value) => !value)}
            className={`grid h-12 w-12 place-items-center border lg:hidden ${
              scrolled || menuOpen ? "border-[#0D0D0D]" : "border-[#FAFAFA]"
            }`}
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-[#0D0D0D]/10 bg-[#FAFAFA] px-5 py-5 text-[#0D0D0D] lg:hidden">
            <nav className="grid" aria-label="Navigation mobile">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#0D0D0D]/12 py-3 text-xl font-black tracking-[-0.03em]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex items-center justify-between text-sm">
              <span className="font-black uppercase tracking-[0.2em]">FR / AR / EN</span>
              <a href="#contact" className="border border-[#1E466B] bg-[#1E466B] px-4 py-3 font-black text-[#FAFAFA]">
                Devenir membre
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section id="accueil" className="relative min-h-[96svh] overflow-hidden bg-[#0D0D0D] text-[#FAFAFA]">
        <Photo src={photos.hero} alt="Côte de Tanger au coucher du soleil" priority className="opacity-72" />
        <div className="absolute inset-0 bg-[#0D0D0D]/44" />
        <div className="absolute bottom-0 right-0 top-0 hidden w-[36vw] bg-[#1E466B] mix-blend-multiply lg:block" />
        <div className="absolute left-0 top-[78px] h-2 w-full bg-[#67BAF4]" />

        <div className="relative z-10 mx-auto grid min-h-[96svh] max-w-[1500px] content-end px-5 pb-10 pt-28 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.66fr_0.34fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="mb-6 max-w-xl text-xs font-black uppercase tracking-[0.28em] text-[#67BAF4]">
                Association Régionale des Agences de Voyages
              </p>
              <h1 className="max-w-5xl text-[clamp(3.6rem,9vw,10.5rem)] font-black uppercase leading-[0.78] tracking-[-0.075em]">
                Ensemble,
                <br />
                faisons rayonner
                <br />
                le Nord.
              </h1>
            </div>
            <div className="max-w-sm justify-self-start border-l border-[#FAFAFA]/35 pl-5 lg:justify-self-end">
              <p className="text-lg leading-8 text-[#FAFAFA]/84">
                L&apos;ARAVTTA fédère les agences de voyages de Tanger-Tétouan-Al Hoceima
                autour d&apos;une industrie touristique forte, responsable et visible.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#association" className="btn-light">
                  L&apos;association
                </a>
                <a href="#commissions" className="btn-outline">
                  Commissions
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 grid border-y border-[#FAFAFA]/28 bg-[#0D0D0D]/55 text-[#FAFAFA] backdrop-blur md:grid-cols-4">
            {["Agences membres", "7 commissions", "Deux mers", "Une voix commune"].map((item, index) => (
              <div key={item} className="border-b border-[#FAFAFA]/18 py-5 md:border-b-0 md:border-r md:px-6">
                <span className="block text-xs font-black text-[#67BAF4]">0{index + 1}</span>
                <span className="mt-2 block text-lg font-black tracking-[-0.03em]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute right-5 top-28 hidden text-right text-[10px] font-black uppercase tracking-[0.24em] text-[#FAFAFA]/55 lg:block">
          Détroit / Rif / Méditerranée
        </div>
      </section>

      <section id="region" className="overflow-hidden bg-[#FAFAFA] py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-end">
            <div>
              <p className="section-label">Notre territoire</p>
              <h2 className="mt-4 max-w-2xl text-[clamp(3rem,6vw,7.4rem)] font-black uppercase leading-[0.83] tracking-[-0.07em]">
                Une région.
                <br />
                Quatre climats visuels.
              </h2>
            </div>
            <p className="max-w-2xl text-xl leading-9 text-[#0D0D0D]/70">
              Le territoire se lit par contrastes : ports, médinas blanches, villes bleues,
              falaises méditerranéennes. La page suit cette géographie au lieu de répéter des modules.
            </p>
          </div>

          <div className="territory-stage mt-12">
            <article className="territory-main">
              <Photo src={destinations[0].image} alt="Tanger et son littoral" />
              <div className="territory-caption">
                <span>{destinations[0].mark}</span>
                <h3>{destinations[0].name}</h3>
                <p>{destinations[0].line}</p>
              </div>
            </article>
            {destinations.slice(1).map((destination, index) => (
              <article key={destination.name} className={`territory-cut territory-cut-${index + 1}`}>
                <Photo src={destination.image} alt={`${destination.name}, destination régionale`} />
                <div className="territory-strip">
                  <span>{destination.mark}</span>
                  <strong>{destination.name}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="association" className="bg-[#1E466B] text-[#FAFAFA]">
        <div className="grid min-h-[760px] lg:grid-cols-[0.48fr_0.52fr]">
          <div className="relative flex flex-col justify-between overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <span className="absolute -left-4 top-8 text-[clamp(6rem,15vw,16rem)] font-black uppercase leading-none tracking-[-0.09em] text-[#67BAF4]/18">
              ARAVTTA
            </span>
            <div className="relative z-10 max-w-xl">
              <p className="section-label text-[#67BAF4]">L&apos;association</p>
              <h2 className="mt-5 text-[clamp(3rem,6vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
                Une voix commune
                pour le voyage.
              </h2>
            </div>
            <div className="relative z-10 mt-16 grid gap-8 border-t border-[#FAFAFA]/28 pt-7 text-lg leading-8 text-[#FAFAFA]/78 md:grid-cols-2">
              <p>
                L&apos;Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima
                rassemble et représente les professionnels du tourisme régional.
              </p>
              <p>
                Elle agit comme interlocuteur privilégié entre agences, pouvoirs publics et
                acteurs de l&apos;écosystème touristique.
              </p>
            </div>
          </div>
          <div className="relative min-h-[520px] lg:min-h-full">
            <Photo src={photos.medina} alt="Rue historique de Tétouan" className="grayscale-[0.1]" />
            <div className="absolute bottom-0 left-0 w-full bg-[#0D0D0D] p-5 text-[#FAFAFA] sm:p-7">
              <p className="max-w-lg text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                Représenter. Structurer. Projeter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0D0D0D] px-5 py-20 text-[#FAFAFA] sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.38fr_0.62fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-label text-[#67BAF4]">Mission</p>
            <h2 className="mt-5 text-[clamp(4rem,8vw,9rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
              Agir,
              <br />
              pas décorer.
            </h2>
            <div className="mt-9 h-[340px] w-full max-w-md overflow-hidden lg:ml-auto">
              <Photo src={photos.cave} alt="Vagues atlantiques à Tanger" />
            </div>
          </div>

          <div className="mission-list">
            {missions.map((mission, index) => (
              <article key={mission.number} className={index % 2 === 0 ? "mission-row" : "mission-row mission-row-shift"}>
                <span>{mission.number}</span>
                <h3>{mission.title}</h3>
                <p>{mission.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0D0D0D] text-[#FAFAFA]">
        <div className="relative h-[72svh] min-h-[520px]">
          <Photo src={photos.alHoceima} alt="Littoral d'Al Hoceima" className="opacity-76" />
          <div className="absolute inset-x-0 bottom-0 bg-[#1E466B] px-5 py-8 sm:px-8 lg:px-10">
            <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-end">
              <h2 className="text-[clamp(3.8rem,9vw,11rem)] font-black uppercase leading-[0.78] tracking-[-0.08em]">
                Impact
              </h2>
              <div className="grid grid-cols-2 gap-x-7 gap-y-6 border-t border-[#FAFAFA]/30 pt-6 md:grid-cols-4">
                {[
                  ["Réseau", "Agences membres"],
                  ["7", "Commissions"],
                  ["2", "Façades maritimes"],
                  ["1", "Vision commune"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <span className="block text-4xl font-black tracking-[-0.06em] text-[#67BAF4]">{value}</span>
                    <span className="mt-2 block text-xs font-black uppercase tracking-[0.18em]">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="commissions" className="bg-[#FAFAFA] py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
            <div>
              <p className="section-label">Nos expertises</p>
              <h2 className="mt-4 text-[clamp(3rem,6.5vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
                Sept tables.
                <br />
                Une profession.
              </h2>
            </div>
            <p className="max-w-2xl text-xl leading-9 text-[#0D0D0D]/68">
              Les commissions ne sont pas présentées comme des boîtes identiques : elles forment
              une table de travail, avec une image active et une hiérarchie de sujets.
            </p>
          </div>

          <div className="commission-board mt-12">
            <div className="commission-image">
              {commissions.map((commission, index) => (
                <Image
                  key={commission.title}
                  src={commission.image}
                  alt={commission.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className={`object-cover transition duration-700 ${
                    activeCommission === index ? "opacity-100" : "opacity-0"
                  }`}
                  unoptimized
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 bg-[#0D0D0D] p-6 text-[#FAFAFA]">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#67BAF4]">Commission active</p>
                <h3 className="mt-2 text-4xl font-black uppercase leading-none tracking-[-0.06em]">
                  {commissions[activeCommission].title}
                </h3>
              </div>
            </div>
            <div className="commission-list">
              {commissions.map((commission, index) => (
                <button
                  type="button"
                  key={commission.title}
                  onMouseEnter={() => setActiveCommission(index)}
                  onFocus={() => setActiveCommission(index)}
                  className={`commission-line ${activeCommission === index ? "is-active" : ""}`}
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{commission.title}</strong>
                  <em>{commission.scope}</em>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-[#0D0D0D] text-[#FAFAFA] lg:grid-cols-[0.58fr_0.42fr]">
        <div className="relative min-h-[560px]">
          <Photo src={photos.tangier} alt="Littoral nord marocain" />
          <div className="absolute left-0 top-0 h-full w-7 bg-[#67BAF4]" />
        </div>
        <div className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <svg aria-hidden="true" viewBox="0 0 480 260" className="absolute right-[-80px] top-12 w-[520px] text-[#67BAF4]/35">
            <path d="M18 181 C102 62 169 223 249 98 C304 13 358 80 452 24" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M50 225 C142 130 199 250 284 156 C333 101 371 118 460 75" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="relative z-10 max-w-xl">
            <p className="section-label text-[#67BAF4]">La Région</p>
            <h2 className="mt-5 text-[clamp(3.2rem,7vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
              Entre deux mers.
            </h2>
            <p className="mt-8 text-xl leading-9 text-[#FAFAFA]/74">
              De Tanger à Al Hoceima, la région Tanger-Tétouan-Al Hoceima assemble
              littoral atlantique, Méditerranée, villes historiques, Rif et destinations emblématiques.
            </p>
            <a href="#region" className="btn-blue mt-9">
              Explorer la région
            </a>
          </div>
        </div>
      </section>

      <section id="actualites" className="bg-[#FAFAFA] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-end">
            <h2 className="text-[clamp(3.4rem,7vw,8.2rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
              Journal
              <br />
              de bord.
            </h2>
            <div>
              <p className="section-label">Actualités & événements</p>
              <p className="mt-5 max-w-xl text-xl leading-9 text-[#0D0D0D]/70">
                Un traitement magazine : une grande une, deux brèves visuelles, et une lecture
                immédiate des sujets qui font avancer la profession.
              </p>
            </div>
          </div>

          <div className="news-spread">
            <article className="news-feature">
              <div className="relative min-h-[520px]">
                <Photo src={news[0].image} alt={news[0].title} />
              </div>
              <div className="bg-[#1E466B] p-6 text-[#FAFAFA] sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#67BAF4]">
                  {news[0].category} · {news[0].date}
                </p>
                <h3 className="mt-4 text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em]">
                  {news[0].title}
                </h3>
                <p className="mt-5 text-lg leading-8 text-[#FAFAFA]/78">{news[0].copy}</p>
              </div>
            </article>
            <div className="news-digest">
              {news.slice(1).map((item) => (
                <article key={item.title} className="news-line">
                  <div className="relative h-44 w-full sm:h-auto sm:w-52">
                    <Photo src={item.image} alt={item.title} />
                  </div>
                  <div className="py-5 sm:py-8">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1E466B]">
                      {item.category} · {item.date}
                    </p>
                    <h3 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.055em]">
                      {item.title}
                    </h3>
                    <p className="mt-4 leading-7 text-[#0D0D0D]/68">{item.copy}</p>
                  </div>
                </article>
              ))}
              <a href="#contact" className="text-link mt-2">
                Toutes les actualités
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-[#FAFAFA] lg:grid-cols-[0.38fr_0.62fr]">
        <div className="bg-[#1E466B] px-5 py-16 text-[#FAFAFA] sm:px-8 lg:px-10">
          <p className="section-label text-[#67BAF4]">Partenaires</p>
          <h2 className="mt-5 text-[clamp(3rem,6vw,6.8rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
            Un écosystème en mouvement.
          </h2>
        </div>
        <div className="flex min-h-[360px] flex-col justify-center px-5 py-16 sm:px-8 lg:px-10">
          <p className="max-w-2xl text-xl leading-9 text-[#0D0D0D]/72">
            L&apos;ARAVTTA travaille avec les institutions, écoles, fédérations et opérateurs
            pour renforcer la compétitivité touristique du Nord.
          </p>
          <div className="partner-run mt-10">
            {partners.map((partner) => (
              <span key={partner}>{partner}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[#0D0D0D] text-[#FAFAFA]">
        <div className="grid min-h-[680px] lg:grid-cols-[0.46fr_0.54fr]">
          <div className="relative min-h-[420px] lg:min-h-full">
            <Photo src={photos.hero} alt="Côte de Tanger pendant l'heure dorée" className="opacity-80" />
            <div className="absolute inset-x-0 bottom-0 bg-[#67BAF4] px-5 py-5 text-[#0D0D0D] sm:px-8">
              <p className="text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                Tanger · Tétouan · Al Hoceima
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
            <p className="section-label text-[#67BAF4]">Adhésion</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(3.4rem,7.2vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.078em]">
              Rejoignez le réseau qui avance.
            </h2>
            <p className="mt-8 max-w-xl text-xl leading-9 text-[#FAFAFA]/74">
              Vous êtes une agence de voyages ou un acteur du secteur touristique ?
              Parlons représentation, coopération et développement régional.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:contact@aravtta.org" className="btn-light">
                Devenir membre
              </a>
              <a href="tel:+212539325004" className="btn-outline">
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden bg-[#0D0D0D] px-5 py-16 text-[#FAFAFA] sm:px-8 lg:px-10">
        <div className="absolute inset-x-0 top-0 h-2 bg-[#67BAF4]" />
        <span className="pointer-events-none absolute -bottom-9 left-0 text-[clamp(6rem,18vw,18rem)] font-black uppercase leading-none tracking-[-0.1em] text-[#1E466B]/55">
          ARAVTTA
        </span>
        <div className="relative z-10 mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[1.25fr_0.7fr_0.7fr_1fr]">
          <div>
            <h2 className="text-5xl font-black uppercase tracking-[-0.07em]">ARAVTTA</h2>
            <p className="mt-5 max-w-sm leading-7 text-[#FAFAFA]/62">
              Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Navigation</h3>
            <ul className="mt-5 space-y-3 text-[#FAFAFA]/62">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-[#67BAF4]">
                    {item.label}
                  </a>
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
                <a href="tel:+212539325004" className="hover:text-[#67BAF4]">
                  05393-25004
                </a>
              </p>
              <p>
                <a href="mailto:contact@aravtta.org" className="hover:text-[#67BAF4]">
                  contact@aravtta.org
                </a>
              </p>
              <p>LinkedIn · Facebook · Instagram</p>
            </address>
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-14 flex max-w-[1500px] flex-col gap-4 border-t border-[#FAFAFA]/14 pt-6 text-sm text-[#FAFAFA]/42 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright 2026 ARAVTTA. Tous droits réservés.</p>
          <div className="flex gap-5">
            <a href="#accueil" className="hover:text-[#67BAF4]">
              Mentions légales
            </a>
            <a href="#accueil" className="hover:text-[#67BAF4]">
              Confidentialité
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
