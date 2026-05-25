"use client";

import type { CSSProperties } from "react";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import WatchPreview from "@/components/WatchPreview";
import {
  defaultBuild,
  partCategories,
  presetBuilds,
  watchParts,
  type PartCategory,
  type WatchBuild,
} from "@/lib/watchParts";

export default function Configurator() {
  const [selectedIds, setSelectedIds] = useState<WatchBuild>(() => ({
    ...defaultBuild,
  }));
  const [activePreset, setActivePreset] = useState<string>(presetBuilds[0].id);

  const selectedParts = useMemo(() => {
    return partCategories.reduce(
      (acc, category) => {
        const part =
          watchParts[category.id].find(
            (option) => option.id === selectedIds[category.id],
          ) ?? watchParts[category.id][0];
        acc[category.id] = part;
        return acc;
      },
      {} as Record<PartCategory, (typeof watchParts)[PartCategory][number]>,
    );
  }, [selectedIds]);

  const handleSelect = (category: PartCategory, partId: string) => {
    setSelectedIds((prev) => ({ ...prev, [category]: partId }));
    setActivePreset("");
  };

  const handlePreset = (presetId: string) => {
    const preset = presetBuilds.find((item) => item.id === presetId);
    if (!preset) return;
    setSelectedIds({ ...preset.parts });
    setActivePreset(preset.id);
  };

  return (
    <section id="configurator" className="bg-[#060607]">
      <div className="mx-auto w-full max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-zinc-400">
            Watch Configurator
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white md:text-4xl">
            Craft a signature build.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Mix and match precision parts with instant feedback. Each selection
            updates the live preview in real time.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <WatchPreview parts={selectedParts} />
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {partCategories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-2xl border border-white/10 bg-black/30 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    {category.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-white">
                    {selectedParts[category.id].name}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <div id="presets" className="rounded-3xl border border-white/10 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Preset designs
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Jump into curated collector builds.
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {presetBuilds.map((preset) => {
                  const isActive = activePreset === preset.id;
                  return (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => handlePreset(preset.id)}
                      className={`rounded-2xl border px-4 py-4 text-left transition ${
                        isActive
                          ? "border-white/60 bg-white/10"
                          : "border-white/10 bg-white/5 hover:border-white/30"
                      }`}
                    >
                      <p className="text-sm font-semibold text-white">
                        {preset.name}
                      </p>
                      <p className="mt-2 text-xs text-zinc-400">
                        {preset.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {partCategories.map((category) => (
                <div
                  key={category.id}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-base font-semibold text-white">
                        {category.label}
                      </h4>
                      <p className="text-xs text-zinc-400">
                        {category.description}
                      </p>
                    </div>
                    <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                      {watchParts[category.id].length} options
                    </span>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {watchParts[category.id].map((part) => {
                      const isSelected = selectedIds[category.id] === part.id;
                      return (
                        <button
                          key={part.id}
                          type="button"
                          onClick={() => handleSelect(category.id, part.id)}
                          style={{ "--accent": part.accent } as CSSProperties}
                          className={`rounded-2xl border px-4 py-4 text-left transition ${
                            isSelected
                              ? "border-transparent bg-white/10 ring-1 ring-[var(--accent)]"
                              : "border-white/10 hover:border-white/30"
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                            <p className="text-sm font-medium text-white">
                              {part.name}
                            </p>
                          </div>
                          <p className="mt-2 text-xs text-zinc-400">
                            {part.description}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
