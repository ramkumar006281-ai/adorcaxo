"use client";

import { useState } from "react";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./FeaturedWork.module.css";

interface EvidenceCase {
  id: string;
  caseNum: string;
  category: string;
  clientTitle: string;
  marketScope: string;
  metricLabel: string;
  baselineVal: string;
  baselineLabel: string;
  intervention: string;
  technicalChange: string;
  resultVal: string;
  resultLabel: string;
  kpiBig: string;
  kpiDescriptor: string;
  slug: string;
  graphData: {
    type: "organic" | "cpa" | "rank";
    yTop: string;
    yBottom: string;
    startY: number;
    endY: number;
    path: string;
    beforeLabel: string;
    afterLabel: string;
  };
}

const EVIDENCE_CASES: EvidenceCase[] = [
  {
    id: "ecomart",
    caseNum: "CASE 01",
    category: "E-COMMERCE & CROSS-BORDER RETAIL",
    clientTitle: "Scaling Cross-Border Organic Traffic Across European & LATAM Markets",
    marketScope: "50+ Regional Search Catalogs",
    metricLabel: "ORGANIC SEARCH VISIBILITY",
    baselineVal: "12,000 / mo",
    baselineLabel: "Organic Search Baseline",
    intervention: "Technical Hreflang Architecture & Native Linguistic Intent Extraction",
    technicalChange:
      "Eliminated multilingual canonical conflicts, deployed server-side hreflang indexing tags, and restructured entity schema graphs across 50+ country-code domains.",
    resultVal: "28,800 / mo",
    resultLabel: "Verified Peak Traffic",
    kpiBig: "+140%",
    kpiDescriptor: "ORGANIC GROWTH",
    slug: "ecomart-international-growth",
    graphData: {
      type: "organic",
      yTop: "28.8K",
      yBottom: "12.0K",
      startY: 88,
      endY: 20,
      path: "M 90 88 C 150 85, 215 32, 285 20",
      beforeLabel: "BEFORE (BASELINE)",
      afterLabel: "AFTER (SCALE)",
    },
  },
  {
    id: "finflow",
    caseNum: "CASE 02",
    category: "B2B FINTECH & ENTERPRISE SAAS",
    clientTitle: "Slashing Cost-Per-Acquisition via Algorithmic Real-Time Bid Rules",
    marketScope: "North America & UK Enterprise Market",
    metricLabel: "COST-PER-ACQUISITION (CPA)",
    baselineVal: "$78 CPA",
    baselineLabel: "Manual Broad-Match Baseline",
    intervention: "Algorithmic Real-Time Bidding & High-Intent Audience Retargeting",
    technicalChange:
      "Replaced keyword broad-match bidding with server-side conversion API signals, automated negative keyword rules, and dynamic audience retargeting across tier-1 inventory.",
    resultVal: "$45 CPA",
    resultLabel: "Post-Intervention CPA",
    kpiBig: "-42%",
    kpiDescriptor: "CPA REDUCTION (2x LEADS)",
    slug: "finflow-programmatic-cpa",
    graphData: {
      type: "cpa",
      yTop: "$78",
      yBottom: "$45",
      startY: 20,
      endY: 88,
      path: "M 90 20 C 150 25, 215 75, 285 88",
      beforeLabel: "BEFORE (MANUAL)",
      afterLabel: "AFTER (ALGO)",
    },
  },
  {
    id: "playsphere",
    caseNum: "CASE 03",
    category: "MOBILE GAMING & APP STORE OPTIMIZATION",
    clientTitle: "Pushing Flagship Game to Top 5 Category Ranking Across 14 App Stores",
    marketScope: "Global App Store & Google Play (14 Stores)",
    metricLabel: "APP STORE CATEGORY RANK",
    baselineVal: "Pos #34",
    baselineLabel: "Category Store Rank Baseline",
    intervention: "ASO Keyword Velocity Acceleration & Multivariate Listing CRO",
    technicalChange:
      "Deployed automated visual screenshot A/B testing, localized title/subtitle keyword velocity clustering, and retention event telemetry loops.",
    resultVal: "Pos #4",
    resultLabel: "Top 5 Category Dominance",
    kpiBig: "+210%",
    kpiDescriptor: "DAILY ORGANIC INSTALLS",
    slug: "playsphere-app-store-ranking",
    graphData: {
      type: "rank",
      yTop: "Pos #4",
      yBottom: "Pos #34",
      startY: 88,
      endY: 20,
      path: "M 90 88 C 150 80, 215 30, 285 20",
      beforeLabel: "BEFORE (ASO AUDIT)",
      afterLabel: "AFTER (TOP 5)",
    },
  },
];

