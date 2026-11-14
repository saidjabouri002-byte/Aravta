import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { partners } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Partenaires | ARAVTTA",
  description: "Les institutions et organismes partenaires de l'ARAVTTA.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0D0D0D]">
      <SiteHeader />
      <PageHero
        label="Partenaires"
        title="Un écosystème en mouvement."
        intro="Institutions, fédérations, écoles et organismes de promotion : ils accompagnent l'ARAVTTA pour renforcer le tourisme du Nord."
        image="/images/region/phare-cap-spartel-tange.webp"
      />

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {partners.map((partner) => {
              const content = (
                <>
                  <div className="relative flex h-32 w-full items-center justify-center">
                    <Image
                      src={partner.logo}
                      alt={`Logo ${partner.name}`}
                      width={400}
                      height={200}
                      className="h-auto max-h-28 w-auto max-w-[85%] object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="mt-auto w-full border-t border-[#0D0D0D]/8 pt-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1538D6]">{partner.short}</p>
                    <p className="mt-2 text-sm leading-6 text-[#0D0D0D]/70">{partner.name}</p>
                    {partner.website ? (
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-black uppercase text-[#1538D6]">
                        Visiter le site
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </span>
                    ) : (
                      <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-[#0D0D0D]/40">
                        Lien bientôt disponible
                      </span>
                    )}
                  </div>
                </>
              );
              return partner.website ? (
                <a
                  key={partner.short}
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card"
                >
                  {content}
                </a>
              ) : (
                <div key={partner.short} className="partner-card">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="mt-14 flex flex-col items-start gap-5 border-t border-[#0D0D0D]/12 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg leading-8 text-[#0D0D0D]/70">
              Vous souhaitez devenir partenaire de l&apos;ARAVTTA ? Parlons-en.
            </p>
            <Link href="/#contact" className="btn-blue">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
