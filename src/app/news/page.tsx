import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import OrnamentDivider from "@/components/OrnamentDivider";
import { newsPosts } from "@/data/news";

export const metadata: Metadata = {
  title: "News & Announcements | Chronicles of Night",
  description:
    "The latest news, plot drops, and announcements from the Barcelona World of Darkness chronicle.",
};

const categoryColors: Record<string, string> = {
  Announcement: "text-gold-400 border-gold-700/40",
  "Plot Drop": "text-blood-400 border-blood-800/40",
  Admin: "text-bone-dim border-bone-faint/30",
  Event: "text-gold-300 border-gold-500/40",
};

export default function NewsPage() {
  const sorted = [...newsPosts].sort((a, b) => b.date.localeCompare(a.date));
  const [pinned, ...rest] = sorted;

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
              NEWS &amp; ANNOUNCEMENTS
            </h1>
            <p className="font-serif text-blood-500 text-lg italic text-center max-w-2xl mx-auto">
              The latest dispatches from the shadows of Barcelona — plot drops,
              admin updates, and chronicle events.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {pinned && (
        <section className="relative py-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="gothic-card p-10 border-l-4 border-gold-500/60">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-display tracking-[0.15em] uppercase text-gold-400 border border-gold-700/40 px-3 py-1">
                    Pinned
                  </span>
                  <span className={`text-xs font-display tracking-[0.12em] uppercase border px-3 py-1 ${categoryColors[pinned.category] || categoryColors.Admin}`}>
                    {pinned.category}
                  </span>
                </div>
                <h2 className="font-display text-2xl sm:text-3xl text-bone tracking-[0.04em] mb-4">
                  {pinned.title}
                </h2>
                <p className="font-body text-bone-dim text-lg leading-relaxed mb-6">
                  {pinned.excerpt}
                </p>
                <div className="max-w-none">
                  {pinned.content.split("\n\n").map((para, i) => (
                    <p key={i} className="font-body text-bone-dim text-lg leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                </div>
                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gold-900/20">
                  <span className="font-serif text-sm text-gold-500 italic">{pinned.author}</span>
                  <span className="font-display text-xs text-bone-faint tracking-[0.1em]">
                    {pinned.dateLabel}
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <OrnamentDivider className="w-full max-w-sm mx-auto mb-12" />
          </ScrollReveal>

          <div className="space-y-6">
            {rest.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 80}>
                <article className="gothic-card p-8 group">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-display tracking-[0.12em] uppercase border px-3 py-1 ${categoryColors[post.category] || categoryColors.Admin}`}>
                      {post.category}
                    </span>
                    <span className="font-display text-xs text-bone-faint tracking-[0.1em]">
                      {post.dateLabel}
                    </span>
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl text-bone tracking-[0.04em] mb-3 group-hover:text-gold-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-bone-dim text-lg leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="max-w-none">
                    {post.content.split("\n\n").map((para, j) => (
                      <p key={j} className="font-body text-bone-faint text-base leading-relaxed mb-3">
                        {para}
                      </p>
                    ))}
                  </div>
                  <div className="mt-4 pt-3 border-t border-gold-900/20">
                    <span className="font-serif text-sm text-gold-500 italic">
                      &mdash; {post.author}
                    </span>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-veil/20 to-transparent">
        <div className="mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <OrnamentDivider variant="cross" className="w-full max-w-sm mx-auto mb-8" />
            <h2 className="font-display text-xl text-bone tracking-[0.06em] mb-4">
              STAY IN THE LOOP
            </h2>
            <p className="font-serif text-bone-faint text-lg italic mb-8">
              Join our Discord for real-time updates, announcements, and community discussion.
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
