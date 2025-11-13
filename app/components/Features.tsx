import { BrainCircuit, GitBranch, Search, Share2, ShieldCheck, Zap } from 'lucide-react';
import { ReactNode } from 'react';
import Section from './Section';
import { Card } from './ui';

export default function Features() {
  return (
    <Section id="features" className="overflow-hidden">
      <div className="relative">
        <div className="uppercase tracking-[0.2em] text-white/70 text-xs md:text-sm">App Store für Schnittstellen</div>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white">Features</h2>

        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-4 h-80 w-80 translate-x-1/3 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.18), rgba(110,231,242,0.10) 60%, transparent 70%)',
          }}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<Search />} title="API DISCOVERY" text="Schnittstellen finden & anbinden so einfach wie ein Einkauf bei Amazon." />
          <FeatureCard icon={<Zap />} title="ONE-CLICK CONNECT" text="APIs sofort in Tools, Workflows oder KI-Agenten nutzen." />
          <FeatureCard icon={<Share2 />} title="CONTROLLED SHARING" text="APIs gezielt und sicher mit Kunden & Partnern teilen." />
          <FeatureCard icon={<GitBranch />} title="API MAPPING" text="Schlechte APIs werden zu guten APIs. (Simpel, konsistent, stabil.)" />
          <FeatureCard icon={<ShieldCheck />} title="CENTRAL GOVERNANCE" text="Policies, Monitoring, Caching, Audit – out of the box." />
          <FeatureCard icon={<BrainCircuit />} title="AI & WORKFLOW READY" text="Jede API ist sofort nutzbar für Agenten, LLMs & Automatisierungen." />
        </div>

        <Card className="mt-12 text-white/80 text-[15px] leading-relaxed italic">
          „Von der Idee zur Integration in Minuten, nicht Wochen."
        </Card>
      </div>
    </Section>
  );
}

function FeatureCard({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <Card interactive className="h-full">
      <div className="flex items-start gap-4">
        <div className="[&>*]:h-6 [&>*]:w-6 [&>*]:text-white/70">{icon}</div>
        <div>
          <div className="text-white/85 mb-2 font-medium">{title}</div>
          <p className="text-white/70 text-[15px] leading-relaxed">{text}</p>
        </div>
      </div>
    </Card>
  );
}
