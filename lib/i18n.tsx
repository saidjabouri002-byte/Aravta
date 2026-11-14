"use client";

// Site translations. French is the source language: every text in the code stays in French
// and is looked up in lib/translations.ts for English and Spanish. A missing translation
// falls back to the French text.

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { translations } from "@/lib/translations";

export type Lang = "fr" | "en" | "es";

export const languages: { code: Lang; label: string; short: string }[] = [
  { code: "fr", label: "Français", short: "FR" },
  { code: "en", label: "English", short: "EN" },
  { code: "es", label: "Español", short: "ES" },
];

const STORAGE_KEY = "aravtta-lang";

type Vars = Record<string, string | number | undefined>;
type Translate = (text: string, vars?: Vars) => string;

const normalize = (text: string) => text.replace(/\s+/g, " ").trim();

const table = new Map<string, { en: string; es: string }>(
  Object.entries(translations).map(([fr, value]) => [normalize(fr), value]),
);

function fill(text: string, vars?: Vars) {
  if (!vars) return text;
  return text.replace(/\{(\w+)\}/g, (match, name: string) => (vars[name] === undefined ? match : String(vars[name])));
}

function translate(lang: Lang, text: string, vars?: Vars) {
  const key = normalize(text);
  if (lang === "fr" || !key) return fill(key, vars);
  const entry = table.get(key);
  if (!entry && process.env.NODE_ENV !== "production" && typeof window !== "undefined") {
    const missing = ((window as unknown as { __i18nMissing?: Set<string> }).__i18nMissing ??= new Set());
    missing.add(key);
  }
  return fill(entry?.[lang] ?? key, vars);
}

const LanguageContext = createContext<{ lang: Lang; setLang: (lang: Lang) => void; t: Translate }>({
  lang: "fr",
  setLang: () => {},
  t: (text, vars) => translate("fr", text, vars),
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === "en" || saved === "es") setLangState(saved);
    } catch {
      // Storage unavailable: stay in French.
    }
  }, []);

  const frenchTitle = useRef("");

  useEffect(() => {
    document.documentElement.lang = lang;
    // Page titles come from each page's French metadata. Watch the <title> and show it in the chosen language.
    const sync = () => {
      const current = document.title;
      if (table.has(normalize(current))) frenchTitle.current = current;
      const wanted = frenchTitle.current ? translate(lang, frenchTitle.current) : current;
      if (wanted !== current) document.title = wanted;
    };
    sync();
    const observer = new MutationObserver(sync);
    observer.observe(document.head, { subtree: true, childList: true, characterData: true });
    return () => observer.disconnect();
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable: the choice lasts until the page is reloaded.
    }
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: ((text, vars) => translate(lang, text, vars)) as Translate }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}

export function useT() {
  return useContext(LanguageContext).t;
}

/** Translated text, usable from server components: <T>Texte en français</T> or <T k="… {x}" vars={{ x }} />. */
export function T({ children, k, vars }: { children?: string; k?: string; vars?: Vars }) {
  const t = useT();
  return <>{t(k ?? children ?? "", vars)}</>;
}
