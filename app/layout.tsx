import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ARAVTTA | Tourisme régional Tanger-Tétouan-Al Hoceima",
  description:
    "Site institutionnel premium de l'Association Régionale des Agences de Voyages Tanger-Tétouan-Al Hoceima.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
