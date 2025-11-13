'use client';

import Image from 'next/image';
import { Cpu, Repeat2, Search, Share2, ShieldCheck, Zap } from 'lucide-react';
import Section from './Section';
import { Card } from './ui';

type Feature = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  text: string;
};

const FEATURES: Feature[] = [
  { icon: Search, title: 'API Discovery', text: 'Finde Schnittstellen so einfach wie in einem App Store – mit Beschreibung, Doku und Policies.' },
  { icon: Zap, title: 'One-Click Connect', text: 'Verbinde SAP, Salesforce oder Speziallösungen in Minuten mit Workflows, Tools oder KI-Agenten.' },
  { icon: Share2, title: 'Controlled Sharing', text: 'Teile APIs selektiv mit Teams, Kunden oder Partnern – inklusive Freigaben und Nutzungsgrenzen.' },
  { icon: ShieldCheck, title: 'Security & Governance', text: 'Policies, Monitoring, Audit Trails und Compliance sind automatisch aktiviert.' },
  { icon: Cpu, title: 'AI & Workflow Ready', text: 'Saubere, dokumentierte Endpunkte sind sofort nutzbar für LLMs und Automatisierungen.' },
  { icon: Repeat2, title: 'Reusable Integrations', text: 'Einmal bauen, überall wiederverwenden – Integrationen werden zur skalierbaren Infrastruktur.' },
];

export default function Hub() {
  return (
    <Section id="hub" className="overflow-hidden">
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/60">App Store für Schnittstellen</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Der API Hub – Kontrolle trifft Tempo</h2>
        <p className="mt-3 text-base text-white/70">
          Alle Integrationen in einer Plattform: auffindbar, sicher geteilt und sofort produktiv – für Teams, Partner und KI.
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
          <Card className="text-sm text-white/75 leading-relaxed">
            Der Hub ist die kontrollierte Schicht zwischen Innovation und Sicherheit: APIs entdecken, aktivieren, teilen – ohne
            jedes Mal neu zu bauen.
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
