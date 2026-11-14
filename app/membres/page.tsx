import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { T } from "@/lib/i18n";
import { ArrowUpRight, ImageIcon, Mail, Phone, UserRound } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { bureau, members, type Member } from "@/lib/members";

export const metadata: Metadata = {
  title: "Réseau membre | ARAVTTA",
  description: "Le bureau et les agences de voyages membres de l'ARAVTTA à Tanger, Tétouan et Al Hoceima.",
};

function Placeholder({ label, icon }: { label: string; icon: "logo" | "photo" }) {
  return (
    <div className="photo-placeholder min-h-0" style={{ position: "absolute", inset: 0, minHeight: 0 }}>
      {icon === "logo" ? <ImageIcon size={28} aria-hidden="true" /> : <UserRound size={30} aria-hidden="true" />}
      <span className="text-[0.68rem] font-black tracking-[0.04em]">
        <T>{label}</T>
      </span>
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
        <p className="member-card-city">
          <T>{member.city}</T>
        </p>
        <h2>{member.agency}</h2>
        {member.owner ? (
          <p className="member-card-owner">
            <strong>{member.owner}</strong>
            {member.role ? (
              <>
                {" · "}
                <T>{member.role}</T>
              </>
            ) : null}
          </p>
        ) : null}
        <p className="member-card-copy">
          <T>{member.description}</T>
        </p>

        {member.phone || member.email ? (
          <div className="mt-5 grid gap-2 text-sm">
            {member.phone ? (
              <a href={`tel:${member.phone.replace(/[^+\d]/g, "")}`} className="inline-flex items-center gap-2 text-[#152641]/70 hover:text-[#136CFC]">
                <Phone size={15} aria-hidden="true" /> {member.phone}
              </a>
            ) : null}
            {member.email ? (
              <a href={`mailto:${member.email}`} className="inline-flex items-center gap-2 text-[#152641]/70 hover:text-[#136CFC]">
                <Mail size={15} aria-hidden="true" /> {member.email}
              </a>
            ) : null}
          </div>
        ) : null}

        {member.website && host ? (
          <a href={member.website} target="_blank" rel="noopener noreferrer" className="member-card-link">
            <T k="Visiter {host}" vars={{ host }} />
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
    <main className="min-h-screen bg-[#FAFAFA] text-[#152641]">
      <SiteHeader />
      <PageHero
        label="Réseau membre"
        title="Nos membres."
        intro="Le bureau 2024 – 2027 et les agences de voyages qui font avancer le tourisme à Tanger, Tétouan et Al Hoceima."
        image="/images/region/tangier-old-port.avif"
        imagePosition="50% 40%"
      />

      <section className="px-5 py-12 sm:py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-8 lg:grid-cols-[0.45fr_0.55fr] lg:items-end">
            <div>
              <p className="section-label">
                <T>Bureau 2024 – 2027</T>
              </p>
              <h2 className="mt-4 display-title">
                <T>Le bureau de l&apos;association.</T>
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#152641]/68">
              <T>
                Treize agents de voyages élus pour représenter la profession et conduire le plan d&apos;action de
                l&apos;ARAVTTA.
              </T>
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
            <figure className="group overflow-hidden rounded-[16px] bg-[linear-gradient(135deg,#152641,#0F4FC4_52%,#136CFC)] text-[#FAFAFA] sm:col-span-2 lg:col-span-2 lg:row-span-2">
              <div className="relative aspect-square">
                {president.photo ? (
                  <Image src={president.photo} alt={president.name} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover object-top" unoptimized />
                ) : (
                  <Placeholder label="Photo à venir" icon="photo" />
                )}
              </div>
              <figcaption className="p-5 sm:p-6">
                <p className="text-xs font-black tracking-[0.2em] text-[#C3F84A]">
                  <T>{president.role}</T>
                </p>
                <p className="mt-2 text-2xl font-black leading-[1.15] sm:text-3xl">{president.name}</p>
              </figcaption>
            </figure>

            {rest.map((person) => (
              <figure
                key={person.name}
                className="overflow-hidden rounded-[16px] border border-[#152641]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#4D94FF] hover:shadow-[0_24px_60px_rgb(19_108_252/12%)]"
              >
                <div className="relative aspect-[4/5] bg-[#E8F4FC]">
                  {person.photo ? (
                    <Image src={person.photo} alt={person.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw" className="object-cover object-top" unoptimized />
                  ) : (
                    <Placeholder label="Photo à venir" icon="photo" />
                  )}
                </div>
                <figcaption className="border-t-4 border-[#136CFC] p-4">
                  <p className="text-xs font-black tracking-[0.04em] text-[#136CFC]">
                    <T>{person.role}</T>
                  </p>
                  <p className="mt-1.5 text-base font-black leading-tight">{person.name}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#152641]/8 bg-[#E8F4FC] px-5 py-12 sm:py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <p className="section-label">
            <T>Agences membres</T>
          </p>
          <h2 className="mt-4 display-title">
            <T>Nos agences.</T>
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {members.map((member) => (
              <MemberCard key={member.agency} member={member} />
            ))}
          </div>
          <div className="mt-14 flex flex-col items-start gap-5 border-t border-[#152641]/12 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg leading-8 text-[#152641]/70">
              <T>Votre agence n&apos;apparaît pas encore ? Rejoignez le réseau ARAVTTA.</T>
            </p>
            <Link href="/#adhesion-form" className="btn-blue">
              <T>Devenir membre</T>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
