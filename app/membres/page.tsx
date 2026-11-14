import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, ImageIcon, Mail, Phone, UserRound } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { bureau, members, type Member } from "@/lib/members";

export const metadata: Metadata = {
  title: "Réseau membre | ARAVTTA",
  description: "Le bureau et les agences de voyages membres de l'ARAVTTA à Tanger, Tétouan et Al Hoceima.",
};

function Placeholder({ label, icon }: { label: string; icon: "logo" | "photo" }) {
  return (
    <div className="photo-placeholder absolute inset-0 min-h-0">
      {icon === "logo" ? <ImageIcon size={28} aria-hidden="true" /> : <UserRound size={30} aria-hidden="true" />}
      <span className="text-[0.68rem] font-black uppercase tracking-[0.16em]">{label}</span>
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  const host = member.website ? new URL(member.website).hostname.replace(/^www\./, "") : null;

  return (
    <article className="member-card">
      <div className="member-card-media">
        <div className="member-card-logo bg-white">
          {member.logo ? (
            <Image
              src={member.logo}
              alt={`Logo ${member.agency}`}
              fill
              sizes="(max-width: 768px) 50vw, 240px"
              className="object-contain p-6"
              unoptimized
            />
          ) : (
            <Placeholder label="Logo à venir" icon="logo" />
          )}
        </div>
        <div className="member-card-photo">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.owner ?? member.agency}
              fill
              sizes="(max-width: 768px) 50vw, 240px"
              className="object-cover object-top"
              unoptimized
            />
          ) : (
            <Placeholder label="Photo à venir" icon="photo" />
          )}
        </div>
      </div>

      <div className="member-card-body">
        <p className="member-card-city">{member.city}</p>
        <h2>{member.agency}</h2>
        {member.owner ? (
          <p className="member-card-owner">
            <strong>{member.owner}</strong>
            {member.role ? ` · ${member.role}` : ""}
          </p>
        ) : null}
        <p className="member-card-copy">{member.description}</p>

        {member.phone || member.email ? (
          <div className="mt-5 grid gap-2 text-sm">
            {member.phone ? (
              <a href={`tel:${member.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 text-[#0D0D0D]/70 hover:text-[#1538D6]">
                <Phone size={15} aria-hidden="true" /> {member.phone}
              </a>
            ) : null}
            {member.email ? (
              <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-[#0D0D0D]/70 hover:text-[#1538D6]">
                <Mail size={15} aria-hidden="true" /> {member.email}
              </a>
            ) : null}
          </div>
        ) : null}

        {member.website && host ? (
          <a href={member.website} target="_blank" rel="noopener noreferrer" className="member-card-link">
            Visiter {host}
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}

export default function MembersPage() {
  const [president, ...rest] = bureau;

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0D0D0D]">
      <SiteHeader />
      <PageHero
        label="Réseau membre"
        title="Nos membres."
        intro="Le bureau 2024 – 2027 et les agences de voyages qui font avancer le tourisme à Tanger, Tétouan et Al Hoceima."
        image="/images/region/tangier-old-port.avif"
        imagePosition="50% 40%"
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
            <div>
              <p className="section-label">Bureau 2024 – 2027</p>
              <h2 className="mt-4 display-title">Le bureau de l&apos;association.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#0D0D0D]/68">
              Treize agents de voyages élus pour représenter la profession et conduire le plan d&apos;action de
              l&apos;ARAVTTA.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            <figure className="group overflow-hidden rounded-[16px] bg-[linear-gradient(135deg,#071394,#1538D6_52%,#4F7CFF)] text-[#FAFAFA] sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <div className="relative aspect-square">
                {president.photo ? (
                  <Image src={president.photo} alt={president.name} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" unoptimized />
                ) : (
                  <Placeholder label="Photo à venir" icon="photo" />
                )}
              </div>
              <figcaption className="p-5 sm:p-6">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8EC5FF]">{president.role}</p>
                <p className="mt-2 text-2xl font-black uppercase leading-none sm:text-3xl">{president.name}</p>
              </figcaption>
            </figure>

            {rest.map((person) => (
              <figure
                key={person.name}
                className="overflow-hidden rounded-[16px] border border-[#0D0D0D]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#4F7CFF] hover:shadow-[0_24px_60px_rgb(21_56_214/12%)]"
              >
                <div className="relative aspect-[4/5] bg-[#E9EEF4]">
                  {person.photo ? (
                    <Image src={person.photo} alt={person.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw" className="object-cover object-top" unoptimized />
                  ) : (
                    <Placeholder label="Photo à venir" icon="photo" />
                  )}
                </div>
                <figcaption className="border-t-4 border-[#1538D6] p-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#1538D6]">{person.role}</p>
                  <p className="mt-1.5 text-base font-black uppercase leading-tight">{person.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#0D0D0D]/8 bg-white/60 px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <p className="section-label">Agences membres</p>
          <h2 className="mt-4 display-title">Nos agences.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {members.map((member) => (
              <MemberCard key={member.agency} member={member} />
            ))}
          </div>
          <div className="mt-14 flex flex-col items-start gap-5 border-t border-[#0D0D0D]/12 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg leading-8 text-[#0D0D0D]/70">
              Votre agence n&apos;apparaît pas encore ? Rejoignez le réseau ARAVTTA.
            </p>
            <Link href="/#adhesion-form" className="btn-blue">
              Devenir membre
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
