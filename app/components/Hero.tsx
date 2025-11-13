'use client';

import Image from 'next/image';
import Section from './Section';
import { Button } from './ui';

export default function Hero() {

  return (
    <Section>
      <div className="relative min-h-[65vh] pt-8 md:pt-12 grid md:grid-cols-12 gap-8 items-center overflow-hidden">
        <div className="md:col-span-6 relative z-10 px-4 md:px-6">
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-[radial-gradient(circle_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px] opacity-70"
          />
          <div className="relative z-10 md:-mr-10">
            <div className="kicker">Industrie-System Integrationen</div>
            <h1 className="h1 mt-3 text-4xl md:text-5xl lg:text-6xl font-bold">UNFUCK INTEGRATIONS.</h1>
            <p className="lede mt-5 text-lg md:text-xl text-neutral-300">
              Erstelle und verwalte APIs zwischen den großen Systemen wie SAP order Salesforce in Minuten statt in Monaten und teile sie mit allen die sie brauchen - Kunden, Partner oder AI-Agents.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-3">
              <Button as="a" href="#contact" className="px-6 py-3 text-center" variant='primary'>
                Demo anfragen
              </Button>
              <Button as="b" href="#contact" className="px-6 py-3 text-center" variant='default'>
                Dokumentation
              </Button>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 relative hidden md:flex items-center justify-center">
          <Image
            src="/HubCity.png"
            alt="Visualisierung des Hub Hub Hurra API-Hubs"
            width={880}
            height={600}
            className="w-full max-w-[520px] h-auto rounded-l-2xl object-contain"
            priority
          />
        </div>
      </div>
    </Section>
  );
}
