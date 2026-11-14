import type { Metadata } from "next";
import { PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { cities } from "@/lib/site-data";
import { RegionExplorer } from "./region-explorer";

export const metadata: Metadata = {
  title: "La Région | ARAVTTA",
  description: "Tanger, Tétouan, Chefchaouen, Al Hoceima et Assilah : les destinations de la région Tanger-Tétouan-Al Hoceima.",
};

export default function RegionPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0D0D0D]">
      <SiteHeader />
      <PageHero
        label="La Région"
        title="Entre deux mers."
        intro="De l'Atlantique à la Méditerranée, cinq destinations qui font la richesse de Tanger-Tétouan-Al Hoceima. Cliquez sur une ville pour la découvrir."
        image="/images/region/tanger-pic.avif"
        imagePosition="50% 30%"
      />
      <section className="px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[1500px]">
          <RegionExplorer cities={cities} />
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
