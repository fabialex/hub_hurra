'use client';

import React, { useCallback } from 'react';
import {
  ReactFlow,
  Handle,
  MarkerType,
  Position,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  BaseEdge,
  EdgeLabelRenderer,
  getSmoothStepPath,
  useReactFlow,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

function SmallAppNode({ data }: { data: { label: string } }) {
  return (
    <div className="relative select-none rounded-lg border border-neutral-700 bg-neutral-900/80 px-4 py-3 text-[13px] font-medium text-neutral-100 shadow-sm">
      <div>{data.label}</div>
      <Handle type="source" position={Position.Bottom} className="!w-2 !h-2 !bg-sky-400" />
    </div>
  );
}

function HubNode({ data }: { data: { label: string } }) {
  return (
    <div className="relative select-none rounded-xl border border-sky-500/40 bg-neutral-950 px-5 py-4 text-sm font-semibold text-neutral-100 shadow-md">
      <Handle type="target" position={Position.Top} className="!w-2 !h-2 !bg-sky-400" />
      <div className="tracking-wide">{data.label}</div>
      <Handle type="source" position={Position.Bottom} className="!w-2 !h-2 !bg-sky-400" />
    </div>
  );
}

function ConsoleNode({ data }: { data: { title: string; message: string } }) {
  return (
    <div className="relative w-[350px] select-none overflow-hidden rounded-xl border border-neutral-700 bg-neutral-950 text-neutral-200 shadow-md">
      <Handle type="target" position={Position.Top} className="!w-2 !h-2 !bg-sky-400" />
      <div className="border-b border-neutral-800 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-300">
        {data.title}
      </div>
      <div className="px-4 py-3 font-mono text-[12.5px] leading-relaxed">
        {data.message || '— waiting for input —'}
      </div>
    </div>
  );
}

export const nodeTypes = { small: SmallAppNode, hub: HubNode, console: ConsoleNode };


function DeletableEdge(props: any) {
  const {
    id,
    deletable,
    markerEnd,
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    style,
    selected,
  } = props;
  const { setEdges } = useReactFlow();

  const [path, labelX, labelY] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  const onDelete = () => setEdges((eds: any[]) => eds.filter((e: any) => e.id !== id));

  return (
    <>
      <BaseEdge id={id} path={path} markerEnd={markerEnd} style={style} />
      {deletable !== false && (
        <EdgeLabelRenderer>
          <button
            onClick={onDelete}
            title="Verbindung entfernen"
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
              pointerEvents: 'all',
              background: selected ? '#0ea5e9' : '#1f2937',
              color: '#e5e7eb',
              border: '1px solid #4b5563',
              borderRadius: 6,
              padding: '2px 6px',
              fontSize: 11,
              cursor: 'pointer',
            }}
          >
            X
          </button>
        </EdgeLabelRenderer>
      )}
    </>
  );
}

export const edgeTypes = { deletable: DeletableEdge };


export const initialNodes: any[] = [
  { id: 'erp', position: { x: 200, y: 0 }, data: { label: 'ERP' }, type: 'small' },
  { id: 'crm', position: { x: 300, y: 0 }, data: { label: 'CRM' }, type: 'small' },
  { id: 'plm', position: { x: 400, y: 0 }, data: { label: 'PLM' }, type: 'small' },
  { id: 'hub', position: { x: 300, y: 150 }, data: { label: 'API Hub' }, type: 'hub' },
  {
    id: 'console',
    position: { x: 200, y: 270 },
    data: { title: 'Output System', message: '— waiting for input —' },
    type: 'console',
  },
];

export const initialEdges: any[] = [
  {
    id: 'hub->console',
    source: 'hub',
    target: 'console',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    type: 'deletable',
    deletable: false, // geschützt
  },
  {
    id: 'crm->hub',
    source: 'crm',
    target: 'hub',
    animated: true,
    markerEnd: { type: MarkerType.ArrowClosed },
    deletable: true,
  },
];

