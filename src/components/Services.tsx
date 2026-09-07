"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./Services.module.css";

export type SystemNodeId = "search" | "discovery" | "content" | "media" | "conversion" | "revenue" | "data";

interface ServiceCapability {
  id: string;
  nodeRef: SystemNodeId;
  title: string;
  desc: string;
  deliverables: string[];
  systemRole: string;
}

interface ServicePillar {
  id: "acquire" | "amplify" | "convert";
  pillarNum: string;
  title: string;
  subtitle: string;
  summary: string;
  nodeIds: SystemNodeId[];
  capabilities: ServiceCapability[];
}

const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: "acquire",
    pillarNum: "01",
    title: "ACQUIRE",
    subtitle: "Search, Discovery & Algorithmic Acquisition",
    summary:
      "Capture high-intent buyers across organic crawl architectures, ccTLD regional discovery, and algorithmic programmatic bidding with zero budget leakage.",
    nodeIds: ["search", "discovery", "media"],
    capabilities: [
      {
        id: "seo",
        nodeRef: "search",
        title: "Technical SEO & Indexing",
        desc: "Restructure crawl efficiency, resolve hreflang conflicts, and guarantee Core Web Vitals excellence to dominate top search positions.",
        deliverables: ["Architecture Audits", "Hreflang Configuration", "Core Web Vitals Sprint"],
        systemRole: "Engineers the foundation of raw search demand and multi-language indexation.",
      },
      {
        id: "leadgen",
        nodeRef: "discovery",
        title: "Lead Generation Pipelines",
        desc: "Acquire verified, high-converting B2B and consumer prospects through custom landing funnels and programmatic audience matching.",
        deliverables: ["High-Intent Inbound Funnels", "Conversion Flow Optimization", "Lead Scoring Models"],
        systemRole: "Transforms high-intent discovery queries into qualified prospect records.",
      },
      {
        id: "programmatic",
        nodeRef: "media",
        title: "Programmatic Advertising",
        desc: "Target the exact audience segments at scale using automated, algorithmic real-time bid optimization on top ad networks.",
        deliverables: ["Real-Time Bidding", "High-ROAS Allocation", "Audience Retargeting"],
        systemRole: "Scales paid acquisition velocity while feeding real-time audience signals to conversion.",
      },
      {
        id: "global",
        nodeRef: "discovery",
        title: "Global Growth Marketing",
        desc: "Scale your footprint across 50+ international markets with localized regional bidding and multilingual search architectures.",
        deliverables: ["Cross-Border Strategy", "International SEO", "Regional Intent Mapping"],
        systemRole: "Unlocks international search markets without relying on fake regional claims.",
      },
    ],
  },
  {
    id: "amplify",
    pillarNum: "02",
    title: "AMPLIFY",
    subtitle: "Brand Authority & Demand Stimulation",
    summary:
      "Transform search visibility into compounding brand equity through verified creator partnerships, social authority, and multi-channel marketing consulting.",
    nodeIds: ["content", "media"],
    capabilities: [
      {
        id: "strategy",
        nodeRef: "content",
        title: "Digital Marketing Strategy",
        desc: "Deploy full-funnel marketing campaigns backed by data-driven consulting, channel priority scoring, and continuous ROI audits.",
        deliverables: ["Cross-Channel Strategy", "Campaign Audits", "Growth Benchmarking"],
        systemRole: "Orchestrates cross-channel priorities to eliminate siloed marketing waste.",
      },
      {
        id: "social",
        nodeRef: "content",
        title: "Social Media Marketing",
        desc: "Build engaged digital communities and orchestrate organic audience acquisition campaigns across leading digital platforms.",
        deliverables: ["Community Architecture", "Content Distribution", "Organic Engagement"],
        systemRole: "Stimulates organic brand affinity and compounds authoritative backlink velocity.",
      },
      {
        id: "influencer",
        nodeRef: "media",
        title: "Influencer & Creator Marketing",
        desc: "Partner with premier creators and industry voices to amplify your brand message, build trust, and generate direct referral sales.",
        deliverables: ["Creator Network Outreach", "Attribution Tracking", "Sponsored Campaigns"],
        systemRole: "Leverages authenticated social trust to bypass advertising banner fatigue.",
      },
    ],
  },
  {
    id: "convert",
    pillarNum: "03",
    title: "CONVERT",
    subtitle: "Revenue Systems & First-Party Data Loops",
    summary:
      "Turn incoming clicks into compounding revenue with blazing-fast Next.js platforms, App Store category dominance, and rigorous funnel experimentation.",
    nodeIds: ["conversion", "revenue", "data"],
    capabilities: [
      {
        id: "webdev",
        nodeRef: "conversion",
        title: "Website Design & Development",
        desc: "Launch blazing-fast, search-optimized Next.js web applications styled cleanly to maximize engagement, retention, and conversion rates.",
        deliverables: ["Next.js Edge Architecture", "Responsive UI Systems", "Speed Optimization"],
        systemRole: "Removes technical conversion friction at the edge with sub-second page loads.",
      },
      {
        id: "appboosters",
        nodeRef: "revenue",
        title: "App & Revenue Boosters",
        desc: "Accelerate mobile application downloads and in-app subscription revenue with advanced App Store Optimization (ASO) and user loops.",
        deliverables: ["ASO Keyword Velocity", "Store Page A/B Testing", "Monetization Uplift"],
        systemRole: "Accelerates in-app lifetime value and passes first-party conversion data back into Search.",
      },
    ],
  },
];

