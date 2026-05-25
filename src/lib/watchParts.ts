export type PartCategory = "case" | "bezel" | "dial" | "hands" | "strap";

export type WatchPart = {
  id: string;
  name: string;
  category: PartCategory;
  image: string;
  accent: string;
  description: string;
};

export type WatchBuild = Record<PartCategory, string>;

export const partCategories: Array<{
  id: PartCategory;
  label: string;
  description: string;
}> = [
  { id: "case", label: "Case", description: "Foundation and silhouette." },
  { id: "bezel", label: "Bezel", description: "Signature framing ring." },
  { id: "dial", label: "Dial", description: "The face of the watch." },
  { id: "hands", label: "Hands", description: "Precision in motion." },
  { id: "strap", label: "Strap", description: "Feel and comfort." },
];

export const watchParts: Record<PartCategory, WatchPart[]> = {
  case: [
    {
      id: "obsidian",
      name: "Obsidian Case",
      category: "case",
      image: "/assets/parts/case/obsidian.png",
      accent: "#2c2c35",
      description: "Deep matte black with soft edges.",
    },
    {
      id: "platinum",
      name: "Platinum Case",
      category: "case",
      image: "/assets/parts/case/platinum.png",
      accent: "#d6d6dd",
      description: "Polished silver for formal builds.",
    },
    {
      id: "graphite",
      name: "Graphite Case",
      category: "case",
      image: "/assets/parts/case/graphite.png",
      accent: "#6f7280",
      description: "Satin graphite for balanced looks.",
    },
  ],
  bezel: [
    {
      id: "stealth",
      name: "Stealth Bezel",
      category: "bezel",
      image: "/assets/parts/bezel/stealth.png",
      accent: "#2b2b33",
      description: "Low-profile bezel for tactical tone.",
    },
    {
      id: "brushed",
      name: "Brushed Bezel",
      category: "bezel",
      image: "/assets/parts/bezel/brushed.png",
      accent: "#bdbdc6",
      description: "Classic brushed steel finish.",
    },
    {
      id: "rose",
      name: "Rose Bezel",
      category: "bezel",
      image: "/assets/parts/bezel/rose.png",
      accent: "#c8866c",
      description: "Warm rose tone with luxury feel.",
    },
  ],
  dial: [
    {
      id: "midnight",
      name: "Midnight Dial",
      category: "dial",
      image: "/assets/parts/dial/midnight.png",
      accent: "#121826",
      description: "Deep midnight surface.",
    },
    {
      id: "ivory",
      name: "Ivory Dial",
      category: "dial",
      image: "/assets/parts/dial/ivory.png",
      accent: "#e3ddcf",
      description: "Warm ivory tone with soft contrast.",
    },
    {
      id: "sapphire",
      name: "Sapphire Dial",
      category: "dial",
      image: "/assets/parts/dial/sapphire.png",
      accent: "#405a86",
      description: "Cool sapphire sheen.",
    },
  ],
  hands: [
    {
      id: "silver",
      name: "Silver Baton",
      category: "hands",
      image: "/assets/parts/hands/silver.png",
      accent: "#e4e4e4",
      description: "Minimal baton hands in silver.",
    },
    {
      id: "gold",
      name: "Gold Leaf",
      category: "hands",
      image: "/assets/parts/hands/gold.png",
      accent: "#d7b058",
      description: "Warm gold accents.",
    },
    {
      id: "lume",
      name: "Lume Edge",
      category: "hands",
      image: "/assets/parts/hands/lume.png",
      accent: "#7dddc1",
      description: "Soft lume glow for night reads.",
    },
  ],
  strap: [
    {
      id: "onyx",
      name: "Onyx Leather",
      category: "strap",
      image: "/assets/parts/strap/onyx.png",
      accent: "#25252c",
      description: "Smooth leather with deep grain.",
    },
    {
      id: "charcoal",
      name: "Charcoal Rubber",
      category: "strap",
      image: "/assets/parts/strap/charcoal.png",
      accent: "#3f424b",
      description: "Sport-ready rubber texture.",
    },
    {
      id: "steel",
      name: "Steel Bracelet",
      category: "strap",
      image: "/assets/parts/strap/steel.png",
      accent: "#a4a8b1",
      description: "Brushed metal bracelet links.",
    },
  ],
};

export const presetBuilds: Array<{
  id: string;
  name: string;
  description: string;
  parts: WatchBuild;
}> = [
  {
    id: "dress",
    name: "Dress Watch",
    description: "Polished and understated elegance.",
    parts: {
      case: "platinum",
      bezel: "brushed",
      dial: "ivory",
      hands: "gold",
      strap: "onyx",
    },
  },
  {
    id: "dive",
    name: "Dive Watch",
    description: "High contrast with sturdy silhouette.",
    parts: {
      case: "graphite",
      bezel: "stealth",
      dial: "sapphire",
      hands: "lume",
      strap: "charcoal",
    },
  },
  {
    id: "tactical",
    name: "Tactical Watch",
    description: "Stealth materials and sharp focus.",
    parts: {
      case: "obsidian",
      bezel: "stealth",
      dial: "midnight",
      hands: "lume",
      strap: "charcoal",
    },
  },
  {
    id: "vintage",
    name: "Vintage Watch",
    description: "Warm metals with nostalgic charm.",
    parts: {
      case: "platinum",
      bezel: "rose",
      dial: "ivory",
      hands: "gold",
      strap: "steel",
    },
  },
  {
    id: "sport",
    name: "Sport Watch",
    description: "Balanced contrast for daily wear.",
    parts: {
      case: "graphite",
      bezel: "brushed",
      dial: "sapphire",
      hands: "silver",
      strap: "steel",
    },
  },
];

export const defaultBuild = presetBuilds[0].parts;
