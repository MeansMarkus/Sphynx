import Configurator from "@/components/Configurator";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-[#050505] text-white">
      <Hero />
      <Configurator />
      <footer className="border-t border-white/5 px-6 py-12 text-center text-xs uppercase tracking-[0.4em] text-zinc-500">
        Crafted in the Sphynx Watch Lab
      </footer>
    </div>
  );
}
