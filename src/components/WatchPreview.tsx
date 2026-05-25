"use client";

import Image from "next/image";
import type { PartCategory, WatchPart } from "@/lib/watchParts";

const layerOrder: PartCategory[] = [
  "strap",
  "case",
  "bezel",
  "dial",
  "hands",
];

type WatchPreviewProps = {
  parts: Record<PartCategory, WatchPart>;
};

export default function WatchPreview({ parts }: WatchPreviewProps) {
  return (
    <div className="relative mx-auto flex w-full max-w-[420px] items-center justify-center">
      <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08),_transparent_65%)]" />
      <div className="relative aspect-square w-full max-w-[420px]">
        {layerOrder.map((category) => {
          const part = parts[category];
          return (
            <Image
              key={part.id}
              src={part.image}
              alt={`${part.name} ${category}`}
              fill
              priority={category === "case"}
              className="object-contain"
              sizes="(max-width: 768px) 80vw, 420px"
            />
          );
        })}
      </div>
    </div>
  );
}
