"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./Hero.module.css";

interface PipelineStage {
  id: string;
  step: string;
  name: string;
  sublabel: string;
  metric: string;
  metricLabel: string;
  desc: string;
  deliverables: string;
}

const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "signal",
    step: "01",
    name: "SEARCH SIGNAL",
    sublabel: "Algorithmic Crawl & Multi-Region Indexing",
    metric: "50+ Markets",
    metricLabel: "Active Global Indexation",
    desc: "Detecting raw organic and transactional search demand across international ccTLD search engines.",
    deliverables: "Technical Crawl Audit • Hreflang Tags",
  },
  {
    id: "intent",
    step: "02",
    name: "INTENT",
    sublabel: "Semantic Entity Clustering",
    metric: "+140%",
    metricLabel: "Organic Visibility Uplift",
    desc: "Filtering high-intent, transactional buyer queries from low-intent informational noise.",
    deliverables: "Keyword Intent Architecture • Topic Graphs",
  },
  {
    id: "acquisition",
    step: "03",
    name: "ACQUISITION",
    sublabel: "Algorithmic Real-Time Syndication",
    metric: "-42% CPA",
    metricLabel: "Cost-Per-Acquisition Drop",
    desc: "Deploying automated real-time bidding and organic search domination to capture in-market buyers.",
    deliverables: "Programmatic Media • Search Arbitrage",
  },
  {
    id: "conversion",
    step: "04",
    name: "CONVERSION",
    sublabel: "High-Velocity Edge Platform",
    metric: "2.4x",
    metricLabel: "Funnel Conversion Lift",
    desc: "Directing acquired traffic into blazing-fast Next.js funnels and frictionless checkout flows.",
    deliverables: "Next.js Web Systems • CRO Testing",
  },
  {
    id: "revenue",
    step: "05",
    name: "REVENUE",
    sublabel: "Compounding First-Party Equity",
    metric: "100%",
    metricLabel: "Client Asset Ownership",
    desc: "Delivering sustainable, measurable enterprise revenue with transparent server-side attribution.",
    deliverables: "First-Party GA4 • Compounding Equity",
  },
];

export default function Hero() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const [activeStageId, setActiveStageId] = useState<string>("signal");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Auto-cycle through pipeline stages slowly unless hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveStageId((curr) => {
        const idx = PIPELINE_STAGES.findIndex((s) => s.id === curr);
        const nextIdx = (idx + 1) % PIPELINE_STAGES.length;
        return PIPELINE_STAGES[nextIdx].id;
      });
    }, 4500);
    return () => clearInterval(interval);
  }, [isHovered]);

  const activeStage =
    PIPELINE_STAGES.find((s) => s.id === activeStageId) || PIPELINE_STAGES[0];

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

          {/* Right Column: Custom Restrained Visual System (Search Signal -> Intent -> Acquisition -> Conversion -> Revenue) */}
          <div
            className={`${styles.visualCol} ${isVisible ? styles.visible : ""}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className={styles.engineCard} aria-label="Signal to Revenue Architecture">
              {/* Technical Window Header */}
              <div className={styles.engineHeader}>
                <div className={styles.engineHeaderLeft}>
                  <span className={styles.engineTerminalDot} />
                  <span className={styles.engineSystemTitle}>SIGNAL ARCHITECTURE</span>
                </div>
                <span className={styles.engineStatusBadge}>
                  <span className={styles.enginePulse} aria-hidden="true" />
                  FLOW ACTIVE
                </span>
              </div>

              {/* Sequential 5-Stage Propagation Pipeline */}
              <div className={styles.pipelineBody}>
                {/* SVG Connecting Spine with Signal Pulse */}
                <div className={styles.spineWrapper} aria-hidden="true">
                  <svg className={styles.spineSvg} viewBox="0 0 24 280" fill="none">
                    {/* Background hairline spine */}
                    <line x1="12" y1="14" x2="12" y2="266" stroke="rgba(244, 243, 239, 0.14)" strokeWidth="1.5" />
                    {/* Animated traveling signal packet */}
                    <line x1="12" y1="14" x2="12" y2="266" stroke="var(--color-adorca-signal)" strokeWidth="2" strokeDasharray="20 180" className={styles.signalTravelingBeam} />
                  </svg>
                </div>

                {/* Vertical Nodes List */}
                <div className={styles.nodesList} role="tablist" aria-label="Growth Engine Stages">
                  {PIPELINE_STAGES.map((stage, idx) => {
                    const isActive = stage.id === activeStage.id;
                    return (
                      <button
                        key={stage.id}
                        type="button"
                        role="tab"
                        id={`hero-stage-${stage.id}`}
                        aria-selected={isActive}
                        aria-controls={`hero-panel-${stage.id}`}
                        className={`${styles.nodeRow} ${isActive ? styles.nodeRowActive : ""}`}
                        onClick={() => setActiveStageId(stage.id)}
                      >
                        {/* Technical Node Indicator */}
                        <div className={styles.nodeIndicator}>
                          <span className={styles.nodeRing} />
                          <span className={styles.nodeCore} />
                        </div>

                        {/* Node Label & Sublabel */}
                        <div className={styles.nodeInfo}>
                          <div className={styles.nodeMetaRow}>
                            <span className={styles.nodeStep}>{stage.step}</span>
                            <span className={styles.nodeName}>{stage.name}</span>
                          </div>
                          <span className={styles.nodeSublabel}>{stage.sublabel}</span>
                        </div>

                        {/* Stage Anchor Metric */}
                        <div className={styles.nodeMetricChip}>
                          <span className={styles.nodeMetricVal}>{stage.metric}</span>
                        </div>

                        {/* Hairline Arrow to next stage */}
                        {idx < PIPELINE_STAGES.length - 1 && (
                          <div className={styles.downConnector} aria-hidden="true">
                            &darr;
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Stage Telemetry Telemetry Readout */}
              <div
                id={`hero-panel-${activeStage.id}`}
                role="tabpanel"
                aria-labelledby={`hero-stage-${activeStage.id}`}
                className={styles.telemetryFooter}
              >
                <div className={styles.telemetryHeader}>
                  <span className={styles.telemetryActiveStage}>
                    STAGE {activeStage.step} &bull; {activeStage.name}
                  </span>
                  <span className={styles.telemetryMetricTag}>{activeStage.metricLabel}</span>
                </div>
                <p className={styles.telemetryDescription}>{activeStage.desc}</p>
                <div className={styles.telemetryDeliverables}>
                  <span className={styles.deliverablesLabel}>ENGINEERED:</span>
                  <span className={styles.deliverablesText}>{activeStage.deliverables}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
