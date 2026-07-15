export interface NewsPost {
  id: string;
  date: string;
  dateLabel: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  pinned?: boolean;
}

export const newsPosts: NewsPost[] = [
  {
    id: "welcome",
    date: "2025-07-01",
    dateLabel: "July 1, 2025",
    category: "Announcement",
    title: "Chronicles of Night: The Chronicle Begins",
    excerpt:
      "Welcome to Barcelona, a city where every shadow hides a story, and every story is a trap. The Chronicles of Night sim is now open for applications.",
    content:
      "We are thrilled to open the doors of Chronicles of Night, a World of Darkness roleplaying sim set in the shadowed streets of Barcelona. This is a multi-venue sim, featuring Vampire: The Masquerade, Werewolf: The Apocalypse, Mage: The Ascension, Hunter: The Reckoning, Wraith: The Oblivion, Changeling: The Dreaming, Demon: The Fallen, and Mortal+ characters.\n\nOur setting is the modern nights of Barcelona — a city of gothic spires and Gaudí dreams, of revolutionary fire and ancient blood. The Camarilla has lost its Prince. The Anarchs hold the streets. The Garou fight a losing war in the hills. The Awakened wage the Ascension War in shadows. The dead grow restless. The Fallen have returned.\n\nApplications are now open. Review our Rules and Character Creation guide, then join our Discord to submit your concept.",
    author: "The Storyteller Council",
    pinned: true,
  },
  {
    id: "new-praxis",
    date: "2025-07-08",
    dateLabel: "July 8, 2025",
    category: "Plot Drop",
    title: "The Praxis Vacancy — Kindred Politics Heat Up",
    excerpt:
      "The Camarilla Prince of Barcelona is dead. No clan has claimed responsibility. Every elder is positioning for the throne, and the Anarchs smell blood.",
    content:
      "The death of Prince Vidal has thrown the Camarilla into chaos. Seneschal de Castaño has declared themselves regent, but their claim is tenuous at best. The Tremere primogen has withdrawn to the chantry, refusing to endorse any candidate. The Toreador primogen — long a rival of the Prince — is making bold moves, hosting lavish salons to court favor.\n\nMeanwhile, the Anarch Baron Carrasco has called for all free Kindred to reject the Camarilla entirely and establish a free state. The Brujah are energized. The Sabbat remnants, though few, watch from the tunnels of Montjuïc.\n\nAll Kindred players are invited to engage with this plotline. Contact the Vampire ST for political scheming, alliance building, or investigative work.",
    author: "Vampire Storyteller",
  },
  {
    id: "caern-attack",
    date: "2025-07-12",
    dateLabel: "July 12, 2025",
    category: "Plot Drop",
    title: "Wyrm-Taint Spreads Through Collserola",
    excerpt:
      "A second caern has been corrupted. The Garou are stretched thin, and the Sept of the Sacred Mountain calls for aid from all tribes.",
    content:
      "The Sept of the Sacred Mountain has confirmed that the minor caern known as the Glade of the Twin Streams has fallen to Wyrm-taint. A pack of Get of Fenris entered the caern to cleanse it. None returned.\n\nThe Sept Alpha is calling for reinforcements from all tribes. This is not just a Garou problem — the taint is spreading toward the city, and the Banes are growing bolder. Mages with Spirit sphere, changelings with chimerical perception, and even hunters who can perceive the spiritual are being asked to assist.\n\nGarou players: Contact the Werewolf ST to join the war party. Non-Garou who wish to help: Contact your respective ST to coordinate.",
    author: "Werewolf Storyteller",
  },
  {
    id: "imbued-surge",
    date: "2025-07-18",
    dateLabel: "July 18, 2025",
    category: "Plot Drop",
    title: "New Imbued Awaken Across Barcelona",
    excerpt:
      "The Messengers have spoken. Several mortals have been Imbued in the last week, each given a Creed and a target. They are frightened, confused, and dangerous.",
    content:
      "The Hunter ST reports a surge of new Imbued activations. At least four mortals have received visions from the Messengers in the past week, each imbued with Edges and a mandate to hunt. None of them are prepared. None of them are trained. All of them are dangerous.\n\nThe Messengers have provided each new hunter with a specific target — a vampire elder, a Wyrm-tainted executive, an Earthbound entity bound in a church relic, and a rogue wraith. How these targets connect is unclear.\n\nHunter players: New character applications with the Imbued template are being fast-tracked. Existing hunters may encounter new allies — or new liabilities.",
    author: "Hunter Storyteller",
  },
  {
    id: "fallen-escape",
    date: "2025-07-22",
    dateLabel: "July 22, 2025",
    category: "Plot Drop",
    title: "The Gates of the Abyss Have Opened",
    excerpt:
      "Multiple Fallen have escaped into Barcelona. They are possessing mortals, seeking mortal ties, and the Earthbound are stirring in response.",
    content:
      "Following the Winter Solstice, several demons have escaped the Abyss, drawn to Barcelona's spiritual density. Each has possessed a mortal host, and each is grappling with Torment, memory, and the overwhelming sensations of physical existence.\n\nMore troubling still: the Earthbound — ancient demons who never fell to the Abyss — are stirring. Bound in relics within Barcelona's oldest churches, they sense the newcomers. Some seek to dominate the Fallen. Others seek to destroy them.\n\nDemon: The Fallen is now available for play. Applications require ST approval due to the power level of the template. See the Rules page for details.",
    author: "Demon Storyteller",
  },
  {
    id: "staff-update",
    date: "2025-07-25",
    dateLabel: "July 25, 2025",
    category: "Admin",
    title: "Storyteller Council Update — New STs Appointed",
    excerpt:
      "We've added two new Storytellers to the team to handle increased player volume and expanded plotlines.",
    content:
      "The Storyteller Council is growing. We're pleased to welcome our new Wraith Storyteller and Changeling Storyteller to the team. Both bring extensive WoD experience and creative vision to their venues.\n\nUpdated ST assignments:\n\nVampire ST: Lead Storyteller\nWerewolf ST: Lead Storyteller\nMage ST: Senior Storyteller\nHunter ST: Storyteller\nWraith ST: Storyteller (new)\nChangeling ST: Storyteller (new)\nDemon ST: Lead Storyteller\nMortal+ ST: Storyteller\n\nPlease welcome our new team members. Questions about specific venues should be directed to the appropriate ST in our Discord.",
    author: "The Storyteller Council",
  },
  {
    id: "collserola-accords",
    date: "2025-07-28",
    dateLabel: "July 28, 2025",
    category: "Event",
    title: "Event Announcement: The Collserola Accords",
    excerpt:
      "August 1st — The Garou invite all factions to a summit at the Caern of the Sacred Mountain. First time Kindred, mages, and changelings are invited to Garou territory.",
    content:
      "In an unprecedented move, the Sept of the Sacred Mountain has extended invitations to Kindred, Awakened, and Kithain representatives for a summit at the Caern of the Sacred Mountain in Collserola.\n\nThe proposed agenda: a multi-faction alliance against an unnamed threat that has been destabilizing Barcelona's supernatural community. The Garou Alpha claims the threat is connected to the Wyrm-taint, the increase in Spectre activity, and the recent escape of the Fallen.\n\nThis is a major cross-venue event. All players are encouraged to participate. The event will take place in the sim at the Collserola caern build on August 1st at 8 PM SLT.\n\nIC consequences will be significant. OOC coordination through Discord.",
    author: "Storyteller Council",
  },
];
