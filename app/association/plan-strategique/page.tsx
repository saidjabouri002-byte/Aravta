import type { Metadata } from "next";
import { T } from "@/lib/i18n";
import { AssociationShell } from "@/components/association-shell";

export const metadata: Metadata = {
  title: "Plan Stratégique | ARAVTTA",
  description: "Plan stratégique de l'ARAVTTA 2024 – 2027.",
};

const axes = [
  {
    number: "I",
    horizon: "Court terme",
    title: "Professionnalisation et développement",
    objective: "Renforcer la structure interne et la compétitivité des agences membres.",
    points: [
      ["Valorisation de l'offre", "Création de produits communs destinés à l'exportation pour renforcer le positionnement international."],
      ["Partenariats stratégiques", "Consolidation des collaborations avec les acteurs clés (Délégation du Tourisme, FNAAVM, CRTTA, ISITT, ISTAHT, Amadeus, etc.) dans une démarche de régionalisation avancée."],
      ["Accompagnement métier", "Mise en place d'un programme d'assistance et de conseil dédié aux nouvelles agences de voyages."],
      ["Transformation digitale & communication", "Lancement du site web officiel de l'ARAVTTA comme vitrine institutionnelle."],
      ["Gouvernance & organisation", "Journée de réflexion stratégique et 3e édition du « Forum de l'Agent de Voyages »."],
      ["Commissions actives", "Commission des Sages (mise à jour du règlement intérieur), Commissions Aérien, Maritime, Réceptif/Outgoing, MICE, Sociale, et Affaires Litiges Fiscaux."],
    ],
  },
  {
    number: "II",
    horizon: "Long terme",
    title: "Pérennisation et influence",
    objective: "Moderniser le secteur, accroître la représentativité et renforcer l'image de marque.",
    points: [
      ["Digitalisation sectorielle", "Accompagnement des agences vers la transition numérique via le déploiement de solutions logicielles actualisées."],
      ["Renforcement du réseau", "Stratégie de fédération active pour attirer et intégrer les agences en instance d'adhésion."],
      ["Défense des intérêts", "Poursuite du plaidoyer sur les dossiers critiques, notamment la question maritime."],
      ["Rayonnement institutionnel", "Rehausser l'image de marque de l'agence de voyages auprès du grand public, des administrations et des élus régionaux, et participer activement aux initiatives de promotion touristique et sociale de la région."],
      ["Dynamisation du réseau régional", "Optimisation de l'efficacité des commissions sectorielles et organisation d'événements de cohésion (séminaire à Tétouan, rencontre des agents de voyages à Al Hoceima)."],
    ],
  },
];

export default function PlanStrategiquePage() {
  return (
    <AssociationShell
      title="Plan Stratégique."
      intro="2024 – 2027 : deux axes pour professionnaliser le métier et renforcer l'influence des agences du Nord."
      image="/images/region/akchour-nature.avif"
    >
      <section className="px-5 py-12 sm:py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1300px] gap-10">
          {axes.map((axis) => (
            <article key={axis.number} className="overflow-hidden rounded-[18px] border border-[#152641]/10 bg-white">
              <header className="grid gap-6 bg-[linear-gradient(135deg,#152641,#0F4FC4_52%,#136CFC)] p-6 text-[#FAFAFA] sm:p-9 md:grid-cols-[auto_1fr] md:items-end">
                <span className="text-7xl font-black leading-[1.15] text-[#C3F84A]/60 sm:text-8xl">{axis.number}</span>
                <div>
                  <p className="text-xs font-black tracking-[0.2em] text-[#C3F84A]">
                    <T>Axe</T> · <T>{axis.horizon}</T>
                  </p>
                  <h2 className="mt-2 text-3xl font-black leading-[1.15] sm:text-5xl">
                    <T>{axis.title}</T>
                  </h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-[#FAFAFA]/82">
                    <strong className="text-[#FAFAFA]">
                      <T>Objectif :</T>
                    </strong>{" "}
                    <T>{axis.objective}</T>
                  </p>
                </div>
              </header>
              <div className="grid gap-px bg-[#152641]/8 sm:grid-cols-2 lg:grid-cols-3">
                {axis.points.map(([title, copy]) => (
                  <div key={title} className="bg-white p-6 sm:p-7">
                    <h3 className="text-lg font-black leading-tight text-[#136CFC]">
                      <T>{title}</T>
                    </h3>
                    <p className="mt-3 leading-7 text-[#152641]/72">
                      <T>{copy}</T>
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </AssociationShell>
  );
}
