"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { associationLinks, PageHero, SiteFooter, SiteHeader } from "@/components/site-chrome";

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

  return (
    <main className="min-h-screen bg-[#FAFAFA] text-[#0D0D0D]">
      <SiteHeader />
      <PageHero label="L'Association" title={title} intro={intro} image={image} imagePosition={imagePosition} />

      <nav
        aria-label="Pages de l'association"
        className="sticky top-[72px] z-40 border-b border-[#0D0D0D]/10 bg-[#FAFAFA]/92 backdrop-blur sm:top-[78px]"
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
                    ? "bg-[linear-gradient(135deg,#071394,#1538D6_48%,#4F7CFF)] text-[#FAFAFA]"
                    : "text-[#0D0D0D]/65 hover:bg-[#1538D6]/8 hover:text-[#1538D6]"
                }`}
              >
                {link.label}
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
