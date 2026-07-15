import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-gold-900/30 bg-ink-light/80">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="blood-divider mb-12">
          <svg viewBox="0 0 24 24" className="h-5 w-5 text-gold-500" fill="currentColor">
            <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z" />
          </svg>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <svg
                viewBox="0 0 40 40"
                className="h-10 w-10 text-blood-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                <path d="M20 8 L22 14 L28 14 L23 18 L25 24 L20 20 L15 24 L17 18 L12 14 L18 14 Z" fill="currentColor" opacity="0.8" />
              </svg>
              <div>
                <h3 className="font-display text-lg font-bold text-bone tracking-[0.12em]">
                  CHRONICLES OF NIGHT
                </h3>
                <p className="font-serif text-sm text-blood-500 italic tracking-wider">
                  A Barcelona World of Darkness RP
                </p>
              </div>
            </div>
            <p className="font-body text-bone-faint max-w-md leading-relaxed text-lg">
              The World of Darkness is a registered trademark of Paradox Interactive.
              Vampire: The Masquerade, Werewolf: The Apocalypse, and all associated
              properties belong to their respective owners. This is a fan-made,
              non-commercial roleplaying community.
            </p>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-gold-400 tracking-[0.15em] mb-4 uppercase">
              Navigate
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/lore", label: "Lore & Setting" },
                { href: "/factions", label: "Factions & Clans" },
                { href: "/rules", label: "Rules & Creation" },
                { href: "/events", label: "Chronicle Events" },
                { href: "/news", label: "News" },
                { href: "/community", label: "Community" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-bone-faint hover:text-gold-300 transition-colors text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-gold-400 tracking-[0.15em] mb-4 uppercase">
              Join the Night
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://discord.gg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-bone-faint hover:text-gold-300 transition-colors text-lg"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  href="https://secondlife.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-bone-faint hover:text-gold-300 transition-colors text-lg"
                >
                  Second Life Sim
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gold-900/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-serif text-sm text-bone-faint italic">
            &ldquo;The night is darkest before the dawn — and in Barcelona, the dawn never comes.&rdquo;
          </p>
          <p className="font-display text-xs text-bone-faint tracking-[0.2em]">
            MMXXVI · CHRONICLES OF NIGHT
          </p>
        </div>
      </div>
    </footer>
  );
}