function cloneInitialNodes() {
  return initialNodes.map((node) => ({
    ...node,
    data: typeof node.data === 'object' ? { ...(node.data as Record<string, unknown>) } : node.data,
  }));
}

function cloneInitialEdges() {
  return initialEdges.map((edge) => ({ ...edge }));
}


function connectedSourcesToHub(edges: any[]): Set<string> {
  const set = new Set<string>();
  for (const e of edges) if (e.target === 'hub' && e.source) set.add(e.source);
  return set;
}

function buildConsoleMessage(connected: Set<string>): string {
  if (connected.size === 0) return '— waiting for input —';
  const base = 'Bestellung #4711 – Status über API Hub.';
  const parts: string[] = [];
  if (connected.has('erp')) parts.push('ERP: 128 Stk verfügbar; Lieferung in ~3 Tagen.');
  if (connected.has('crm')) parts.push("CRM: Kunde 'ACME GmbH' (Gold); letzter Kontakt 01.11.2025.");
  if (connected.has('plm')) parts.push('PLM: Stückliste Rev. C freigegeben; Compliance OK.');
  return `${base} ${parts.join(' | ')}`;
}

export function useFlowSharedState() {
  const [nodes, setNodes] = React.useState<any[]>(() => cloneInitialNodes());
  const [edges, setEdges] = React.useState<any[]>(() => cloneInitialEdges());

  const onNodesChange = useCallback((changes: any[]) => setNodes((nds) => applyNodeChanges(changes, nds)), []);

  const onEdgesChange = useCallback((changes: any[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

  const onConnect = useCallback((connection: any) => {
    setEdges((prev) =>
      addEdge(
        {
          ...connection,
          id: `${connection.source}-${connection.target}-${Date.now()}`,
          animated: true,
          markerEnd: { type: MarkerType.ArrowClosed },
          type: 'deletable',
          deletable: true,
        },
        prev
      )
    );
  }, []);

  React.useEffect(() => {
    const msg = buildConsoleMessage(connectedSourcesToHub(edges));
    setNodes((nds) =>
      nds.map((n) => (n.id === 'console' ? { ...n, data: { ...(n.data as any), message: msg } } : n))
    );
  }, [edges]);

  const reset = React.useCallback(() => {
    setNodes(cloneInitialNodes());
    setEdges(cloneInitialEdges());
  }, []);

  return { nodes, edges, onNodesChange, onEdgesChange, onConnect, reset };
}

/* =========================
   Reusable Flow Canvas
   ========================= */

export function FlowCanvas(props: {
  nodes: any[];
  edges: any[];
  onNodesChange: (c: any[]) => void;
  onEdgesChange: (c: any[]) => void;
  onConnect?: (c: any) => void;
  interactive?: boolean;
  fit?: boolean;       // passt an Container an (für rechte 50%-Box)
  fitPadding?: number; // Rand beim Fit
}) {
  const interactive = props.interactive !== false;

  return (
    <ReactFlow
      nodes={props.nodes}
      edges={props.edges}
      nodeTypes={nodeTypes}
      edgeTypes={edgeTypes}
      onNodesChange={props.onNodesChange}
      onEdgesChange={props.onEdgesChange}
      onConnect={props.onConnect}
      fitView={props.fit === true}
      fitViewOptions={{ padding: props.fitPadding ?? 0.2 }}
      minZoom={1.0}
      maxZoom={1.1}
      defaultEdgeOptions={{
        animated: true,
        markerEnd: { type: MarkerType.ArrowClosed },
        type: 'deletable',
      }}
      nodesDraggable={interactive}
      nodesConnectable={interactive}
      elementsSelectable={interactive}
      panOnDrag={false}
      zoomOnScroll={false}
      panOnScroll={false}
    >
  {/* Custom background dots can be implemented here if needed */}
    </ReactFlow>
  );
}
