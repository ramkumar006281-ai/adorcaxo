"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./GrowthSystem.module.css";

type IntelligenceTab = "organic" | "markets" | "experience" | "attribution";

interface EngineData {
  id: IntelligenceTab;
  tabLabel: string;
  metricNumber: number;
  metricPrefix?: string;
  metricSuffix: string;
  metricHeadline: string;
  category: string;
  summary: string;
  telemetryPoints: string[];
  activePipelineStage: "VISIBILITY" | "INTENT" | "ACQUISITION" | "CONVERSION" | "REVENUE";
}

const ENGINES: EngineData[] = [
  {
    id: "organic",
    tabLabel: "+140% Organic",
    metricNumber: 140,
    metricPrefix: "+",
    metricSuffix: "%",
    metricHeadline: "Organic Search Visibility",
    category: "Technical Crawl & Indexing Dominance",
    summary:
      "Engineered organic expansion built on forensic crawl architecture, entity schema graphs, and international server-side hreflang tagging that outranks entrenched competitors.",
    telemetryPoints: [
      "Forensic log crawl optimization",
      "Semantic keyword entity clustering",
      "Core Web Vitals sub-second latency",
      "Compounding algorithmic equity",
    ],
    activePipelineStage: "VISIBILITY",
  },
  {
    id: "markets",
    tabLabel: "50+ Markets",
    metricNumber: 50,
    metricSuffix: "+",
    metricHeadline: "Global Search Markets",
    category: "Multilingual Regional Intent Mapping",
    summary:
      "Native ccTLD routing and localized query intent across 50+ international territories—grounded in pure digital infrastructure with zero fabricated physical office claims.",
    telemetryPoints: [
      "North America, DACH, EMEA, LATAM & APAC",
      "ccTLD and server-side taxonomy",
      "Multilingual search idiom localization",
      "Cross-border shopping intent capture",
    ],
    activePipelineStage: "INTENT",
  },
  {
    id: "experience",
    tabLabel: "12+ Years",
    metricNumber: 12,
    metricSuffix: "+ Yrs",
    metricHeadline: "Algorithmic Search Resilience",
    category: "Continuous Track Record (Est. 2012)",
    summary:
      "Navigated over 40 major Google Core updates from Panda and Penguin to modern AI Overviews, turning platform volatility into compounding client advantage.",
    telemetryPoints: [
      "40+ Google Core updates navigated",
      "Zero reliance on black-hat shortcuts",
      "Decade-long client retention loops",
      "Continuous enterprise methodology",
    ],
    activePipelineStage: "ACQUISITION",
  },
  {
    id: "attribution",
    tabLabel: "100% Attribution",
    metricNumber: 100,
    metricSuffix: "%",
    metricHeadline: "First-Party Data Ownership",
    category: "Unified Multi-Channel Convergence",
    summary:
      "Direct server-side data pipelines connect every search, paid, social, direct, and app interaction into a unified revenue attribution model with 100% client administrative ownership.",
    telemetryPoints: [
      "Server-side first-party GA4 pipelines",
      "Zero third-party cookie vulnerability",
      "100% client-owned ad & data accounts",
      "Multi-touch conversion path mapping",
    ],
    activePipelineStage: "REVENUE",
  },
];

const PIPELINE_FLOW = [
  { id: "VISIBILITY", step: "01", label: "VISIBILITY", detail: "Technical Crawl & Hreflang Indexation" },
  { id: "INTENT", step: "02", label: "INTENT", detail: "Semantic Entity Clustering & Search Queries" },
  { id: "ACQUISITION", step: "03", label: "ACQUISITION", detail: "Programmatic Media & Organic Synergy" },
  { id: "CONVERSION", step: "04", label: "CONVERSION", detail: "High-Velocity Edge Next.js Funnels" },
  { id: "REVENUE", step: "05", label: "REVENUE", detail: "Server-Side Multi-Touch Attribution" },
];

