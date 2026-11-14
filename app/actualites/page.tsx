import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { T } from "@/lib/i18n";
import { ArrowUpRight } from "lucide-react";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { news } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Actualités | ARAVTTA",
  description: "Les dernières actualités de l'ARAVTTA et des agences de voyages du Nord.",
};

export default function NewsPage() {
  const [featured, ...rest] = news;

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#152641]">
      <SiteHeader />
      <PageHero
        label="Actualités"
        title="Journal de bord."
        intro="L'ARAVTTA dans la presse : élections, forums, initiatives régionales et prises de position pour la profession."
        image="/images/region/tangier-old-port.avif"
      />

      <section className="px-5 py-12 sm:py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1300px] gap-8">
          {featured ? (
            <article
              id={featured.slug}
              className="grid scroll-mt-32 overflow-hidden rounded-[18px] bg-[#152641] text-[#FAFAFA] lg:grid-cols-[0.55fr_0.45fr]"
            >
              <div className="relative min-h-[300px] lg:min-h-[460px]">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-col justify-end bg-[linear-gradient(135deg,#152641,#0F4FC4_52%,#136CFC)] p-6 sm:p-10">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#C3F84A]">
                  <T>{featured.category}</T> · <T>{featured.date}</T>
                  {featured.source ? ` · ${featured.source}` : ""}
                </p>
                <h2 className="mt-4 text-4xl font-black uppercase leading-[0.92] tracking-[-0.01em] sm:text-5xl">
                  <T>{featured.title}</T>
                </h2>
                <p className="mt-5 text-lg leading-8 text-[#FAFAFA]/80">
                  <T>{featured.copy}</T>
                </p>
                {featured.body?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-7 text-[#FAFAFA]/75">
                    {paragraph}
                  </p>
                ))}
                {featured.url ? (
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#FAFAFA] px-5 py-3 text-sm font-black uppercase text-[#136CFC] transition hover:bg-[#C3F84A] hover:text-[#152641]"
                  >
                    {featured.source ? (
                      <T k="Lire l'article sur {source}" vars={{ source: featured.source }} />
                    ) : (
                      <T>Lire l&apos;article</T>
                    )}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          ) : null}

          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((item) => (
              <article
                key={item.slug}
                id={item.slug}
                className="scroll-mt-32 overflow-hidden rounded-[18px] border border-[#152641]/10 bg-white"
              >
                <div className="relative h-60">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    style={item.imagePosition ? { objectPosition: item.imagePosition } : undefined}
                    unoptimized
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#136CFC]">
                    <T>{item.category}</T> · <T>{item.date}</T>
                    {item.source ? ` · ${item.source}` : ""}
                  </p>
                  <h2 className="mt-3 text-3xl font-black uppercase leading-none tracking-[-0.01em]">
                    <T>{item.title}</T>
                  </h2>
                  <p className="mt-4 leading-7 text-[#152641]/70">
                    <T>{item.copy}</T>
                  </p>
                  {item.body?.map((paragraph) => (
                    <p key={paragraph} className="mt-3 leading-7 text-[#152641]/70">
                      {paragraph}
                    </p>
                  ))}
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-black uppercase text-[#136CFC] underline-offset-4 hover:underline"
                    >
                      {item.source ? (
                        <T k="Lire l'article sur {source}" vars={{ source: item.source }} />
                      ) : (
                        <T>Lire l&apos;article</T>
                      )}
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="flex justify-end">
            <Link href="/evenements" className="btn-blue inline-flex items-center gap-2">
              <T>Voir les événements</T>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
