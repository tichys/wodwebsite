"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/lore", label: "Lore" },
  { href: "/factions", label: "Factions" },
  { href: "/rules", label: "Rules" },
  { href: "/events", label: "Events" },
  { href: "/news", label: "News" },
  { href: "/community", label: "Community" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ink/95 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.8)] border-b border-gold-900/40"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="group flex items-center gap-3">
            <svg
              viewBox="0 0 40 40"
              className="h-10 w-10 text-blood-500 transition-transform duration-500 group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M20 4 L20 36 M10 12 L30 28 M30 12 L10 28" stroke="currentColor" />
              <circle cx="20" cy="20" r="16" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
              <path d="M20 8 L22 14 L28 14 L23 18 L25 24 L20 20 L15 24 L17 18 L12 14 L18 14 Z" fill="currentColor" opacity="0.8" />
            </svg>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold text-bone tracking-[0.15em] group-hover:text-gold-300 transition-colors">
                CHRONICLES
              </span>
              <span className="font-serif text-xs text-blood-500 tracking-[0.35em] italic">
                of Night
              </span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 font-display text-sm font-medium tracking-[0.12em] transition-colors ${
                    active
                      ? "text-gold-300"
                      : "text-bone-dim hover:text-bone"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-8 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                  )}
                </Link>
              );
            })}
          </div>

          <button
            className="lg:hidden text-bone p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5 w-6">
              <span className={`h-px bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`h-px bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`h-px bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  className={`px-4 py-3 font-display text-sm tracking-[0.12em] border-l-2 transition-all ${
                    active
                      ? "text-gold-300 border-gold-400 bg-blood-900/20"
                      : "text-bone-dim border-transparent hover:text-bone hover:border-blood-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
