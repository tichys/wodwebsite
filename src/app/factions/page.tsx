import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentDivider from "@/components/OrnamentDivider";
import { gameLines } from "@/data/gameLines";

export const metadata: Metadata = {
  title: "Factions & Clans | Chronicles of Night",
  description:
    "Explore every playable faction, clan, tribe, tradition, creed, guild, house, and kith in the Barcelona World of Darkness chronicle.",
};

export default function FactionsPage() {
  return (
    <div className="relative pt-20">
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(42,0,0,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal>
            <OrnamentDivider variant="rose" className="w-full max-w-sm mx-auto mb-8" />
            <h1 className="font-display text-4xl sm:text-5xl text-bone text-center tracking-[0.06em] mb-4">
              FACTIONS &amp; CLANS
            </h1>
            <p className="font-serif text-blood-500 text-lg italic text-center max-w-2xl mx-auto">
              The supernatural world is not monolithic. Each venue is riven by factions,
              ideologies, and ancient grudges. Choose your side carefully.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {gameLines.map((line) => (
              <a
                key={line.id}
                href={`#${line.id}`}
                className="group flex items-center gap-2 px-4 py-2 gothic-card text-sm font-display tracking-[0.1em] transition-all hover:scale-105"
                style={{ borderColor: `${line.accentFrom}33` }}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: line.accentFrom }}>
                  <path d={line.iconPath} />
                </svg>
                <span className="text-bone-dim group-hover:text-gold-300 transition-colors">
                  {line.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {gameLines.map((line) => (
        <section
          key={line.id}
          id={line.id}
          className="relative py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20"
        >
          <div
            className="absolute inset-0 z-0 opacity-50"
            style={{
              background: `radial-gradient(ellipse at 50% 50%, ${line.accentTo}30 0%, transparent 60%)`,
            }}
          />

          <div className="relative z-10 mx-auto max-w-7xl">
            <ScrollReveal>
              <div className="flex items-center gap-6 mb-8">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center border flex-shrink-0"
                  style={{
                    borderColor: `${line.accentFrom}66`,
                    background: `radial-gradient(circle, ${line.accentTo}60 0%, transparent 70%)`,
                  }}
                >
                  <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ color: line.accentFrom }}>
                    <path d={line.iconPath} />
                  </svg>
                </div>
                <div>
                  <h2 className="font-display text-2xl sm:text-3xl text-bone tracking-[0.04em]">
                    {line.fullName}
                  </h2>
                  <p
                    className="font-serif text-base italic tracking-wider mt-1"
                    style={{ color: line.accentFrom }}
                  >
                    {line.tagline}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <div className="gothic-card p-8 mb-8">
                <p className="font-body text-bone-dim text-lg leading-relaxed">
                  {line.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {line.themes.map((theme) => (
                    <span
                      key={theme}
                      className="text-xs font-display tracking-[0.1em] uppercase px-3 py-1 border"
                      style={{
                        borderColor: `${line.accentFrom}44`,
                        color: line.accentFrom,
                      }}
                    >
                      {theme}
                    </span>
                  ))}
                  <span
                    className={`text-xs font-display tracking-[0.15em] uppercase px-3 py-1 border ${
                      line.status === "open"
                        ? "text-gold-400 border-gold-700/40"
                        : "text-blood-400 border-blood-800/40"
                    }`}
                  >
                    {line.status === "open" ? "Open for Applications" : "Restricted — ST Approval Required"}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="border-l-2 pl-4 mb-10" style={{ borderColor: `${line.accentFrom}44` }}>
                <span className="font-display text-xs tracking-[0.15em] uppercase block mb-1" style={{ color: line.accentFrom }}>
                  Barcelona Setting Note
                </span>
                <p className="font-serif text-bone-faint text-base italic leading-relaxed">
                  {line.barcelonaNote}
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {line.factions.map((faction, i) => (
                <ScrollReveal key={i} delay={(i % 3) * 80}>
                  <div className="gothic-card p-6 h-full">
                    <div
                      className="text-xs font-display tracking-[0.12em] uppercase mb-2"
                      style={{ color: line.accentFrom }}
                    >
                      {faction.type}
                    </div>
                    <h3 className="font-display text-base text-bone tracking-[0.04em] mb-2">
                      {faction.name}
                    </h3>
                    <p className="font-body text-bone-faint text-base leading-relaxed">
                      {faction.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-7xl mt-12">
            <OrnamentDivider className="w-full max-w-sm" />
          </div>
        </section>
      ))}

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <OrnamentDivider variant="rose" className="w-full max-w-sm mx-auto mb-8" />
            <h2 className="font-display text-2xl sm:text-3xl text-bone tracking-[0.06em] mb-4">
              READY TO CHOOSE YOUR SIDE?
            </h2>
            <p className="font-serif text-bone-faint text-lg italic mb-8">
              Review the rules, build your sheet, and enter the night.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/rules"
                className="px-8 py-4 font-display text-sm tracking-[0.15em] text-bone border border-blood-700 bg-gradient-to-b from-blood-900/40 to-blood-900/10 hover:from-blood-800/60 hover:to-blood-800/30 transition-all duration-500"
              >
                CHARACTER CREATION
              </a>
              <a
                href="/community"
                className="px-8 py-4 font-display text-sm tracking-[0.15em] text-bone-dim border border-gold-900/40 hover:border-gold-500/60 hover:text-gold-300 transition-all duration-500"
              >
                JOIN THE COMMUNITY
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
