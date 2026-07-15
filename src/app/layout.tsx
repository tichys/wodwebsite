import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, EB_Garamond } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tichys.github.io/wodwebsite"),
  title: "Chronicles of Night | A Barcelona World of Darkness RP",
  description:
    "Enter the shadows of Barcelona — a World of Darkness roleplaying sim in Second Life. Vampires, werewolves, mages, wraiths, changelings, demons, and hunters vie for power beneath the Gothic spires.",
  keywords: [
    "World of Darkness",
    "WoD",
    "Vampire the Masquerade",
    "Werewolf the Apocalypse",
    "Mage the Ascension",
    "Barcelona",
    "Second Life",
    "RP sim",
    "roleplay",
    "Chronicles of Night",
  ],
  openGraph: {
    title: "Chronicles of Night | A Barcelona World of Darkness RP",
    description:
      "Enter the shadows of Barcelona — a World of Darkness roleplaying sim in Second Life.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${ebGaramond.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col noise-texture">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
