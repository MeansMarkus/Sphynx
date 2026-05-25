import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sphynx Watch Configurator",
  description:
    "Premium luxury watch configurator for designing, previewing, and sharing custom builds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[#050505] text-white">
        <div className="flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
