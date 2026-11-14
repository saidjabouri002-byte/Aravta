import Image from "next/image";
import type { Metadata } from "next";
import { T } from "@/lib/i18n";
import { AssociationShell } from "@/components/association-shell";

export const metadata: Metadata = {
  title: "Mot du Président | ARAVTTA",
  description: "Le mot de Mohamed El Hitmi, Président de l'ARAVTTA.",
};

const paragraphs = [
  "Bienvenue sur le portail officiel de l'Association Régionale des Agences de Voyages de Tanger-Tétouan-Al Hoceima (ARAVTTA).",
  "C'est avec une immense fierté que nous inaugurons cet espace numérique, véritable vitrine du savoir-faire et du dynamisme des agences de voyages de notre région. Plus qu'un simple outil de communication, ce site est le reflet de notre ambition commune : renforcer la visibilité de nos membres et offrir une meilleure lisibilité de notre offre touristique auprès du grand public et des professionnels.",
  "L'ARAVTTA est guidée par des objectifs clairs, axés sur l'étude des enjeux, la défense des intérêts de nos membres et la promotion de l'industrie touristique marocaine.",
  "Dans un contexte en constante mutation, notre mission est de structurer, de soutenir et de moderniser notre profession. En misant sur la digitalisation, l'excellence du service client et la formation continue, nous œuvrons chaque jour pour positionner la région de Tanger-Tétouan-Al Hoceima comme une destination incontournable et exemplaire.",
  "Je tiens à exprimer ma gratitude à l'ensemble des membres du bureau et à tous nos adhérents pour leur confiance et leur implication sans faille. C'est par notre solidarité, notre engagement et notre éthique professionnelle que nous continuerons à valoriser le patrimoine touristique de notre pays et à bâtir un avenir prospère pour notre secteur.",
  "Je vous invite à parcourir ce site, à découvrir la richesse de nos services et à rester connectés avec l'actualité de notre Association.",
];

export default function PresidentPage() {
  return (
    <AssociationShell
      title="Mot du Président."
      intro="Un message aux confrères, partenaires et visiteurs de l'ARAVTTA."
      image="/images/region/tanger.avif"
    >
      <section className="px-5 py-12 sm:py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1300px] gap-12 lg:grid-cols-[0.38fr_0.62fr] lg:gap-16">
          <aside className="lg:sticky lg:top-44 lg:self-start">
            <div className="relative aspect-square overflow-hidden rounded-[18px] bg-[#152641] shadow-[0_30px_80px_rgb(19_108_252/18%)]">
              <Image
                src="/images/presidents/el-hitmi-portrait.jpg"
                alt="Mohamed El Hitmi, Président de l'ARAVTTA"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-top"
                unoptimized
              />
              <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(0deg,rgb(21_38_65/0.95),rgb(19_108_252/0.6)_60%,rgb(21_38_65/0))] p-6 pt-20 text-[#FAFAFA]">
                <p className="text-2xl font-black uppercase leading-none">Mohamed El Hitmi</p>
                <p className="mt-2 text-sm font-semibold text-[#FAFAFA]/80"><T>Président de l&apos;ARAVTTA</T></p>
              </div>
            </div>
          </aside>

          <article>
            <p className="text-2xl font-black leading-snug text-[#136CFC] sm:text-3xl">
              <T>Chers confrères, chères consœurs, partenaires et visiteurs,</T>
            </p>
            <div className="prose-aravtta mt-8">
              {paragraphs.map((text) => (
                <p key={text.slice(0, 24)}>
                  <T>{text}</T>
                </p>
              ))}
            </div>
            <blockquote className="mt-10 border-l-4 border-[#136CFC] bg-[#136CFC]/6 px-6 py-5 text-2xl font-black uppercase leading-tight">
              <T>Ensemble, faisons rayonner le tourisme régional.</T>
            </blockquote>
            <div className="mt-10 border-t border-[#152641]/10 pt-6">
              <p className="text-[#152641]/60"><T>Sincères salutations,</T></p>
              <p className="mt-2 text-xl font-black uppercase">Mohamed El Hitmi</p>
              <p className="text-[#152641]/60"><T>Président de l&apos;ARAVTTA</T></p>
            </div>
          </article>
        </div>
      </section>
    </AssociationShell>
  );
}
