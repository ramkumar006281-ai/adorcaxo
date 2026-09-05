"use client";

import { useState } from "react";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./Approach.module.css";

interface ProcessStage {
  step: string;
  name: string;
  tag: string;
  oneLiner: string;
  desc: string;
  deliverables: string[];
  systemRole: string;
}

const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    name: "DISCOVER",
    tag: "Audit & Forensic Crawl Architecture",
    oneLiner: "Identify indexing bottlenecks, cannibalization, and cross-border keyword demand.",
    desc: "We perform a forensic crawl across your technical infrastructure, uncover indexation and hreflang conflicts, and model international search intent before writing code or spending ad dollars.",
    deliverables: ["Technical Crawl & Log Audit", "Hreflang & Schema Diagnostics", "Multilingual Keyword Mapping"],
    systemRole: "Eliminates algorithmic waste and maps verified search demand.",
  },
  {
    step: "02",
    name: "STRATEGIZE",
    tag: "90-Day Roadmap & Attribution Model",
    oneLiner: "Blueprint priorities, ROAS milestones, and first-party attribution benchmarks.",
    desc: "We engineer a prioritized 90-day growth blueprint establishing channel priority scoring, content cluster schedules, and server-side tracking pipelines with guaranteed client asset ownership.",
    deliverables: ["Channel Priority Matrix", "Competitor Keyword Gap Plan", "Attribution Architecture Spec"],
    systemRole: "Aligns acquisition budgets directly with measurable revenue goals.",
  },
  {
    step: "03",
    name: "EXECUTE",
    tag: "High-Velocity Engineering & Media",
    oneLiner: "Deploy Next.js edge landing platforms, localized content, and real-time ad bidding.",
    desc: "We build and launch high-performance web platforms, publish native-linguistic localized content hubs, and activate algorithmic programmatic bidding across premier ad networks.",
    deliverables: ["Core Web Vitals Sprint", "Native Content Production", "Real-Time Ad Bidding Setup"],
    systemRole: "Activates organic and paid channels simultaneously for rapid scale.",
  },
  {
    step: "04",
    name: "OPTIMIZE",
    tag: "Continuous Compounding & Retention Loops",
    oneLiner: "Eliminate low-yield spend and double down on highest-converting search clusters.",
    desc: "We analyze server-side multi-touch attribution data to trim underperforming media spend and reinvest into compounding organic search clusters and high-retention app conversion loops.",
    deliverables: ["First-Party Data Attribution", "A/B Funnel Experimentation", "International Market Expansion"],
    systemRole: "Transforms initial customer acquisition into compounding equity.",
  },
];

export default function Approach() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  const activeStage = PROCESS_STAGES[activeIdx];
  const progressPercent = ((activeIdx + 1) / PROCESS_STAGES.length) * 100;

  return (
    <section id="approach" className="pageSection theme-warm" ref={revealRef} aria-label="Execution Methodology Timeline">
      <div className="container">
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerTag}>
            <span className={styles.tagDot} aria-hidden="true" />
            <span className={styles.tagText}>Execution Methodology</span>
          </div>
          <h2 className={styles.sectionTitle}>
            From Strategy To Scale. <br />
            <span className={styles.titleSub}>A Disciplined 4-Stage Growth Timeline.</span>
          </h2>
          <p className={styles.sectionDesc}>
            A repeatable technical framework engineered to eliminate operational agency silos and turn algorithmic volatility into compounding market share.
          </p>
        </div>

        {/* Sophisticated Timeline Bar */}
        <div className={`${styles.timelineWrapper} ${isVisible ? styles.visible : ""}`}>
          {/* Progress Connecting Line */}
          <div className={styles.timelineTrack} aria-hidden="true">
            <div className={styles.timelineBaseLine} />
            <div className={styles.timelineFilledLine} style={{ width: `${progressPercent}%` }} />
          </div>

          {/* 4 Stage Nodes */}
          <div className={styles.timelineStagesRow} role="tablist" aria-label="Methodology Process Stages">
            {PROCESS_STAGES.map((st, idx) => {
              const isActive = idx === activeIdx;
              const isSubdued = idx < activeIdx;
              const isPending = idx > activeIdx;

              return (
                <button
                  key={st.step}
                  type="button"
                  role="tab"
                  id={`methodology-step-${st.step}`}
                  aria-selected={isActive}
                  aria-controls="methodology-panel"
                  className={`${styles.timelineNodeBtn} ${isActive ? styles.nodeActive : ""} ${isSubdued ? styles.nodeSubdued : ""} ${isPending ? styles.nodePending : ""}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <div className={styles.nodeIconIndicator}>
                    {isSubdued ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span className={styles.nodeDot} />
                    )}
                  </div>
                  <span className={styles.nodeStepNum}>{st.step}</span>
                  <span className={styles.nodeName}>{st.name}</span>
                </button>
              );
            })}
          </div>

          {/* Active Stage Detailed Presentation Panel */}
          <div id="methodology-panel" role="tabpanel" aria-labelledby={`methodology-step-${activeStage.step}`} className={styles.stageDossierCard}>
            {/* Top Stage Header Row */}
            <div className={styles.stageHeaderRow}>
              <div className={styles.stageTitleGroup}>
                <span className={styles.stageTagBadge}>
                  STAGE {activeStage.step} • {activeStage.tag}
                </span>
                <h3 className={styles.stageNameHeading}>{activeStage.name}</h3>
                <p className={styles.stageOneLiner}>{activeStage.oneLiner}</p>
              </div>

              {/* Big Stage Number */}
              <div className={styles.stageOversizedNumber} aria-hidden="true">
                {activeStage.step}
              </div>
            </div>

            {/* Middle Grid: Detailed Description & System Role */}
            <div className={styles.stageGrid}>
              <div className={styles.stageDescCol}>
                <span className={styles.descLabel}>ENGINEERING PROTOCOL</span>
                <p className={styles.stageFullDesc}>{activeStage.desc}</p>
              </div>

              <div className={styles.systemRoleCol}>
                <span className={styles.descLabel}>SYSTEM ROLE IN COMPOUNDING</span>
                <p className={styles.stageRoleText}>{activeStage.systemRole}</p>
              </div>
            </div>

            {/* Deliverables Row */}
            <div className={styles.deliverablesSection}>
              <span className={styles.delivHeaderLabel}>VALIDATED DELIVERABLES:</span>
              <div className={styles.delivPillsList}>
                {activeStage.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className={styles.delivChip}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Step Navigation & CTA */}
            <div className={styles.stageFooterRow}>
              <div className={styles.progressCounter}>
                <span>STAGE {activeIdx + 1} OF {PROCESS_STAGES.length}</span>
              </div>

              <div className={styles.stageBtnGroup}>
                {activeIdx > 0 && (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setActiveIdx((prev) => prev - 1)}
                  >
                    &larr; Previous Stage
                  </button>
                )}

                {activeIdx < PROCESS_STAGES.length - 1 ? (
                  <button
                    type="button"
                    className="btn btn-obsidian"
                    onClick={() => setActiveIdx((prev) => prev + 1)}
                  >
                    Next Stage &rarr;
                  </button>
                ) : (
                  <Link href="/#opportunity-tool" className="btn btn-obsidian">
                    Deploy 4-Stage Methodology &rarr;
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
