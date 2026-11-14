"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { associationLinks, PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";
import { useT } from "@/lib/i18n";

export function AssociationShell({
  title,
  intro,
  image,
  imagePosition,
  children,
}: {
  title: string;
  intro?: string;
  image: string;
  imagePosition?: string;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const t = useT();

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#152641]">
      <SiteHeader />
      <PageHero label="L'Association" title={title} intro={intro} image={image} imagePosition={imagePosition} />

      <nav
        aria-label={t("Pages de l'association")}
        className="sticky top-[72px] z-40 border-b border-[#152641]/10 bg-[#FAFAFA]/92 backdrop-blur sm:top-[78px]"
      >
        <div className="mx-auto flex max-w-[1500px] gap-1 overflow-x-auto px-5 py-3 scrollbar-none sm:px-8 lg:px-10">
          {associationLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold transition ${
                  active
                    ? "bg-[linear-gradient(135deg,#152641,#0F4FC4_48%,#136CFC)] text-[#FAFAFA]"
                    : "text-[#152641]/65 hover:bg-[#136CFC]/8 hover:text-[#136CFC]"
                }`}
              >
                {t(link.label)}
              </Link>
            );
          })}
        </div>
      </nav>

      {children}
      <SiteFooter />
    </main>
  );
}
