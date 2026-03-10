'use client';

import { useEffect, useRef } from 'react';
import { NodeData, CLUSTER_COLORS, GRAPH_DATA } from '@/data/brainData';

// Uses `force-graph` (standalone 2D canvas library) imperatively via useEffect.
// Avoids react-force-graph which bundles AFRAME and crashes Next.js.

type GraphNode = NodeData & {
  x?: number; y?: number;
  vx?: number; vy?: number;
  fx?: number; fy?: number;
  index?: number;
};

// ─── Pure helpers (module-level, no closure deps) ─────────────────────────────

function hexToRgba(hex: string, a: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${a})`;
}

function nodeColor(node: GraphNode): string {
  return CLUSTER_COLORS[node.cluster];
}

function nodeRadius(val: number): number {
  return Math.sqrt(val) * 3.6;
}

// Factory for cluster-pull forces — replaces two near-identical force functions
function createClusterForce(
  axis: 'x' | 'y',
  targets: Record<string, { x: number; y: number }>
) {
  let _nodes: GraphNode[] = [];
  const force = (alpha: number) => {
    _nodes.forEach((n) => {
      if (n.group !== 'project') return;
      if (axis === 'x' && n.fx !== undefined) return;
      if (axis === 'y' && n.fy !== undefined) return;
      const t   = targets[n.cluster]?.[axis] ?? 0;
      const pos = axis === 'x' ? (n.x ?? 0) : (n.y ?? 0);
      if (axis === 'x') n.vx = (n.vx ?? 0) + (t - pos) * 0.08 * alpha;
      else              n.vy = (n.vy ?? 0) + (t - pos) * 0.08 * alpha;
    });
  };
  force.initialize = (nodes: GraphNode[]) => { _nodes = nodes; };
  return force;
}

// ─────────────────────────────────────────────────────────────────────────────

interface BrainGraphProps {
  onNodeClick: (node: NodeData) => void;
  onBackgroundClick: () => void;
  selectedNodeId: string | null;
}

export default function BrainGraph({
  onNodeClick,
  onBackgroundClick,
  selectedNodeId,
}: BrainGraphProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mutable values read inside canvas callbacks — never stale
  const hoverRef             = useRef<string | null>(null);
  const selectedRef          = useRef<string | null>(null);
  const pulseRef             = useRef<number>(0);
  const onNodeClickRef       = useRef(onNodeClick);
  const onBackgroundClickRef = useRef(onBackgroundClick);

  // Single effect to keep both callback refs current
  useEffect(() => {
    onNodeClickRef.current       = onNodeClick;
    onBackgroundClickRef.current = onBackgroundClick;
  }, [onNodeClick, onBackgroundClick]);

  useEffect(() => { selectedRef.current = selectedNodeId; }, [selectedNodeId]);

  // rAF clock for the core-node pulse ring
  useEffect(() => {
    let raf: number;
    const tick = (t: number) => { pulseRef.current = t; raf = requestAnimationFrame(tick); };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // ── Mount force-graph (runs once) ─────────────────────────────────────────
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let destroyed = false;
    let fg: any   = null;
    // Closure-scoped so cleanup doesn't need to read from a DOM property
    let onResize:  (() => void) | null = null;

    // ── Canvas node renderer ────────────────────────────────────────────────
    function drawNode(node: GraphNode, ctx: CanvasRenderingContext2D, gs: number) {
      const { x, y } = node;
      if (x === undefined || y === undefined) return;

      const color  = nodeColor(node);
      const r      = nodeRadius(node.val ?? 4);
      const active = hoverRef.current === node.id || selectedRef.current === node.id;

      // Outer glow
      const glowR = r * (active ? 4.2 : 2.8);
      const glow  = ctx.createRadialGradient(x, y, 0, x, y, glowR);
      glow.addColorStop(0,    hexToRgba(color, active ? 0.44 : 0.20));
      glow.addColorStop(0.45, hexToRgba(color, active ? 0.16 : 0.07));
      glow.addColorStop(1,    hexToRgba(color, 0));
      ctx.beginPath();
      ctx.arc(x, y, glowR, 0, Math.PI * 2);
      ctx.fillStyle = glow;
      ctx.fill();

      // Animated pulse rings — core only
      if (node.id === 'nikhil') {
        const phase = 0.5 + 0.35 * Math.sin(pulseRef.current * 0.0018);
        ctx.beginPath();
        ctx.arc(x, y, r * (1.7 + phase), 0, Math.PI * 2);
        ctx.strokeStyle = hexToRgba(color, 0.22);
        ctx.lineWidth   = 1 / gs;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(x, y, r * (2.4 + phase * 0.5), 0, Math.PI * 2);
        ctx.strokeStyle = hexToRgba(color, 0.10);
        ctx.lineWidth   = 0.8 / gs;
        ctx.stroke();
      }

      // Main circle
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      if (node.group === 'core') {
        const g2 = ctx.createRadialGradient(x - r * 0.28, y - r * 0.28, 0, x, y, r);
        g2.addColorStop(0, '#FFFFFF');
        g2.addColorStop(1, '#B8C4D8');
        ctx.fillStyle = g2;
      } else {
        ctx.fillStyle = active ? color : hexToRgba(color, 0.82);
      }
      ctx.fill();

      // Inner accent dot (cluster nodes only)
      if (node.group === 'cluster') {
        ctx.beginPath();
        ctx.arc(x, y, r * 0.52, 0, Math.PI * 2);
        ctx.fillStyle = hexToRgba(color, active ? 0.5 : 0.28);
        ctx.fill();
      }

      // Label
      const showLabel = node.group === 'core' || node.group === 'cluster' || gs >= 0.75;
      if (showLabel) {
        const base  = node.group === 'core' ? 13 : node.group === 'cluster' ? 11 : 9.5;
        const fs    = Math.min(Math.max(base / gs, 7), 20);
        const alpha = active ? 1 : node.group === 'project' ? 0.62 : 0.82;
        const wt    = node.group === 'core' ? '500' : '400';
        ctx.font         = `${wt} ${fs}px "JetBrains Mono", monospace`;
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'top';
        ctx.fillStyle    = `rgba(232,228,220,${alpha})`;
        ctx.fillText(node.label, x, y + r + 3 / gs);
      }
    }

    // Expanded pointer hit area
    function paintHit(node: GraphNode, color: string, ctx: CanvasRenderingContext2D) {
      const { x, y } = node;
      if (x === undefined || y === undefined) return;
      ctx.beginPath();
      ctx.arc(x, y, nodeRadius(node.val ?? 4) * 1.6, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    }

    // Link color — derived from source cluster
    function linkColor(link: any): string {
      const src = link.source;
      if (src && typeof src === 'object') return hexToRgba(nodeColor(src), 0.26);
      return 'rgba(255,255,255,0.12)';
    }

    // Graph data — core + cluster nodes pinned via fx/fy; project nodes float
    const graphData = {
      nodes: GRAPH_DATA.nodes.map((n) => ({
        ...n,
        x: n.initX,
        y: n.initY,
        ...(n.group !== 'project' ? { fx: n.initX, fy: n.initY } : {}),
      })),
      // Spread prevents force-graph from mutating the shared GRAPH_DATA array
      links: [...GRAPH_DATA.links],
    };

    // ── Dynamic import (browser-only) ───────────────────────────────────────
    import('force-graph').then(({ default: ForceGraph }) => {
      if (destroyed) return;

      fg = (new ForceGraph(el) as any)
        .width(window.innerWidth)
        .height(window.innerHeight)
        .backgroundColor('#05080E')
        .graphData(graphData)
        .nodeCanvasObject(drawNode)
        .nodeCanvasObjectMode('replace')
        .nodePointerAreaPaint(paintHit)
        .linkColor(linkColor)
        .linkWidth(1)
        .linkCurvature(0.18)
        .cooldownTime(4000)
        .d3AlphaDecay(0.025)
        .d3VelocityDecay(0.4)
        .minZoom(0.2)
        .maxZoom(4)
        .onNodeHover((node: GraphNode | null) => {
          hoverRef.current = node?.id ?? null;
          document.body.style.cursor = node ? 'pointer' : 'default';
        })
        .onNodeClick((node: GraphNode) => {
          onNodeClickRef.current(node as NodeData);
        })
        .onBackgroundClick(() => {
          onBackgroundClickRef.current();
        })
        .onEngineStop(() => {
          if (!fg || destroyed) return;
          fg.zoomToFit(900, 72);
        });

      // Configure d3 forces (simulation initializes async — brief delay)
      setTimeout(() => {
        if (!fg || destroyed) return;

        fg.d3Force('charge')?.strength(-90);
        fg.d3Force('link')
          ?.distance((link: any) => {
            const src = link.source as GraphNode;
            const tgt = link.target as GraphNode;
            if (src.group === 'core'    || tgt.group === 'core')    return 130;
            if (src.group === 'cluster' || tgt.group === 'cluster') return 95;
            return 55;
          })
          .strength(0.6);

        fg.d3Force('center', null);

        const TARGETS: Record<string, { x: number; y: number }> = {
          core:       { x:    0, y:    0 },
          biomedical: { x: -200, y: -140 },
          ai:         { x:  200, y: -140 },
          data:       { x:  200, y:  140 },
          civic:      { x: -200, y:  140 },
        };

        fg.d3Force('clusterX', createClusterForce('x', TARGETS));
        fg.d3Force('clusterY', createClusterForce('y', TARGETS));

        setTimeout(() => { if (fg && !destroyed) fg.zoomToFit(600, 72); }, 600);
      }, 200);

      // Closure-scoped resize listener (no DOM property leak)
      onResize = () => {
        if (!fg || destroyed) return;
        fg.width(window.innerWidth).height(window.innerHeight);
      };
      window.addEventListener('resize', onResize);
    });

    return () => {
      destroyed = true;
      document.body.style.cursor = 'default';
      if (onResize) window.removeEventListener('resize', onResize);
      fg?._destructor?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: '100vw', height: '100vh', background: '#05080E', overflow: 'hidden' }}
    />
  );
}
