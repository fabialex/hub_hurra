import Section from './Section';
import { Card, Button } from './ui';

const solutionsUseCases = [
  {
    title: 'AI-Agenten mit Kontext füttern',
    body:
      'Geben Sie Ihren AI-Agenten Zugriff auf Ihre internen Systeme – CRM, ERP, Datenbanken – über sichere, kuratierte APIs und steigern Sie deren Nutzen dramatisch.',
  },
  {
    title: 'Kunden & Partner schneller anbinden',
    body:
      'APIs werden als Produkte bereitgestellt – Kunden oder Partner docken in Tagen statt Monaten an deine Systeme an.',
  },
  {
    title: 'Volle Transparenz behalten',
    body:
      'Ein zentrales Dashboard zeigt jede aktive API, wer sie nutzt und welche Daten laufen. Governance ohne Blindflug.',
  },
];

export default function Solutions() {
  return (
    <Section id="solutions" className="overflow-hidden">
      <div className="text-center">
        <p className="kicker uppercase tracking-[0.3em] text-white/60 text-xs">Solutions</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight">Solutions für Kunden, Agenten & Partner</h2>
        <p className="mt-3 text-base text-white/70">
          Drei typische Einsatzgebiete, die zeigen, warum der API Hub das Steuerzentrum für moderne Integrationen ist.
        </p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {solutionsUseCases.map(({ title, body }) => (
          <Card key={title} interactive className="flex flex-col gap-5">
            <div className="relative h-32 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
              <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-white/30">
                Bildfläche
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm text-white/70">{body}</p>
            </div>
            <div className="mt-auto">
              <Button
                as="a"
                href="#contact"
                variant="default"
                className="w-full justify-center text-sm"
              >
                Case Study herunterladen
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
