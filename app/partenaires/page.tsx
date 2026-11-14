import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { T } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { partners } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Partenaires | ARAVTTA",
  description: "Les institutions et organismes partenaires de l'ARAVTTA.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#152641]">
      <SiteHeader />
      <PageHero
        label="Partenaires"
        title="Un écosystème en mouvement."
        intro="Institutions, fédérations, écoles et organismes de promotion : ils accompagnent l'ARAVTTA pour renforcer le tourisme du Nord."
        image="/images/region/phare-cap-spartel-tange.webp"
      />

      <section className="bg-[#E8F4FC] px-5 py-12 sm:py-16 sm:px-8 lg:px-10 lg:py-24">
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
                  <div className="mt-auto w-full border-t border-[#152641]/8 pt-4">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-[#136CFC]">{partner.short}</p>
                    <p className="mt-2 text-sm leading-6 text-[#152641]/70">
                      <T>{partner.name}</T>
                    </p>
                    {partner.website ? (
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-black uppercase text-[#136CFC]">
                        <T>Visiter le site</T>
                        <ArrowUpRight size={16} aria-hidden="true" />
                      </span>
                    ) : (
                      <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.14em] text-[#152641]/40">
                        <T>Lien bientôt disponible</T>
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

          <div className="mt-14 flex flex-col items-start gap-5 border-t border-[#152641]/12 pt-10 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg leading-8 text-[#152641]/70">
              <T>Vous souhaitez devenir partenaire de l&apos;ARAVTTA ? Parlons-en.</T>
            </p>
            <Link href="/#contact" className="btn-blue">
              <T>Nous contacter</T>
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
