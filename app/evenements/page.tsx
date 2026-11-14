import Image from "next/image";
import type { Metadata } from "next";
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
      className="grid scroll-mt-32 overflow-hidden rounded-[18px] border border-[#0D0D0D]/10 bg-white sm:grid-cols-[0.42fr_0.58fr]"
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
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.14em] ${
            upcoming ? "bg-[#1538D6] text-[#FAFAFA]" : "bg-[#0D0D0D] text-[#FAFAFA]"
          }`}
        >
          {upcoming ? "À venir" : "Organisé"}
        </span>
      </div>
      <div className="flex flex-col p-6 sm:p-8">
        <h3 className="text-2xl font-black uppercase leading-none tracking-[-0.01em] sm:text-3xl">{event.title}</h3>
        <div className="mt-4 flex flex-wrap gap-2 text-sm font-semibold text-[#1538D6]">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1538D6]/8 px-3 py-1.5">
            <CalendarDays size={14} aria-hidden="true" />
            {event.date}
          </span>
          {event.city ? (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#1538D6]/8 px-3 py-1.5">
              <MapPin size={14} aria-hidden="true" />
              {event.city}
            </span>
          ) : null}
        </div>
        <p className="mt-5 leading-7 text-[#0D0D0D]/72">{event.copy}</p>
        {event.url ? (
          <a
            href={event.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 self-start text-sm font-black uppercase leading-6 text-[#1538D6] underline-offset-4 hover:underline"
          >
            Lire l&apos;article{event.source ? ` sur ${event.source}` : ""}
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
    <main className="min-h-screen bg-[#FAFAFA] text-[#0D0D0D]">
      <SiteHeader />
      <PageHero
        label="Événements"
        title="Se retrouver, avancer ensemble."
        intro="Forums, séminaires et rencontres : les rendez-vous de l'ARAVTTA pour les agences de voyages du Nord."
        image="/images/commissions/mice-event-tanger.webp"
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1300px]">
          <div id="a-venir" className="scroll-mt-32">
            <p className="section-label">Agenda</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.01em] sm:text-5xl">
              Événements à venir
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {upcoming.length ? (
              upcoming.map((event) => <EventCard key={event.slug} event={event} />)
            ) : (
              <p className="text-lg text-[#0D0D0D]/60">Aucun événement programmé pour le moment.</p>
            )}
          </div>

          <div id="organises" className="mt-20 scroll-mt-32 border-t border-[#0D0D0D]/10 pt-16">
            <p className="section-label">Archives</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none tracking-[-0.01em] sm:text-5xl">
              Événements organisés
            </h2>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {past.length ? (
              past.map((event) => <EventCard key={event.slug} event={event} />)
            ) : (
              <p className="text-lg text-[#0D0D0D]/60">Les premiers événements seront bientôt ajoutés.</p>
            )}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
