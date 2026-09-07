"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./Hero.module.css";

interface SignalNode {
  id: string;
  step: string;
  name: string;
  sublabel: string;
  metric: string;
  metricLabel: string;
  desc: string;
  deliverables: string;
  x: number;
  y: number;
}

const SIGNAL_NODES: SignalNode[] = [
  {
    id: "search",
    step: "01",
    name: "SEARCH",
    sublabel: "Algorithmic Crawl & Multi-Region Indexing",
    metric: "50+ Markets",
    metricLabel: "Active Global Indexation",
    desc: "Detecting raw organic and transactional search demand across international ccTLD search engines.",
    deliverables: "Technical Crawl Audit • Global Hreflang",
    x: 220,
    y: 52,
  },
  {
    id: "content",
    step: "02A",
    name: "CONTENT",
    sublabel: "Semantic Authority & Entity Clustering",
    metric: "+140%",
    metricLabel: "Organic Visibility Uplift",
    desc: "Establishing structural search authority through programmatic entity graphs and authoritative content.",
    deliverables: "Keyword Architecture • Topic Graphs",
    x: 82,
    y: 142,
  },
  {
    id: "paid",
    step: "02B",
    name: "PAID",
    sublabel: "High-Intent Real-Time Syndication",
    metric: "-42% CPA",
    metricLabel: "Cost-Per-Acquisition Drop",
    desc: "Deploying automated real-time bidding and precision search arbitrage to capture in-market buyers.",
    deliverables: "Google Ads • Amazon Partner • Programmatic",
    x: 358,
    y: 142,
  },
  {
    id: "core",
    step: "CORE",
    name: "ADORCA 360",
    sublabel: "Growth Infrastructure Engine",
    metric: "12+ Yrs",
    metricLabel: "Algorithmic Track Record",
    desc: "The central intelligence hub unifying acquisition signals, behavioral telemetry, and compounding growth systems.",
    deliverables: "Unified Architecture • Cross-Pillar Telemetry",
    x: 220,
    y: 230,
  },
  {
    id: "data",
    step: "03A",
    name: "DATA",
    sublabel: "Server-Side Attribution & Analytics",
    metric: "100%",
    metricLabel: "Client Data Ownership",
    desc: "First-party measurement infrastructure ensuring un-sampled conversion telemetry and transparent equity.",
    deliverables: "Server-Side GA4 • First-Party Warehouses",
    x: 82,
    y: 318,
  },
  {
    id: "cro",
    step: "03B",
    name: "CRO",
    sublabel: "High-Velocity Edge Platform",
    metric: "2.4x",
    metricLabel: "Funnel Conversion Lift",
    desc: "Directing acquired traffic into blazing-fast Next.js funnels and frictionless checkout flows.",
    deliverables: "Next.js Web Systems • Edge Middleware",
    x: 358,
    y: 318,
  },
  {
    id: "revenue",
    step: "04",
    name: "REVENUE",
    sublabel: "Compounding Enterprise Equity",
    metric: "100%",
    metricLabel: "Client Asset Ownership",
    desc: "Delivering sustainable, measurable enterprise revenue compounding through integrated search, media, and owned data.",
    deliverables: "First-Party Equity • Compounding ARR",
    x: 220,
    y: 408,
  },
];