const GEOGRAPHIC_NODES = [
  { id: "na", name: "North America", sub: "US • CA", coords: "x: 22%, y: 32%", active: true },
  { id: "emea", name: "Western Europe", sub: "UK • FR • ES", coords: "x: 52%, y: 28%", active: true },
  { id: "dach", name: "DACH Region", sub: "DE • AT • CH", coords: "x: 58%, y: 24%", active: true },
  { id: "latam", name: "LATAM Growth", sub: "BR • MX • CL", coords: "x: 32%, y: 68%", active: true },
  { id: "apac", name: "Asia-Pacific", sub: "JP • SG • AU", coords: "x: 82%, y: 55%", active: true },
];

const TIMELINE_MILESTONES = [
  { year: "2012", title: "Foundation", note: "Early Panda & Penguin Update Resilience" },
  { year: "2016", title: "Entity SEO", note: "Mobile-First Indexing & Semantic Knowledge Graphs" },
  { year: "2020", title: "Scale Engine", note: "Core Web Vitals & Real-Time Bidding Automation" },
  { year: "2024", title: "AI Search", note: "Helpful Content System & AI Overview Navigation" },
  { year: "2026+", title: "GEO / Edge", note: "Autonomous Generative Optimization & Edge Funnels" },
];

export default function GrowthSystem() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.12 });
  const [activeTab, setActiveTab] = useState<IntelligenceTab>("organic");
  const [countValue, setCountValue] = useState<number>(0);
  const [isSettled, setIsSettled] = useState<boolean>(false);
  const animationRef = useRef<number | null>(null);

  const currentEngine = ENGINES.find((e) => e.id === activeTab) || ENGINES[0];

  // Count-up animation with signal pulse on settle
  useEffect(() => {
    if (!isVisible) return;

    const target = currentEngine.metricNumber;
    const duration = 1200; // ms
    const startTime = performance.now();

    const animateCounter = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      if (elapsed <= 16) {
        setIsSettled(false);
        setCountValue(0);
      }

      // Ease-out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(easeOut * target);
      setCountValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animateCounter);
      } else {
        setCountValue(target);
        setIsSettled(true);
      }
    };

    animationRef.current = requestAnimationFrame(animateCounter);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [activeTab, isVisible, currentEngine.metricNumber]);

  return (
    <section id="growth-system" className="darkCardSection theme-dark" ref={revealRef} aria-label="Growth Intelligence System">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <span className={styles.pulseDot} aria-hidden="true" />
            <span className={styles.headerBadgeText}>Algorithmic Performance Architecture</span>
          </div>
          <h2 className={styles.mainTitle}>
            One Growth System. <br />
            <span className={styles.highlightText}>Every Channel Connected.</span>
          </h2>
          <p className={styles.mainDesc}>
            Rather than treating SEO, paid media, and web development as disconnected silos, we engineer an integrated growth operating system that systematically transforms search visibility into compounding enterprise revenue.
          </p>
        </div>

        {/* Asymmetric Intelligence Console Grid */}
        <div className={`${styles.intelligenceGrid} ${isVisible ? styles.visible : ""}`}>
          {/* Left Column: Interactive Metric Selectors & Deep Telemetry */}
          <div className={styles.engineSelectorsCol}>
            {/* 4 Engine Selector Nodes */}
            <div className={styles.tabsRow} role="tablist" aria-label="Core Intelligence Metrics">
              {ENGINES.map((eng) => {
                const isActive = eng.id === activeTab;
                return (
                  <button
                    key={eng.id}
                    type="button"
                    role="tab"
                    id={`tab-${eng.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${eng.id}`}
                    className={`${styles.tabNode} ${isActive ? styles.tabNodeActive : ""}`}
                    onClick={() => setActiveTab(eng.id)}
                  >
                    <span className={styles.tabNodeLabel}>{eng.tabLabel}</span>
                    <span className={styles.tabNodeIndicator} />
                  </button>
                );
              })}
            </div>

            {/* Active Engine Telemetry Console */}
            <div
              id={`panel-${currentEngine.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${currentEngine.id}`}
              className={styles.engineDossier}
            >
              {/* Massive Metric Hero Display */}
              <div className={styles.metricHeroRow}>
                <div className={styles.metricValGroup}>
                  <span className={styles.metricBig}>
                    {currentEngine.metricPrefix}
                    {countValue}
                    {currentEngine.metricSuffix}
                  </span>
                  {/* Signal Pulse Beacon when settled */}
                  <div className={`${styles.pulseBeacon} ${isSettled ? styles.beaconActive : ""}`} aria-hidden="true">
                    <span className={styles.beaconPing} />
                    <span className={styles.beaconDot} />
                  </div>
                </div>
                <div className={styles.metricMetaGroup}>
                  <span className={styles.metricHeadline}>{currentEngine.metricHeadline}</span>
                  <span className={styles.metricCategory}>{currentEngine.category}</span>
                </div>
              </div>

              {/* Dynamic Interactive Visual Panel Based on Active Tab */}
              <div className={styles.dynamicVizWrapper}>
                {/* 1. If Organic Growth (+140%): SVG Graph Draw */}
                {activeTab === "organic" && (
                  <div className={styles.graphCanvas} aria-label="Organic Visibility Trajectory Graph">
                    <div className={styles.graphTopRow}>
                      <span className={styles.graphLabel}>INDEXED SEARCH VISIBILITY (12-MONTH TRAJECTORY)</span>
                      <span className={styles.graphDeltaBadge}>+140% PEAK</span>
                    </div>
                    <svg viewBox="0 0 460 140" className={styles.chartSvg} fill="none">
                      <defs>
                        <linearGradient id="growthAreaGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="var(--color-adorca-signal)" stopOpacity="0.25" />
                          <stop offset="100%" stopColor="var(--color-adorca-signal)" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Grid Lines */}
                      <line x1="10" y1="120" x2="450" y2="120" stroke="rgba(244, 243, 239, 0.08)" strokeDasharray="3 3" />
                      <line x1="10" y1="75" x2="450" y2="75" stroke="rgba(244, 243, 239, 0.08)" strokeDasharray="3 3" />
                      <line x1="10" y1="30" x2="450" y2="30" stroke="rgba(244, 243, 239, 0.08)" strokeDasharray="3 3" />
                      {/* Shaded Area */}
                      <path
                        d="M 20 115 Q 120 110, 200 85 T 340 45 T 440 22 L 440 120 L 20 120 Z"
                        fill="url(#growthAreaGrad)"
                        className={styles.areaFill}
                      />
                      {/* Animated Draw Curve */}
                      <path
                        d="M 20 115 Q 120 110, 200 85 T 340 45 T 440 22"
                        stroke="var(--color-adorca-signal)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        className={`${styles.trendCurve} ${isSettled ? styles.trendCurveSettled : ""}`}
                      />
                      {/* Peak Coordinates Beacon */}
                      <circle cx="440" cy="22" r="5" fill="var(--color-adorca-signal)" className={styles.peakPoint} />
                      <circle cx="440" cy="22" r="11" stroke="var(--color-adorca-signal)" strokeWidth="1.5" className={styles.peakRing} />
                    </svg>
                    <div className={styles.graphScale}>
                      <span>BASELINE (Q1)</span>
                      <span>ALGORITHMIC INDEXATION (Q2)</span>
                      <span>COMPOUNDING DOMINANCE (Q4)</span>
                    </div>
                  </div>
                )}

                {/* 2. If 50+ Markets: Geographic Nodes Activation */}
                {activeTab === "markets" && (
                  <div className={styles.marketsCanvas} aria-label="50+ Markets Geographic Activation">
                    <div className={styles.graphTopRow}>
                      <span className={styles.graphLabel}>GLOBAL CRAWL TAXONOMY & REGIONAL CLUSTERS</span>
                      <span className={styles.graphDeltaBadge}>50+ MARKETS ACTIVE</span>
                    </div>
                    <div className={styles.geoGrid}>
                      {GEOGRAPHIC_NODES.map((node, i) => (
                        <div key={node.id} className={styles.geoNodeCard} style={{ animationDelay: `${i * 0.1}s` }}>
                          <div className={styles.geoNodeHeader}>
                            <span className={styles.geoNodeDot} />
                            <span className={styles.geoNodeTitle}>{node.name}</span>
                          </div>
                          <span className={styles.geoNodeSub}>{node.sub}</span>
                          <span className={styles.geoCoords}>ccTLD &bull; Server-Side Hreflang</span>
                        </div>
                      ))}
                    </div>
                    <div className={styles.geoClaimGrounded}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>100% verified digital search infrastructure — zero fabricated physical office claims.</span>
                    </div>
                  </div>
                )}

                {/* 3. If 12+ Years: Algorithmic Timeline Progression */}
                {activeTab === "experience" && (
                  <div className={styles.timelineCanvas} aria-label="12+ Years Algorithmic Timeline">
                    <div className={styles.graphTopRow}>
                      <span className={styles.graphLabel}>ALGORITHMIC RESILIENCE TIMELINE (EST. 2012)</span>
                      <span className={styles.graphDeltaBadge}>40+ CORE UPDATES</span>
                    </div>
                    <div className={styles.milestoneTrack}>
                      <div className={styles.milestoneBar} />
                      <div className={styles.milestonesList}>
                        {TIMELINE_MILESTONES.map((item, idx) => (
                          <div key={item.year} className={styles.milestoneItem} style={{ animationDelay: `${idx * 0.12}s` }}>
                            <div className={styles.milestoneNode}>
                              <span className={styles.milestoneDot} />
                              <span className={styles.milestoneYear}>{item.year}</span>
                            </div>
                            <span className={styles.milestoneTitle}>{item.title}</span>
                            <p className={styles.milestoneNote}>{item.note}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. If 100% Attribution: Multi-Bus Convergence Diagram */}
                {activeTab === "attribution" && (
                  <div className={styles.attributionCanvas} aria-label="Multi-Channel Attribution Bus Diagram">
                    <div className={styles.graphTopRow}>
                      <span className={styles.graphLabel}>SERVER-SIDE FIRST-PARTY REVENUE ATTRIBUTION</span>
                      <span className={styles.graphDeltaBadge}>100% CLIENT OWNERSHIP</span>
                    </div>
                    {/* Multi-Channel Inbound Lines Converging into Single Revenue Stream */}
                    <div className={styles.busDiagramWrapper}>
                      <svg viewBox="0 0 460 180" className={styles.busSvg} fill="none">
                        {/* Channel Source Nodes (SEO, PAID, SOCIAL, DIRECT, APP) */}
                        {/* Inbound Lines to Central Hub at (300, 90) */}
                        {/* 1. SEO */}
                        <path d="M 70 25 L 200 25 Q 260 25, 290 80 L 300 90" stroke="rgba(244, 243, 239, 0.25)" strokeWidth="1.5" />
                        {/* 2. PAID */}
                        <path d="M 70 58 L 200 58 Q 250 58, 290 85 L 300 90" stroke="rgba(244, 243, 239, 0.25)" strokeWidth="1.5" />
                        {/* 3. SOCIAL */}
                        <path d="M 70 90 L 300 90" stroke="rgba(244, 243, 239, 0.35)" strokeWidth="1.5" />
                        {/* 4. DIRECT */}
                        <path d="M 70 122 L 200 122 Q 250 122, 290 95 L 300 90" stroke="rgba(244, 243, 239, 0.25)" strokeWidth="1.5" />
                        {/* 5. APP */}
                        <path d="M 70 155 L 200 155 Q 260 155, 290 100 L 300 90" stroke="rgba(244, 243, 239, 0.25)" strokeWidth="1.5" />

                        {/* Animated Signal Flows converging */}
                        <path d="M 70 25 L 200 25 Q 260 25, 290 80 L 300 90" stroke="var(--color-adorca-signal)" strokeWidth="2" strokeDasharray="14 100" className={styles.busTravelingSignal} />
                        <path d="M 70 90 L 300 90" stroke="var(--color-adorca-signal)" strokeWidth="2" strokeDasharray="14 100" className={styles.busTravelingSignal} />
                        <path d="M 70 155 L 200 155 Q 260 155, 290 100 L 300 90" stroke="var(--color-adorca-signal)" strokeWidth="2" strokeDasharray="14 100" className={styles.busTravelingSignal} />

                        {/* Outbound High-Yield Revenue Line to Target */}
                        <line x1="300" y1="90" x2="410" y2="90" stroke="var(--color-adorca-signal)" strokeWidth="4" strokeLinecap="round" />
                        <circle cx="300" cy="90" r="10" fill="#0E1114" stroke="var(--color-adorca-signal)" strokeWidth="2.5" />
                        <circle cx="300" cy="90" r="4" fill="var(--color-adorca-signal)" />

                        {/* Terminal Revenue Target Box */}
                        <rect x="360" y="70" width="90" height="40" rx="6" fill="#14181C" stroke="var(--color-adorca-signal)" strokeWidth="1.5" />
                      </svg>

                      {/* HTML Overlay Badges for Inputs and Revenue Target */}
                      <div className={styles.channelBadgeList}>
                        <span className={styles.channelBadge} style={{ top: "14px" }}>SEO</span>
                        <span className={styles.channelBadge} style={{ top: "48px" }}>PAID</span>
                        <span className={styles.channelBadge} style={{ top: "80px" }}>SOCIAL</span>
                        <span className={styles.channelBadge} style={{ top: "112px" }}>DIRECT</span>
                        <span className={styles.channelBadge} style={{ top: "144px" }}>APP</span>
                      </div>

                      <div className={styles.revenueTargetBox}>
                        <span className={styles.revenueTargetLabel}>VERIFIED REVENUE</span>
                        <span className={styles.revenueTargetSub}>100% Client Attribution</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Telemetry Points Checklist */}
              <div className={styles.pointsList}>
                {currentEngine.telemetryPoints.map((pt, idx) => (
                  <div key={idx} className={styles.pointItem}>
                    <svg className={styles.pointCheck} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Full-Funnel Trajectory Console (Visibility -> Intent -> Acquisition -> Conversion -> Revenue) */}
          <div className={styles.fullFunnelCol}>
            <div className={styles.funnelConsoleCard}>
              <div className={styles.funnelConsoleHeader}>
                <div className={styles.consoleHeaderLeft}>
                  <span className={styles.terminalIndicator} />
                  <span className={styles.consoleTitle}>LIFECYCLE STORY ENGINE</span>
                </div>
                <span className={styles.liveProtocolTag}>PROTOCOL // V4.2</span>
              </div>

              <p className={styles.funnelIntro}>
                Adorca unites the full acquisition progression so no high-intent demand leaks across channel handoffs.
              </p>

              {/* Vertical 5-Stage Story Sequence */}
              <div className={styles.stagesLadder} role="list" aria-label="Customer Lifecycle Progression">
                {PIPELINE_FLOW.map((step, idx) => {
                  const isHighlighted = currentEngine.activePipelineStage === step.id;
                  return (
                    <div
                      key={step.id}
                      className={`${styles.ladderStep} ${isHighlighted ? styles.ladderStepActive : ""}`}
                      role="listitem"
                    >
                      <div className={styles.stepSpineCol} aria-hidden="true">
                        <span className={styles.stepMarkerDot} />
                        {idx < PIPELINE_FLOW.length - 1 && <span className={styles.stepSpineLine} />}
                      </div>

                      <div className={styles.stepContent}>
                        <div className={styles.stepHeaderRow}>
                          <span className={styles.stepIndex}>{step.step}</span>
                          <span className={styles.stepName}>{step.label}</span>
                          {isHighlighted && <span className={styles.activePill}>ACTIVE ENGINE</span>}
                        </div>
                        <span className={styles.stepDetail}>{step.detail}</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Action Prompt */}
              <div className={styles.consoleFooter}>
                <div className={styles.consoleFooterInfo}>
                  <span className={styles.footerNoteLabel}>DIAGNOSTIC STATUS</span>
                  <span className={styles.footerNoteText}>Ready for architectural deployment</span>
                </div>
                <Link href="/#opportunity-tool" className="btn btn-lime">
                  Deploy Growth Plan &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
