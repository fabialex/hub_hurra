'use client';

import Section from './Section';
import { ReactFlowProvider } from '@xyflow/react';
import { FlowCanvas, useFlowSharedState } from './FlowShared';
import { Button } from './ui';

export default function Hero() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useFlowSharedState();

  return (
    <Section>
      <div className="relative min-h-[80vh] pt-10 md:pt-16 grid md:grid-cols-12 gap-10 items-center overflow-hidden">
        <div className="md:col-span-6 relative z-10 px-4 md:px-6">
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-[radial-gradient(circle_1px,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px] opacity-70"
          />
          <div className="relative z-10 md:-mr-10">
            <div className="kicker">Industrie-System Integrationen</div>
            <h1 className="h1 mt-3 text-4xl md:text-5xl lg:text-6xl font-bold">Von 6 Monaten zu 6 Minuten.</h1>
            <p className="lede mt-5 text-lg md:text-xl text-neutral-300">
              Verbinden Sie kinderleicht ihre Systeme mit dem API-Hub. Eine kontrollierte Schicht zwischen Innovation und Sicherheit – APIs als Produkt, nicht als Projekt. Im Ernst: Probieren Sie es live aus.
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
        <div className="md:col-span-6 relative hidden md:block">
          <div className="relative h-[600px] w-full overflow-hidden rounded-l-2xl bg-neutral-950/50 backdrop-blur-sm">
            <div className="absolute inset-0">
              <ReactFlowProvider>
                <FlowCanvas
                  nodes={nodes}
                  edges={edges}
                  onNodesChange={onNodesChange}
                  onEdgesChange={onEdgesChange}
                  onConnect={onConnect}
                  interactive={true}
                  fit={true}
                  fitPadding={0.2}
                />
              </ReactFlowProvider>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
