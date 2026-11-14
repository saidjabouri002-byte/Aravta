import type { Metadata } from "next";
import { T } from "@/lib/i18n";
import { AssociationShell } from "@/components/association-shell";

export const metadata: Metadata = {
  title: "Plan d'Action | ARAVTTA",
  description: "Plan d'action de l'ARAVTTA, comité 2024 – 2027.",
};

const shortTerm = [
  "Créer des produits communs à l'export.",
  "Travailler et collaborer de concert avec la Délégation du Tourisme, la FNAAVM, le CRTTA, l'ISITT, l'ISTAHT, Amadeus, etc., dans le cadre de la régionalisation avancée.",
  "Assister et conseiller les nouvelles agences.",
  "Créer le site web de l'ARAVTTA.",
  "Organiser une journée de réflexion.",
  "Forum de l'Agent de Voyages (3e édition).",
];

const commissionsList = [
  "Commission des Sages (règlement intérieur)",
  "Commission de l'Aérien",
  "Commission des Affaires Litiges Fiscaux",
  "Commission Maritime",
  "Commission Réceptif / Outgoing",
  "Commission MICE",
  "Commission Sociale",
];

const longTerm = [
  "Digitalisation des agences (logiciel actualisé).",
  "Fédérer les agences en instance d'adhésion.",
  "Continuer le combat sur la question maritime (commission).",
  "Rehausser l'image de marque de l'agence de voyages auprès du public, des administrations et des élus de notre région.",
  "Participer aux actions promotionnelles touristiques et sociales de la région.",
  "Dynamiser les commissions sectorielles de l'ARAVTTA.",
  "Organiser un séminaire à Tétouan.",
  "Organiser la rencontre des agents de voyages à Al Hoceima.",
];

function PlanList({ items }: { items: string[] }) {
  return (
    <ol className="mt-6">
      {items.map((item, index) => (
        <li key={item} className="plan-item">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <p className="text-lg leading-8 text-[#152641]/80">
            <T>{item}</T>
          </p>
        </li>
      ))}
    </ol>
  );
}

export default function PlanActionPage() {
  return (
    <AssociationShell
      title="Plan d'Action."
      intro="Comité 2024 – 2027 : les actions court et long terme portées par l'ARAVTTA."
      image="/images/region/tetouan.avif"
    >
      <section className="px-5 py-12 sm:py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto grid max-w-[1300px] gap-8 lg:grid-cols-2">
          <div className="rounded-[18px] border border-[#152641]/10 bg-white p-6 sm:p-9">
            <span className="inline-block rounded-full bg-[#136CFC] px-4 py-1.5 text-xs font-black tracking-[0.04em] text-[#FAFAFA]">
              <T>Court terme</T>
            </span>
            <h2 className="mt-5 text-3xl font-black leading-[1.15] sm:text-4xl"><T>Actions immédiates</T></h2>
            <PlanList items={shortTerm} />
            <div className="mt-6 rounded-[14px] bg-[#136CFC]/6 p-5">
              <p className="text-xs font-black tracking-[0.2em] text-[#136CFC]"><T>Commissions à activer</T></p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {commissionsList.map((item) => (
                  <li key={item} className="rounded-full border border-[#136CFC]/25 bg-white px-3 py-1.5 text-sm font-semibold">
                    <T>{item}</T>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-[18px] bg-[#152641] p-6 text-[#FAFAFA] sm:p-9 [&_.plan-item]:border-[#FAFAFA]/12 [&_.plan-item_p]:text-[#FAFAFA]/80 [&_.plan-item_span]:text-[#C3F84A]">
            <span className="inline-block rounded-full bg-[#C3F84A] px-4 py-1.5 text-xs font-black tracking-[0.04em] text-[#152641]">
              <T>Long terme</T>
            </span>
            <h2 className="mt-5 text-3xl font-black leading-[1.15] sm:text-4xl"><T>Construire l&apos;avenir</T></h2>
            <PlanList items={longTerm} />
          </div>
        </div>
      </section>
    </AssociationShell>
  );
}
