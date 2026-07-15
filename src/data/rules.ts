export interface RuleSection {
  title: string;
  icon: string;
  rules: { heading: string; content: string }[];
}

export const generalRules: { heading: string; content: string }[] = [
  {
    heading: "Respect the Setting",
    content:
      "Barcelona is a World of Darkness city. Tone matters. Characters should be appropriate to the gothic-punk setting. Slice-of-life RP is welcome, but the shadows are always watching. Embrace the themes of personal horror, moral ambiguity, and the cost of power.",
  },
  {
    heading: "The Masquerade, the Veil, and Paradox",
    content:
      "Each supernatural venue has its own version of the hiding rule — the Masquerade for vampires, the Veil for Garou, Paradox for mages, the Shroud for wraiths, Banality for changelings. Breaking these has in-character consequences. Repeated violations will attract hunter attention and may result in character consequences.",
  },
  {
    heading: "Consent & Comfort",
    content:
      "This sim contains mature themes — horror, violence, addiction, corruption. However, all players have the right to opt out of specific content. Communicate with your scene partners. If a scene is heading somewhere uncomfortable, use the OOC chat to redirect. No means no.",
  },
  {
    heading: "No God-Moding",
    content:
      "Do not dictate another character's actions, thoughts, or reactions. Do not assume hits in combat. Use the dice system for contested actions. Respect other players' agency over their characters.",
  },
  {
    heading: "Out-of-Character Respect",
    content:
      "Treat all players with respect. IC conflict is encouraged; OOC harassment is not. Discrimination, bigotry, and bullying OOCly will result in immediate removal from the sim. Keep IC drama IC and OOC drama out.",
  },
  {
    heading: "Character Death",
    content:
      "Character death is possible in the World of Darkness. STs will not arbitrarily kill characters, but poor decisions, ignoring warnings, and breaking the Masquerade can have lethal consequences. PvP requires ST oversight. If your character dies, you may create a new one.",
  },
  {
    heading: "Activity Requirement",
    content:
      "Characters should be active. Inactive characters (no RP for 30 days without notice) may be removed from active rosters. If you need a hiatus, inform your ST. We understand life happens.",
  },
  {
    heading: "Multiple Characters",
    content:
      "Players may have up to three active characters across different venues. Having multiple characters in the same venue requires ST approval. Characters in the same venue should not interact in ways that benefit each other.",
  },
];

export const creationSteps: { step: number; title: string; content: string }[] = [
  {
    step: 1,
    title: "Choose Your Venue",
    content:
      "Select from the eight available game lines: Vampire: The Masquerade, Werewolf: The Apocalypse, Mage: The Ascension, Hunter: The Reckoning, Wraith: The Oblivion, Changeling: The Dreaming, Demon: The Fallen, or Mortal+. Each has its own ST and application process.",
  },
  {
    step: 2,
    title: "Read the Venue Guide",
    content:
      "Each venue has specific character creation guidelines. Review the relevant sections below for your chosen game line. Pay attention to restricted clans, tribes, traditions, and templates. Some options require ST approval.",
  },
  {
    step: 3,
    title: "Draft Your Concept",
    content:
      "Write a character concept: a brief description of who your character is, what they want, and what they fear. A good WoD character has strengths, flaws, and a reason to be in Barcelona. Avoid Mary Sues — flaws make better stories.",
  },
  {
    step: 4,
    title: "Build Your Sheet",
    content:
      "Using the venue-specific template, assign your Attributes, Abilities, Disciplines/Gifts/Spheres/etc. Submit your sheet to your venue ST via Discord. The ST will review and may request adjustments for balance and thematic fit.",
  },
  {
    step: 5,
    title: "Approval & Introduction",
    content:
      "Once your ST approves your sheet, you'll be introduced to the sim. New characters may be introduced through a starter scene or organically. Your ST will help connect you to existing plots and player groups.",
  },
];

