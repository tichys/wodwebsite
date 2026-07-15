import Link from "next/link";
import FogEffect from "@/components/FogEffect";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentDivider from "@/components/OrnamentDivider";
import { gameLines } from "@/data/gameLines";
import { chronicleEvents } from "@/data/events";

export default function Home() {
  const activeEvents = chronicleEvents.filter((e) => e.status !== "past").slice(0, 3);

  return (
    <div className="relative">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden vignette">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 30%, rgba(42,0,0,0.6) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(26,10,26,0.4) 0%, transparent 60%), linear-gradient(180deg, #050505 0%, #0a0508 60%, #050505 100%)",
          }}
        />

        <div
          className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(90deg, transparent 49.5%, rgba(197,165,114,0.05) 50%, transparent 50.5%), linear-gradient(0deg, transparent 49.5%, rgba(197,165,114,0.05) 50%, transparent 50.5%)",
            backgroundSize: "120px 120px",
          }}
        />

        <FogEffect className="z-0" />

        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
          <svg
            viewBox="0 0 600 600"
            className="w-[600px] h-[600px] opacity-10 animate-pulse-glow"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            style={{ color: "#8b1a1a" }}
          >
            <circle cx="300" cy="300" r="280" opacity="0.3" />
            <circle cx="300" cy="300" r="220" opacity="0.2" />
            <circle cx="300" cy="300" r="160" opacity="0.15" />
            <path d="M300 20 L320 120 L420 120 L340 180 L370 280 L300 220 L230 280 L260 180 L180 120 L280 120 Z" fill="currentColor" opacity="0.3" />
            <path d="M300 600 L320 500 L420 500 L340 440 L370 340 L300 400 L230 340 L260 440 L180 500 L280 500 Z" fill="currentColor" opacity="0.2" />
          </svg>
        </div>

        <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl mx-auto pt-20">
          <ScrollReveal>
            <p className="font-serif text-gold-500 text-sm sm:text-base tracking-[0.4em] uppercase mb-6 italic">
              A Second Life Roleplaying Sim
            </p>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold text-bone tracking-[0.06em] leading-none text-glow-blood animate-flicker">
              CHRONICLES
            </h1>
            <div className="flex items-center justify-center gap-4 my-4">
              <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-gold-500" />
              <span className="font-serif text-gold-400 text-lg sm:text-2xl italic tracking-[0.3em]">
                of
              </span>
              <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-gold-500" />
            </div>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-extrabold text-bone tracking-[0.06em] leading-none text-glow-blood">
              NIGHT
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={400}>
            <p className="font-serif text-blood-500 text-xl sm:text-2xl tracking-[0.2em] italic mt-6">
              A Barcelona World of Darkness RP
            </p>
          </ScrollReveal>

          <ScrollReveal delay={600}>
            <p className="font-body text-bone-dim text-lg sm:text-xl max-w-2xl mt-8 leading-relaxed">
              Beneath the Gothic spires and Gaud&iacute; dreams, Barcelona hides a truth
              mortals dare not see. Vampires wage the eternal Jyhad. Werewolves rage
              against the dying of the light. Mages bend reality to their will. The dead
              refuse to rest. Enter the World of Darkness.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={800}>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/community"
                className="group relative px-8 py-4 font-display text-sm tracking-[0.15em] text-bone border border-blood-700 bg-gradient-to-b from-blood-900/40 to-blood-900/10 hover:from-blood-800/60 hover:to-blood-800/30 transition-all duration-500 overflow-hidden"
              >
                <span className="relative z-10">ENTER THE NIGHT</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              </Link>
              <Link
                href="/lore"
                className="group relative px-8 py-4 font-display text-sm tracking-[0.15em] text-bone-dim border border-gold-900/40 hover:border-gold-500/60 hover:text-gold-300 transition-all duration-500"
              >
                READ THE CHRONICLE
              </Link>
            </div>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-serif text-bone-faint text-xs tracking-[0.3em] uppercase">
            Descend
          </span>
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-bone-faint" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 4 L12 20 M6 14 L12 20 L18 14" />
          </svg>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <OrnamentDivider variant="rose" className="w-full max-w-sm mx-auto mb-8" />
            <h2 className="font-display text-3xl sm:text-4xl text-bone text-center tracking-[0.06em] mb-4">
              THE CITY OF BLOOD AND DREAMS
            </h2>
            <p className="font-serif text-blood-500 text-lg italic text-center max-w-2xl mx-auto mb-12">
              Barcelona — where the Gothic Quarter whispers secrets older than the cathedral
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Eight Supernatural Venues",
                text: "Vampire, Werewolf, Mage, Hunter, Wraith, Changeling, Demon, and Mortal+ — all playable in one interconnected chronicle.",
                icon: "M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z",
              },
              {
                title: "Deep Political RP",
                text: "Navigate the Jyhad, the Ascension War, the War of Rage. Every faction competes for the soul of Barcelona.",
                icon: "M4 12 L12 4 L20 12 L12 20 Z M8 12 L12 8 L16 12 L12 16",
              },
              {
                title: "Cross-Venue Storytelling",
                text: "Your vampire's actions ripple through the Garou's caerns. Your mage's Paradox draws hunter attention. Everything connects.",
                icon: "M12 2 L12 22 M2 12 L22 12 M5 5 L19 19 M19 5 L5 19",
              },
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={i * 150}>
                <div className="gothic-card p-8 h-full">
                  <svg viewBox="0 0 24 24" className="h-10 w-10 text-gold-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.2">
                    <path d={feature.icon} />
                  </svg>
                  <h3 className="font-display text-lg text-gold-300 tracking-[0.08em] mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-bone-dim text-lg leading-relaxed">
                    {feature.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blood-900/10 to-transparent">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <OrnamentDivider className="w-full max-w-sm mx-auto mb-8" />
            <h2 className="font-display text-3xl sm:text-4xl text-bone text-center tracking-[0.06em] mb-4">
              THE EIGHT VENUES
            </h2>
            <p className="font-serif text-blood-500 text-lg italic text-center max-w-2xl mx-auto mb-12">
              Choose your damned. Choose your doomed. Choose your dangerous.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameLines.map((line, i) => (
              <ScrollReveal key={line.id} delay={(i % 4) * 100}>
                <Link href={`/factions#${line.id}`} className="block h-full">
                  <div
                    className="gothic-card p-6 h-full flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div
                      className="w-16 h-16 mb-4 rounded-full flex items-center justify-center border transition-all duration-500 group-hover:scale-110"
                      style={{
                        borderColor: `${line.accentFrom}66`,
                        background: `radial-gradient(circle, ${line.accentTo}40 0%, transparent 70%)`,
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.2" style={{ color: line.accentFrom }}>
                        <path d={line.iconPath} />
                      </svg>
                    </div>
                    <h3 className="font-display text-base text-bone tracking-[0.08em] mb-2 group-hover:text-gold-300 transition-colors">
                      {line.name}
                    </h3>
                    <p className="font-serif text-xs text-bone-faint italic leading-relaxed">
                      {line.tagline}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <span
                        className={`text-xs font-display tracking-[0.15em] uppercase ${
                          line.status === "open"
                            ? "text-gold-500"
                            : line.status === "restricted"
                            ? "text-blood-500"
                            : "text-bone-faint"
                        }`}
                      >
                        {line.status === "open" ? "Available" : line.status === "restricted" ? "Restricted" : "Closed"}
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <OrnamentDivider variant="cross" className="w-full max-w-sm mx-auto mb-8" />
            <h2 className="font-display text-3xl sm:text-4xl text-bone text-center tracking-[0.06em] mb-4">
              THE CHRONICLE UNFOLDS
            </h2>
            <p className="font-serif text-blood-500 text-lg italic text-center max-w-2xl mx-auto mb-12">
              Current and upcoming events in the Barcelona chronicle
            </p>
          </ScrollReveal>

          <div className="space-y-4">
            {activeEvents.map((event, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Link href="/events" className="block">
                  <div className="gothic-card p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 group cursor-pointer">
                    <div className="flex-shrink-0 text-center sm:text-left">
                      <span className={`inline-block px-3 py-1 text-xs font-display tracking-[0.15em] uppercase ${
                        event.status === "upcoming" ? "text-gold-400 border border-gold-700/40" : "text-blood-400 border border-blood-800/40"
                      }`}>
                        {event.status === "upcoming" ? "Upcoming" : "Ongoing"}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-lg text-bone group-hover:text-gold-300 transition-colors mb-1">
                        {event.title}
                      </h3>
                      <p className="font-body text-bone-faint text-base">
                        {event.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0 font-serif text-sm text-gold-500 italic">
                      {event.dateLabel}
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="text-center mt-8">
              <Link
                href="/events"
                className="inline-block font-display text-sm tracking-[0.15em] text-gold-400 hover:text-gold-300 border-b border-gold-900/40 hover:border-gold-500/60 pb-1 transition-all"
              >
                VIEW ALL EVENTS &rarr;
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(42,0,0,0.3) 0%, transparent 70%)",
          }}
        />
        <FogEffect className="z-0" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <OrnamentDivider variant="rose" className="w-full max-w-sm mx-auto mb-8" />
            <p className="font-serif text-2xl sm:text-3xl text-bone italic leading-relaxed mb-8">
              &ldquo;The night is darkest before the dawn &mdash;<br />
              and in Barcelona, the dawn never comes.&rdquo;
            </p>
            <Link
              href="/community"
              className="inline-block px-10 py-4 font-display text-sm tracking-[0.15em] text-bone border border-blood-700 bg-gradient-to-b from-blood-900/40 to-blood-900/10 hover:from-blood-800/60 hover:to-blood-800/30 transition-all duration-500"
            >
              JOIN THE CHRONICLE
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
