'use client';

import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { Cormorant_Garamond, JetBrains_Mono } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';
import InfoPanel from '@/components/InfoPanel';
import { NodeData, CLUSTER_COLORS } from '@/data/brainData';

// ─── Typography ───────────────────────────────────────────────────────────────
// Cormorant Garamond: ultra-refined literary serif for all display copy.
// Creates deliberate tension with the technical monospace labels.
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

// JetBrains Mono: developer-grade monospace for all system labels and metadata.
const mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

// ─── Graph (browser-only) ─────────────────────────────────────────────────────

const BrainGraph = dynamic(() => import('@/components/BrainGraph'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center" style={{ background: '#05080E' }}>
      <p className="text-[10px] uppercase tracking-[0.25em]" style={{ color: 'rgba(232,228,220,0.2)', fontFamily: 'monospace' }}>
        Mapping systems
      </p>
    </div>
  ),
});

// ─────────────────────────────────────────────────────────────────────────────

const LEGEND_ITEMS: { color: string; label: string }[] = [
  { color: CLUSTER_COLORS.biomedical, label: 'Neural & Biomedical' },
  { color: CLUSTER_COLORS.ai,         label: 'AI & Language' },
  { color: CLUSTER_COLORS.data,       label: 'Data Infrastructure' },
  { color: CLUSTER_COLORS.civic,      label: 'Civic Systems' },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function CognitiveArchitecturePage() {
  const [selectedNode, setSelectedNode] = useState<NodeData | null>(null);
  const [mode, setMode] = useState<'recruiter' | 'technical'>('recruiter');

  const handleNodeClick   = useCallback((node: NodeData) => setSelectedNode(node), []);
  // Single handler shared by both close button and background click
  const handleClose       = useCallback(() => setSelectedNode(null), []);

  return (
    <main
      className={`${cormorant.variable} ${mono.variable}`}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: '#05080E',
      }}
    >
      {/* ── Canvas ────────────────────────────────────────────────────── */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <BrainGraph
          onNodeClick={handleNodeClick}
          onBackgroundClick={handleClose}
          selectedNodeId={selectedNode?.id ?? null}
        />
      </div>

      {/* ── Dot-grid overlay — adds depth like scientific graph paper ──── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.028) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* ── Radial vignette ───────────────────────────────────────────── */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 2,
          background: 'radial-gradient(ellipse at 50% 50%, transparent 35%, rgba(5,8,14,0.88) 100%)',
        }}
      />

      {/* ── Header ────────────────────────────────────────────────────── */}
      <header
        style={{
          position: 'absolute', top: 0, left: 0, right: 0,
          zIndex: 10,
          display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between',
          padding: '28px 32px 0',
          pointerEvents: 'none',
        }}
      >
        {/* Identity block */}
        <div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(232,228,220,0.35)',
            marginBottom: 7,
          }}>
            Cognitive Architecture
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 23,
            color: 'rgba(232,228,220,0.78)',
            lineHeight: 1,
            letterSpacing: '0.005em',
          }}>
            Nikhil Sangamkar
          </h1>
        </div>

        {/* Mode toggle */}
        <div style={{ pointerEvents: 'auto' }}>
          <ModeToggle mode={mode} onChange={setMode} />
        </div>
      </header>

      {/* ── Bottom-left: legend + data signature ─────────────────────── */}
      <div
        style={{
          position: 'absolute', bottom: 28, left: 32,
          zIndex: 10, pointerEvents: 'none',
        }}
      >
        <div style={{ marginBottom: 18 }}>
          {LEGEND_ITEMS.map(({ color, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 7 }}>
              <span style={{
                display: 'inline-block',
                width: 18, height: 1,
                background: color,
                opacity: 0.65, flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 9,
                letterSpacing: '0.12em',
                color: 'rgba(232,228,220,0.38)',
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Research-paper–style figure caption */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 8,
          letterSpacing: '0.15em',
          color: 'rgba(232,228,220,0.16)',
        }}>
          21 nodes · 4 domains · 2026
        </p>
      </div>

      {/* ── Idle hint ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {!selectedNode && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 2.2, duration: 1.2 }}
            style={{
              position: 'absolute',
              bottom: 28,
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10,
              pointerEvents: 'none',
              fontFamily: 'var(--font-mono)',
              fontSize: 8,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: 'rgba(232,228,220,0.2)',
              whiteSpace: 'nowrap',
            }}
          >
            Select a node to explore
          </motion.p>
        )}
      </AnimatePresence>

      {/* ── Info panel ────────────────────────────────────────────────── */}
      <InfoPanel node={selectedNode} mode={mode} onClose={handleClose} />
    </main>
  );
}

// ─── Mode toggle ──────────────────────────────────────────────────────────────

function ModeToggle({
  mode,
  onChange,
}: {
  mode: 'recruiter' | 'technical';
  onChange: (m: 'recruiter' | 'technical') => void;
}) {
  const base: React.CSSProperties = {
    fontFamily: 'var(--font-mono)',
    fontSize: 8,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: '5px 0',
    transition: 'color 0.15s ease',
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <button
        onClick={() => onChange('recruiter')}
        style={{
          ...base,
          color: mode === 'recruiter' ? 'rgba(232,228,220,0.82)' : 'rgba(232,228,220,0.3)',
          borderBottom: mode === 'recruiter'
            ? '1px solid rgba(232,228,220,0.5)'
            : '1px solid transparent',
        }}
      >
        Overview
      </button>
      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 8, color: 'rgba(232,228,220,0.18)' }}>
        /
      </span>
      <button
        onClick={() => onChange('technical')}
        style={{
          ...base,
          color: mode === 'technical' ? 'rgba(232,228,220,0.82)' : 'rgba(232,228,220,0.3)',
          borderBottom: mode === 'technical'
            ? '1px solid rgba(232,228,220,0.5)'
            : '1px solid transparent',
        }}
      >
        Technical
      </button>
    </div>
  );
}
