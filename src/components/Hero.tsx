"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./Hero.module.css";

export default function Hero() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

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

          {/* Right Column: Editorial Performance & Intelligence Photography (IMAGE A) */}
          <div className={`${styles.visualCol} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.editorialFrame} aria-label="Adorca 360 Growth Intelligence">
              {/* Subtle Upper Metadata Bar */}
              <div className={styles.editorialMetaHeader}>
                <div className={styles.editorialMetaLeft}>
                  <span className={styles.metaDot} aria-hidden="true" />
                  <span className={styles.metaCode}>GROWTH INTELLIGENCE / 01</span>
                </div>
                <span className={styles.metaBadge}>PERFORMANCE SIGNAL</span>
              </div>

              {/* Substantial Editorial Image Container */}
              <div className={styles.imageContainer}>
                <Image
                  src="/images/hero-editorial.jpg"
                  alt="Professional reviewing performance analytics and growth data"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 46vw, 540px"
                  className={styles.editorialImage}
                />
                <div className={styles.imageOverlay} />
              </div>

              {/* Restrained Lower Metadata Footer */}
              <div className={styles.editorialMetaFooter}>
                <div className={styles.vectorTelemetry}>
                  <span className={styles.vectorLabel}>STRATEGIC VECTOR</span>
                  <span className={styles.vectorValue}>DATA → DECISION</span>
                </div>
                <div className={styles.attributionStamp}>
                  <span className={styles.stampCoord}>LAT 40.7128° N</span>
                  <span className={styles.stampDivider}>/</span>
                  <span className={styles.stampStatus}>CORE INDEX: VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