interface SystemNodeData {
  id: SystemNodeId;
  label: string;
  subtitle: string;
  lifecycleStage: string;
  stageNum: string;
  metric: string;
  spec: string;
  x: number;
  y: number;
}

const SYSTEM_NODES: SystemNodeData[] = [
  {
    id: "search",
    label: "SEARCH",
    subtitle: "Technical Crawl & Indexation",
    lifecycleStage: "DISCOVER",
    stageNum: "01",
    metric: "+140% Crawl Yield",
    spec: "Core Web Vitals LCP < 1.1s // Hreflang Canonical Routing & Entity Schema",
    x: 180,
    y: 38,
  },
  {
    id: "discovery",
    label: "DISCOVERY",
    subtitle: "Regional Intent & Taxonomy",
    lifecycleStage: "DISCOVER",
    stageNum: "01",
    metric: "50+ Global Markets",
    spec: "Regional Intent Clustering & ccTLD Multi-Jurisdiction Indexation",
    x: 180,
    y: 108,
  },
  {
    id: "content",
    label: "CONTENT",
    subtitle: "Semantic Entity Hubs",
    lifecycleStage: "ATTRACT",
    stageNum: "02",
    metric: "99.4% Topic Authority",
    spec: "Semantic Knowledge Graphs // Elimination of Keyword Cannibalization",
    x: 95,
    y: 185,
  },
  {
    id: "media",
    label: "MEDIA",
    subtitle: "Programmatic Bidding",
    lifecycleStage: "ATTRACT",
    stageNum: "02",
    metric: "12ms Bid Latency",
    spec: "Algorithmic ROAS Optimization Across Top Direct Advertising Exchanges",
    x: 265,
    y: 185,
  },
  {
    id: "conversion",
    label: "CONVERSION",
    subtitle: "High-Velocity Edge Funnels",
    lifecycleStage: "CONVERT",
    stageNum: "03",
    metric: "2.4x Funnel Velocity",
    spec: "Sub-Second Next.js Edge SSR // Systematic Micro-Friction Elimination",
    x: 180,
    y: 275,
  },
  {
    id: "revenue",
    label: "REVENUE",
    subtitle: "Compounding Growth & Retention",
    lifecycleStage: "RETAIN",
    stageNum: "04",
    metric: "+38% LTV Compounding",
    spec: "In-App Subscription Velocity // Multi-Channel Retention Loops",
    x: 180,
    y: 350,
  },
  {
    id: "data",
    label: "DATA",
    subtitle: "Server-Side GA4 Attribution",
    lifecycleStage: "SCALE",
    stageNum: "05",
    metric: "100% 1st-Party Equity",
    spec: "Server-Side Direct Telemetry Feeds First-Party Signals Back into Search",
    x: 180,
    y: 425,
  },
];

