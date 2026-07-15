export interface ChronicleEvent {
  date: string;
  dateLabel: string;
  title: string;
  description: string;
  faction: string;
  status: "past" | "upcoming" | "ongoing";
  era: string;
}

export const chronicleEvents: ChronicleEvent[] = [
  {
    date: "2024-09-01",
    dateLabel: "September 2024",
    title: "The Prince Falls",
    description:
      "The Camarilla Prince of Barcelona is destroyed in a mysterious attack. No clan claims responsibility. The Praxis is vacant, and every elder positions themselves for the throne. The Camarilla fractures overnight.",
    faction: "Camarilla / All Kindred",
    status: "past",
    era: "I",
  },
  {
    date: "2024-10-15",
    dateLabel: "October 2024",
    title: "The Anarch Rally",
    description:
      "Baron Carrasco of the Raval calls a mass rally, declaring the Anarch Movement the rightful power in Barcelona. The rally draws Kindred from across the city — but an attack by unknown assailants shatters the gathering.",
    faction: "Anarch Movement",
    status: "past",
    era: "I",
  },
  {
    date: "2024-11-03",
    dateLabel: "November 2024",
    title: "Caern Desecration",
    description:
      "A Bane incursion corrupts a minor caern in Collserola. The Garou mobilize, but the Wyrm-taint spreads faster than they can cleanse. AGet of Fenris pack is lost in the cleanup. The Sept of the Sacred Mountain calls for aid from all tribes.",
    faction: "Garou Nation",
    status: "past",
    era: "II",
  },
  {
    date: "2024-12-21",
    dateLabel: "Winter Solstice 2024",
    title: "The Gates Crack",
    description:
      "On the longest night, the walls of the Abyss weaken. Several Fallen escape into Barcelona, drawn to the city's spiritual density. The first possessed mortals appear. The Earthbound stir in their ancient bindings.",
    faction: "The Fallen / Earthbound",
    status: "past",
    era: "II",
  },
  {
    date: "2025-01-30",
    dateLabel: "January 2025",
    title: "The Hermetic Schism",
    description:
      "The Order of Hermes chantry fractures as a faction of younger mages breaks away, accusing the elders of hoarding power. The schism weakens the Traditions' position in Barcelona at a critical moment in the Ascension War.",
    faction: "Order of Hermes",
    status: "past",
    era: "III",
  },
  {
    date: "2025-02-14",
    dateLabel: "February 2025",
    title: "The Night of Masks",
    description:
      "A supernatural summit on La Rambla — neutral ground. Every faction sends representatives. The agenda: to address the growing chaos. The summit ends in bloodshed when a Sabbat pack crashes the proceedings.",
    faction: "All Factions",
    status: "past",
    era: "III",
  },
  {
    date: "2025-03-19",
    dateLabel: "March 2025",
    title: "The Dead Rise",
    description:
      "Something disturbs the Necropolis beneath Barcelona. Wraiths emerge from the Shadowlands in unprecedented numbers. The Hierarchy loses control of three districts. A Spectre incursion threatens the entire wraith city.",
    faction: "Wraiths / Shadowlands",
    status: "past",
    era: "IV",
  },
  {
    date: "2025-05-01",
    dateLabel: "May 2025",
    title: "The Freehold Siege",
    description:
      "A Banality-driven development project threatens Park Güell. The Kithain rally to defend their freehold. The conflict draws the attention of mages and Garou alike — the battle for the Dreaming becomes a battle for Barcelona's soul.",
    faction: "Changelings / Allies",
    status: "past",
    era: "IV",
  },
  {
    date: "2025-06-21",
    dateLabel: "Summer Solstice 2025",
    title: "The Heralds Speak",
    description:
      "New Imbued hunters are called across Barcelona. The Messengers send visions of specific targets — a powerful elder, a Wyrm-tainted corporate executive, an Earthbound entity. The hunters are terrified, untrained, and lethal.",
    faction: "Hunter: The Reckoning",
    status: "ongoing",
    era: "V",
  },
  {
    date: "2025-07-15",
    dateLabel: "July 2025",
    title: "Blood on the Beaches",
    description:
      "A series of brutal killings along Barcelona's waterfront draws mortal media attention. The Masquerade strains as Kindred, Garou, and hunters all investigate. The Ministry's waterfront clubs are suspected — but the truth is far worse.",
    faction: "All Kindred / Hunters",
    status: "ongoing",
    era: "V",
  },
  {
    date: "2025-08-01",
    dateLabel: "August 2025",
    title: "The Collserola Accords",
    description:
      "The Garou Sept of the Sacred Mountain calls for a multi-faction meeting at the caern. For the first time, Kindred, mages, and changelings are invited. The proposed alliance against an unknown threat could reshape Barcelona's supernatural politics — or ignite a war.",
    faction: "Garou Nation / All",
    status: "upcoming",
    era: "V",
  },
  {
    date: "2025-10-31",
    dateLabel: "October 2025 — Samhain",
    title: "The Veil Thins",
    description:
      "On Samhain, the barrier between worlds is at its weakest. The Shadowlands and the Dreaming both press against the living world. Every faction prepares for a night when anything is possible — and everything is dangerous.",
    faction: "All Factions",
    status: "upcoming",
    era: "VI",
  },
];