export default function Hero() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const [activeNodeId, setActiveNodeId] = useState<string>("search");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-cycle through nodes slowly unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveNodeId((curr) => {
        const idx = SIGNAL_NODES.findIndex((n) => n.id === curr);
        const nextIdx = (idx + 1) % SIGNAL_NODES.length;
        return SIGNAL_NODES[nextIdx].id;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeNode =
    SIGNAL_NODES.find((n) => n.id === activeNodeId) || SIGNAL_NODES[0];

  return (
    <section className={styles.heroSection} ref={revealRef} aria-label="Hero Introduction">
      <div className="container">
        <div className={styles.grid}>
          {/* Left Column: Dominant Editorial Headline & Grounded Value Proposition */}
          <div className={`${styles.contentCol} ${isVisible ? styles.visible : ""}`}>
            {/* Context Badge */}
            <div className={`${styles.badgeRow} ${styles.staggerBadge}`}>
              <span className={styles.studioBadge}>
                <span className={styles.studioDot} aria-hidden="true" />
                Performance Growth Studio
              </span>
              <span className={styles.regionPill}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z" />
                </svg>
                50+ Markets
              </span>
            </div>

            {/* Masked Line Reveal Headline (No individual word animation) */}
            <h1 className={styles.heroTitle} aria-label="Turn Digital Attention Into Growth.">
              <span className={styles.titleMask}>
                <span className={`${styles.titleLine} ${styles.line1}`}>TURN DIGITAL</span>
              </span>
              <span className={styles.titleMask}>
                <span className={`${styles.titleLine} ${styles.line2}`}>ATTENTION</span>
              </span>
              <span className={styles.titleMask}>
                <span className={`${styles.titleLine} ${styles.line3} ${styles.highlightLine}`}>INTO GROWTH.</span>
              </span>
            </h1>

            {/* Clear Positioning Subheadline */}
            <p className={`${styles.heroDesc} ${styles.staggerDesc}`}>
              We combine intelligent SEO, performance marketing, content strategy and technology to help ambitious brands scale faster across global markets.
            </p>

            {/* Clear Primary & Secondary CTAs */}
            <div className={`${styles.ctaGroup} ${styles.staggerCta}`}>
              <Link href="/#opportunity-tool" className={`btn ${styles.growthPrimaryBtn}`}>
                Launch Growth Diagnostic
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/case-studies" className={`btn ${styles.growthSecondaryBtn}`}>
                Explore Our Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>

            {/* Grounded Telemetry Row (Why Adorca is Different) */}
            <div className={`${styles.telemetryRow} ${styles.staggerTelemetry}`}>
              <div className={styles.telemetryItem}>
                <span className={styles.telemetryTag}>Scope</span>
                <span className={styles.telemetryVal}>50+ Global Markets</span>
              </div>
              <div className={styles.telemetryDivider} aria-hidden="true" />
              <div className={styles.telemetryItem}>
                <span className={styles.telemetryTag}>Pedigree</span>
                <span className={styles.telemetryVal}>12+ Yrs Algorithmic Track Record</span>
              </div>
              <div className={styles.telemetryDivider} aria-hidden="true" />
              <div className={styles.telemetryItem}>
                <span className={styles.telemetryTag}>Attribution</span>
                <span className={styles.telemetryVal}>100% Client Data Ownership</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Growth Signal Composition (Background Photo + Dark Overlay + Foreground SVG) */}
          <div
            className={`${styles.visualCol} ${isVisible ? styles.visible : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={styles.signalCard} aria-label="Adorca Growth Signal Network">
              {/* Layer 0: Background Photographic Layer (IMAGE A: Human Context) */}
              <div className={styles.bgPhotoLayer}>
                <Image
                  src="/images/hero-editorial.jpg"
                  alt="Professional reviewing performance analytics and growth data"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 46vw, 540px"
                  className={styles.bgPhotoImage}
                />
              </div>

              {/* Layer 1: Dark / Contrast Overlay for Guaranteed SVG Legibility */}
              <div className={styles.darkContrastOverlay} aria-hidden="true" />

              {/* Layer 2: Foreground Growth Signal Interface & SVG Network */}
              <div className={styles.foregroundContent}>
                {/* Technical Window Header */}
                <div className={styles.signalHeader}>
                  <div className={styles.signalHeaderLeft}>
                    <span className={styles.signalTerminalDot} />
                    <span className={styles.signalSystemTitle}>ADORCA GROWTH SIGNAL</span>
                  </div>
                  <span className={styles.signalStatusBadge}>
                    <span className={styles.signalPulse} aria-hidden="true" />
                    FLOW ACTIVE
                  </span>
                </div>

                {/* Interactive Vector Network Diagram */}
                <div className={styles.diagramWrapper}>
                  <svg
                    className={styles.signalSvg}
                    viewBox="0 0 440 460"
                    fill="none"
                    aria-label="Interactive Growth Signal Network Diagram"
                  >
                    <defs>
                      {/* Radial Glow Filter for active node */}
                      <radialGradient id="signalGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="var(--color-adorca-signal)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="var(--color-adorca-signal)" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="var(--color-adorca-signal)" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="var(--color-adorca-signal)" stopOpacity="0" />
                      </radialGradient>
                    </defs>

                    {/* Concentric / Perimeter faint ambient orbit */}
                    <ellipse cx="220" cy="230" rx="195" ry="195" className={styles.ambientOrbit} />
                    <ellipse cx="220" cy="230" rx="120" ry="120" className={styles.ambientOrbitInner} />

                    {/* Central Faint Flow Axis */}
                    <line x1="220" y1="52" x2="220" y2="408" className={styles.axisLine} />

                    {/* ── Network Vector Connection Hairlines ── */}
                    {/* Upper Loop */}
                    <line x1="220" y1="52" x2="82" y2="142" className={styles.netLine} />
                    <line x1="220" y1="52" x2="358" y2="142" className={styles.netLine} />
                    <line x1="82" y1="142" x2="220" y2="230" className={styles.netLine} />
                    <line x1="358" y1="142" x2="220" y2="230" className={styles.netLine} />

                    {/* Lower Loop */}
                    <line x1="220" y1="230" x2="82" y2="318" className={styles.netLine} />
                    <line x1="220" y1="230" x2="358" y2="318" className={styles.netLine} />
                    <line x1="82" y1="318" x2="220" y2="408" className={styles.netLine} />
                    <line x1="358" y1="318" x2="220" y2="408" className={styles.netLine} />

                    {/* ── Traveling Animated Signal Beams ── */}
                    {/* Left Stream: SEARCH -> CONTENT -> ADORCA 360 -> DATA -> REVENUE */}
                    <polyline
                      points="220,52 82,142 220,230 82,318 220,408"
                      className={`${styles.activeBeam} ${styles.beamLeft}`}
                    />

                    {/* Right Stream: SEARCH -> PAID -> ADORCA 360 -> CRO -> REVENUE */}
                    <polyline
                      points="220,52 358,142 220,230 358,318 220,408"
                      className={`${styles.activeBeam} ${styles.beamRight}`}
                    />

                    {/* ── Center Core Aura (ADORCA 360) ── */}
                    <circle cx="220" cy="230" r="48" fill="url(#coreGlow)" />
                    <circle cx="220" cy="230" r="32" className={styles.coreHubRing} />
                    <circle cx="220" cy="230" r="28" className={styles.coreHubInner} />

                    {/* ── Render Interactive Nodes ── */}
                    {SIGNAL_NODES.map((node) => {
                      const isActive = node.id === activeNode.id;
                      const isCore = node.id === "core";

                      return (
                        <g
                          key={node.id}
                          className={`${styles.nodeGroup} ${isActive ? styles.nodeActive : ""}`}
                          onClick={() => setActiveNodeId(node.id)}
                          role="button"
                          tabIndex={0}
                          aria-pressed={isActive}
                          aria-label={`Node ${node.name}: ${node.sublabel}`}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" || e.key === " ") {
                              e.preventDefault();
                              setActiveNodeId(node.id);
                            }
                          }}
                        >
                          {/* Active Selection Glow Ring */}
                          {isActive && (
                            <circle
                              cx={node.x}
                              cy={node.y}
                              r={isCore ? 38 : 26}
                              fill="url(#signalGlow)"
                              className={styles.nodeGlowPulse}
                            />
                          )}

                          {/* Outer Precision Ring */}
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={isCore ? 28 : 15}
                            className={isCore ? styles.coreRing : styles.nodeOuterRing}
                          />

                          {/* Inner Solid Core */}
                          <circle
                            cx={node.x}
                            cy={node.y}
                            r={isCore ? 14 : 5}
                            className={isCore ? styles.coreSolidDot : styles.nodeInnerDot}
                          />

                          {/* Label Placements with legibility backing */}
                          {isCore ? (
                            <g className={styles.coreTextGroup}>
                              <text x={node.x} y={node.y - 3} textAnchor="middle" className={styles.coreLabelTop}>
                                ADORCA
                              </text>
                              <text x={node.x} y={node.y + 9} textAnchor="middle" className={styles.coreLabelBottom}>
                                360
                              </text>
                            </g>
                          ) : node.y < 100 ? (
                            // Top Apex (SEARCH): Label above node
                            <text x={node.x} y={node.y - 20} textAnchor="middle" className={styles.nodeLabel}>
                              {node.name}
                            </text>
                          ) : node.y > 380 ? (
                            // Bottom Apex (REVENUE): Label below node
                            <text x={node.x} y={node.y + 26} textAnchor="middle" className={styles.nodeLabel}>
                              {node.name}
                            </text>
                          ) : node.x < 150 ? (
                            // Left nodes (CONTENT, DATA): Label anchored to the left
                            <text x={node.x - 22} y={node.y + 4} textAnchor="end" className={styles.nodeLabel}>
                              {node.name}
                            </text>
                          ) : (
                            // Right nodes (PAID, CRO): Label anchored to the right
                            <text x={node.x + 22} y={node.y + 4} textAnchor="start" className={styles.nodeLabel}>
                              {node.name}
                            </text>
                          )}
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Active Node Telemetry Readout (Grounded Evidence) */}
                <div
                  id={`hero-panel-${activeNode.id}`}
                  role="region"
                  aria-live="polite"
                  className={styles.telemetryFooter}
                >
                  <div className={styles.telemetryHeader}>
                    <div className={styles.telemetryHeaderLeft}>
                      <span className={styles.telemetryActiveStage}>
                        NODE {activeNode.step} &bull; {activeNode.name}
                      </span>
                      <span className={styles.telemetrySublabel}>{activeNode.sublabel}</span>
                    </div>
                    <div className={styles.telemetryChip}>
                      <span className={styles.chipVal}>{activeNode.metric}</span>
                    </div>
                  </div>

                  <p className={styles.telemetryDescription}>{activeNode.desc}</p>

                  <div className={styles.telemetryDeliverables}>
                    <span className={styles.deliverablesLabel}>EVIDENCE:</span>
                    <span className={styles.deliverablesText}>{activeNode.deliverables}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
