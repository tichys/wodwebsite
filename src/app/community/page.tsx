import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentDivider from "@/components/OrnamentDivider";
import SectionHeading from "@/components/SectionHeading";
import { staffTeam } from "@/data/rules";

export const metadata: Metadata = {
  title: "Community | Chronicles of Night",
  description:
    "Join the Barcelona World of Darkness community. Discord, Storyteller team, and how to get started in the chronicle.",
};

const joinSteps: { step: number; title: string; content: string }[] = [
  {
    step: 1,
    title: "Join Our Discord",
    content:
      "Our Discord server is the hub of the community. It's where applications are submitted, scenes are scheduled, and the Storytellers are reachable. Join and introduce yourself in the #new-arrivals channel.",
  },
  {
    step: 2,
    title: "Read the Rules & Lore",
    content:
      "Familiarize yourself with the general rules and the lore of Barcelona. Browse the Factions page to choose your venue. Read the venue-specific creation rules for your chosen game line.",
  },
  {
    step: 3,
    title: "Draft Your Concept",
    content:
      "Write a short character concept — who they are, what they want, and why they're in Barcelona. A paragraph or two is enough to start. Your venue ST will help refine it.",
  },
  {
    step: 4,
    title: "Submit Your Sheet",
    content:
      "Build your character sheet using the venue-specific guidelines and submit it to your Storyteller via the appropriate Discord channel. The ST will review and provide feedback.",
  },
  {
    step: 5,
    title: "Enter the Sim",
    content:
      "Once approved, you'll be added to the sim roster and introduced to the chronicle. Your ST will help connect you to ongoing plots and player groups. Welcome to the night.",
  },
];

export default function CommunityPage() {
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
              title="JOIN THE CHRONICLE"
              subtitle="The night is vast, but you walk it with allies. Join our community of storytellers, roleplayers, and World of Darkness enthusiasts."
              ornament="rose"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="gothic-card p-10 text-center">
              <div className="flex justify-center mb-6">
                <svg viewBox="0 0 24 24" className="h-16 w-16 text-gold-500" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 2 C8 2 5 5 5 9 C5 12 7 14 9 15 L8 18 L12 17 L16 18 L15 15 C17 14 19 12 19 9 C19 5 16 2 12 2 Z" />
                  <circle cx="9" cy="9" r="1" fill="currentColor" />
                  <circle cx="15" cy="9" r="1" fill="currentColor" />
                  <path d="M9 12 L12 14 L15 12" />
                </svg>
              </div>
              <h2 className="font-display text-2xl text-bone tracking-[0.06em] mb-4">
                DISCORD — THE GATEWAY
              </h2>
              <p className="font-body text-bone-dim text-lg leading-relaxed max-w-2xl mx-auto mb-6">
                Our Discord is the heart of the community. Apply for characters, schedule
                scenes, connect with Storytellers, and join the conversation. All new
                players must join Discord before applying.
              </p>
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 font-display text-sm tracking-[0.15em] text-bone border border-blood-700 bg-gradient-to-b from-blood-900/40 to-blood-900/10 hover:from-blood-800/60 hover:to-blood-800/30 transition-all duration-500"
              >
                JOIN DISCORD
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blood-900/10 to-transparent">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <SectionHeading
              title="HOW TO JOIN"
              subtitle="Five steps from outsider to player. The path is straightforward — the world you enter is not."
              ornament="star"
            />
          </ScrollReveal>

          <div className="relative mt-16">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-gold-700/30 via-blood-700/30 to-transparent" />

            <div className="space-y-6">
              {joinSteps.map((step, i) => (
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
        <div className="mx-auto max-w-5xl">
          <ScrollReveal>
            <SectionHeading
              title="THE STORYTELLER COUNCIL"
              subtitle="The team that brings Barcelona to (un)life. Each venue has a dedicated Storyteller who guides the chronicle."
              ornament="cross"
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {staffTeam.map((member, i) => (
              <ScrollReveal key={i} delay={(i % 3) * 100}>
                <div className="gothic-card p-6 text-center h-full flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-b from-blood-900/40 to-ash border border-gold-700/30 flex items-center justify-center mb-4">
                    <span className="font-display text-xl text-gold-500">
                      {member.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <h3 className="font-display text-base text-bone tracking-[0.04em] mb-1">
                    {member.name}
                  </h3>
                  <p className="font-display text-xs text-gold-400 tracking-[0.1em] uppercase mb-2">
                    {member.role}
                  </p>
                  <p className="font-serif text-sm text-bone-faint italic">
                    {member.venue}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(42,0,0,0.3) 0%, transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <OrnamentDivider variant="rose" className="w-full max-w-sm mx-auto mb-8" />
            <h2 className="font-display text-2xl sm:text-3xl text-bone tracking-[0.06em] mb-4">
              THE NIGHT AWAITS
            </h2>
            <p className="font-serif text-xl text-bone-dim italic leading-relaxed mb-8">
              Barcelona is a city of a million stories, and every one of them ends in darkness.
              Will you be the one who tells yours, or the one who is told about?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://discord.gg"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 font-display text-sm tracking-[0.15em] text-bone border border-blood-700 bg-gradient-to-b from-blood-900/40 to-blood-900/10 hover:from-blood-800/60 hover:to-blood-800/30 transition-all duration-500"
              >
                JOIN DISCORD
              </a>
              <a
                href="https://maps.secondlife.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 font-display text-sm tracking-[0.15em] text-bone-dim border border-gold-900/40 hover:border-gold-500/60 hover:text-gold-300 transition-all duration-500"
              >
                VISIT THE SIM
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
