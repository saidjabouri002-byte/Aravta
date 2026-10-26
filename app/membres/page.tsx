import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { members, type Member } from "@/lib/members";

export const metadata: Metadata = {
  title: "Membres | ARAVTTA",
  description: "Les agences de voyages membres de l'ARAVTTA à Tanger, Tétouan et Al Hoceima.",
};

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function MemberCard({ member }: { member: Member }) {
  const host = new URL(member.website).hostname.replace(/^www\./, "");

  return (
    <article className="member-card">
      <div className="member-card-media">
        <div className="member-card-logo">
          {member.logo ? (
            <Image
              src={member.logo}
              alt={`Logo ${member.agency}`}
              fill
              sizes="(max-width: 768px) 50vw, 240px"
              className="object-contain p-5"
              unoptimized
            />
          ) : (
            <span aria-label={`Logo ${member.agency}`}>{initials(member.agency)}</span>
          )}
        </div>
        <div className="member-card-photo">
          {member.photo ? (
            <Image
              src={member.photo}
              alt={member.owner}
              fill
              sizes="(max-width: 768px) 50vw, 240px"
              className="object-cover grayscale"
              unoptimized
            />
          ) : (
            <span aria-label={member.owner}>{initials(member.owner)}</span>
          )}
        </div>
      </div>

      <div className="member-card-body">
        <p className="member-card-city">{member.city}</p>
        <h2>{member.agency}</h2>
        <p className="member-card-owner">
          <strong>{member.owner}</strong> · {member.role}
        </p>
        <p className="member-card-copy">{member.description}</p>
        <a href={member.website} target="_blank" rel="noopener noreferrer" className="member-card-link">
          Visiter {host}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0D0D0D]">
      <SiteHeader />

      <section className="bg-[linear-gradient(135deg,#071394,#1538D6_46%,#4F7CFF)] px-5 pb-16 pt-36 text-[#FAFAFA] sm:px-8 lg:px-10 lg:pb-20 lg:pt-44">
        <div className="mx-auto grid max-w-[1500px] gap-8 lg:grid-cols-[0.55fr_0.45fr] lg:items-end">
          <div>
            <p className="section-label text-[#8EC5FF]">Réseau membre</p>
            <h1 className="mt-5 display-title display-title-hero">Nos agences membres.</h1>
          </div>
          <p className="max-w-xl text-xl leading-9 text-[#FAFAFA]/78">
            Les agences de voyages qui font avancer le tourisme à Tanger, Tétouan et Al Hoceima.
            Découvrez leurs équipes et leurs services.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-6 md:grid-cols-2 xl:grid-cols-3">
          {members.map((member) => (
            <MemberCard key={member.agency} member={member} />
          ))}
        </div>
        <div className="mx-auto mt-14 flex max-w-[1500px] flex-col items-start gap-5 border-t border-[#0D0D0D]/12 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg leading-8 text-[#0D0D0D]/70">
            Votre agence n&apos;apparaît pas encore ? Rejoignez le réseau ARAVTTA.
          </p>
          <Link href="/#adhesion-form" className="btn-blue">
            Devenir membre
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
