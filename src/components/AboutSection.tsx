"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./AboutSection.module.css";

interface OrbitNode {
  id: "seo" | "media" | "data" | "content" | "cro" | "app" | "markets";
  name: string;
  category: string;
  metric: string;
  metricLabel: string;
  orbitRadius: number; // orbital ring distance
  angleOffset: number; // initial angle in degrees
  geographicIndex: string;
  protocol: string;
  deliverables: string[];
}

const ORBIT_NODES: OrbitNode[] = [
  {
    id: "seo",
    name: "SEO",
    category: "Technical Crawl & Semantic Intent",
    metric: "+140%",
    metricLabel: "Organic Search Equity",
    orbitRadius: 175,
    angleOffset: 25,
    geographicIndex: "GLOBAL CRAWL PROTOCOL",
    protocol: "Edge SSR rendering, server-side hreflang injection, entity schema graphs, and logarithmic topic clustering.",
    deliverables: ["Edge Crawl Optimization", "Multilingual Entity Graph", "Core Web Vitals Sub-1.2s"],
  },
  {
    id: "media",
    name: "MEDIA",
    category: "Algorithmic Bidding & Yield",
    metric: "-42%",
    metricLabel: "Cost-Per-Acquisition",
    orbitRadius: 175,
    angleOffset: 145,
    geographicIndex: "TIER-1 AD NETWORKS",
    protocol: "Server-side Conversion API (CAPI) telemetry, programmatic negative search pruning, and dynamic auction bid tiering.",
    deliverables: ["Server-Side CAPI Pipeline", "Algorithmic Real-Time Bid Rules", "Cross-Platform Attribution"],
  },
  {
    id: "data",
    name: "DATA",
    category: "First-Party Attribution & Pipeline",
    metric: "100%",
    metricLabel: "Client Asset Ownership",
    orbitRadius: 115,
    angleOffset: 80,
    geographicIndex: "CENTRAL DATA WAREHOUSE",
    protocol: "Direct BigQuery/Snowflake ingestion pipelines, cookieless event streaming, and deterministic multi-touch modeling.",
    deliverables: ["First-Party Warehouse Stream", "Deterministic Attribution Model", "Looker Telemetry Dashboards"],
  },
  {
    id: "content",
    name: "CONTENT",
    category: "Native Intent & Entity Architecture",
    metric: "40+",
    metricLabel: "Core Update Resilience",
    orbitRadius: 115,
    angleOffset: 210,
    geographicIndex: "LINGUISTIC EXTRACTION",
    protocol: "Native commercial idiom mapping, search intent matching, and information-gain entity models that survive AI Overviews.",
    deliverables: ["Intent-Matched Topic Hubs", "Entity Architecture Taxonomy", "Information-Gain Framework"],
  },
  {
    id: "cro",
    name: "CRO",
    category: "Multivariate Journey CRO",
    metric: "+38%",
    metricLabel: "Post-Click Funnel Lift",
    orbitRadius: 115,
    angleOffset: 310,
    geographicIndex: "ON-SITE CONVERSION CORE",
    protocol: "Sub-second edge landing pages, statistical multivariate testing, and intent-matched post-click checkout optimization.",
    deliverables: ["Edge Landing Architecture", "Statistical Multivariate CRO", "Funnel Leakage Elimination"],
  },
  {
    id: "app",
    name: "APP",
    category: "App Store Rank Velocity & ASO",
    metric: "Top 5",
    metricLabel: "Store Category Dominance",
    orbitRadius: 175,
    angleOffset: 270,
    geographicIndex: "14 APP STORE LOCALES",
    protocol: "ASO keyword velocity clustering, localized title/subtitle optimization, and retention event telemetry loops.",
    deliverables: ["ASO Keyword Velocity Engine", "Multivariate Screenshot CRO", "Retention Telemetry Loop"],
  },
  {
    id: "markets",
    name: "MARKETS",
    category: "50+ Sovereign Regional Catalogs",
    metric: "50+",
    metricLabel: "Sovereign Search Catalogs",
    orbitRadius: 235,
    angleOffset: 340,
    geographicIndex: "[NA 40°N] [EU 51°N] [APAC 1°N] [LATAM 23°S]",
    protocol: "Cross-border search intent extraction across 50+ sovereign markets without fabricated physical presence claims.",
    deliverables: ["50+ Sovereign Search Catalogs", "Native Linguistic Idiom Mining", "Regional Indexation Routing"],
  },
];

