import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { AssociationShell } from "@/components/association-shell";
import { associationPages } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "L'Association | ARAVTTA",
  description: "Présentation de l'Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima.",
};

const values = [
  ["Représenter", "Défendre les intérêts professionnels, économiques et institutionnels des agences de voyages."],
  ["Fédérer", "Créer des passerelles concrètes entre professionnels, institutions et opérateurs du secteur."],
  ["Accompagner", "Soutenir les membres face aux mutations réglementaires, technologiques et commerciales."],
  ["Développer", "Porter une croissance touristique responsable et durable pour tout le territoire régional."],
];

export default function AssociationPage() {
  return (
    <AssociationShell
      title="Une voix commune pour le voyage."
      intro="L'ARAVTTA rassemble et représente les agences de voyages de Tanger, Tétouan et Al Hoceima."
      image="/images/region/tangier-old-port.avif"
    >
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.55fr_0.45fr] lg:items-start">
          <div>
            <p className="section-label">Qui sommes-nous</p>
            <h2 className="mt-4 display-title">L&apos;interlocuteur des agences du Nord.</h2>
            <div className="prose-aravtta mt-8 max-w-2xl">
              <p>
                L&apos;Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima rassemble et
                représente les professionnels du tourisme régional. Elle agit comme interlocuteur privilégié
                entre agences, pouvoirs publics et acteurs de l&apos;écosystème touristique.
              </p>
              <p>
                Guidée par l&apos;étude des enjeux du secteur, la défense des intérêts de ses membres et la
                promotion de l&apos;industrie touristique marocaine, l&apos;ARAVTTA œuvre à structurer,
                soutenir et moderniser la profession.
              </p>
            </div>
          </div>

          <Link
            href="/association/mot-du-president"
            className="group grid overflow-hidden rounded-[16px] bg-[#0D0D0D] text-[#FAFAFA] sm:grid-cols-2"
          >
            <div className="relative aspect-square">
              <Image
                src="/images/presidents/el-hitmi-portrait.jpg"
                alt="Mohamed El Hitmi, Président de l'ARAVTTA"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover object-top transition duration-700 group-hover:scale-105"
                unoptimized
              />
            </div>
            <div className="flex flex-col justify-between gap-6 bg-[linear-gradient(135deg,#071394,#1538D6_52%,#4F7CFF)] p-6 sm:p-7">
              <p className="text-lg font-semibold leading-8">
                « Ensemble, faisons rayonner le tourisme régional. »
              </p>
              <div>
                <p className="font-black uppercase">Mohamed El Hitmi</p>
                <p className="text-sm text-[#FAFAFA]/72">Président de l&apos;ARAVTTA</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-black uppercase text-[#8EC5FF]">
                  Lire le mot du Président
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-[#0D0D0D] px-5 py-16 text-[#FAFAFA] sm:px-8 lg:px-10 lg:py-20">
        <div className="mx-auto grid max-w-[1500px] gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(([title, copy], index) => (
            <div key={title} className="border-t border-[#FAFAFA]/20 pt-6">
              <span className="text-sm font-black tracking-[0.2em] text-[#8EC5FF]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-2xl font-black uppercase">{title}</h3>
              <p className="mt-3 leading-7 text-[#FAFAFA]/68">{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <p className="section-label">Organisation</p>
          <h2 className="mt-4 display-title">Découvrir l&apos;association.</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {associationPages.map((page, index) => (
              <Link key={page.href} href={page.href} className="hub-card group">
                <span className="text-sm font-black tracking-[0.2em] text-[#1538D6]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl font-black uppercase leading-tight">{page.label}</h3>
                <p className="mt-3 leading-7 text-[#0D0D0D]/65">{page.copy}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-black uppercase text-[#1538D6]">
                  Voir la page
                  <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AssociationShell>
  );
}
