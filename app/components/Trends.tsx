import Section from './Section';
import { Network, Bot, Layers } from 'lucide-react';
import { Card } from './ui';
import type { ComponentType } from 'react';

const pressureBullets = [
  'EU AI Act & NIS2 → API-Governance wird Pflicht',
  'B2B-Kunden erwarten B2C-Standards (Echtzeit-Transparenz)',
  'First Mover setzen den Standard und kontrollieren das Ökosystem'
];

export default function Trends() {
  return (
    <Section id="trends" className="overflow-hidden">
      <div className="relative z-10">
        <div className="uppercase tracking-[0.2em] text-white/70 text-xs md:text-sm">
          Geben Sie Ihren KI Agenten die nötigen Daten & Werkzeuge in die Hand
        </div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">Warum jetzt standardisierte APIs?</h2>

        <Card className="mt-8 space-y-4">
          <h3 className="text-white/90 text-xl font-semibold">Das Problem heute</h3>
          <p className="text-white/70 text-[15px] leading-relaxed">
            Integrationen sind Einzelprojekte: jedes System spricht anders, nichts ist wiederverwendbar. Ergebnis:
            6–12&nbsp;Monate für neue Anbindungen, IT-Budget fließt in Wartung und Innovation versandet.
          </p>
        </Card>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <TrendCard
            icon={Network}
            title="Partner-Ökosysteme & B2B-Datenaustausch"
            text="Lieferanten, Kunden und Plattformen erwarten Echtzeit-Transparenz und standardisierte Schnittstellen. Ohne sauberen B2B-Datenaustausch entstehen Medienbrüche und Verzögerungen."
          />
          <TrendCard
            icon={Bot}
            title="KI & Agenten brauchen APIs"
            text="LLMs und autonome Agenten sind nur so wirksam wie die APIs: konsistent, dokumentiert, stabil. Gute Endpunkte sind Voraussetzung für echte Automatisierung."
          />
          <TrendCard
            icon={Layers}
            title="Composable Enterprise / MACH – API first"
            text="Monolithen weichen modularen Architekturen. API-first macht Services kombinierbar, austauschbar und wiederverwendbar – und reduziert Integrationsaufwände."
          />
        </div>

        <h2 className="mt-16 text-3xl md:text-4xl font-semibold text-white">Warum noch?</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {pressureBullets.map((b) => (
            <Card as="li" key={b} interactive className="text-white/80">
              {b}
            </Card>
          ))}
        </ul>

        <Card className="mt-12 text-white/80 text-[15px] leading-relaxed">
          <strong className="text-white font-semibold">Quintessenz:</strong> Wer Schnittstellen industrialisiert, wechselt vom projektgetriebenen
          Integrationsbetrieb zu einem wiederverwendbaren API-Ökosystem – Minuten bis zum ersten Value statt Monate bis zum
          „Go-Live".
        </Card>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.18), rgba(110,231,242,0.12) 60%, transparent 70%)',
        }}
      />
    </Section>
  );
}

function TrendCard({
  icon: Icon,
  title,
  text,
}: {
  icon: ComponentType<{ className?: string; size?: number }>;
  title: string;
  text: string;
}) {
  return (
    <Card interactive className="h-full">
      <div className="mb-4">
        <Icon className="h-8 w-8 text-white/70" />
      </div>
      <div className="text-white/85 mb-3 font-medium">{title}</div>
      <p className="text-white/70 text-[15px] leading-relaxed">{text}</p>
    </Card>
  );
}
