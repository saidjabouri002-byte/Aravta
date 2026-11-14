import Image from "next/image";
import type { Metadata } from "next";
import { T } from "@/lib/i18n";
import { Check, ImageIcon, UserRound } from "lucide-react";
import { AssociationShell } from "@/components/association-shell";
import { commissions } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Les Commissions | ARAVTTA",
  description: "Feuille de route des commissions de l'ARAVTTA (2024 – 2027).",
};

export default function CommissionsPage() {
  return (
    <AssociationShell
      title="Les Commissions."
      intro="Feuille de route 2024 – 2027 : sept commissions, leurs responsables, missions et axes de travail."
      image="/images/commissions/mice-event-tanger.webp"
    >
      <section className="px-5 py-12 sm:py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-6">
          {commissions.map((commission) => (
            <article key={commission.number} id={`commission-${commission.number}`} className="commission-card scroll-mt-44">
              <div className="photo-placeholder md:min-h-full">
                {commission.image ? (
                  <Image
                    src={commission.image}
                    alt={commission.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 380px"
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <>
                    <ImageIcon size={34} aria-hidden="true" />
                    <span className="text-xs font-black tracking-[0.04em]"><T>Photo à venir</T></span>
                  </>
                )}
                <span className="absolute left-4 top-4 rounded-full bg-[#152641] px-3 py-1 text-xs font-black tracking-[0.04em] text-[#FAFAFA]">
                  {commission.number}
                </span>
              </div>

              <div className="p-6 sm:p-8">
                <h2 className="text-3xl font-black leading-[1.15] tracking-[-0.01em] sm:text-4xl">
                  <T>{commission.title}</T>
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {commission.leads.map((lead) => (
                    <span
                      key={lead}
                      className="inline-flex items-center gap-1.5 rounded-full bg-[#136CFC]/8 px-3 py-1.5 text-sm font-semibold text-[#136CFC]"
                    >
                      <UserRound size={14} aria-hidden="true" />
                      {lead}
                    </span>
                  ))}
                </div>
                <p className="mt-6 text-xs font-black tracking-[0.2em] text-[#152641]/45"><T>Mission</T></p>
                <p className="mt-2 text-lg leading-8 text-[#152641]/78"><T>{commission.mission}</T></p>
                <p className="mt-6 text-xs font-black tracking-[0.2em] text-[#152641]/45"><T>Axes de travail</T></p>
                <ul className="mt-3 grid gap-3">
                  {commission.axes.map((axis) => (
                    <li key={axis} className="flex gap-3 leading-7 text-[#152641]/72">
                      <span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#136CFC] text-[#FAFAFA]">
                        <Check size={12} strokeWidth={3} aria-hidden="true" />
                      </span>
                      <T>{axis}</T>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AssociationShell>
  );
}
