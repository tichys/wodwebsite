export interface Faction {
  name: string;
  type: string;
  description: string;
}

export interface GameLine {
  id: string;
  name: string;
  fullName: string;
  tagline: string;
  description: string;
  themes: string[];
  accentFrom: string;
  accentTo: string;
  iconPath: string;
  factions: Faction[];
  barcelonaNote: string;
  playable: boolean;
  status: "open" | "restricted" | "closed";
}

export const gameLines: GameLine[] = [
  {
    id: "vampire",
    name: "Vampire",
    fullName: "Vampire: The Masquerade",
    tagline: "A Beast I am, lest a Beast I become",
    description:
      "The Kindred stalk the gas-lit streets of the Gothic Quarter, locked in the eternal Jyhad. The Camarilla clings to the Masquerade, the Anarch Movement battles for freedom, and the ashes of the Sabbat still smolder in the dark. Every neonate must navigate the deadly politics of the Damned.",
    themes: ["Political intrigue", "Personal horror", "The Beast", "Eternal unlife"],
    accentFrom: "#8b1a1a",
    accentTo: "#2a0000",
    iconPath: "M12 2 C9 6 7 8 7 12 C7 16 9 18 12 22 C15 18 17 16 17 12 C17 8 15 6 12 2 Z M12 9 L11 13 L13 13 Z",
    factions: [
      { name: "Camarilla", type: "Sect", description: "The ivory tower of Kindred society, enforcing the Masquerade and the Traditions. In Barcelona, the Camarilla holds tentative power over the Eixample and Sarrià, led by a shaky Prince whose claim is contested nightly." },
      { name: "Anarch Movement", type: "Sect", description: "Free Kindred who reject the Camarilla's elders and the Sabbat's madness. Barcelona's Anarchs control the Raval and Gràcia, a volatile commune of neonates and elders alike." },
      { name: "Sabbat Remnants", type: "Sect", description: "Scattered packs of the broken sword, clinging to old rites in the tunnels beneath Montjuïc. Few in number, but their blood-magic and zealotry make them dangerous." },
      { name: "Clan Brujah", type: "Clan", description: "Warrior-scholars and firebrands. Barcelona's Brujah are the backbone of the Anarch movement, their tempers matched only by their conviction." },
      { name: "Clan Toreador", type: "Clan", description: "Artists and aesthetes drawn to Barcelona's creative soul. They hold court in galleries and opera houses, obsessed with beauty and the loss of mortal sensation." },
      { name: "Clan Ventrue", type: "Clan", description: "Blue-blooded aristocrats of the night. The Ventrue stake their claim on Barcelona's financial district, but their authority is questioned." },
      { name: "Clan Tremere", type: "Clan", description: "Warlocks of blood sorcery. Their chantry in the Gothic Quarter is a fortress of secrets, though the clan's hierarchy has fractured in recent years." },
      { name: "Clan Malkavian", type: "Clan", description: "Seers and madmen, oracles broken by the Curse. They wander Barcelona's streets speaking truths no one wants to hear, connected by the Madness Network." },
      { name: "Clan Nosferatu", type: "Clan", description: "Information brokers and sewer-dwellers. Barcelona's Nosferatu know every secret that flows through the city's underbelly, trading in intelligence." },
      { name: "Clan Gangrel", type: "Clan", description: "Feral wanderers and survivors. Many Gangrel prowl the Collserola hills or the beaches beyond the city, preferring the company of beasts to Kindred." },
      { name: "Clan Lasombra", type: "Clan", description: "Shadow-manipulators and manipulative social climbers. Spanish Lasombra have deep roots in Barcelona's history, and some have defected to the Camarilla while others remain independent." },
      { name: "Ministry (Setites)", type: "Clan", description: "Tempters and cult-leaders who worship Set. They operate clubs and cults along the waterfront, offering forbidden pleasures." },
      { name: "Ban Haqim (Assamites)", type: "Clan", description: "Assassins and judges. A small but feared presence in Barcelona, serving as contract killers and enforcers of blood justice." },
      { name: "Hecata (Giovanni)", type: "Clan", description: "Necromancers and death-dealers. The Hecata maintain quiet ties to Barcelona's old cemeteries and the spirits that dwell within." },
    ],
    barcelonaNote: "Barcelona has been a Kindred city since the Roman era. The Toreador claim it as a cultural jewel, while the Brujah Anarchs see it as a revolutionary stronghold. The recent upheaval in Kindred society has left the city's Princedom in question.",
    playable: true,
    status: "open",
  },
  {
    id: "werewolf",
    name: "Werewolf",
    fullName: "Werewolf: The Apocalypse",
    tagline: "Gaia is dying. The Wyrm is winning. Rage against the dying of the light",
    description:
      "The Garou are warriors of Gaia, shape-shifters locked in a losing war against the Wyrm — the cosmic force of corruption and destruction. In the wild hills of Collserola and the concrete canyons of the city, the Garou fight a desperate, doomed battle.",
    themes: ["Sacred rage", "Ecological horror", "Spirit world", "Doomed heroism"],
    accentFrom: "#2d5a3d",
    accentTo: "#0a1a0a",
    iconPath: "M4 4 L8 10 L12 6 L16 10 L20 4 L18 12 L20 20 L16 16 L12 20 L8 16 L4 20 L6 12 Z",
    factions: [
      { name: "Glass Walkers", type: "Tribe", description: "Urban Garou who have embraced the Weaver's city. They operate in Barcelona's business district, using technology and corporate power to protect caerns hidden in the urban grid." },
      { name: "Bone Gnawers", type: "Tribe", description: "Street wolves who survive among the homeless and forgotten. In El Raval, the Bone Gnawers know every alley and shelter, keeping watch over the city's most vulnerable." },
      { name: "Children of Gaia", type: "Tribe", description: "Peacemakers and mediators who seek unity among the Garou. They work to bridge the gap between tribes and city, operating community centers and shelters." },
      { name: "Fianna", type: "Tribe", description: "Celtic warriors and poets, passionate in battle and celebration. Drawn to Barcelona's vibrant nightlife and music scene." },
      { name: "Get of Fenris", type: "Tribe", description: "Norse-inspired warriors who value strength and combat prowess above all. They defend the wildest caerns in the Collserola range." },
      { name: "Silent Striders", type: "Tribe", description: "Wanderers and messengers, exiled from their Egyptian homeland. They travel through Barcelona, carrying news between septs and pursuing the undead." },
      { name: "Black Furies", type: "Tribe", description: "Fierce defenders of women and the wild places. They hold a caern in the hills above the city, fiercely guarding their territory." },
      { name: "Red Talons", type: "Tribe", description: "Lupus-born Garou who despise humanity. Rare in Barcelona's urban landscape, but some stalk the Collserola wilderness." },
      { name: "The Caern of the Sacred Mountain", type: "Sept", description: "The primary caern in the Collserola Natural Park, a powerful caern of Healing guarded by a mixed sept. The heart of Garou activity in Barcelona." },
      { name: "The Urban Sept", type: "Sept", description: "A Glass Walker-led sept that protects a caern hidden within a tech hub in the 22@ district, a node of Weaver-touched power." },
    ],
    barcelonaNote: "The Collserola mountain range provides a corridor of wild land that the Garou fight desperately to protect from Wyrm-tainted development. The urban Glass Walkers and rural Garou of the hills maintain an uneasy alliance.",
    playable: true,
    status: "open",
  },
  {
    id: "mage",
    name: "Mage",
    fullName: "Mage: The Ascension",
    tagline: "Do you will it? Then reality bends",
    description:
      "Awakened willworkers shape reality itself through belief and knowledge. The Traditions fight the Technocratic Union for the very fabric of consensus reality. In Barcelona, where ancient mysticism meets cutting-edge technology, the Ascension War rages in shadows.",
    themes: ["Reality warping", "Belief vs. consensus", "Hubris", "Hidden war"],
    accentFrom: "#4a3a8a",
    accentTo: "#0a0a1a",
    iconPath: "M12 2 L13 8 L19 9 L14 13 L16 19 L12 16 L8 19 L10 13 L5 9 L11 8 Z M12 7 L12 12 M9 10 L15 10",
    factions: [
      { name: "Order of Hermes", type: "Tradition", description: "Hermetic mages wielding classical magic through formula and ritual. Their chantry in the Gothic Quarter is ancient, hidden behind a bookshop that has stood for centuries." },
      { name: "Akashic Brotherhood", type: "Tradition", description: "Martial artists and meditation masters who reshape reality through the discipline of mind and body. They operate a dojo in Gràcia." },
      { name: "Celestial Chorus", type: "Tradition", description: "Theurgical mages who channel the One through faith. They hold services in a hidden chapel, drawing on centuries of Catalan spiritual tradition." },
      { name: "Cult of Ecstasy", type: "Tradition", description: "Pleasure-seekers and temporal manipulators who find enlightenment through experience. They move through Barcelona's club scene, pushing boundaries." },
      { name: "Dreamspeakers", type: "Tradition", description: "Shamans who commune with spirits. They walk between the physical world and the Umbra, mediating between Barcelona's living and spirit inhabitants." },
      { name: "Verbena", type: "Tradition", description: "Blood mages and nature-workers who practice old European traditions. Their rites are tied to the Catalan land and its ancient goddesses." },
      { name: "Sons of Ether", type: "Tradition", description: "Mad scientists who bend reality through impossible technology. Their laboratory hidden in the 22@ district bristles with retrofuturistic devices." },
      { name: "Virtual Adepts", type: "Tradition", description: "Digital mages who shape reality through code. They push the boundaries of Barcelona's tech scene, seeking the Digital Web." },
      { name: "Euthanatos", type: "Tradition", description: "Entropy-workers who guide souls through the cycle of death and rebirth. They serve as assassins and healers, tending the wheel of fate." },
      { name: "Technocratic Union", type: "Convention", description: "The enemy of the Traditions, seeking to impose static scientific reality on the world. Iteration X, the New World Order, and the Syndicate maintain a foothold in Barcelona's institutions." },
    ],
    barcelonaNote: "Barcelona's long history of mysticism — from medieval alchemy to modern art — makes it a nexus of Awakened activity. The Order of Hermes considers the city a traditional stronghold, but the Technocracy's presence grows in the modern institutions.",
    playable: true,
    status: "open",
  },
  {
    id: "hunter",
    name: "Hunter",
    fullName: "Hunter: The Reckoning",
    tagline: "The monsters are real. So are you",
    description:
      "Ordinary mortals, Imbued by mysterious Messengers, who can see the truth the world hides. They are given powers and a mission: hunt the supernatural. In Barcelona, the Imbued are few, scattered, and terrified — but they will not look away.",
    themes: ["Mortal courage", "The hunt", "Isolation", "Impossible choices"],
    accentFrom: "#8a6a2a",
    accentTo: "#1a1200",
    iconPath: "M12 2 L14 6 L18 6 L15 10 L17 14 L12 12 L7 14 L9 10 L6 6 L10 6 Z M12 14 L12 22 M8 18 L16 18",
    factions: [
      { name: "Avengers", type: "Creed", description: "Driven by rage, Avengers seek to destroy monsters by any means. They are the hammer of the Imbued, and the most likely to fall to their own fury." },
      { name: "Defenders", type: "Creed", description: "Protectors who focus on saving victims rather than destroying monsters. They build safe houses and evacuation networks in Barcelona's neighborhoods." },
      { name: "Judges", type: "Creed", description: "Methodical hunters who investigate, assess, and deliver precise justice. They maintain dossiers on every supernatural creature they encounter." },
      { name: "Martyrs", type: "Creed", description: "Self-sacrificing hunters who put themselves between monsters and innocents. They burn bright and fast, often consumed by the Hunt." },
      { name: "Redeemers", type: "Creed", description: "Compassionate hunters who seek to save monsters from themselves. They believe some supernatural beings can be restored to humanity." },
      { name: "Innocents", type: "Creed", description: "Pure-hearted hunters whose presence can calm and protect. Their innocence is a shield, but the world threatens to shatter it." },
      { name: "Visionaries", type: "Creed", description: "Philosopher-hunters seeking to understand the big picture. They look for patterns in the supernatural world, trying to comprehend the Messengers' mission." },
      { name: "Waywards", type: "Creed", description: "Broken hunters who have lost their moral compass, killing monsters indiscriminately. Dangerous to allies and enemies alike." },
    ],
    barcelonaNote: "The Inquisition left deep roots in Catalonia. Some modern Imbued hunters trace their lineage to old Society of Leopold cells, though most were awakened recently with no preparation. They are the most vulnerable and the most determined.",
    playable: true,
    status: "open",
  },
  {
    id: "wraith",
    name: "Wraith",
    fullName: "Wraith: The Oblivion",
    tagline: "Death is not the end. It is the beginning of the war",
    description:
      "The Restless Dead linger in the Shadowlands, chained to the living by their Passions and Fetters. In Barcelona, where centuries of history layer upon one another, the dead outnumber the living ten to one, and the call of Oblivion grows louder.",
    themes: ["Unfinished business", "The Shadow", "Stygian society", "The void"],
    accentFrom: "#3a3a5a",
    accentTo: "#0a0a1a",
    iconPath: "M12 2 C8 2 5 6 5 10 C5 14 8 16 8 20 L12 18 L16 20 C16 16 19 14 19 10 C19 6 16 2 12 2 Z M10 8 L14 8 M10 12 L14 12",
    factions: [
      { name: "The Hierarchy", type: "Faction", description: "The bureaucratic government of the Shadowlands, maintaining order among the dead. Their Barcelona Necropolis beneath the old city is a vast, crumbling administration of the deceased." },
      { name: "Renegades", type: "Faction", description: "Wraiths who reject the Hierarchy's authority. They haunt Barcelona's ruins and forgotten places, free but hunted." },
      { name: "Heretics", type: "Faction", description: "Religious wraiths who seek transcendence through faith. They gather in the spectral reflections of Barcelona's churches, seeking a way beyond the Shroud." },
      { name: "Pardoner Guild", type: "Guild", description: "Practitioners of Castigation who can separate a wraith from their Shadow. Rare and invaluable in the fight against Oblivion." },
      { name: "Monitors Guild", type: "Guild", description: "Those who study and bind Fetters, the objects that anchor wraiths to the living world. They know every haunted object in Barcelona." },
      { name: "Usurer Guild", type: "Guild", description: "Wraiths who can transfer Pathos and Corpus between the dead. Healers and bankers of the Shadowlands." },
      { name: "The Necropolis of Barcino", type: "Location", description: "The great wraith-city that mirrors Barcelona, built upon layer upon layer of Roman, medieval, and modern dead. Its byways stretch beneath the entire Shadowlands reflection of the city." },
    ],
    barcelonaNote: "Barcelona's dead span millennia — from Roman soldiers to Civil War casualties to modern accident victims. The city's Shadowlands are extraordinarily dense, making it one of the most active wraith cities in Europe, and one of the most threatened by Oblivion.",
    playable: true,
    status: "restricted",
  },
  {
    id: "changeling",
    name: "Changeling",
    fullName: "Changeling: The Dreaming",
    tagline: "In a world of Banality, dare to Dream",
    description:
      "The Kithain are fae souls trapped in mortal flesh, fighting against Banality — the death of wonder. In Barcelona, a city where Gaudí's impossible architecture defies reason, the Dreaming is stronger than in most places, but Glamour fades and Banality creeps.",
    themes: ["Wonder vs. Banality", "Chimerical reality", "Eternal youth", "Tragic dreams"],
    accentFrom: "#6a3a8a",
    accentTo: "#1a0a2a",
    iconPath: "M12 2 L8 8 L4 6 L6 12 L2 16 L8 16 L12 22 L16 16 L22 16 L18 12 L20 6 L16 8 Z M12 8 L12 14",
    factions: [
      { name: "House Eiluned", type: "Noble House", description: "Mystical and scholarly Sidhe who value arcane knowledge. They maintain a freehold hidden within Park Güell, among Gaudí's mosaics." },
      { name: "House Fiona", type: "Noble House", description: "Brave and passionate Sidhe who value honor and courage above all. They are champions of the commoners and the Dreaming." },
      { name: "House Dougal", type: "Noble House", description: "Craftspeople and artisans among the Sidhe. They find inspiration in Barcelona's architecture and craftsmanship traditions." },
      { name: "Boggans", type: "Kith", description: "Hearth-spirits who find joy in community and hospitality. They tend Barcelona's neighborhood bars and community spaces." },
      { name: "Eshu", type: "Kith", description: "Wandering storytellers and adventurers. They travel through Barcelona, collecting tales and spreading Glamour through narrative." },
      { name: "Pooka", type: "Kith", description: "Shape-shifting tricksters bonded to animal natures. They bring laughter and chaos to the city's streets." },
      { name: "Redcaps", type: "Kith", description: "Voracious and fearsome Kithain who embody the nightmare side of the Dreaming. They haunt the rougher districts, feared by all." },
      { name: "Satyrs", type: "Kith", description: "Passionate revelers who celebrate life through music, dance, and pleasure. They are drawn to Barcelona's nightlife and festivals." },
      { name: "Sidhe", type: "Kith", description: "The noble fae, beautiful and terrible. The Sidhe who remained after the Resurgence hold court in Barcelona's hidden freeholds, claiming dominion over the Dreaming." },
      { name: "Sluagh", type: "Kith", description: "The underfolk, whisperers of secrets who dwell in dark places. They know the hidden passages and forgotten tunnels beneath the city." },
      { name: "Trolls", type: "Kith", description: "Bound by honor and oaths, the Trolls are guardians and warriors of the Dreaming. They serve as protectors of freeholds and champions of the Sidhe." },
    ],
    barcelonaNote: "Gaudí's architecture — Sagrada Família, Park Güell, Casa Batlló — channels Glamour in ways no mortal building can. These sites are freeholds or near-freeholds, making Barcelona a rare stronghold of the Dreaming in the modern world. The Kithain fight to keep the Banality of urban development from consuming these sacred spaces.",
    playable: true,
    status: "open",
  },
  {
    id: "demon",
    name: "Demon",
    fullName: "Demon: The Fallen",
    tagline: "We were cast out. Now we have returned",
    description:
      "The Fallen — angels who rebelled against God and were condemned to the Abyss. Now, as the walls of reality crack, some have escaped, possessing mortal bodies. They seek redemption, revenge, or dominion in a world that has forgotten them.",
    themes: ["Redemption vs. damnation", "Celestial power", "Mortal ties", "Torment"],
    accentFrom: "#8a2a2a",
    accentTo: "#1a0000",
    iconPath: "M12 2 L6 8 L6 18 L12 14 L18 18 L18 8 Z M12 14 L12 22 M8 10 L12 12 L16 10",
    factions: [
      { name: "Faustian Faction", type: "House", description: "Demons who work through mortal pacts, trading power for souls. They see humanity as tools and weapons, and Barcelona's desperate provide ample targets." },
      { name: "Cryptic Faction", type: "House", description: "Scholars of the Fallen who seek to understand the nature of their punishment and the current state of the cosmos. They gather knowledge obsessively." },
      { name: "Ravenous Faction", type: "House", description: "Fallen consumed by Torment, who exist only to destroy. They are the monsters among monsters, hunted even by other demons." },
      { name: "House of the Scourges", type: "House", description: "Angels of pestilence and suffering, now seeking to use their power for vengeance or atonement. Some scourge Barcelona's underworld, others its innocent." },
      { name: "House of the Fiends", type: "House", description: "Angels of the deep, associated with knowledge and the abyss. They seek understanding in Barcelona's depths, both literal and metaphorical." },
      { name: "House of the Defilers", type: "House", description: "Angels of desire and corruption, masters of temptation. They move through Barcelona's pleasure districts, spreading desire and ruin." },
      { name: "House of the Malefactors", type: "House", description: "Angels of the forge, creators and crafters. They find purpose in Barcelona's artisan traditions, shaping both matter and fate." },
      { name: "House of the Devils", type: "House", description: "The leaders of the rebellion, commanders and strategists. The Devils seek to organize the Fallen and reclaim dominion." },
      { name: "House of the Slayers", type: "House", description: "Angels of death, the most feared of the Fallen. They walk among Barcelona's dead, their presence a cold shadow." },
      { name: "Earthbound", type: "Threat", description: "Ancient demons who never fell to the Abyss, instead binding themselves to objects and places. Some are bound in Barcelona's oldest churches and relics, terrible and mad." },
    ],
    barcelonaNote: "The weight of Barcelona's religious history — the Inquisition, the great cathedral, the Sagrada Família — makes it a place of immense spiritual resonance that draws the Fallen. The Earthbound who lurk in the city's holy places are among the oldest and most dangerous beings in the World of Darkness.",
    playable: true,
    status: "restricted",
  },
  {
    id: "mortal",
    name: "Mortal+",
    fullName: "Mortals, Ghouls & The Touched",
    tagline: "The darkness feeds on those who see too much",
    description:
      "Not all who walk the night are supernatural. Mortals — investigators, ghouls, revenants, mediums, and those touched by the edges of the paranormal — navigate a world they barely understand. Some serve the monsters, some hunt them, and some simply try to survive.",
    themes: ["Mortal vulnerability", "Servitude & addiction", "Hidden knowledge", "The cost of awareness"],
    accentFrom: "#6a6a5a",
    accentTo: "#1a1a15",
    iconPath: "M12 4 C8 4 6 8 6 12 C6 16 8 20 12 20 C16 20 18 16 18 12 C18 8 16 4 12 4 Z M9 10 L9 11 M15 10 L15 11 M9 15 L15 15",
    factions: [
      { name: "Ghoul Families", type: "Group", description: "Mortals bound to Kindred through the Blood — addicted, ageless, and enslaved. Barcelona's old ghoul families serve Toreador and Ventrue, their loyalty bought with vitae." },
      { name: "Revenants", type: "Template", description: "Hereditary ghouls born with the Blood in their veins. Rare and valuable, revenant families serve ancient vampires with a devotion bred over centuries." },
      { name: "Society of Leopold", type: "Organization", description: "Remnants of the old Inquisition who still hunt the supernatural. They operate cells in Barcelona, armed with faith and fragmented knowledge." },
      { name: "Mediums", type: "Template", description: "Mortals who can perceive the spirit world, sometimes unwillingly. In Barcelona's thick spiritual atmosphere, mediums are often overwhelmed by the dead." },
      { name: "Numinists", type: "Template", description: "Mortals with subtle hedge-magic or psychic gifts. They practice folk traditions passed down through Catalan families, small powers against vast darkness." },
      { name: "Investigators", type: "Archetype", description: "Journalists, detectives, and academics who stumble into the truth. They follow threads of conspiracy that lead into the supernatural, often at the cost of their lives." },
      { name: "Thin-Blooded", type: "Template", description: "Weak Kindred of the 15th Generation, barely vampires. They walk in daylight, create no childer, and are despised by full Kindred — but in Barcelona's volatile nights, their unique abilities make them valuable pawns." },
      { name: "Sorcerers", type: "Template", description: "Mortal hedge-wizards who practice static magic — predictable, limited, but real. Some serve as acolytes for Awakened mages, others operate independently." },
    ],
    barcelonaNote: "Barcelona's deep supernatural history means its mortal population has more contact with the paranormal than most. Old Catalan families carry secrets of ghoul servitude, folk magic, and encounters with the dead. The city's institutions are honeycombed with supernatural influence.",
    playable: true,
    status: "open",
  },
];