export default function FeaturedWork() {
  const [activeCaseId, setActiveCaseId] = useState<string>("ecomart");
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  const activeCase =
    EVIDENCE_CASES.find((c) => c.id === activeCaseId) || EVIDENCE_CASES[0];

  return (
    <section id="work" className="pageSection theme-warm" ref={revealRef} aria-label="Verified Case Studies Evidence">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            <span className={styles.badgeText}>Verified Evidence Narratives</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Measurable Proof. <br />
            <span className={styles.titleSub}>Verified Before-and-After Outcomes.</span>
          </h2>
          <p className={styles.sectionDesc}>
            We reject vague marketing claims. Every case study is documented through forensic baseline data, specific technical interventions, and verified revenue outcomes.
          </p>
        </div>

        {/* Case Study Evidence Selector Tabs */}
        <div className={styles.caseNavRow} role="tablist" aria-label="Case Study Evidence Selector">
          {EVIDENCE_CASES.map((c) => {
            const isActive = c.id === activeCase.id;
            return (
              <button
                key={c.id}
                type="button"
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={isActive}
                aria-controls={`case-dossier-${c.id}`}
                className={`${styles.caseTab} ${isActive ? styles.caseTabActive : ""}`}
                onClick={() => setActiveCaseId(c.id)}
              >
                <div className={styles.tabTopRow}>
                  <span className={styles.tabNum}>{c.caseNum}</span>
                  <span className={styles.tabKpi}>{c.kpiBig}</span>
                </div>
                <span className={styles.tabCategory}>{c.category}</span>
              </button>
            );
          })}
        </div>

        {/* Master Evidence Narrative Dossier */}
        <div
          id={`case-dossier-${activeCase.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCase.id}`}
          className={`${styles.evidenceDossier} ${isVisible ? styles.visible : ""}`}
        >
          {/* Top Dossier Header */}
          <div className={styles.dossierHeader}>
            <div className={styles.dossierMeta}>
              <span className={styles.dossierCaseNum}>{activeCase.caseNum}</span>
              <span className={styles.dossierCategory}>{activeCase.category}</span>
              <span className={styles.dossierScope}>SCOPE: {activeCase.marketScope}</span>
            </div>
            <h3 className={styles.dossierTitle}>{activeCase.clientTitle}</h3>
          </div>

          {/* Asymmetric 2-Column Grid: Left Evidence Flow / Right Impact Anchor & Graph */}
          <div className={styles.dossierGrid}>
            {/* Left: BASELINE -> INTERVENTION -> TECHNICAL CHANGE -> RESULT Flow */}
            <div className={styles.evidenceFlowCol}>
              {/* Step 1: BASELINE */}
              <div className={styles.flowNode}>
                <div className={styles.flowIndicatorCol} aria-hidden="true">
                  <span className={styles.flowDot} />
                  <span className={styles.flowLine} />
                </div>
                <div className={styles.flowContent}>
                  <span className={styles.flowTag}>01 // BASELINE</span>
                  <div className={styles.flowValBig}>{activeCase.baselineVal}</div>
                  <span className={styles.flowSub}>{activeCase.baselineLabel}</span>
                </div>
              </div>

              {/* Step 2: INTERVENTION */}
              <div className={styles.flowNode}>
                <div className={styles.flowIndicatorCol} aria-hidden="true">
                  <span className={styles.flowDot} />
                  <span className={styles.flowLine} />
                </div>
                <div className={styles.flowContent}>
                  <span className={styles.flowTag}>02 // INTERVENTION</span>
                  <h4 className={styles.flowHeading}>{activeCase.intervention}</h4>
                </div>
              </div>

              {/* Step 3: TECHNICAL CHANGE */}
              <div className={styles.flowNode}>
                <div className={styles.flowIndicatorCol} aria-hidden="true">
                  <span className={styles.flowDot} />
                  <span className={styles.flowLine} />
                </div>
                <div className={styles.flowContent}>
                  <span className={styles.flowTag}>03 // TECHNICAL CHANGE</span>
                  <p className={styles.flowBodyText}>{activeCase.technicalChange}</p>
                </div>
              </div>

              {/* Step 4: RESULT */}
              <div className={styles.flowNode}>
                <div className={styles.flowIndicatorCol} aria-hidden="true">
                  <span className={`${styles.flowDot} ${styles.flowDotHighlight}`} />
                </div>
                <div className={styles.flowContent}>
                  <span className={`${styles.flowTag} ${styles.flowTagHighlight}`}>04 // RESULT</span>
                  <div className={styles.flowValHighlight}>{activeCase.resultVal}</div>
                  <span className={styles.flowSubHighlight}>{activeCase.resultLabel}</span>
                </div>
              </div>
            </div>

            {/* Right: Impact Anchor Display + Forensic Trajectory Graph */}
            <div className={styles.impactAnchorCol}>
              <div className={styles.impactAnchorCard}>
                {/* Proof Delta Banner */}
                <div className={styles.deltaAnchorBox}>
                  <div className={styles.deltaFlowRow}>
                    <div className={styles.deltaMetric}>
                      <span className={styles.deltaLabel}>BASELINE</span>
                      <span className={styles.deltaVal}>{activeCase.baselineVal}</span>
                    </div>
                    <span className={styles.deltaArrow} aria-hidden="true">&rarr;</span>
                    <div className={styles.deltaMetric}>
                      <span className={styles.deltaLabel}>VERIFIED RESULT</span>
                      <span className={styles.deltaValHighlight}>{activeCase.resultVal}</span>
                    </div>
                  </div>

                  <div className={styles.kpiPinnacle}>
                    <span className={styles.kpiPinnacleNum}>{activeCase.kpiBig}</span>
                    <span className={styles.kpiPinnacleLabel}>{activeCase.kpiDescriptor}</span>
                  </div>
                </div>

                {/* Forensic Axis-Calibrated SVG Graph (Section 14) */}
                <div className={styles.graphContainer} aria-label={`${activeCase.kpiDescriptor} Trajectory Chart`}>
                  <div className={styles.graphHeaderRow}>
                    <span className={styles.graphHeaderTitle}>
                      FORENSIC METRIC // {activeCase.metricLabel}
                    </span>
                    <span className={styles.graphHeaderBadge}>VERIFIED CLIENT EVIDENCE</span>
                  </div>

                  <div className={styles.svgFrame}>
                    <svg viewBox="0 0 350 140" className={styles.evidenceSvg} fill="none" aria-hidden="true">
                      {/* Hairline Grid Reference Lines */}
                      <line x1="55" y1="20" x2="320" y2="20" stroke="rgba(17, 19, 21, 0.10)" strokeDasharray="3 3" />
                      <line x1="55" y1="88" x2="320" y2="88" stroke="rgba(17, 19, 21, 0.10)" strokeDasharray="3 3" />

                      {/* Y-Axis Line */}
                      <line x1="55" y1="12" x2="55" y2="105" stroke="var(--color-primary-text)" strokeWidth="1.5" />

                      {/* Y-Axis Ticks (Top & Bottom) */}
                      <line x1="49" y1="20" x2="55" y2="20" stroke="var(--color-primary-text)" strokeWidth="1.5" />
                      <text x="44" y="24" textAnchor="end" className={styles.axisTickText}>
                        {activeCase.graphData.yTop}
                      </text>

                      <line x1="49" y1="88" x2="55" y2="88" stroke="var(--color-primary-text)" strokeWidth="1.5" />
                      <text x="44" y="92" textAnchor="end" className={styles.axisTickText}>
                        {activeCase.graphData.yBottom}
                      </text>

                      {/* X-Axis Baseline */}
                      <line x1="55" y1="105" x2="320" y2="105" stroke="var(--color-primary-text)" strokeWidth="1.5" />

                      {/* X-Axis Ticks & Labels */}
                      <line x1="90" y1="105" x2="90" y2="111" stroke="var(--color-primary-text)" strokeWidth="1.5" />
                      <text x="90" y="125" textAnchor="middle" className={styles.axisLabelText}>
                        BEFORE
                      </text>

                      <line x1="285" y1="105" x2="285" y2="111" stroke="var(--color-primary-text)" strokeWidth="1.5" />
                      <text x="285" y="125" textAnchor="middle" className={styles.axisLabelText}>
                        AFTER
                      </text>

                      {/* Animated Trajectory Curve */}
                      <path
                        key={activeCase.id}
                        d={activeCase.graphData.path}
                        stroke={activeCase.graphData.type === "cpa" ? "#111315" : "#1B4D08"}
                        strokeWidth="3"
                        strokeLinecap="round"
                        className={styles.animatedDrawPath}
                      />

                      {/* Baseline Start Node */}
                      <circle cx="90" cy={activeCase.graphData.startY} r="4.5" fill="#111315" />

                      {/* Result End Node */}
                      <circle
                        cx="285"
                        cy={activeCase.graphData.endY}
                        r="6.5"
                        fill="#2D4708"
                        stroke="#B7E56B"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>

                  <div className={styles.graphLegenda}>
                    <span>STRICT 2-POINT FORENSIC EVIDENCE</span>
                    <span className={styles.legendaHighlight}>ZERO INTERMEDIATE ESTIMATION</span>
                  </div>
                </div>

                {/* Link to Full Breakdown */}
                <div className={styles.dossierAction}>
                  <Link href={`/case-studies/${activeCase.slug}`} className="btn btn-obsidian" style={{ width: "100%", justifyContent: "center" }}>
                    Read Complete Engineering Breakdown &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
