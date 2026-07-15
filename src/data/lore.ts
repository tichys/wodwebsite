export interface LoreEntry {
  era: string;
  title: string;
  content: string;
  supernatural: string;
}

export const loreTimeline: LoreEntry[] = [
  {
    era: "I",
    title: "Barcino — The Roman Foundation",
    content:
      "Founded as a Roman colony in the 1st century BCE, Barcino was a small but strategic port. Roman legionaries carried their gods and their ghosts with them, establishing the first spiritual infrastructure of the city. The Temple of Augustus, now buried within the Gothic Quarter's medieval walls, still pulses with ancient power.",
    supernatural:
      "The earliest Kindred arrived with the Romans — Lasombra shadows following the legions. The first mages of the Order of Hermes established a chantry on the site, drawing on the intersection of Roman engineering and mystic geometry. The dead of Barcino are the oldest stratum of the Necropolis, Roman soldiers who still patrol the Shadowlands.",
  },
  {
    era: "II",
    title: "The Medieval Crown — Catalan Golden Age",
    content:
      "Barcelona grew into a powerful maritime republic in the medieval period. The Gothic Quarter took shape, its narrow streets and towering cathedral creating a labyrinth of shadows. The Catalan court attracted artists, scholars, and the supernatural beings drawn to centers of power. The Inquisition's shadow began to lengthen.",
    supernatural:
      "The Toreador claimed Barcelona as a cultural jewel, patronizing artists and architects. The Order of Hermes expanded their chantry, establishing wards that still function. The Garou of the Collserola hills clashed with expanding settlement. The Inquisition's first Catalan tribunals hunted vampires and mages alike, burning some and driving others deeper into hiding.",
  },
  {
    era: "III",
    title: "The Inquisition — Fire and Faith",
    content:
      "The Spanish Inquisition fell heavily on Catalonia. Jews, Muslims, heretics, and the supernatural were hunted with zeal. Barcelona's hidden communities were decimated. The Crown of Aragon's suppression of Catalan identity drove many secrets underground, where they festered for centuries.",
    supernatural:
      "Kindred were systematically hunted; entire broods were destroyed. The Society of Leopold established permanent roots in Barcelona, cells that would survive into the modern era. Mages of the Order of Hermes retreated behind ever-stronger wards. The war between the Hierarchy and the Heretics in the Shadowlands intensified as religious wraiths multiplied.",
  },
  {
    era: "IV",
    title: "The Civil War — Blood in the Streets",
    content:
      "The Spanish Civil War (1936-1939) tore Barcelona apart. Anarchist communes, Republican forces, and Franco's Nationalists fought over the city. Barcelona became a battlefield of ideologies — and of the supernatural. The dead piled high, and the Shadowlands swelled with the newly deceased.",
    supernatural:
      "The Anarch Movement found ideological kinship with the revolutionary militias. Sabbat packs exploited the chaos. The Collserola caern was desecrated by Wyrm-corrupted soldiers, requiring decades of cleansing. The Shadowlands overflowed with war dead, and the Hierarchy lost control of entire districts of the Necropolis. Demon cults flourished in the desperation.",
  },
  {
    era: "V",
    title: "The Franco Years — Suppression and Secrets",
    content:
      "Under Franco's dictatorship, Catalonia's identity was suppressed. Catalan language and culture were driven underground, creating a parallel world of hidden loyalties. The supernatural learned to hide, to nest within the structures of oppression. Franco's regime was riddled with supernatural influence.",
    supernatural:
      "Camarilla Kindred infiltrated the regime, using Franco's authoritarian apparatus to enforce the Masquerade. Technocratic operatives embedded in the government pushed static reality. The Garou of Collserola fought low-level guerrilla warfare against development and Wyrm-taint. Changeling freeholds became refuges for banned Catalan culture, keeping the Dreaming alive through art and song.",
  },
  {
    era: "VI",
    title: "The Modern Nights — Barcelona Reborn",
    content:
      "Post-Franco, Barcelona exploded into a cosmopolitan hub. The 1992 Olympics transformed the city. Tourism brought money, mortals, and opportunity. The old supernatural orders reasserted themselves, while new arrivals — Anarchs, technomancers, Imbued hunters — disrupted established power. The city became a nexus of competing interests.",
    supernatural:
      "The Anarch Movement consolidated control over the Raval and Gràcia, rejecting Camarilla authority. The Camarilla, weakened by global upheaval, struggled to maintain its hold on the Eixample and Sarrià. Imbued hunters began appearing — confused, terrified, and dangerous. The Fallen escaped the Abyss, drawn to Barcelona's spiritual density. The Thin-Blooded multiplied, a sign of Gehenna approaching.",
  },
  {
    era: "VII",
    title: "The Present — The Chronicle of Night",
    content:
      "Barcelona's supernatural society stands on a knife's edge. The Camarilla Prince's authority is contested. The Anarchs are fractured between idealists and thugs. The Garou fight a losing war against Wyrm-tainted development in Collserola. The Awakened wage the Ascension War in shadows. The dead grow restless, and Oblivion's call is louder each night. Every faction plays for the soul of the city.",
    supernatural:
      "The chronicle begins. The coterie — vampires, pack, cabal, cell, circle, court, throng, or motley — must navigate Barcelona's layered supernatural politics. Ancient secrets surface. Alliances shift. The night belongs to those bold enough to claim it — and doomed enough to hold it.",
  },
];

