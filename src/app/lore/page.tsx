import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentDivider from "@/components/OrnamentDivider";
import SectionHeading from "@/components/SectionHeading";
import { loreTimeline, locations, settingPrinciples } from "@/data/lore";

export const metadata: Metadata = {
  title: "Lore & Setting | Chronicles of Night",
  description:
    "The supernatural history of Barcelona, from Roman Barcino to the modern nights. Explore the hidden world beneath the Gothic spires.",
};

const statusColors: Record<string, string> = {
  contested: "text-blood-400 border-blood-800/40",
  controlled: "text-gold-400 border-gold-700/40",
  neutral: "text-bone-dim border-bone-faint/30",
  lost: "text-bone-faint border-bone-faint/20",
};

export default function LorePage() {
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
              title="LORE & SETTING"
              subtitle="Seven eras of darkness have shaped Barcelona. Each layer of history adds new horrors to the city of blood and dreams."
              ornament="rose"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <OrnamentDivider className="w-full max-w-sm mx-auto mb-16" />
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold-700/30 to-transparent hidden md:block" />

            <div className="space-y-12">
              {loreTimeline.map((era, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className={`relative flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start`}>
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 -translate-y-1 z-10">
                      <div className="w-10 h-10 rounded-full bg-ink border border-gold-700/40 flex items-center justify-center">
                        <span className="font-display text-sm text-gold-500">
                          {era.era}
                        </span>
                      </div>
                    </div>

                    <div className="flex-1 md:px-12">
                      <div className="gothic-card p-8">
                        <div className="flex items-center gap-3 mb-2 md:hidden">
                          <span className="font-display text-2xl text-gold-700">{era.era}</span>
                        </div>
                        <h3 className="font-display text-xl sm:text-2xl text-gold-300 tracking-[0.04em] mb-3">
                          {era.title}
                        </h3>
                        <p className="font-body text-bone-dim text-lg leading-relaxed mb-4">
                          {era.content}
                        </p>
                        <div className="border-l-2 border-blood-800/40 pl-4 mt-4">
                          <p className="font-serif text-blood-500 text-base italic leading-relaxed">
                            <span className="text-gold-500 not-italic font-display text-xs tracking-[0.15em] uppercase block mb-1">
                              The Hidden World
                            </span>
                            {era.supernatural}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 hidden md:block" />
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
              title="THE SUPERNATURAL GEOGRAPHY"
              subtitle="Every district of Barcelona holds secrets. The supernatural map of the city is a web of contested domains, neutral ground, and lost territory."
              ornament="cross"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {locations.map((loc, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 100}>
                <div className="gothic-card p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="font-display text-lg text-bone tracking-[0.04em]">
                      {loc.name}
                    </h3>
                  </div>
                  <p className="font-display text-xs text-gold-500 tracking-[0.12em] uppercase mb-3">
                    {loc.type}
                  </p>
                  <p className="font-body text-bone-dim text-base leading-relaxed mb-4 flex-1">
                    {loc.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gold-900/20">
                    <span className="font-serif text-xs text-bone-faint italic">
                      {loc.faction}
                    </span>
                    <span className={`text-xs font-display tracking-[0.12em] uppercase border px-2 py-1 ${statusColors[loc.status]}`}>
                      {loc.status}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-veil/20 to-transparent">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <SectionHeading
              title="THE LAWS OF THE NIGHT"
              subtitle="Each supernatural venue has its own rules for hiding from mortal eyes. These are the frameworks that keep the World of Darkness in shadow."
              ornament="star"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {settingPrinciples.map((principle, i) => (
              <ScrollReveal key={i} delay={(i % 2) * 100}>
                <div className="gothic-card p-8">
                  <h3 className="font-display text-lg text-gold-300 tracking-[0.06em] mb-3">
                    {principle.title}
                  </h3>
                  <p className="font-body text-bone-dim text-lg leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
