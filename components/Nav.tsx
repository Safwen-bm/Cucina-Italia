"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#storia", label: "La Storia" },
  { href: "#menu", label: "Il Menu" },
  { href: "#interno", label: "L'Interno" },
  { href: "#dove", label: "Dove Siamo" },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid || open
          ? "bg-ivory/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(34,31,26,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="flex flex-col gap-2">
          <span
            className={`font-display text-xl italic tracking-tight transition-colors duration-500 ${
              solid || open ? "text-ink" : "text-ivory"
            }`}
          >
            Controluce
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`label-caps text-[15px] transition-colors duration-500 ${
                solid ? "text-ink/80 hover:text-wine" : "text-ivory/85 hover:text-brass-light"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#prenota"
            className={`label-caps rounded-[2px] border px-5 py-2 text-[15px] transition-colors duration-500 ${
              solid
                ? "border-ink/20 text-ink hover:border-wine hover:text-wine"
                : "border-ivory/50 text-ivory hover:border-brass-light hover:text-brass-light"
            }`}
          >
            Prenota
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className={`flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden ${
            solid || open ? "text-ink" : "text-ivory"
          }`}
        >
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-current transition-transform duration-300 ${
              open ? "translate-y-[-3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-ink/10 bg-ivory px-6 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="label-caps py-3 text-base text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#prenota"
            onClick={() => setOpen(false)}
            className="label-caps mt-2 w-fit rounded-[2px] border border-ink/20 px-5 py-2 text-base text-ink"
          >
            Prenota
          </a>
        </nav>
      )}
    </header>
  );
}
