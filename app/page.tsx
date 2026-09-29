"use client";

import Image from "next/image";
import { Menu, X } from "lucide-react";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

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
  hero: "/images/region/tanger-pic.avif",
  tangier: "/images/region/tanger.avif",
  oldPort: "/images/region/tangier-old-port.avif",
  chefchaouen: "/images/region/chefchaouen.avif",
  akchour: "/images/region/akchour.avif",
  akchourNature: "/images/region/akchour-nature.avif",
  alHoceima: "/images/region/al-hoceima.jpg",
  tetouan: "/images/region/tetouan.avif",
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
    image: photos.tangier,
  },
  {
    title: "Transport maritime",
    scope: "Détroit, flux voyageurs, coordination portuaire",
    image: photos.oldPort,
  },
  {
    title: "Hajj & Omra",
    scope: "Conformité, qualité, encadrement",
    image: photos.tetouan,
  },
  {
    title: "Réceptif & Outgoing",
    scope: "Circuits, production, expérience client",
    image: photos.akchour,
  },
  {
    title: "MICE",
    scope: "Rencontres, événements, tourisme d'affaires",
    image: photos.chefchaouen,
  },
  {
    title: "Relations publiques",
    scope: "Dialogue institutionnel et porte-parole",
    image: photos.akchourNature,
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

const membershipQuestions = [
  {
    name: "agencyName",
    label: "Quel est le nom de votre agence ?",
    placeholder: "Ex. Voyages du Nord",
  },
  {
    name: "city",
    label: "Dans quelle ville est-elle basée ?",
    placeholder: "Tanger, Tétouan, Al Hoceima...",
  },
  {
    name: "manager",
    label: "Qui est la personne à contacter ?",
    placeholder: "Nom complet et fonction",
  },
  {
    name: "contact",
    label: "Quel numéro ou email devons-nous utiliser ?",
    placeholder: "+212 ... / contact@agence.ma",
  },
  {
    name: "activity",
    label: "Quel est votre agrément et votre activité principale ?",
    placeholder: "Agrément, billetterie, réceptif, Hajj & Omra...",
    multiline: true,
  },
];

const memberLogos = [
  {
    name: "ISITT Tanger",
    src: "/images/logos/isitt.png",
    width: 500,
    height: 205,
  },
  {
    name: "GNV",
    src: "/images/logos/gnv.png",
    width: 1280,
    height: 351,
    wide: true,
  },
  {
    name: "Voyages Florence",
    src: "/images/logos/voyages-florence.png",
    width: 800,
    height: 297,
    wide: true,
  },
  {
    name: "VIP Voyage",
    src: "/images/logos/vip-voyage.png",
    width: 500,
    height: 245,
  },
  {
    name: "Tanger Med Port Authority",
    src: "/images/logos/tanger-med-port-authority.png",
    width: 591,
    height: 198,
    wide: true,
  },
  {
    name: "Amiral Voyages",
    src: "/images/logos/amiral-voyages.png",
    width: 2848,
    height: 809,
    wide: true,
  },
  {
    name: "Alma Travel Agency",
    src: "/images/logos/alma-travel-agency.png",
    width: 600,
    height: 325,
  },
  {
    name: "Royal Air Maroc",
    src: "/images/logos/royal-air-maroc.webp",
    width: 1280,
    height: 915,
  },
];

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
  const [membershipStatus, setMembershipStatus] = useState("");

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  function handleMembershipSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const agency = String(formData.get("agencyName") ?? "").trim();
    const details = membershipQuestions
      .map((question) => {
        const value = String(formData.get(question.name) ?? "").trim();
        return `${question.label}\n${value}`;
      })
      .join("\n\n");
    const subject = `Demande d'adhésion ARAVTTA${agency ? ` - ${agency}` : ""}`;
    const body = `Bonjour ARAVTTA,\n\nJe souhaite devenir membre de l'association.\n\n${details}\n\nMerci de me recontacter pour la suite du dossier.`;

    window.location.href = `mailto:contact@aravtta.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMembershipStatus("Votre messagerie s'ouvre avec la demande pré-remplie.");
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0D0D0D]">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b text-[#FAFAFA] backdrop-blur transition duration-500 ${
          scrolled || menuOpen
            ? "border-[#FAFAFA]/20 bg-[#0D0D0D]/68 shadow-[0_18px_60px_rgb(13_13_13/18%)]"
            : "border-[#FAFAFA]/28 bg-[#0D0D0D]/55"
        }`}
      >
        <div className="mx-auto flex h-[78px] max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-10">
          <a
            href="#accueil"
            className="group flex items-center transition"
            aria-label="ARAVTTA accueil"
          >
            <Image
              src="/aravtta-logo.png"
              alt="ARAVTTA"
              width={430}
              height={100}
              priority
              className="h-auto w-[172px] sm:w-[214px] xl:w-[244px]"
            />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-semibold lg:flex" aria-label="Navigation principale">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <a
              href="#adhesion-form"
              className="inline-flex h-12 items-center border border-[#1538D6] bg-[linear-gradient(135deg,#1538D6,#4F7CFF)] px-5 text-sm font-black text-[#FAFAFA] transition hover:border-[#8EC5FF] hover:bg-[linear-gradient(135deg,#4F7CFF,#8EC5FF)] hover:text-[#0D0D0D]"
            >
              Devenir membre
            </a>
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
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="border-b border-[#FAFAFA]/16 py-3 text-xl font-black tracking-[-0.03em]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="mt-5 flex justify-end text-sm">
              <a
                href="#adhesion-form"
                onClick={() => setMenuOpen(false)}
                className="border border-[#1538D6] bg-[linear-gradient(135deg,#1538D6,#4F7CFF)] px-4 py-3 font-black text-[#FAFAFA]"
              >
                Devenir membre
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section id="accueil" className="relative min-h-[96svh] overflow-hidden bg-[#0D0D0D] text-[#FAFAFA]">
        <Photo src={photos.hero} alt="Côte de Tanger au coucher du soleil" priority className="opacity-72" />
        <div className="absolute inset-0 bg-[#0D0D0D]/34" />
        <div className="absolute left-0 top-[78px] h-2 w-full bg-[linear-gradient(90deg,#1538D6,#4F7CFF,#8EC5FF)]" />

        <div className="relative z-10 mx-auto grid min-h-[96svh] max-w-[1500px] content-end px-5 pb-10 pt-28 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.66fr_0.34fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="mb-6 max-w-xl text-xs font-black uppercase tracking-[0.28em] text-[#8EC5FF]">
                Association Régionale des Agences de Voyages
              </p>
              <h1 className="max-w-5xl text-[clamp(3.1rem,7.1vw,8.1rem)] font-black uppercase leading-[0.82] tracking-[-0.068em]">
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

        </div>

        <div className="absolute right-5 top-28 hidden text-right text-[10px] font-black uppercase tracking-[0.24em] text-[#FAFAFA]/55 lg:block">
          Détroit / Rif / Méditerranée
        </div>
      </section>

      <section className="logo-marquee-section" aria-label="Membres et partenaires ARAVTTA">
        <div className="logo-marquee-label">
          <span>Réseau membre</span>
          <strong>Ils avancent avec ARAVTTA</strong>
        </div>
        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {[...memberLogos, ...memberLogos].map((logo, index) => (
              <span
                className={`logo-wordmark ${logo.wide ? "logo-wordmark-wide" : ""}`}
                key={`${logo.name}-${index}`}
                aria-hidden={index >= memberLogos.length ? true : undefined}
              >
                <Image
                  src={logo.src}
                  alt={index < memberLogos.length ? logo.name : ""}
                  width={logo.width}
                  height={logo.height}
                  className="member-logo-image"
                  unoptimized
                />
              </span>
            ))}
          </div>
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

      <section id="association" className="bg-[linear-gradient(135deg,#071394,#1538D6_46%,#4F7CFF)] text-[#FAFAFA]">
        <div className="grid min-h-[760px] lg:grid-cols-[0.48fr_0.52fr]">
          <div className="relative flex flex-col justify-between overflow-hidden px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
            <span className="absolute -left-4 top-8 text-[clamp(6rem,15vw,16rem)] font-black uppercase leading-none tracking-[-0.09em] text-[#8EC5FF]/18">
              ARAVTTA
            </span>
            <div className="relative z-10 max-w-xl">
              <p className="section-label text-[#8EC5FF]">L&apos;association</p>
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
            <Photo src={photos.oldPort} alt="Port historique de Tanger" className="grayscale-[0.1]" />
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
            <p className="section-label text-[#8EC5FF]">Mission</p>
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
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(135deg,#071394,#1538D6_48%,#4F7CFF)] px-5 py-8 sm:px-8 lg:px-10">
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
                    <span className="block text-4xl font-black tracking-[-0.06em] text-[#8EC5FF]">{value}</span>
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
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8EC5FF]">Commission active</p>
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
          <Photo src={photos.akchourNature} alt="Nature d'Akchour dans le Rif" />
          <div className="absolute left-0 top-0 h-full w-7 bg-[linear-gradient(180deg,#1538D6,#8EC5FF)]" />
        </div>
        <div className="relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <svg aria-hidden="true" viewBox="0 0 480 260" className="absolute right-[-80px] top-12 w-[520px] text-[#8EC5FF]/35">
            <path d="M18 181 C102 62 169 223 249 98 C304 13 358 80 452 24" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M50 225 C142 130 199 250 284 156 C333 101 371 118 460 75" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="relative z-10 max-w-xl">
            <p className="section-label text-[#8EC5FF]">La Région</p>
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
              <div className="bg-[linear-gradient(135deg,#071394,#1538D6_52%,#4F7CFF)] p-6 text-[#FAFAFA] sm:p-8">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8EC5FF]">
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
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1538D6]">
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
        <div className="bg-[linear-gradient(135deg,#071394,#1538D6_50%,#4F7CFF)] px-5 py-16 text-[#FAFAFA] sm:px-8 lg:px-10">
          <p className="section-label text-[#8EC5FF]">Partenaires</p>
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
            <Photo src={photos.alHoceima} alt="Plage d'Al Hoceima et eau méditerranéenne" className="opacity-80" />
            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(90deg,#1538D6,#4F7CFF,#8EC5FF)] px-5 py-5 text-[#0D0D0D] sm:px-8">
              <p className="text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                Tanger · Tétouan · Al Hoceima
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-12">
            <p className="section-label text-[#8EC5FF]">Adhésion</p>
            <h2 className="mt-5 max-w-3xl text-[clamp(3.4rem,7.2vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.078em]">
              Rejoignez le réseau qui avance.
            </h2>
            <p className="mt-8 max-w-xl text-xl leading-9 text-[#FAFAFA]/74">
              Vous êtes une agence de voyages ou un acteur du secteur touristique ?
              Parlons représentation, coopération et développement régional.
            </p>
            <form id="adhesion-form" className="membership-form" onSubmit={handleMembershipSubmit}>
              <div className="membership-form-header">
                <span>5 questions</span>
                <strong>Demande d&apos;adhésion agence</strong>
              </div>
              {membershipQuestions.map((question, index) => (
                <div className="membership-question" key={question.name}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <label htmlFor={question.name}>{question.label}</label>
                  {question.multiline ? (
                    <textarea
                      id={question.name}
                      name={question.name}
                      placeholder={question.placeholder}
                      rows={3}
                      required
                    />
                  ) : (
                    <input
                      id={question.name}
                      name={question.name}
                      type="text"
                      placeholder={question.placeholder}
                      required
                    />
                  )}
                </div>
              ))}
              <div className="membership-actions">
                <button type="submit" className="membership-submit">
                  Envoyer la demande
                </button>
                <a href="tel:+212539325004" className="membership-call">
                  Appeler directement
                </a>
              </div>
              <p className="membership-note">
                L&apos;email sera préparé automatiquement avec vos réponses.
              </p>
              {membershipStatus ? <p className="membership-status">{membershipStatus}</p> : null}
            </form>
          </div>
        </div>
      </section>

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
              width={430}
              height={100}
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
                  <a href={item.href} className="hover:text-[#8EC5FF]">
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
                <a href="tel:+212539325004" className="hover:text-[#8EC5FF]">
                  05393-25004
                </a>
              </p>
              <p>
                <a href="mailto:contact@aravtta.org" className="hover:text-[#8EC5FF]">
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
            <a href="#accueil" className="hover:text-[#8EC5FF]">
              Mentions légales
            </a>
            <a href="#accueil" className="hover:text-[#8EC5FF]">
              Confidentialité
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
