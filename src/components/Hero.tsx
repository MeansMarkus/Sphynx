"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const highlights = [
  "Layered real-time watch preview",
  "Five curated luxury presets",
  "Responsive dark-mode experience",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-zinc-400">
            <span className="rounded-full border border-white/10 px-3 py-1">
              Phase 1 MVP
            </span>
            <span className="rounded-full border border-white/10 px-3 py-1">
              Sphynx Watch Lab
            </span>
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Design a luxury watch in minutes.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-300 md:text-lg">
            Sphynx is a premium digital configurator for collectors. Mix cases,
            bezels, dials, hands, and straps in a cinematic interface built for
            speed and polish.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center gap-4"
        >
          <Link
            href="#configurator"
            className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
          >
            Start configuring
          </Link>
          <Link
            href="#presets"
            className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50"
          >
            Explore presets
          </Link>
        </motion.div>
        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid gap-3 text-sm text-zinc-400 sm:grid-cols-3"
        >
          {highlights.map((item) => (
            <li
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
