"use client";

import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  return (
    <section id="contact" className="darkCardSection theme-dark" ref={revealRef} aria-label="Final Call to Action">
      {/* Converging Signal Visualization: 5 Systems Flowing into Central Opportunity */}
      <div className={styles.convergingCanvas} aria-hidden="true">
        <svg
          className={styles.convergingSvg}
          viewBox="0 0 900 480"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="centralOpportunityGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--color-adorca-signal)" stopOpacity="0.3" />
              <stop offset="60%" stopColor="#0B0D0F" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#0B0D0F" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central Halo */}
          <ellipse cx="450" cy="240" rx="380" ry="200" fill="url(#centralOpportunityGlow)" />

          {/* 5 Converging Conduits to Nucleus (cx=450, cy=240) */}
          {/* Conduit 01: Hero Signal (from 80, 80) */}
          <line x1="80" y1="80" x2="450" y2="240" stroke="rgba(183, 229, 107, 0.25)" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="80" cy="80" r="4" fill="var(--color-adorca-signal)" />
          <text x="85" y="70" className={styles.conduitLabel}>01 HERO SIGNAL</text>

          {/* Conduit 02: Intelligence Intent (from 820, 80) */}
          <line x1="820" y1="80" x2="450" y2="240" stroke="rgba(183, 229, 107, 0.25)" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="820" cy="80" r="4" fill="var(--color-adorca-signal)" />
          <text x="710" y="70" className={styles.conduitLabel}>02 INTELLIGENCE</text>

          {/* Conduit 03: Infrastructure Device (from 60, 380) */}
          <line x1="60" y1="380" x2="450" y2="240" stroke="rgba(183, 229, 107, 0.2)" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="60" cy="380" r="4" fill="#3B82F6" />
          <text x="65" y="405" className={styles.conduitLabel}>03 INFRASTRUCTURE</text>

          {/* Conduit 04: 50+ Markets (from 840, 380) */}
          <line x1="840" y1="380" x2="450" y2="240" stroke="rgba(183, 229, 107, 0.2)" strokeWidth="1.2" strokeDasharray="4 4" />
          <circle cx="840" cy="380" r="4" fill="var(--color-adorca-signal)" />
          <text x="735" y="405" className={styles.conduitLabel}>04 50+ MARKETS</text>

          {/* Conduit 05: Orbit Attribution (from 450, 440) */}
          <line x1="450" y1="440" x2="450" y2="240" stroke="rgba(183, 229, 107, 0.3)" strokeWidth="1.5" />
          <circle cx="450" cy="440" r="4" fill="var(--color-adorca-signal)" />
          <text x="450" y="465" textAnchor="middle" className={styles.conduitLabel}>05 ATTRIBUTION ORBIT</text>

          {/* Central Nucleus Concentric Rings */}
          <circle cx="450" cy="240" r="56" fill="#0C1013" stroke="rgba(183, 229, 107, 0.3)" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="450" cy="240" r="28" fill="#12161A" stroke="var(--color-adorca-signal)" strokeWidth="1.5" />
          <circle cx="450" cy="240" r="6" fill="var(--color-adorca-signal)" className={styles.pulsingCore} />
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className={`${styles.contentWrapper} ${isVisible ? styles.visible : ""}`}>
        <div className={styles.sectionBadge}>
          <span className={styles.badgeDot} />
          <span className={styles.badgeText}>SYSTEM CONVERGENCE // FINAL SYNTHESIS</span>
        </div>

        <h2 className={styles.title}>
          FIND YOUR <br />
          <span className={styles.highlightText}>GROWTH CONSTRAINT.</span>
        </h2>

        <p className={styles.desc}>
          Where organic search architecture, sovereign market routing, and first-party attribution converge into measurable commercial dominance.
        </p>

        <div className={styles.actionsRow}>
          <Link href="/#opportunity-tool" className="btn btn-primary" id="final-cta-btn">
            RUN GROWTH DIAGNOSTIC &rarr;
          </Link>
          <a href="mailto:contact@adorca360.com" className="btn btn-secondary">
            contact@adorca360.com
          </a>
        </div>

        {/* Verified Culmination Guarantees */}
        <div className={styles.guaranteeRow}>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeDot} />
            <span>100% Attribution Transparency</span>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeDot} />
            <span>Zero Vanity Metrics</span>
          </div>
          <div className={styles.guaranteeItem}>
            <span className={styles.guaranteeDot} />
            <span>Senior Growth Engineers On Every Sprint</span>
          </div>
        </div>
      </div>
    </section>
  );
}