const GEO_INDICATORS = [
  { code: "NA", label: "40.71°N 74.00°W", territory: "North America (Tier 1)" },
  { code: "EU", label: "51.50°N 0.12°W", territory: "Western Europe & UK" },
  { code: "APAC", label: "1.35°N 103.81°E", territory: "Asia-Pacific Core" },
  { code: "LATAM", label: "23.55°S 46.63°W", territory: "Latin America" },
];

export default function AboutSection() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const [activeNodeId, setActiveNodeId] = useState<OrbitNode["id"]>("seo");
  const [pulseActive, setPulseActive] = useState<boolean>(false);

  const activeNode = ORBIT_NODES.find((n) => n.id === activeNodeId) || ORBIT_NODES[0];

  const handleSelectNode = (id: OrbitNode["id"]) => {
    setActiveNodeId(id);
    setPulseActive(true);
  };

  useEffect(() => {
    if (pulseActive) {
      const timer = setTimeout(() => setPulseActive(false), 800);
      return () => clearTimeout(timer);
    }
  }, [pulseActive]);

  return (
    <section
      id="about"
      className="darkCardSection theme-dark"
      ref={revealRef}
      aria-label="Adorca 360 Growth Orbit System"
    >
      <div className={styles.container}>
        {/* Editorial Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.orbitBadge}>
            <span className={styles.pulseBeacon} aria-hidden="true" />
            <span className={styles.badgeText}>System Architecture // Growth Orbit</span>
          </div>
          <h2 className={styles.sectionTitle}>
            The Adorca 360 <br />
            <span className={styles.accentWord}>Growth Orbit.</span>
          </h2>
          <p className={styles.sectionDesc}>
            Compounding commercial scale is not achieved through isolated tactics. Seven technical disciplines rotate around a central attribution core—engineered to eliminate fragmentation and generate measurable market dominance.
          </p>
        </div>

        {/* 2-Column Signature Orbit System: Orbit Canvas Left/Center + Telemetry Intelligence Console Right */}
        <div className={`${styles.systemGrid} ${isVisible ? styles.visible : ""}`}>
          {/* Left: The Signature Growth Orbit System Canvas */}
          <div className={styles.orbitCanvasContainer}>
            <div className={styles.orbitControlBar}>
              <div className={styles.terminalSignals}>
                <span className={styles.terminalDot} />
                <span className={styles.terminalLabel}>ORBIT TELEMETRY // SYSTEM HARMONIC: NOMINAL</span>
              </div>
              <span className={styles.verifiedTag}>Grounded Telemetry</span>
            </div>

            {/* Orbit SVG Visual Instrument */}
            <div className={styles.orbitVisualWrap}>
              <svg
                className={styles.orbitSvg}
                viewBox="0 0 540 540"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Interactive Adorca 360 Growth Orbit Diagram"
              >
                <defs>
                  {/* Central Core Gradient */}
                  <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#B7E56B" stopOpacity="0.35" />
                    <stop offset="60%" stopColor="#0B0D0F" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#0B0D0F" stopOpacity="1" />
                  </radialGradient>

                  <radialGradient id="nodeActiveGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#B7E56B" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#B7E56B" stopOpacity="0" />
                  </radialGradient>

                  {/* Signal Pulse Filter */}
                  <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Concentric Precision Orbital Rings */}
                {/* Outer Orbit: R=235 (Markets & Global Reach) */}
                <circle
                  cx="270"
                  cy="270"
                  r="235"
                  className={`${styles.orbitalRing} ${activeNode.orbitRadius === 235 ? styles.ringActive : ""}`}
                  strokeDasharray="4 6"
                />

                {/* Mid Orbit: R=175 (SEO, Media, App) */}
                <circle
                  cx="270"
                  cy="270"
                  r="175"
                  className={`${styles.orbitalRing} ${activeNode.orbitRadius === 175 ? styles.ringActive : ""}`}
                  strokeDasharray="3 5"
                />

                {/* Inner Orbit: R=115 (Data, Content, CRO) */}
                <circle
                  cx="270"
                  cy="270"
                  r="115"
                  className={`${styles.orbitalRing} ${activeNode.orbitRadius === 115 ? styles.ringActive : ""}`}
                  strokeDasharray="2 4"
                />

                {/* Subtle Radial Axis Markers */}
                <line x1="270" y1="20" x2="270" y2="520" className={styles.axisLine} />
                <line x1="20" y1="270" x2="520" y2="270" className={styles.axisLine} />

                {/* Dynamic Radiating Signal Beam to Active Node */}
                {(() => {
                  const rad = (activeNode.angleOffset * Math.PI) / 180;
                  const targetX = 270 + activeNode.orbitRadius * Math.cos(rad);
                  const targetY = 270 + activeNode.orbitRadius * Math.sin(rad);
                  return (
                    <line
                      x1="270"
                      y1="270"
                      x2={targetX}
                      y2={targetY}
                      className={`${styles.signalBeam} ${pulseActive ? styles.signalPulse : ""}`}
                    />
                  );
                })()}

                {/* Orbit Nodes */}
                {ORBIT_NODES.map((node) => {
                  const rad = (node.angleOffset * Math.PI) / 180;
                  const x = 270 + node.orbitRadius * Math.cos(rad);
                  const y = 270 + node.orbitRadius * Math.sin(rad);
                  const isActive = node.id === activeNodeId;

                  return (
                    <g
                      key={node.id}
                      className={`${styles.nodeGroup} ${isActive ? styles.nodeActive : ""}`}
                      onClick={() => handleSelectNode(node.id)}
                      role="button"
                      tabIndex={0}
                      aria-label={`Inspect ${node.name} orbital discipline`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleSelectNode(node.id);
                        }
                      }}
                    >
                      {/* Node Halo */}
                      {isActive && (
                        <circle
                          cx={x}
                          cy={y}
                          r="22"
                          fill="url(#nodeActiveGlow)"
                          className={styles.nodePulseRing}
                        />
                      )}

                      {/* Node Circle */}
                      <circle
                        cx={x}
                        cy={y}
                        r={isActive ? "14" : "10"}
                        className={styles.nodeBody}
                      />
                      <circle
                        cx={x}
                        cy={y}
                        r={isActive ? "5" : "3"}
                        className={styles.nodeCoreDot}
                      />

                      {/* Node Monospace Label */}
                      <text
                        x={x}
                        y={y > 270 ? y + 22 : y - 16}
                        textAnchor="middle"
                        className={styles.nodeSvgLabel}
                      >
                        {node.name}
                      </text>
                    </g>
                  );
                })}

                {/* CENTER: ADORCA 360 NUCLEUS */}
                <g className={styles.centerNucleus}>
                  {/* Central Glow Disc */}
                  <circle cx="270" cy="270" r="54" fill="url(#coreGlow)" />
                  <circle cx="270" cy="270" r="54" className={styles.coreBorder} />
                  <circle cx="270" cy="270" r="48" className={styles.coreInnerRing} strokeDasharray="3 3" />

                  {/* Authoritative Central Typography */}
                  <text
                    x="270"
                    y="262"
                    textAnchor="middle"
                    className={styles.coreBrandText}
                  >
                    ADORCA
                  </text>
                  <text
                    x="270"
                    y="284"
                    textAnchor="middle"
                    className={styles.coreNumText}
                  >
                    360
                  </text>
                </g>
              </svg>
            </div>

            {/* Geographic Coordinates Telemetry Strip */}
            <div className={styles.geoStrip} aria-label="Geographic Indicators">
              {GEO_INDICATORS.map((geo) => (
                <div key={geo.code} className={styles.geoItem}>
                  <span className={styles.geoCode}>[{geo.code}]</span>
                  <span className={styles.geoCoords}>{geo.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Orbital Telemetry & Discipline Console */}
          <div className={styles.telemetryConsole}>
            {/* Console Top Header */}
            <div className={styles.consoleHeader}>
              <div className={styles.consoleStatus}>
                <span className={styles.consoleBeacon} />
                <span className={styles.consoleProtocolLabel}>SELECTED DISCIPLINE</span>
              </div>
              <span className={styles.disciplineId}>DISCIPLINE // {activeNode.id.toUpperCase()}</span>
            </div>

            {/* Primary Headline & Impact */}
            <div className={styles.disciplineBanner}>
              <div className={styles.disciplineTitleRow}>
                <h3 className={styles.disciplineTitle}>{activeNode.name}</h3>
                <span className={styles.disciplineCategory}>{activeNode.category}</span>
              </div>

              {/* Anchor Metric */}
              <div className={styles.metricAnchorBox}>
                <div className={styles.metricValGroup}>
                  <span className={styles.metricVal}>{activeNode.metric}</span>
                  <span className={styles.metricLabel}>{activeNode.metricLabel}</span>
                </div>
                <div className={styles.geoTag}>
                  <span className={styles.geoTagLabel}>LOCALE / ROUTING:</span>
                  <span className={styles.geoTagValue}>{activeNode.geographicIndex}</span>
                </div>
              </div>
            </div>

            {/* Architecture Protocol Specification */}
            <div className={styles.protocolBlock}>
              <h4 className={styles.protocolBlockTitle}>Architecture Specification:</h4>
              <p className={styles.protocolText}>{activeNode.protocol}</p>
            </div>

            {/* Core Deliverables */}
            <div className={styles.deliverablesBlock}>
              <h4 className={styles.deliverablesBlockTitle}>Core Deliverables:</h4>
              <ul className={styles.deliverablesList}>
                {activeNode.deliverables.map((item, idx) => (
                  <li key={idx} className={styles.deliverableItem}>
                    <span className={styles.checkMarker}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 7-Discipline Quick Selector Bar */}
            <div className={styles.quickSelectorWrap}>
              <span className={styles.quickSelectorLabel}>INSPECT ORBITAL DISCIPLINES:</span>
              <div className={styles.quickPills} role="tablist">
                {ORBIT_NODES.map((node) => {
                  const isSelected = node.id === activeNodeId;
                  return (
                    <button
                      key={node.id}
                      role="tab"
                      aria-selected={isSelected}
                      className={`${styles.pillBtn} ${isSelected ? styles.pillSelected : ""}`}
                      onClick={() => handleSelectNode(node.id)}
                    >
                      {node.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Strategic Partner Commitment */}
            <div className={styles.ownershipCard}>
              <div className={styles.ownershipTop}>
                <span className={styles.ownershipBadge}>100% ATTRIBUTION GUARANTEE</span>
                <span className={styles.ownershipTag}>Zero Junior Hand-Offs</span>
              </div>
              <p className={styles.ownershipDesc}>
                You retain full administrative ownership of every Looker dashboard, tag manager, and conversion API. Direct collaboration with senior growth engineers on every sprint.
              </p>
              <div className={styles.actionRow}>
                <Link href="#contact" className="btn btn-primary">
                  Consult With Senior Strategist →
                </Link>
                <Link href="/case-studies" className="btn btn-secondary">
                  View Case Evidence
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
