import Image from "next/image";
import type { Metadata } from "next";
import { T } from "@/lib/i18n";
import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { events, type EventItem } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Événements | ARAVTTA",
  description: "Les événements à venir et les événements déjà organisés par l'ARAVTTA.",
};

function EventCard({ event }: { event: EventItem }) {
  const upcoming = event.status === "upcoming";
  return (
    <article
      id={event.slug}
      className="grid scroll-mt-32 overflow-hidden rounded-[18px] border border-[#152641]/10 bg-white sm:grid-cols-[0.42fr_0.58fr]"
    >
      <div className="relative min-h-[220px]">
        <Image
          src={event.image}
          alt={event.title}
          fill
          sizes="(max-width: 640px) 100vw, 300px"
          className={`object-cover ${upcoming ? "" : "grayscale-[35%]"}`}
          style={event.image.includes("/members/") ? { objectPosition: "50% 15%" } : undefined}
          unoptimized
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black tracking-[0.04em] ${
            upcoming ? "bg-[#136CFC] text-[#FAFAFA]" : "bg-[#152641] text-[#FAFAFA]"
          }`}
        >
          <T>{upcoming ? "À venir" : "Organisé"}</T>
        </span>
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-black leading-[1.15] tracking-[-0.01em] sm:text-3xl">
          <T>{event.title}</T>
        </h3>
        <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold text-[#136CFC]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#136CFC]/8 px-3 py-1.5">
            <CalendarDays size={14} aria-hidden="true" />
            <T>{event.date}</T>
          </span>
          {event.city ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#136CFC]/8 px-3 py-1.5">
              <MapPin size={14} aria-hidden="true" />
              <T>{event.city}</T>
            </span>
          ) : null}
        </div>
        <p className="mt-5 leading-7 text-[#152641]/72">
          <T>{event.copy}</T>
        </p>
        {event.url ? (
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 self-start text-sm font-black leading-6 text-[#136CFC] underline-offset-4 hover:underline"
          >
            {event.source ? (
              <T k="Lire l'article sur {source}" vars={{ source: event.source }} />
            ) : (
              <T>Lire l&apos;article</T>
            )}
            <ArrowUpRight size={16} aria-hidden="true" className="ml-1 inline align-[-3px]" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function EventsPage() {
  const upcoming = events.filter((event) => event.status === "upcoming");
  const past = events.filter((event) => event.status === "past");

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#152641]">
      <SiteHeader />
      <PageHero
        label="Événements"
        title="Se retrouver, avancer ensemble."
        intro="Forums, séminaires et rencontres : les rendez-vous de l'ARAVTTA pour les agences de voyages du Nord."
        image="/images/commissions/mice-event-tanger.webp"
      />

      <section className="px-5 py-12 sm:py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1300px]">
          <div id="a-venir" className="scroll-mt-32">
            <p className="section-label">
              <T>Agenda</T>
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.15] tracking-[-0.01em] sm:text-5xl">
              <T>Événements à venir</T>
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {upcoming.length ? (
              upcoming.map((event) => <EventCard key={event.slug} event={event} />)
            ) : (
              <p className="text-lg text-[#152641]/60">
                <T>Aucun événement programmé pour le moment.</T>
              </p>
            )}
          </div>

          <div id="organises" className="mt-14 scroll-mt-32 border-t border-[#152641]/10 pt-12 sm:mt-20 sm:pt-16">
            <p className="section-label">
              <T>Archives</T>
            </p>
            <h2 className="mt-4 text-4xl font-black leading-[1.15] tracking-[-0.01em] sm:text-5xl">
              <T>Événements organisés</T>
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {past.length ? (
              past.map((event) => <EventCard key={event.slug} event={event} />)
            ) : (
              <p className="text-lg text-[#152641]/60">
                <T>Les premiers événements seront bientôt ajoutés.</T>
              </p>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