const LIFECYCLE_STAGES = [
  { id: "discover", num: "01", label: "DISCOVER", nodeIds: ["search", "discovery"] as SystemNodeId[] },
  { id: "attract", num: "02", label: "ATTRACT", nodeIds: ["content", "media"] as SystemNodeId[] },
  { id: "convert", num: "03", label: "CONVERT", nodeIds: ["conversion"] as SystemNodeId[] },
  { id: "retain", num: "04", label: "RETAIN", nodeIds: ["revenue"] as SystemNodeId[] },
  { id: "scale", num: "05", label: "SCALE", nodeIds: ["data"] as SystemNodeId[] },
];

export default function Services() {
  const [activePillarId, setActivePillarId] = useState<"acquire" | "amplify" | "convert">("acquire");
  const [activeNodeId, setActiveNodeId] = useState<SystemNodeId>("search");
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  const activePillar =
    SERVICE_PILLARS.find((p) => p.id === activePillarId) || SERVICE_PILLARS[0];

  const currentNode =
    SYSTEM_NODES.find((n) => n.id === activeNodeId) || SYSTEM_NODES[0];

  // Handle clicking a node in the schematic or continuum
  const handleNodeClick = (nodeId: SystemNodeId) => {
    setActiveNodeId(nodeId);
    const parentPillar = SERVICE_PILLARS.find((p) => p.nodeIds.includes(nodeId));
    if (parentPillar && parentPillar.id !== activePillarId) {
      setActivePillarId(parentPillar.id);
    }
  };

  return (
    <section id="services" className="pageSection theme-warm" ref={revealRef} aria-label="Connected Growth Infrastructure and Capabilities">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerTag}>
            <span className={styles.tagDot} aria-hidden="true" />
            <span className={styles.tagText}>Connected Growth Infrastructure</span>
          </div>
          <h2 className={styles.sectionTitle}>
            An Engineered System. <br />
            <span className={styles.titleSub}>Not Six Disconnected Services.</span>
          </h2>
          <p className={styles.sectionDesc}>
            Traditional agencies sell fragmented tactical retainers. We deploy a closed-loop acquisition infrastructure where every search query, media impression, and conversion feeds first-party data directly back into your compounding search equity.
          </p>
        </div>

        {/* 3-Pillar Architectural Index Tabs */}
        <div className={styles.pillarNav} role="tablist" aria-label="Capabilities System Pillars">
          {SERVICE_PILLARS.map((p) => {
            const isActive = p.id === activePillar.id;
            return (
              <button
                key={p.id}
                type="button"
                role="tab"
                id={`pillar-tab-${p.id}`}
                aria-selected={isActive}
                aria-controls={`pillar-panel-${p.id}`}
                className={`${styles.pillarTab} ${isActive ? styles.pillarTabActive : ""}`}
                onClick={() => {
                  setActivePillarId(p.id);
                  setActiveNodeId(p.nodeIds[0]);
                }}
              >
                <div className={styles.tabTop}>
                  <span className={styles.tabNum}>{p.pillarNum}</span>
                  <span className={styles.tabActiveMarker} aria-hidden="true" />
                </div>
                <span className={styles.tabTitle}>{p.title}</span>
                <span className={styles.tabSubtitle}>{p.subtitle}</span>
              </button>
            );
          })}
        </div>

        {/* Asymmetric System Console: Left Schematic Engine / Right Capabilities Ledger */}
        <div className={`${styles.systemWorkspace} ${isVisible ? styles.visible : ""}`}>
          {/* Left Column: Interactive Closed-Loop System Schematic with Photographic Asset */}
          <div className={styles.schematicCol}>
            <div className={styles.schematicCard} aria-label="Closed-Loop Growth Infrastructure Diagram">
              
              {/* Approved Photographic Moment 1: Precision Hardware Transceiver */}
              <div className={styles.hardwareAperture}>
                <div className={styles.hardwareMediaWrap}>
                  <Image
                    src="/images/infrastructure-device.jpg"
                    alt="Physical Optical Infrastructure Transceiver - Coiled Fiber Optic Closed-Loop Bus"
                    width={560}
                    height={240}
                    className={styles.hardwareImg}
                    priority={false}
                  />
                  <div className={styles.hardwareOverlay}>
                    <div className={styles.hardwareHeader}>
                      <div className={styles.hardwareStatusTag}>
                        <span className={styles.hardwareDot} aria-hidden="true" />
                        <span className={styles.hardwareLabel}>PHYSICAL CARRIER LAYER</span>
                      </div>
                      <span className={styles.hardwareFreq}>1550nm OPTICAL BUS</span>
                    </div>
                    <div className={styles.hardwareFooter}>
                      <span className={styles.hardwareSpec}>ASSET 08 // SINGLE-MODE FIBER TRANSCEIVER</span>
                      <span className={styles.hardwarePing}>SYNC: 1.2ms</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical-to-Logical Signal Coupling Conduit */}
              <div className={styles.conduitCoupling} aria-hidden="true">
                <div className={styles.couplerLine} />
                <span className={styles.couplerTag}>LOGICAL CLOSED-LOOP BUS</span>
                <div className={styles.couplerLine} />
              </div>

              {/* Lifecycle Continuum Ribbon: DISCOVER -> ATTRACT -> CONVERT -> RETAIN -> SCALE */}
              <div className={styles.continuumSection} aria-label="Lifecycle Continuum">
                <div className={styles.continuumLabelRow}>
                  <span className={styles.continuumMeta}>LIFECYCLE CONTINUUM</span>
                  <span className={styles.continuumActiveStage}>
                    STAGE {currentNode.stageNum} // {currentNode.lifecycleStage}
                  </span>
                </div>
                <div className={styles.continuumRibbon} role="tablist" aria-label="Growth Lifecycle Stages">
                  {LIFECYCLE_STAGES.map((stage) => {
                    const isStageActive = stage.nodeIds.includes(activeNodeId);
                    return (
                      <button
                        key={stage.id}
                        type="button"
                        className={`${styles.continuumStep} ${isStageActive ? styles.continuumStepActive : ""}`}
                        onClick={() => handleNodeClick(stage.nodeIds[0])}
                        aria-label={`Jump to stage ${stage.num}: ${stage.label}`}
                      >
                        <span className={styles.continuumNum}>{stage.num}</span>
                        <span className={styles.continuumTitle}>{stage.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Schematic Header */}
              <div className={styles.schematicHeader}>
                <div className={styles.schematicHeaderLeft}>
                  <span className={styles.liveIndicator} />
                  <span className={styles.schematicTitle}>CLOSED-LOOP REVENUE CIRCUIT</span>
                </div>
                <span className={styles.schematicLoopTag}>COMPOUNDING CYCLE</span>
              </div>

              {/* SVG Schematic Canvas */}
              <div className={styles.svgCanvasWrapper}>
                <svg viewBox="0 0 360 480" className={styles.schematicSvg} fill="none" aria-label="Interactive Node Circuit Diagram">
                  <defs>
                    <linearGradient id="returnConduitGrad" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="var(--color-primary-text)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="var(--color-adorca-signal)" stopOpacity="0.9" />
                    </linearGradient>
                  </defs>

                  {/* 1. Spine: SEARCH -> DISCOVERY */}
                  <line x1="180" y1="52" x2="180" y2="92" stroke="rgba(17, 19, 21, 0.20)" strokeWidth="1.5" />
                  <polyline points="177 88, 180 94, 183 88" stroke="rgba(17, 19, 21, 0.40)" strokeWidth="1.5" strokeLinecap="round" />

                  {/* 2. Fork: DISCOVERY -> CONTENT & MEDIA */}
                  {/* Left branch to CONTENT */}
                  <path d="M 180 124 C 180 148, 95 148, 95 170" stroke="rgba(17, 19, 21, 0.20)" strokeWidth="1.5" />
                  <polyline points="92 165, 95 172, 98 165" stroke="rgba(17, 19, 21, 0.40)" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Right branch to MEDIA */}
                  <path d="M 180 124 C 180 148, 265 148, 265 170" stroke="rgba(17, 19, 21, 0.20)" strokeWidth="1.5" />
                  <polyline points="262 165, 265 172, 268 165" stroke="rgba(17, 19, 21, 0.40)" strokeWidth="1.5" strokeLinecap="round" />

                  {/* Parallel Synergy Bridge: CONTENT <---> MEDIA */}
                  <line x1="135" y1="185" x2="225" y2="185" stroke="rgba(17, 19, 21, 0.18)" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="180" y="181" textAnchor="middle" fill="#6E716F" fontSize="8.5" fontFamily="var(--font-mono)" letterSpacing="0.08em">
                    SYNERGY
                  </text>

                  {/* 3. Reconverge: CONTENT & MEDIA -> CONVERSION */}
                  {/* Left branch from CONTENT */}
                  <path d="M 95 200 C 95 235, 180 235, 180 258" stroke="rgba(17, 19, 21, 0.20)" strokeWidth="1.5" />

                  {/* Right branch from MEDIA */}
                  <path d="M 265 200 C 265 235, 180 235, 180 258" stroke="rgba(17, 19, 21, 0.20)" strokeWidth="1.5" />
                  <polyline points="177 254, 180 260, 183 254" stroke="rgba(17, 19, 21, 0.40)" strokeWidth="1.5" strokeLinecap="round" />

                  {/* 4. Spine: CONVERSION -> REVENUE */}
                  <line x1="180" y1="290" x2="180" y2="335" stroke="rgba(17, 19, 21, 0.20)" strokeWidth="1.5" />
                  <polyline points="177 331, 180 337, 183 331" stroke="rgba(17, 19, 21, 0.40)" strokeWidth="1.5" strokeLinecap="round" />

                  {/* 5. Spine: REVENUE -> DATA */}
                  <line x1="180" y1="365" x2="180" y2="410" stroke="rgba(17, 19, 21, 0.20)" strokeWidth="1.5" />
                  <polyline points="177 406, 180 412, 183 406" stroke="rgba(17, 19, 21, 0.40)" strokeWidth="1.5" strokeLinecap="round" />

                  {/* 6. CLOSED LOOP CONDUIT: DATA -> SEARCH */}
                  <path
                    d="M 180 440 C 180 468, 24 468, 24 430 L 24 65 C 24 25, 140 25, 160 36"
                    stroke="url(#returnConduitGrad)"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                    className={styles.returnConduit}
                  />
                  <polyline points="155 31, 162 37, 155 42" stroke="var(--color-adorca-signal)" strokeWidth="2" strokeLinecap="round" />

                  {/* Traveling Signal Pulse along Return Conduit */}
                  <path
                    d="M 180 440 C 180 468, 24 468, 24 430 L 24 65 C 24 25, 140 25, 160 36"
                    stroke="var(--color-primary-text)"
                    strokeWidth="3"
                    strokeDasharray="18 160"
                    strokeLinecap="round"
                    className={styles.pulseConduitBeam}
                  />

                  {/* Schematic Nodes */}
                  {SYSTEM_NODES.map((node) => {
                    const isSelected = activeNodeId === node.id;
                    const isBelongingToPillar = activePillar.nodeIds.includes(node.id);

                    return (
                      <g
                        key={node.id}
                        className={`${styles.nodeGroup} ${isSelected ? styles.nodeGroupSelected : ""} ${isBelongingToPillar ? styles.nodeGroupPillar : ""}`}
                        onClick={() => handleNodeClick(node.id)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            handleNodeClick(node.id);
                          }
                        }}
                        role="button"
                        tabIndex={0}
                        aria-label={`Select ${node.label} System Node - ${node.subtitle}`}
                      >
                        {/* Node Outer Ring */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="16"
                          className={styles.nodeOuterCircle}
                        />
                        {/* Node Center Dot */}
                        <circle
                          cx={node.x}
                          cy={node.y}
                          r="5"
                          className={styles.nodeInnerDot}
                        />
                        {/* Node Label Text */}
                        <text
                          x={node.x + (node.id === "content" ? -22 : node.id === "media" ? 22 : 24)}
                          y={node.y + 4}
                          textAnchor={node.id === "content" ? "end" : "start"}
                          className={styles.nodeSvgLabel}
                        >
                          {node.label}
                        </text>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Active Node Telemetry HUD */}
              <div className={styles.nodeTelemetryHud} aria-live="polite">
                <div className={styles.hudTop}>
                  <span className={styles.hudStageTag}>STAGE {currentNode.stageNum} // {currentNode.lifecycleStage}</span>
                  <span className={styles.hudMetricBadge}>{currentNode.metric}</span>
                </div>
                <div className={styles.hudTitleRow}>
                  <span className={styles.hudNodeName}>NODE // {currentNode.label}</span>
                  <span className={styles.hudNodeSub}>{currentNode.subtitle}</span>
                </div>
                <p className={styles.hudSpecText}>{currentNode.spec}</p>
              </div>

              {/* Return Loop Explanation Callout */}
              <div className={styles.loopCallout}>
                <span className={styles.loopIcon} aria-hidden="true">&larr;</span>
                <span className={styles.loopText}>
                  <strong>CLOSED-LOOP FEEDBACK:</strong> First-party conversion &amp; app retention signals feed directly back into continuous search crawl optimization.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Capabilities Ledger (No Box Cards) */}
          <div
            id={`pillar-panel-${activePillar.id}`}
            role="tabpanel"
            aria-labelledby={`pillar-tab-${activePillar.id}`}
            className={styles.capabilitiesCol}
          >
            {/* Pillar Header Banner */}
            <div className={styles.pillarHeaderBanner}>
              <div className={styles.pillarOversizedNumber}>{activePillar.pillarNum}</div>
              <div className={styles.pillarHeadingInfo}>
                <span className={styles.pillarCategoryLabel}>PILLAR {activePillar.pillarNum} • ARCHITECTURE</span>
                <h3 className={styles.pillarPrimaryTitle}>{activePillar.title}</h3>
                <p className={styles.pillarSummaryDesc}>{activePillar.summary}</p>
              </div>
            </div>

            {/* Unboxed Capabilities Ledger */}
            <div className={styles.ledgerList}>
              {activePillar.capabilities.map((cap, idx) => {
                const isLinkedToActiveNode = cap.nodeRef === activeNodeId;
                return (
                  <div
                    key={cap.id}
                    className={`${styles.ledgerRow} ${isLinkedToActiveNode ? styles.ledgerRowHighlighted : ""}`}
                    onClick={() => setActiveNodeId(cap.nodeRef)}
                  >
                    <div className={styles.ledgerRowHeader}>
                      <div className={styles.capIndexGroup}>
                        <span className={styles.capIndexNumber}>
                          {activePillar.pillarNum}.{idx + 1}
                        </span>
                        <h4 className={styles.capTitle}>{cap.title}</h4>
                      </div>
                      <span className={styles.nodeTag}>
                        SYSTEM NODE: {cap.nodeRef.toUpperCase()}
                      </span>
                    </div>

                    <p className={styles.capDescription}>{cap.desc}</p>

                    <div className={styles.systemRoleBox}>
                      <span className={styles.systemRoleLabel}>SYSTEM INTEGRATION:</span>
                      <span className={styles.systemRoleText}>{cap.systemRole}</span>
                    </div>

                    <div className={styles.deliverablesRow}>
                      <span className={styles.delivLabel}>DELIVERABLES:</span>
                      <div className={styles.delivPills}>
                        {cap.deliverables.map((d, dIdx) => (
                          <span key={dIdx} className={styles.delivPill}>
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Pillar Action Footer */}
            <div className={styles.ledgerFooter}>
              <Link href="/#opportunity-tool" className="btn btn-obsidian">
                Scope {activePillar.title} System Deployment &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
