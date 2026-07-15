import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentDivider from "@/components/OrnamentDivider";
import SectionHeading from "@/components/SectionHeading";
import { chronicleEvents } from "@/data/events";

export const metadata: Metadata = {
  title: "Events & Chronicle Timeline | Chronicles of Night",
  description:
    "The unfolding chronicle of Barcelona — past events, ongoing conflicts, and upcoming storylines in the World of Darkness.",
};

const statusConfig: Record<string, { label: string; color: string; border: string }> = {
  past: { label: "Past", color: "text-bone-faint", border: "border-bone-faint/20" },
  ongoing: { label: "Ongoing", color: "text-blood-400", border: "border-blood-800/40" },
  upcoming: { label: "Upcoming", color: "text-gold-400", border: "border-gold-700/40" },
};

export default function EventsPage() {
  const pastEvents = chronicleEvents.filter((e) => e.status === "past");
  const ongoingEvents = chronicleEvents.filter((e) => e.status === "ongoing");
  const upcomingEvents = chronicleEvents.filter((e) => e.status === "upcoming");

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
              title="CHRONICLE TIMELINE"
              subtitle="The story of Barcelona unfolds in blood, shadow, and fire. Every event reshapes the balance of power."
              ornament="rose"
            />
          </ScrollReveal>
        </div>
      </section>

      {ongoingEvents.length > 0 && (
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h2 className="font-display text-xl text-blood-400 tracking-[0.1em] uppercase mb-6 text-center">
                &#9670; Ongoing Events
              </h2>
            </ScrollReveal>
            <div className="space-y-4">
              {ongoingEvents.map((event, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="gothic-card p-8 border-l-4 border-blood-500/60">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-display text-xl text-bone tracking-[0.04em]">
                        {event.title}
                      </h3>
                      <span className="text-xs font-display tracking-[0.15em] uppercase text-blood-400 border border-blood-800/40 px-3 py-1 flex-shrink-0">
                        {statusConfig[event.status].label}
                      </span>
                    </div>
                    <p className="font-body text-bone-dim text-lg leading-relaxed mb-3">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-serif text-gold-500 italic">{event.dateLabel}</span>
                      <span className="font-display text-xs tracking-[0.1em] text-bone-faint">
                        {event.faction}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {upcomingEvents.length > 0 && (
        <section className="relative py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <ScrollReveal>
              <h2 className="font-display text-xl text-gold-400 tracking-[0.1em] uppercase mb-6 text-center">
                &#9670; Upcoming Events
              </h2>
            </ScrollReveal>
            <div className="space-y-4">
              {upcomingEvents.map((event, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <div className="gothic-card p-8 border-l-4 border-gold-500/60">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-display text-xl text-bone tracking-[0.04em]">
                        {event.title}
                      </h3>
                      <span className="text-xs font-display tracking-[0.15em] uppercase text-gold-400 border border-gold-700/40 px-3 py-1 flex-shrink-0">
                        {statusConfig[event.status].label}
                      </span>
                    </div>
                    <p className="font-body text-bone-dim text-lg leading-relaxed mb-3">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="font-serif text-gold-500 italic">{event.dateLabel}</span>
                      <span className="font-display text-xs tracking-[0.1em] text-bone-faint">
                        {event.faction}
                      </span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <OrnamentDivider className="w-full max-w-sm mx-auto mb-12" />
            <h2 className="font-display text-xl text-bone-faint tracking-[0.1em] uppercase mb-6 text-center">
              &#9670; The Chronicle Archive
            </h2>
          </ScrollReveal>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-700/20 via-blood-700/20 to-transparent" />

            <div className="space-y-6">
              {pastEvents.map((event, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="relative flex gap-6">
                    <div className="flex-shrink-0 z-10">
                      <div className="w-16 h-16 rounded-full bg-ink border border-gold-900/30 flex items-center justify-center">
                        <span className="font-display text-lg text-gold-700">
                          {event.era}
                        </span>
                      </div>
                    </div>
                    <div className="gothic-card p-6 flex-1">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="font-display text-lg text-bone tracking-[0.04em]">
                          {event.title}
                        </h3>
                        <span className="text-xs font-display tracking-[0.12em] uppercase text-bone-faint border border-bone-faint/20 px-2 py-1 flex-shrink-0">
                          {event.dateLabel}
                        </span>
                      </div>
                      <p className="font-body text-bone-faint text-base leading-relaxed">
                        {event.description}
                      </p>
                      <p className="font-display text-xs tracking-[0.1em] text-gold-700 mt-2">
                        {event.faction}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-veil/20 to-transparent">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <OrnamentDivider variant="cross" className="w-full max-w-sm mx-auto mb-8" />
            <p className="font-serif text-2xl text-bone italic leading-relaxed mb-8">
              &ldquo;History is a nightmare from which we are trying to awake.&rdquo;
            </p>
            <p className="font-display text-xs text-bone-faint tracking-[0.2em]">
              JAMES JOYCE — AND EVERY KINDRED WHO EVER LIVED
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
