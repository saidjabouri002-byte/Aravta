import Image from "next/image";
import type { Metadata } from "next";
import { AssociationShell } from "@/components/association-shell";
import { formerPresidents } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Anciens Présidents | ARAVTTA",
  description: "Hommage aux anciens présidents de l'ARAVTTA.",
};

export default function FormerPresidentsPage() {
  return (
    <AssociationShell
      title="Anciens Présidents."
      intro="Hommage à celles et ceux qui ont bâti l'ARAVTTA et porté la voix des agences de voyages du Nord."
      image="/images/region/tangier-old-port.avif"
    >
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1300px]">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-label">En leur honneur</p>
            <p className="mt-5 text-xl leading-9 text-[#0D0D0D]/72">
              Par leur engagement, leur vision et leur dévouement, nos anciens présidents ont posé les fondations
              d&apos;une association forte et respectée. L&apos;ARAVTTA leur exprime sa profonde reconnaissance.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {formerPresidents.map((president, index) => (
              <figure
                key={president.name}
                className="group overflow-hidden rounded-[16px] border border-[#0D0D0D]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#4F7CFF] hover:shadow-[0_24px_60px_rgb(21_56_214/14%)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#E9EEF4]">
                  <Image
                    src={president.photo}
                    alt={president.name}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 300px"
                    className="object-cover object-top grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    unoptimized
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-[#0D0D0D]/75 px-2.5 py-1 text-[0.7rem] font-black tracking-[0.14em] text-[#FAFAFA] backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <figcaption className="border-t-4 border-[#1538D6] p-4 sm:p-5">
                  <p className="text-base font-black uppercase leading-tight sm:text-lg">{president.name}</p>
                  <p className="mt-1 text-sm text-[#0D0D0D]/55">
                    Ancien Président{president.term ? ` · ${president.term}` : ""}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </AssociationShell>
  );
}