export const venueRules: RuleSection[] = [
  {
    title: "Vampire: The Masquerade",
    icon: "M12 2 C9 6 7 8 7 12 C7 16 9 18 12 22 C15 18 17 16 17 12 C17 8 15 6 12 2 Z",
    rules: [
      { heading: "Available Clans", content: "All standard Camarilla and Anarch clans are available. Lasombra and Ministry are available with ST approval. Ban Haqim and Hecata require a strong concept. Sabbat characters are not available at start." },
      { heading: "Generation", content: "Starting Generation is 12th. Lower generations (10th-11th) require ST approval and significant background justification. 13th generation and Thin-Blooded are freely available." },
      { heading: "Disciplines", content: "Starting Disciplines follow standard V5 rules: 3 dots spread across clan Disciplines. Additional Disciplines at character creation require justification. Blood Sorcery (Thaumaturgy) is restricted to Tremere and Ban Haqim." },
      { heading: "Predator Type", content: "Choose a Predator Type per V5 rules. This determines feeding practices and influences your character's relationships with the mortal world." },
      { heading: "Humanity", content: "Starting Humanity is 7. Paths of Enlightenment require ST approval and are not recommended for new players. The chronicle will test your Humanity regularly." },
    ],
  },
  {
    title: "Werewolf: The Apocalypse",
    icon: "M4 4 L8 10 L12 6 L16 10 L20 4 L18 12 L20 20 L16 16 L12 20 L8 16 L4 20 L6 12 Z",
    rules: [
      { heading: "Available Tribes", content: "Glass Walkers, Bone Gnawers, Children of Gaia, Fianna, Get of Fenris, Silent Striders, Black Furies, and Red Talons are available. Silver Fangs and Uktena require ST approval." },
      { heading: "Auspice", content: "Choose one of the five auspices: Ragabash (new moon), Theurge (crescent moon), Philodox (half moon), Galliard (gibbous moon), or Ahroun (full moon). Your auspice determines your role in Garou society." },
      { heading: "Breed", content: "Homid (born human), Metis (born Garou, sterile and deformed), or Lupus (born wolf). Metis characters require ST approval. Lupus characters are extremely rare in Barcelona's urban environment." },
      { heading: "Rank", content: "Starting characters begin at Rank 1 (Cliath). Rank advancement requires renown, which is earned through roleplay and ST-awarded recognition." },
      { heading: "Gifts & Rites", content: "Starting characters receive 3 Level 1 Gifts appropriate to their auspice and tribe. Rites may be learned through roleplay." },
    ],
  },
  {
    title: "Mage: The Ascension",
    icon: "M12 2 L13 8 L19 9 L14 13 L16 19 L12 16 L8 19 L10 13 L5 9 L11 8 Z",
    rules: [
      { heading: "Available Traditions", content: "All nine Traditions are available. Technocratic Union characters require ST approval and are best suited for experienced players with strong concepts. Hollow Ones and Orphan mages are available." },
      { heading: "Arete", content: "Starting Arete is 2. Arete 3+ requires ST approval. Arete determines how much reality you can bend before Paradox bites." },
      { heading: "Spheres", content: "Starting Spheres: 6 dots distributed as desired, with no Sphere above 3. Your Tradition's Specialty Sphere is discounted. Resonance must be chosen and will influence your magic." },
      { heading: "Paradox", content: "Vulgar magic accumulates Paradox. Use coincidental magic whenever possible. Paradox backlashes are real and dangerous. The ST will track your Paradox." },
      { heading: "Avatar", content: "Choose an Avatar Essence: Dynamic, Pattern, Primordial, or Questing. Your Avatar influences your Seekings and magical development." },
    ],
  },
  {
    title: "Hunter: The Reckoning",
    icon: "M12 2 L14 6 L18 6 L15 10 L17 14 L12 12 L7 14 L9 10 L6 6 L10 6 Z",
    rules: [
      { heading: "Available Creeds", content: "All Creeds are available: Avengers, Defenders, Judges, Martyrs, Innocents, Redeemers, Visionaries. Waywards require ST approval. Hermits are available but require a strong isolationist concept." },
      { heading: "Edges", content: "Starting characters receive 3 Level 1 Edges appropriate to their Creed. Additional Edges are gained through conviction, which is earned through roleplay." },
      { heading: "Conviction", content: "Starting Conviction is 4. Conviction fuels Edges and can push back supernatural powers. Managing Conviction is central to hunter play." },
      { heading: "The Imbuing", content: "All hunters begin recently Imbued. Your Imbuing is a defining moment — play it. The Messengers gave you a vision. You are terrified. You are alone. You cannot look away." },
      { heading: "Mortality", content: "Hunters are mortal. They bleed, they break, and they die. They have no supernatural healing, no immortality, no safety net. Their power is courage and conviction — and it is not enough." },
    ],
  },
  {
    title: "Wraith: The Oblivion",
    icon: "M12 2 C8 2 5 6 5 10 C5 14 8 16 8 20 L12 18 L16 20 C16 16 19 14 19 10 C19 6 16 2 12 2 Z",
    rules: [
      { heading: "Guilds", content: "Pardoner, Monitor, and Usurer Guilds are available. Other Guilds require ST approval. Guild membership is dangerous — the Hierarchy officially disapproves." },
      { heading: "Faction", content: "Hierarchy, Renegade, or Heretic. The Hierarchy offers structure and resources but demands obedience. Renegades are free but hunted. Heretics seek transcendence but risk Oblivion." },
      { heading: "Arcanoi", content: "Starting Arcanoi: 3 dots in Guild Arcanos, 2 dots in other Arcanoi. No Arcanos above 3 at start. Forbidden Arcanoi require ST approval and carry significant risk." },
      { heading: "Passions & Fetters", content: "Define at least 3 Passions (what drives your wraith) and 3 Fetters (objects in the living world that anchor you). These are the core of wraith existence — losing them means sliding toward Oblivion." },
      { heading: "The Shadow", content: "Your Shadow is your dark self, the voice of Oblivion within. It is played by another player or by the ST. Embrace this — the Shadow is what makes wraith play uniquely compelling." },
    ],
  },
  {
    title: "Changeling: The Dreaming",
    icon: "M12 2 L8 8 L4 6 L6 12 L2 16 L8 16 L12 22 L16 16 L22 16 L18 12 L20 6 L16 8 Z",
    rules: [
      { heading: "Available Kiths", content: "Boggans, Eshu, Pooka, Redcaps, Satyrs, Sidhe, Sluagh, and Trolls are available. Nunnehi and other exotic Kiths require ST approval." },
      { heading: "Seeming", content: "Childling (young), Wilder (youth), or Grump (elder). Your Seeming affects your Banality tolerance and Glamour pool. Most starting characters are Wilders." },
      { heading: "Arts & Realms", content: "Starting Arts: 3 dots. Starting Realms: 3 dots. No Art or Realm above 3 at start. Choose Arts and Realms that fit your character concept." },
      { heading: "Glamour & Banality", content: "Starting Glamour is 4. Starting Banality is 3 for Wilders. Managing Banality is the central tension — too much and you forget what you are. Too little and the Dreaming takes you." },
      { heading: "House Affiliation", content: "Sidhe must choose a Noble House. Commoner Kiths may be unaligned. House choice affects political standing and available resources." },
    ],
  },
  {
    title: "Demon: The Fallen",
    icon: "M12 2 L6 8 L6 18 L12 14 L18 18 L18 8 Z",
    rules: [
      { heading: "Available Houses", content: "Scourges, Fiends, Malefactors, Defilers, Devourers, Slayers, and Devils are available. Earthbound are NPC-only and serve as major antagonists." },
      { heading: "Torment", content: "Starting Torment is 3. Torment determines the balance between your angelic and demonic nature. High Torment corrupts your powers and threatens your host. Managing Torment is the central struggle." },
      { heading: "Lore", content: "Starting Lore: 3 dots in your House Lore, 2 dots in another Lore. No Lore above 3 at start. Lore is the manifestation of your angelic/demonic nature." },
      { heading: "Faith", content: "Starting Faith is 3. Faith fuels your powers and is harvested through pacts with mortals. Reaping Faith without pacts is destructive and raises Torment." },
      { heading: "The Host", content: "You possess a mortal body. The host's memories and personality bleed through. This is a feature, not a bug — the tension between your demonic nature and your host's humanity is the core of Demon play." },
    ],
  },
  {
    title: "Mortal+ / Ghouls",
    icon: "M12 4 C8 4 6 8 6 12 C6 16 8 20 12 20 C16 20 18 16 18 12 C18 8 16 4 12 4 Z",
    rules: [
      { heading: "Available Templates", content: "Ghouls, revenants, mediums, sorcerers, numinists, and ordinary mortals are available. Thin-Blooded are available under the Vampire venue. Investigators and academics can be played with no supernatural template." },
      { heading: "Ghoul Characters", content: "Ghouls must have a Kindred regnant. The regnant may be an NPC or a PC. The blood bond is real — play it. Ghouls receive one dot of a Discipline from their regnant's clan." },
      { heading: "Sorcerers", content: "Hedge magic is limited but real. Starting sorcerers receive 3 dots in one Path and 2 dots in a second. No Path above 3 at start. Sorcery is static — no Paradox, but also no reality-bending." },
      { heading: "Mediums & Numinists", content: "Mediums can perceive spirits with a Awareness/mediumism check. Numinists have one or two numina (psychic powers). Both are subtle and limited compared to true supernatural templates." },
      { heading: "Mortality", content: "Mortal characters are the most vulnerable and the most compelling. They have no supernatural healing, no immortality, and no safety net. But they have free will, courage, and the power to change the world." },
    ],
  },
];

export const staffTeam: { name: string; role: string; venue: string }[] = [
  { name: "Malkaviani", role: "Lead Storyteller", venue: "Vampire: The Masquerade" },
  { name: "Fang-and-Claw", role: "Lead Storyteller", venue: "Werewolf: The Apocalypse" },
  { name: "ParadoxPrime", role: "Senior Storyteller", venue: "Mage: The Ascension" },
  { name: "EdgeRunner", role: "Storyteller", venue: "Hunter: The Reckoning" },
  { name: "ShroudSpeaker", role: "Storyteller", venue: "Wraith: The Oblivion" },
  { name: "GlamourWeaver", role: "Storyteller", venue: "Changeling: The Dreaming" },
  { name: "AbyssalLord", role: "Lead Storyteller", venue: "Demon: The Fallen" },
  { name: "MortalCoil", role: "Storyteller", venue: "Mortal+ / Ghouls" },
  { name: "NightKeeper", role: "Sim Admin", venue: "Administration & Build" },
  { name: "CodeOfShadows", role: "Moderator", venue: "Community Moderation" },
];
