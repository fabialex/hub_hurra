import Section from './Section';
import { Card } from './ui';

const useCaseSteps = [
  'APIs in den Hub, Agent baut Antworten in Echtzeit.',
  'Gleiche APIs sofort im Shop & bei Partnern wiederverwendet.',
  '2 Std bis live Shop, 30 Min bis erster B2B-Partner testet.'
];

export default function UseCase() {
  return (
    <Section id="usecase">
      <div className="kicker">Vom E-Mail-Chaos zum API-Marktplatz</div>
      <h2 className="h2 mt-3">Konkretes Beispiel</h2>
      <ol className="mt-6 grid gap-4 list-decimal list-inside md:grid-cols-3">
        {useCaseSteps.map((s) => (
          <Card as="li" key={s} interactive className="text-white/80">
            {s}
          </Card>
        ))}
      </ol>
      <p className="mt-6 text-white/70">Build once. Use everywhere. Scale infinitely.</p>
    </Section>
  );
}
