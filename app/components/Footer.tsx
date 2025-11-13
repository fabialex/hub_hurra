import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-white/10 bg-white/5 backdrop-blur-md">
      {/* Glow-Effekt im Hintergrund */}
      <div
        aria-hidden
        className="absolute inset-x-0 -top-40 h-80 w-full pointer-events-none blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 70% 0%, rgba(139,92,246,0.15), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-16 flex flex-col md:flex-row md:justify-between md:items-start gap-10 text-white/80">
        {/* Logo + kurze Description */}
        <div className="flex flex-col gap-4 max-w-sm">
          <div className="flex items-center gap-2">
            <Image
              src="/Hub_Hub_Logo.png"
              alt="Hub Hub Hurra Logo"
              width={36}
              height={36}
              className="rounded"
            />
            <span className="text-lg font-semibold tracking-wide text-white">
              Hub Hub Hurra
            </span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed">
            Ihr Partner für nahtlose Industrie-System
            Integrationen. Entdecken Sie, wie unser API-Hub Ihre digitale
            Transformation beschleunigen kann.
          </p>
          <p className="text-sm text-white/60 leading-relaxed italic">Hub Hub Hurra ist eine Marke der pragmatic industries GmbH</p>
        </div>

        {/* Linkbereiche */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-white/70 font-medium uppercase tracking-wider text-xs">
              Unternehmen
            </span>
            <a href="https://pragmaticindustries.com/#wir" target="_blank" className="hover:text-white transition">Über uns</a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white/70 font-medium uppercase tracking-wider text-xs">
              Rechtliches
            </span>
            <a href="/impressum" className="hover:text-white transition">Impressum</a>
            <a href="https://pragmaticindustries.com/datenschutzerklaerung.html" target="_blank" className="hover:text-white transition">Datenschutz</a>
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-white/70 font-medium uppercase tracking-wider text-xs">
              Kontakt
            </span>
            <a href="mailto:info@hubhubhurra.de" className="hover:text-white transition">
              hello@hub-hub-hurra.de
            </a>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-white/10 text-center text-xs text-white/50 py-6">
        © 2025 Hub Hub Hurra · All rights reserved.
      </div>
    </footer>
  );
}