export interface LocationEntry {
  name: string;
  type: string;
  description: string;
  faction: string;
  status: "contested" | "controlled" | "neutral" | "lost";
}

export const locations: LocationEntry[] = [
  {
    name: "The Gothic Quarter (Barri Gòtic)",
    type: "Camarilla Domain",
    description:
      "The labyrinthine medieval heart of Barcelona. Narrow streets, Roman walls, hidden courtyards. The Toreador hold court here, and the Tremere chantry lies behind a bookshop on Carrer dels Banys Nous.",
    faction: "Camarilla / Order of Hermes",
    status: "controlled",
  },
  {
    name: "El Raval",
    type: "Anarch Territory",
    description:
      "Once a rough working-class neighborhood, now a volatile mix of art, crime, and rebellion. The Anarchs hold it as their commune. Bone Gnawers patrol the streets. The energy is raw and dangerous.",
    faction: "Anarch Movement / Bone Gnawers",
    status: "contested",
  },
  {
    name: "Collserola Natural Park",
    type: "Garou Caern",
    description:
      "The forested hills behind Barcelona, a corridor of wild land in the urban sprawl. The primary Garou caern lies here, and the Garou fight desperately against Wyrm-tainted development.",
    faction: "Garou Nation",
    status: "contested",
  },
  {
    name: "Sagrada Família",
    type: "Node / Freehold",
    description:
      "Gaudí's unfinished masterpiece, a towering cathedral of impossible forms. It channels immense Glamour and serves as a powerful Node for Awakened mages. The Kithain consider it sacred.",
    faction: "Changelings / Mages",
    status: "neutral",
  },
  {
    name: "Park Güell",
    type: "Changeling Freehold",
    description:
      "Gaudí's whimsical public park, a wonder of mosaic and organic architecture. A Kithain freehold lies within, guarded by House Eiluned. Mortals see a park; the Dreaming sees a palace.",
    faction: "Changelings",
    status: "controlled",
  },
  {
    name: "Montjuïc",
    type: "Sabbat Ruins / Shadowlands",
    description:
      "The hill overlooking the harbor, site of the old castle and cemetery. Sabbat remnants hide in the tunnels. The Shadowlands here are dense with the dead from centuries of conflict.",
    faction: "Sabbat Remnants / Wraiths",
    status: "contested",
  },
  {
    name: "La Rambla",
    type: "Neutral Ground",
    description:
      "The famous tree-lined boulevard cutting through the heart of the city. By ancient accord, La Rambla is neutral territory where no faction may spill blood. Every supernatural power in Barcelona walks here.",
    faction: "All / Neutral",
    status: "neutral",
  },
  {
    name: "22@ Innovation District",
    type: "Technocratic / Glass Walker",
    description:
      "Barcelona's modern tech hub in Poblenou. Glass Walkers and Virtual Adepts compete with the Technocratic Union for control of the digital infrastructure and Nodes embedded in the network.",
    faction: "Glass Walkers / Virtual Adepts / Technocracy",
    status: "contested",
  },
  {
    name: "Tibidabo",
    type: "Spiritual Nexus",
    description:
      "The highest point in Barcelona, crowned by the Sagrat Cor church. A powerful spiritual nexus where the Umbra is thin. Mages, Garou, and even the Fallen are drawn to its heights.",
    faction: "Contested / All",
    status: "contested",
  },
  {
    name: "The Barcelona Necropolis",
    type: "Shadowlands Domain",
    description:
      "The vast wraith-city beneath Barcelona, layer upon layer of the dead. Roman, medieval, Civil War, modern — all coexist in the Shadowlands reflection. The Hierarchy struggles to maintain order.",
    faction: "Wraiths",
    status: "contested",
  },
];

export interface PrincipleEntry {
  title: string;
  description: string;
}

export const settingPrinciples: PrincipleEntry[] = [
  {
    title: "The Masquerade",
    description:
      "Kindred must hide the existence of vampires from mortals. The Camarilla enforces this with lethal precision. Anarchs respect the Masquerade pragmatically. Breaking it brings hunters, investigation, and Final Death.",
  },
  {
    title: "The Delirium",
    description:
      "Mortals who see a Garou in Crinos form are overwhelmed by primal terror and suppress the memory. The Delirium is the Garou's version of the Masquerade — the Veil must be maintained.",
  },
  {
    title: "Paradox",
    description:
      "Mages who violate consensus reality accumulate Paradox, which manifests as backlashes — from minor glitches to catastrophic reality storms. Subtlety is survival.",
  },
  {
    title: "The Shroud",
    description:
      "The barrier between the living world and the Shadowlands. In Barcelona, the Shroud is thin, and wraiths can more easily interact with the living — for better and for worse.",
  },
  {
    title: "Banality",
    description:
      "The force of mundane, joyless reality that erodes Glamour and threatens changelings. In Barcelona, Banality grows with overdevelopment, tourism, and the grind of modern city life.",
  },
  {
    title: "Torment",
    description:
      "The demonic rage that builds within the Fallen. High Torment corrupts their powers and threatens to consume their mortal hosts. Managing Torment is the central struggle of the Fallen.",
  },
];
