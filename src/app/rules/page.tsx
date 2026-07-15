import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentDivider from "@/components/OrnamentDivider";
import SectionHeading from "@/components/SectionHeading";
import { generalRules, creationSteps, venueRules } from "@/data/rules";

export const metadata: Metadata = {
  title: "Rules & Character Creation | Chronicles of Night",
  description:
    "Sim rules, character creation guidelines, and venue-specific creation rules for all eight game lines in the Barcelona World of Darkness chronicle.",
};

export default function RulesPage() {
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
            <SectionHeading
              title="RULES & CHARACTER CREATION"
              subtitle="The laws of the chronicle — both in-character and out. Read carefully. The shadows do not forgive ignorance."
              ornament="cross"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <OrnamentDivider className="w-full max-w-sm mx-auto mb-12" />
            <h2 className="font-display text-2xl sm:text-3xl text-gold-300 tracking-[0.06em] mb-2 text-center">
              THE COVENANT
            </h2>
            <p className="font-serif text-blood-500 text-lg italic text-center mb-12">
              General sim rules — binding on all players, all venues
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {generalRules.map((rule, i) => (
              <ScrollReveal key={i} delay={(i % 2) * 100}>
                <div className="gothic-card p-8 h-full">
                  <div className="flex items-start gap-4">
                    <span className="font-display text-3xl text-gold-700/40 leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-display text-lg text-gold-300 tracking-[0.04em] mb-2">
                        {rule.heading}
                      </h3>
                      <p className="font-body text-bone-dim text-lg leading-relaxed">
                        {rule.content}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blood-900/10 to-transparent">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <SectionHeading
              title="CHARACTER CREATION"
              subtitle="Five steps from concept to chronicle. Each venue has its own specifics — find your section below."
              ornament="star"
            />
          </ScrollReveal>

          <div className="relative mt-16">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-700/30 via-blood-700/30 to-transparent" />

            <div className="space-y-8">
              {creationSteps.map((step, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="relative flex gap-6 items-start">
                    <div className="flex-shrink-0 z-10">
                      <div className="w-16 h-16 rounded-full bg-ink border border-gold-700/40 flex items-center justify-center">
                        <span className="font-display text-2xl text-gold-500">
                          {step.step}
                        </span>
                      </div>
                    </div>
                    <div className="gothic-card p-6 flex-1">
                      <h3 className="font-display text-lg text-gold-300 tracking-[0.04em] mb-2">
                        {step.title}
                      </h3>
                      <p className="font-body text-bone-dim text-lg leading-relaxed">
                        {step.content}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <SectionHeading
              title="VENUE-SPECIFIC CREATION RULES"
              subtitle="Each game line has unique mechanics, restrictions, and guidelines. Find your venue and build your sheet."
              ornament="rose"
            />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-3 mt-12 mb-16">
            {venueRules.map((venue) => (
              <a
                key={venue.title}
                href={`#${venue.title.replace(/[^a-zA-Z]/g, "").toLowerCase()}`}
                className="px-4 py-2 gothic-card text-sm font-display tracking-[0.1em] text-bone-dim hover:text-gold-300 transition-colors"
              >
                {venue.title.split(":")[0]}
              </a>
            ))}
          </div>

          <div className="space-y-16">
            {venueRules.map((venue, vi) => {
              const anchor = venue.title.replace(/[^a-zA-Z]/g, "").toLowerCase();
              return (
                <div key={vi} id={anchor} className="scroll-mt-20">
                  <ScrollReveal>
                    <div className="flex items-center gap-4 mb-6">
                      <svg viewBox="0 0 24 24" className="h-10 w-10 text-blood-500" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d={venue.icon} />
                      </svg>
                      <h3 className="font-display text-xl sm:text-2xl text-bone tracking-[0.04em]">
                        {venue.title}
                      </h3>
                    </div>
                  </ScrollReveal>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {venue.rules.map((rule, ri) => (
                      <ScrollReveal key={ri} delay={(ri % 2) * 80}>
                        <div className="gothic-card p-6 h-full">
                          <h4 className="font-display text-sm text-gold-400 tracking-[0.08em] uppercase mb-2">
                            {rule.heading}
                          </h4>
                          <p className="font-body text-bone-dim text-base leading-relaxed">
                            {rule.content}
                          </p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-veil/20 to-transparent">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <OrnamentDivider variant="rose" className="w-full max-w-sm mx-auto mb-8" />
            <h2 className="font-display text-2xl sm:text-3xl text-bone tracking-[0.06em] mb-4">
              READY TO APPLY?
            </h2>
            <p className="font-serif text-bone-faint text-lg italic mb-8">
              Join our Discord and submit your character concept to the appropriate Storyteller.
            </p>
            <a
              href="/community"
              className="inline-block px-10 py-4 font-display text-sm tracking-[0.15em] text-bone border border-blood-700 bg-gradient-to-b from-blood-900/40 to-blood-900/10 hover:from-blood-800/60 hover:to-blood-800/30 transition-all duration-500"
            >
              GO TO COMMUNITY
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
