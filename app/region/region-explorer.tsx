"use client";

import Image from "next/image";
import { MapPin, X } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import type { City } from "@/lib/site-data";

export function RegionExplorer({ cities }: { cities: City[] }) {
  const [active, setActive] = useState<City | null>(null);

  const open = useCallback(
    (city: City) => {
      setActive(city);
      window.history.replaceState(null, "", `#${city.slug}`);
    },
    [],
  );

  const close = useCallback(() => {
    setActive(null);
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  // Open the city from the URL hash (links from the home page).
  useEffect(() => {
    const fromHash = () => {
      const slug = window.location.hash.slice(1);
      const city = cities.find((item) => item.slug === slug);
      if (city) setActive(city);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [cities]);

  useEffect(() => {
    if (!active) return;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close]);

  return (
    <>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
        {cities.map((city, index) => (
          <button
            type="button"
            key={city.slug}
            id={city.slug}
            onClick={() => open(city)}
            className={`city-card ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"} ${index === 4 ? "sm:col-span-2 lg:col-span-2" : ""}`}
            aria-label={`Découvrir ${city.name}`}
          >
            <Image
              src={city.image}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="-z-10 object-cover"
              unoptimized
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgb(7_19_148/0.94),rgb(21_56_214/0.5)_45%,rgb(13_13_13/0)_75%)]" />
            <div className="flex h-full min-h-[420px] flex-col justify-end p-6 sm:p-7">
              <span className="text-xs font-black tracking-[0.22em] text-[#8EC5FF]">
                {String(index + 1).padStart(2, "0")} · {city.tagline}
              </span>
              <strong className="mt-2 block text-4xl font-black uppercase leading-none sm:text-5xl">{city.name}</strong>
              <p className="mt-3 max-w-md leading-7 text-[#FAFAFA]/78">{city.line}</p>
              <span className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-[#FAFAFA]/50 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] transition group-hover:bg-white">
                Découvrir
              </span>
            </div>
          </button>
        ))}
      </div>

      {active ? (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-[#0D0D0D]/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
          onClick={close}
          role="presentation"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="city-title"
            onClick={(event) => event.stopPropagation()}
            className="relative grid max-h-[92svh] w-full max-w-5xl overflow-y-auto rounded-t-[20px] bg-[#FAFAFA] shadow-[0_40px_120px_rgb(13_13_13/45%)] animate-in fade-in slide-in-from-bottom-6 duration-300 sm:rounded-[20px] md:grid-cols-[0.95fr_1.05fr]"
          >
            <div className="relative min-h-[260px] md:min-h-[520px]">
              <Image src={active.image} alt={active.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" unoptimized />
            </div>
            <div className="flex flex-col p-6 sm:p-9">
              <p className="section-label">{active.tagline}</p>
              <h2 id="city-title" className="mt-3 text-5xl font-black uppercase leading-none tracking-[-0.01em]">
                {active.name}
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#0D0D0D]/74">{active.paragraph}</p>
              <ul className="mt-7 flex flex-wrap gap-2">
                {active.highlights.map((item) => (
                  <li
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#1538D6]/8 px-3.5 py-2 text-sm font-semibold text-[#1538D6]"
                  >
                    <MapPin size={14} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-auto flex flex-wrap gap-2 pt-8">
                {cities
                  .filter((city) => city.slug !== active.slug)
                  .map((city) => (
                    <button
                      type="button"
                      key={city.slug}
                      onClick={() => open(city)}
                      className="rounded-full border border-[#0D0D0D]/15 px-3.5 py-1.5 text-sm font-semibold transition hover:border-[#1538D6] hover:text-[#1538D6]"
                    >
                      {city.name}
                    </button>
                  ))}
              </div>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Fermer"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-[#0D0D0D]/70 text-[#FAFAFA] backdrop-blur transition hover:bg-[#1538D6]"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
