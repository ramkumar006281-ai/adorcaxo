"use client";

import Image from "next/image";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./Hero.module.css";

interface PathwayCardProps {
  category: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  chipLabel: string;
  href: string;
  staggerClass?: string;
}

function PathwayCard({
  category,
  title,
  description,
  imageSrc,
  imageAlt,
  chipLabel,
  href,
  staggerClass,
}: PathwayCardProps) {
  return (
    <Link
      href={href}
      className={`${styles.pathwayCard} ${staggerClass || ""}`}
      aria-label={`${title} - ${category}`}
    >
      <div className={styles.cardHeader}>
        <div className={styles.categoryTag}>
          <span className={styles.tagDot} aria-hidden="true" />
          {category}
        </div>
        <h2 className={styles.cardTitle}>{title}</h2>
        <p className={styles.cardDesc}>{description}</p>
      </div>

      <div className={styles.imageFrame}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 380px"
          className={styles.cardImage}
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
        <span className={styles.imageChip}>{chipLabel}</span>
      </div>

      <div className={styles.cardFooter}>
        <span className={styles.exploreAction}>
          EXPLORE
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={styles.exploreArrow}
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export default function Hero() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  return (
    <section className={styles.heroSection} ref={revealRef} aria-label="Hero Introduction">
      <div className="container">
        <div className={styles.grid}>
          {/* Column 1: Dominant Editorial Headline & Proposition */}
          <div className={`${styles.contentCol} ${isVisible ? styles.visible : ""}`}>
            {/* Context Badge */}
            <div className={`${styles.badgeRow} ${styles.staggerBadge}`}>
              <span className={styles.studioBadge}>
                <span className={styles.studioDot} aria-hidden="true" />
                Performance Growth Studio
              </span>
              <span className={styles.regionPill}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10z" />
                </svg>
                50+ Markets
              </span>
            </div>

            {/* Masked Line Reveal Headline */}
            <h1 className={styles.heroTitle} aria-label="Turn Digital Attention Into Growth.">
              <span className={styles.titleMask}>
                <span className={`${styles.titleLine} ${styles.line1}`}>TURN DIGITAL</span>
              </span>
              <span className={styles.titleMask}>
                <span className={`${styles.titleLine} ${styles.line2}`}>ATTENTION</span>
              </span>
              <span className={styles.titleMask}>
                <span className={`${styles.titleLine} ${styles.line3} ${styles.highlightLine}`}>
                  INTO GROWTH.
                </span>
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className={`${styles.heroDesc} ${styles.staggerDesc}`}>
              We combine intelligent SEO, performance marketing, content strategy and technology to help
              ambitious brands scale faster across global markets.
            </p>

            {/* CTAs */}
            <div className={`${styles.ctaGroup} ${styles.staggerCta}`}>
              <Link href="/#opportunity-tool" className={`btn ${styles.growthPrimaryBtn}`}>
                Launch Growth Diagnostic
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link href="/case-studies" className={`btn ${styles.growthSecondaryBtn}`}>
                Explore Our Work
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>

            {/* Telemetry Row */}
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

          {/* Pathways Columns Container */}
          <div className={`${styles.pathwaysContainer} ${isVisible ? styles.visible : ""}`}>
            {/* Column 2: SEO FOR BUSINESSES */}
            <PathwayCard
              category="Direct Brands & Enterprise"
              title="SEO FOR BUSINESSES"
              description="Organic search intelligence, semantic topic clusters, and compounding revenue systems for scaling companies."
              imageSrc="/images/hero-editorial.jpg"
              imageAlt="Analyst reviewing growth analytics and search performance charts at desk"
              chipLabel="Enterprise Search"
              href="/services#seo"
              staggerClass={styles.staggerCard1}
            />

            {/* Column 3: WHITE LABEL SEO SERVICES */}
            <PathwayCard
              category="Agencies & Partner Scale"
              title="WHITE LABEL SEO SERVICES"
              description="Confidential backend execution, programmatic audits, and turnkey search infrastructure for growing marketing agencies."
              imageSrc="/images/hero-whitelabel.jpg"
              imageAlt="Executive team collaborating on client performance in boardroom"
              chipLabel="Agency Turnkey"
              href="/services#white-label"
              staggerClass={styles.staggerCard2}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
