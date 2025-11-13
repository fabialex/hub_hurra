'use client';

import Image from 'next/image';
import { PlugZap, Cpu, BookOpen, ShieldCheck, Repeat2, Quote } from 'lucide-react';
import Section from './Section';
import { Card } from './ui';

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  { icon: PlugZap, title: 'Plug & Play für jedes System', text: 'SAP, Salesforce, Custom-Apps – alles spricht eine Sprache im Hub. Integrationen werden anschlussfertig.' },
  { icon: Cpu, title: 'KI-ready APIs', text: 'Legacy-Schnittstellen werden zu simplen, agenten-tauglichen APIs. Ideal für LLMs & Automatisierung.' },
  { icon: BookOpen, title: 'Katalog statt Dschungel', text: 'Entwickler & Agenten sehen sofort: Welche APIs gibt’s? Wie nutze ich sie? Schluss mit Chaos.' },
  { icon: ShieldCheck, title: 'Security & Governance built-in', text: 'Zentrale Policies, Monitoring, Audit Trails & Compliance – standardmäßig im Hub enthalten.' },
  { icon: Repeat2, title: 'Von Custom zu Commodity', text: 'Nie wieder dieselbe Integration zweimal bauen – wiederverwenden, skalieren, beschleunigen.' },
  { icon: Quote, title: 'Kontrollierte Schicht', text: '„Der API Hub ist die kontrollierte Schicht zwischen Innovation und Sicherheit.“' },
];

export default function Solution() {
  return (
    <Section id="solution" className="overflow-hidden">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight">Der API Hub — von Monaten zu Minuten</h2>
        <p className="mt-3 text-base text-white/70">
          Der API Hub bündelt und vereinheitlicht Schnittstellen zu deinen Systemen. Er macht Integrationen wiederverwendbar,
          auffindbar und sicher steuerbar. Ergebnis: weniger Aufwand, mehr Automatisierung, schnellere Innovation.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        <div className="space-y-6 lg:col-span-5">
          <Card className="!p-0 overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/hub_dashboard.jpg"
                alt="Dashboard des API Hubs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
                priority
              />
            </div>
          </Card>
          <Card className="text-sm text-white/70 leading-relaxed">
            Kurz gesagt: ein „App Store für Schnittstellen“ – APIs finden, anbinden, sicher teilen; einmal bauen, überall wiederverwenden.
            Integrationen werden vom Sonderprojekt zur Infrastruktur.
          </Card>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <Card key={title} interactive className="h-full">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-medium">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
