"use client";

import Image from "next/image";
import type { FormEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { cities, commissions, news, partners } from "@/lib/site-data";
import { useT } from "@/lib/i18n";

const photos = {
  hero: "/images/region/tanger-pic.avif",
  tangier: "/images/region/tanger.avif",
  oldPort: "/images/region/tangier-old-port.avif",
  chefchaouen: "/images/region/chefchaouen.avif",
  alHoceima: "/images/region/al-hoceima.jpg",
  impact: "/images/region/tanger-tourism-associations.webp",
  spartel: "/images/region/phare-cap-spartel-tange.webp",
  tetouan: "/images/region/tetouan.avif",
  cave: "https://images.unsplash.com/photo-1771690288491-4de18b75e038?auto=format&fit=crop&w=1600&q=84",
  formMice: "/images/commissions/mice-event-tanger.webp",
};

const destinations = cities;

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
  const t = useT();
  const [activeCommission, setActiveCommission] = useState(0);
  const [membershipStatus, setMembershipStatus] = useState("");
  const [membershipDraft, setMembershipDraft] = useState<{
    href: string;
    message: string;
  } | null>(null);

  function handleMembershipSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMembershipDraft(null);
    const formData = new FormData(event.currentTarget);
    const missingQuestion = membershipQuestions.find(
      (question) => !String(formData.get(question.name) ?? "").trim(),
    );

    if (missingQuestion) {
      setMembershipStatus(t("Remplis les 5 réponses avant l'envoi."));
      const field = event.currentTarget.elements.namedItem(missingQuestion.name);
      if (field instanceof HTMLElement) field.focus();
      return;
    }

    const agency = String(formData.get("agencyName") ?? "").trim();
    const details = membershipQuestions
      .map((question) => {
        const value = String(formData.get(question.name) ?? "").trim();
        return `${t(question.label)}\n${value}`;
      })
      .join("\n\n");
    const subject = `${t("Demande d'adhésion ARAVTTA")}${agency ? ` - ${agency}` : ""}`;
    const body = `${t("Bonjour ARAVTTA,")}\n\n${t("Je souhaite devenir membre de l'association.")}\n\n${details}\n\n${t("Merci de me recontacter pour la suite du dossier.")}`;
    const href = `mailto:contact@aravta.org?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const message = `${t("À :")} contact@aravta.org\n${t("Objet :")} ${subject}\n\n${body}`;

    setMembershipDraft({ href, message });
    setMembershipStatus(t("Demande prête. Si l'email ne s'ouvre pas, utilise les boutons ci-dessous."));
    window.setTimeout(() => {
      window.location.href = href;
    }, 120);
  }

  async function handleCopyMembership() {
    if (!membershipDraft) return;
    try {
      await navigator.clipboard.writeText(membershipDraft.message);
      setMembershipStatus(t("Message copié. Colle-le dans ton email à contact@aravta.org."));
    } catch {
      setMembershipStatus(t("Copie le message affiché ci-dessous puis envoie-le à contact@aravta.org."));
    }
  }

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#152641]">
      <SiteHeader />

      <section id="accueil" className="relative min-h-[96svh] overflow-hidden bg-[#152641] text-[#FAFAFA]">
        <Photo src={photos.hero} alt={t("Côte de Tanger au coucher du soleil")} priority className="object-[50%_20%] opacity-72" />
        <div className="absolute inset-0 bg-[#152641]/34" />

        <div className="relative z-10 mx-auto grid min-h-[96svh] max-w-[1500px] content-end px-5 pb-10 pt-28 sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.66fr_0.34fr] lg:items-end">
            <div className="max-w-5xl">
              <p className="mb-6 max-w-xl text-xs font-black tracking-[0.04em] text-[#C3F84A]">
                {t("Association Régionale des Agences de Voyages")}
              </p>
              <h1 className="max-w-5xl display-title display-title-hero">
                {t("Ensemble, faisons rayonner le Nord.")}
              </h1>
            </div>
            <div className="max-w-sm justify-self-start border-l border-[#FAFAFA]/35 pl-5 lg:justify-self-end">
              <p className="text-lg leading-8 text-[#FAFAFA]/84">
                {t("L'ARAVTTA fédère les agences de voyages de Tanger-Tétouan-Al Hoceima autour d'une industrie touristique forte, responsable et visible.")}
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/association" className="btn-light">
                  {t("L'association")}
                </Link>
                <Link href="/association/commissions" className="btn-outline">
                  {t("Commissions")}
                </Link>
              </div>
            </div>
          </div>

        </div>

        <div className="absolute right-5 top-28 hidden text-right text-[10px] font-black tracking-[0.04em] text-[#FAFAFA]/55 lg:block">
          {t("Détroit / Rif / Méditerranée")}
        </div>
      </section>

      <section className="logo-marquee-section" aria-label={t("Partenaires ARAVTTA")}>
        <Link href="/partenaires" className="logo-marquee-label group">
          <strong className="!mt-0 inline-flex items-center gap-2">
            {t("Nos partenaires")}
            <ArrowUpRight size={18} aria-hidden="true" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </strong>
        </Link>
        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {[...partners, ...partners].map((logo, index) => {
              const duplicate = index >= partners.length;
              const image = (
                <Image
                  src={logo.logo}
                  alt={duplicate ? "" : t(logo.name)}
                  width={400}
                  height={200}
                  className="member-logo-image"
                  unoptimized
                />
              );
              return logo.website ? (
                <a
                  key={`${logo.short}-${index}`}
                  href={logo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="logo-wordmark"
                  aria-hidden={duplicate ? true : undefined}
                  tabIndex={duplicate ? -1 : undefined}
                  title={t(logo.name)}
                >
                  {image}
                </a>
              ) : (
                <span key={`${logo.short}-${index}`} className="logo-wordmark" aria-hidden={duplicate ? true : undefined} title={t(logo.name)}>
                  {image}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      <section id="region" className="overflow-hidden bg-[#FAFAFA] py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.55fr_0.45fr] lg:items-center">
            <div>
              <p className="section-label">{t("Notre territoire")}</p>
              <h2 className="mt-4 display-title">
                {t("Une région. Cinq escales.")}
              </h2>
            </div>
            <p className="max-w-2xl text-xl leading-9 text-[#152641]/70 lg:-translate-y-4">
              {t("Le territoire se lit par contrastes : ports, médinas blanches, villes bleues, falaises méditerranéennes. Cliquez sur une ville pour la découvrir.")}
            </p>
          </div>

          <div className="territory-stage mt-12">
            <Link href={`/region#${destinations[0].slug}`} className="territory-main">
              <Photo src={destinations[0].image} alt={t("Tanger et son littoral")} />
              <div className="territory-caption">
                <span>01</span>
                <h3>{t(destinations[0].name)}</h3>
                <p>{t(destinations[0].line)}</p>
              </div>
            </Link>
            {destinations.slice(1).map((destination, index) => (
              <Link
                key={destination.slug}
                href={`/region#${destination.slug}`}
                className={`territory-cut territory-cut-${index + 1}`}
              >
                <Photo src={destination.image} alt={t("{city}, destination régionale", { city: t(destination.name) })} />
                <div className="territory-strip">
                  <span>{String(index + 2).padStart(2, "0")}</span>
                  <strong>{t(destination.name)}</strong>
                  <p>{t(destination.line)}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 flex justify-end">
            <Link href="/region" className="btn-blue">
              {t("Toute la région")}
            </Link>
          </div>
        </div>
      </section>

      <section id="association" className="bg-[linear-gradient(135deg,#152641,#0F4FC4_46%,#136CFC)] text-[#FAFAFA]">
        <div className="grid min-h-[760px] lg:grid-cols-[0.56fr_0.44fr]">
          <div className="relative flex flex-col justify-between overflow-hidden px-5 py-12 sm:py-16 sm:px-8 lg:px-10 lg:py-24">
            <div className="relative z-10 max-w-2xl">
              <p className="section-label text-[#C3F84A]">{t("L'association")}</p>
              <h2 className="mt-5 display-title">
                {t("Une voix commune pour le voyage.")}
              </h2>
            </div>
            <div className="relative z-10 mt-16 grid gap-8 border-t border-[#FAFAFA]/28 pt-7 text-lg leading-8 text-[#FAFAFA]/78 md:grid-cols-2">
              <p>
                {t("L'Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima rassemble et représente les professionnels du tourisme régional.")}
              </p>
              <p>
                {t("Elle agit comme interlocuteur privilégié entre agences, pouvoirs publics et acteurs de l'écosystème touristique.")}
              </p>
            </div>
          </div>
          <div className="relative min-h-[520px] lg:min-h-full">
            <Photo src={photos.oldPort} alt={t("Port historique de Tanger")} className="grayscale-[0.1]" />
            <div className="absolute bottom-0 left-0 w-full bg-[linear-gradient(0deg,rgb(21_38_65/0.96),rgb(19_108_252/0.82)_58%,rgb(21_38_65/0))] p-5 pt-24 text-[#FAFAFA] sm:p-7 sm:pt-28">
              <p className="max-w-lg text-2xl font-black leading-[1.15] tracking-[-0.01em]">
                {t("Représenter. Structurer. Projeter.")}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-[#0D0D0D] text-[#FAFAFA] lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)]">
        <div className="relative min-h-[340px] sm:min-h-[460px] lg:min-h-full">
          <Photo src={photos.cave} alt={t("Grotte d'Hercule à Tanger")} />
        </div>

        <div className="px-5 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16">
          <h2 className="display-title">{t("Nos missions")}</h2>
          <div className="mission-list mt-10 lg:mt-12">
            {missions.map((mission, index) => (
              <article key={mission.number} className={index % 2 === 0 ? "mission-row" : "mission-row mission-row-shift"}>
                <span>{mission.number}</span>
                <h3>{t(mission.title)}</h3>
                <p>{t(mission.copy)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#152641] text-[#FAFAFA]">
        <div className="relative h-[72svh] min-h-[520px]">
          <Photo src={photos.impact} alt={t("Associations touristiques à Tanger")} className="opacity-[0.88]" />
          <div className="absolute inset-0 bg-[#136CFC]/30" />
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(135deg,#152641,#0F4FC4_48%,#136CFC)] px-5 py-8 sm:px-8 lg:px-10">
            <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-end">
              <h2 className="text-[clamp(3.8rem,9vw,11rem)] font-black leading-[1.1] tracking-[-0.01em]">
                {t("Impact")}
              </h2>
              <div className="grid grid-cols-2 gap-x-7 gap-y-6 border-t border-[#FAFAFA]/30 pt-6 md:grid-cols-4">
                {[
                  ["Réseau", "Agences membres"],
                  ["7", "Commissions"],
                  ["2", "Façades maritimes"],
                  ["1", "Vision commune"],
                ].map(([value, label]) => (
                  <div key={label}>
                    <span className="block text-4xl font-black tracking-[-0.01em] text-[#C3F84A]">{t(value)}</span>
                    <span className="mt-2 block text-xs font-black tracking-[0.04em]">{t(label)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="commissions" className="bg-[#E8F4FC] py-14 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
            <div>
              <p className="section-label">{t("Nos expertises")}</p>
              <h2 className="mt-4 display-title">{t("Sept tables. Une profession.")}</h2>
            </div>
            <p className="max-w-2xl text-xl leading-9 text-[#152641]/68">
              {t("Sept commissions thématiques portent les dossiers de la profession : transport, pèlerinage, réceptif, tourisme d'affaires, médiation et communication.")}
            </p>
          </div>

          <div className="commission-board mt-12">
            <div className="commission-image">
              {commissions.map((commission, index) => (
                <Image
                  key={commission.title}
                  src={commission.image ?? photos.formMice}
                  alt={t(commission.title)}
                  fill
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  className={`object-cover transition duration-700 ${
                    activeCommission === index ? "opacity-100" : "opacity-0"
                  }`}
                  unoptimized
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 bg-[#152641] p-6 text-[#FAFAFA] sm:p-8">
                <p className="text-xs font-black tracking-[0.2em] text-[#C3F84A]">
                  {t("Commission {n}", { n: commissions[activeCommission].number })}
                </p>
                <h3 className="mt-2 text-3xl font-black leading-[1.15] tracking-[-0.01em] sm:text-4xl">
                  {t(commissions[activeCommission].title)}
                </h3>
                <p className="mt-4 text-sm font-semibold text-[#FAFAFA]/80">
                  <span className="text-[#C3F84A]">
                    {commissions[activeCommission].leads.length > 1 ? t("Responsables :") : t("Responsable :")}{" "}
                  </span>
                  {commissions[activeCommission].leads.join(", ")}
                </p>
                <p className="mt-3 max-w-xl text-base leading-7 text-[#FAFAFA]/85">
                  {t(commissions[activeCommission].mission)}
                </p>
                <Link
                  href={`/association/commissions#commission-${commissions[activeCommission].number}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-black tracking-[0.04em] text-[#FAFAFA] underline-offset-4 hover:underline"
                >
                  {t("Voir le détail")}
                  <ArrowUpRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="commission-list">
              {commissions.map((commission, index) => (
                <Link
                  href={`/association/commissions#commission-${commission.number}`}
                  key={commission.title}
                  onMouseEnter={() => setActiveCommission(index)}
                  onFocus={() => setActiveCommission(index)}
                  className={`commission-line ${activeCommission === index ? "is-active" : ""}`}
                >
                  <span>{commission.number}</span>
                  <strong>{t(commission.title)}</strong>
                  <em>{t(commission.scope)}</em>
                </Link>
              ))}
            </div>
          </div>
          <div className="mt-10 flex justify-end">
            <Link href="/association/commissions" className="btn-blue">
              {t("Voir toutes les commissions")}
            </Link>
          </div>
        </div>
      </section>

      <section className="grid bg-[#152641] text-[#FAFAFA] lg:grid-cols-[0.58fr_0.42fr]">
        <div className="relative min-h-[560px]">
          <Photo src={photos.spartel} alt={t("Phare du Cap Spartel à Tanger")} />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[linear-gradient(0deg,rgba(21,38,65,0.92),rgba(19,108,252,0.58)_46%,rgba(21,38,65,0)_100%)]" />
          <div className="absolute left-0 top-0 h-full w-7 bg-[linear-gradient(180deg,#136CFC,#C3F84A)]" />
        </div>
        <div className="relative overflow-hidden px-5 py-14 sm:py-20 sm:px-8 lg:px-12 lg:py-28">
          <svg aria-hidden="true" viewBox="0 0 480 260" className="absolute right-[-80px] top-12 w-[520px] text-[#C3F84A]/35">
            <path d="M18 181 C102 62 169 223 249 98 C304 13 358 80 452 24" fill="none" stroke="currentColor" strokeWidth="3" />
            <path d="M50 225 C142 130 199 250 284 156 C333 101 371 118 460 75" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          <div className="relative z-10 max-w-xl">
            <p className="section-label text-[#C3F84A]">{t("La Région")}</p>
            <h2 className="mt-5 display-title">
              {t("Entre deux mers.")}
            </h2>
            <p className="mt-8 text-xl leading-9 text-[#FAFAFA]/74">
              {t("De Tanger à Al Hoceima, la région Tanger-Tétouan-Al Hoceima assemble littoral atlantique, Méditerranée, villes historiques, Rif et destinations emblématiques.")}
            </p>
            <Link href="/region" className="btn-blue mt-9">
              {t("Explorer la région")}
            </Link>
          </div>
        </div>
      </section>

      <section id="actualites" className="bg-[#FAFAFA] px-5 py-14 sm:py-20 sm:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1500px]">
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-end">
            <h2 className="display-title">{t("Journal de bord.")}</h2>
            <div>
              <p className="section-label">{t("Actualités & événements")}</p>
              <p className="mt-5 max-w-xl text-xl leading-9 text-[#152641]/70">
                {t("Un traitement magazine : une grande une, deux brèves visuelles, et une lecture immédiate des sujets qui font avancer la profession.")}
              </p>
            </div>
          </div>

          <div className="news-spread">
            <article className="news-feature">
              <div className="relative min-h-[520px]">
                <Photo src={news[0].image} alt={t(news[0].title)} />
              </div>
              <div className="bg-[linear-gradient(135deg,#152641,#0F4FC4_52%,#136CFC)] p-6 text-[#FAFAFA] sm:p-8">
                <p className="text-xs font-black tracking-[0.2em] text-[#C3F84A]">
                  {news[0].source ?? t(news[0].category)} · {t(news[0].date)}
                </p>
                <h3 className="mt-4 text-3xl font-black leading-[1.15] tracking-[-0.01em] sm:text-4xl">
                  {t(news[0].title)}
                </h3>
                <p className="mt-5 text-lg leading-8 text-[#FAFAFA]/78">{t(news[0].copy)}</p>
                {news[0].url ? (
                  <a
                    href={news[0].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-black tracking-[0.04em] text-[#FAFAFA] underline-offset-4 hover:underline"
                  >
                    {t("Lire l'article")}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
            <div className="news-digest">
              {news.slice(1, 3).map((item) => (
                <article key={item.title} className="news-line">
                  <div className="relative h-44 w-full sm:h-auto sm:w-52">
                    <Photo src={item.image} alt={t(item.title)} />
                  </div>
                  <div className="py-5 sm:py-8">
                    <p className="text-xs font-black tracking-[0.2em] text-[#136CFC]">
                      {item.source ?? t(item.category)} · {t(item.date)}
                    </p>
                    <h3 className="mt-3 text-3xl font-black leading-[1.15] tracking-[-0.01em]">
                      {t(item.title)}
                    </h3>
                    <p className="mt-4 leading-7 text-[#152641]/68">{t(item.copy)}</p>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-1.5 text-sm font-black text-[#FAFAFA] underline-offset-4 hover:underline"
                      >
                        {t("Lire l'article")}
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
              <div className="mt-2 flex flex-wrap gap-6">
                <Link href="/actualites" className="text-link">
                  {t("Toutes les actualités")}
                </Link>
                <Link href="/evenements" className="text-link">
                  {t("Nos événements")}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-[#E8F4FC] lg:grid-cols-[0.46fr_0.54fr]">
        <div className="bg-[linear-gradient(135deg,#152641,#0F4FC4_50%,#136CFC)] px-5 py-12 sm:py-16 text-[#FAFAFA] sm:px-8 lg:px-10">
          <p className="section-label text-[#C3F84A]">{t("Partenaires")}</p>
          <h2 className="mt-5 display-title">
            {t("Un écosystème en mouvement.")}
          </h2>
        </div>
        <div className="flex min-h-[360px] flex-col justify-center px-5 py-12 sm:py-16 sm:px-8 lg:px-10">
          <p className="max-w-2xl text-xl leading-9 text-[#152641]/72">
            {t("L'ARAVTTA travaille avec les institutions, écoles, fédérations et opérateurs pour renforcer la compétitivité touristique du Nord.")}
          </p>
          <div className="mt-12 grid max-w-4xl grid-cols-2 items-center gap-4 sm:grid-cols-3 xl:grid-cols-4">
            {partners.map((logo) => {
              const img = (
                <Image
                  src={logo.logo}
                  alt={t(logo.name)}
                  width={400}
                  height={200}
                  className="h-auto max-h-16 w-auto max-w-full object-contain"
                  unoptimized
                />
              );
              return logo.website ? (
                <a
                  key={logo.short}
                  href={logo.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={t(logo.name)}
                  className="flex min-h-24 items-center justify-center rounded-[12px] border border-[#152641]/8 bg-white p-3 transition hover:border-[#4D94FF]/50 hover:shadow-[0_14px_40px_rgb(19_108_252/12%)]"
                >
                  {img}
                </a>
              ) : (
                <div key={logo.short} title={t(logo.name)} className="flex min-h-24 items-center justify-center rounded-[12px] border border-[#152641]/8 bg-white p-3">
                  {img}
                </div>
              );
            })}
          </div>
          <Link href="/partenaires" className="text-link mt-10">
            {t("Tous nos partenaires")}
          </Link>
        </div>
      </section>

      <section id="contact" className="border-t border-[#152641]/8 bg-[#FAFAFA] px-5 py-14 text-[#152641] sm:px-8 sm:py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-16">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="section-label">{t("Adhésion")}</p>
            <h2 className="mt-5 display-title">{t("Rejoignez le réseau qui avance.")}</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#152641]/72 sm:text-xl sm:leading-9">
              {t("Vous êtes une agence de voyages ou un acteur du secteur touristique ? Parlons représentation, coopération et développement régional.")}
            </p>
            <ul className="mt-10 grid gap-4 border-t border-[#152641]/10 pt-8">
              <li>
                <a href="tel:+212539325004" className="membership-contact">
                  <span className="footer-icon">
                    <Phone size={16} aria-hidden="true" />
                  </span>
                  05393-25004
                </a>
              </li>
              <li>
                <a href="mailto:contact@aravta.org" className="membership-contact">
                  <span className="footer-icon">
                    <Mail size={16} aria-hidden="true" />
                  </span>
                  contact@aravta.org
                </a>
              </li>
              <li className="membership-contact">
                <span className="footer-icon">
                  <MapPin size={16} aria-hidden="true" />
                </span>
                139 Av. Louis Van Beethoven, Tanger 90060
              </li>
            </ul>
          </div>

          <div>
              <form id="adhesion-form" className="membership-form" onSubmit={handleMembershipSubmit} noValidate>
                <div className="membership-form-header">
                  <strong>{t("Demande d'adhésion agence")}</strong>
                  <span>{t("5 questions")}</span>
                </div>
                <div className="membership-fields">
                  {membershipQuestions.map((question, index) => (
                    <div className={`membership-question ${question.multiline ? "is-wide" : ""}`} key={question.name}>
                      <label htmlFor={question.name}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        {t(question.label)}
                      </label>
                      {question.multiline ? (
                        <textarea
                          id={question.name}
                          name={question.name}
                          placeholder={t(question.placeholder)}
                          rows={3}
                          required
                        />
                      ) : (
                        <input
                          id={question.name}
                          name={question.name}
                          type="text"
                          placeholder={t(question.placeholder)}
                          required
                        />
                      )}
                    </div>
                  ))}
                </div>
                <div className="membership-actions">
                  <button type="submit" className="membership-submit">
                    {t("Envoyer la demande")}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </button>
                  <a href="tel:+212539325004" className="membership-call">
                    <Phone size={16} aria-hidden="true" />
                    {t("Appeler directement")}
                  </a>
                </div>
                <p className="membership-note">{t("L'email sera préparé automatiquement avec vos réponses.")}</p>
                {membershipStatus ? (
                  <p className="membership-status" aria-live="polite">
                    {membershipStatus}
                  </p>
                ) : null}
                {membershipDraft ? (
                  <div className="membership-result">
                    <div className="membership-result-actions">
                      <a href={membershipDraft.href} className="membership-open">
                        {t("Ouvrir l'email")}
                      </a>
                      <button type="button" onClick={handleCopyMembership} className="membership-copy">
                        {t("Copier le message")}
                      </button>
                    </div>
                    <textarea readOnly value={membershipDraft.message} aria-label={t("Message d'adhésion préparé")} />
                  </div>
                ) : null}
              </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
