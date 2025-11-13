'use client';

import { ReactFlowProvider } from '@xyflow/react';
import { FlowCanvas } from './FlowShared';

type Props = {
  nodes: any[];
  edges: any[];
  onNodesChange: (c: any) => void;
  onEdgesChange: (c: any) => void;
  onConnect?: (c: any) => void;
  interactive?: boolean; // false für die Vorschau
  className?: string;    // z.B. "h-48 rounded-xl overflow-hidden"
};

export default function FlowEmbed({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  interactive = false,
  className = '',
}: Props) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Wichtig: der Canvas füllt einfach 100% des Containers */}
      <div className="absolute inset-0">
        <ReactFlowProvider>
          <FlowCanvas
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            interactive={interactive}
          />
        </ReactFlowProvider>
      </div>
    </div>
  );
}
