"use client";

import { useState } from "react";
import { useIntersection } from "./utils";
import styles from "./Testimonials.module.css";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  companyBadge: string;
  verifiedMetric: string;
  metricLabel: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "ecomart",
    quote:
      "Adorca 360 completely restructured our international search footprint. Within six months of deploying their localized technical SEO and server-side hreflang architecture, our organic revenue across European and LATAM markets surged by +140%.",
    name: "Sarah Jenkins",
    role: "Director of Growth",
    company: "EcoMart Group",
    companyBadge: "ECO-MART",
    verifiedMetric: "+140%",
    metricLabel: "Organic Revenue Growth",
  },
  {
    id: "finflow",
    quote:
      "Partnering with Adorca 360 cut our enterprise cost-per-acquisition by 42% while doubling our qualified inbound sales pipeline through algorithmic programmatic bid distribution.",
    name: "Marcus Thorne",
    role: "Head of Marketing",
    company: "FinFlow Solutions",
    companyBadge: "FINFLOW",
    verifiedMetric: "-42%",
    metricLabel: "CPA Reduction",
  },
  {
    id: "nexus",
    quote:
      "Adorca 360 delivered a technical site architecture overhaul that eliminated faceted crawl waste and boosted our organic search indexing efficiency by 68% across hundreds of thousands of product listings.",
    name: "David Chen",
    role: "Chief Marketing Officer",
    company: "Nexus Commerce",
    companyBadge: "NEXUS",
    verifiedMetric: "+68%",
    metricLabel: "Crawl Efficiency",
  },
  {
    id: "playsphere",
    quote:
      "The App Store Optimization and keyword acceleration playbooks from Adorca 360 pushed our flagship mobile gaming application directly into the Top 5 rankings across three competitive regional app stores.",
    name: "Elena Rostova",
    role: "VP of User Acquisition",
    company: "PlaySphere Studio",
    companyBadge: "PLAYSPHERE",
    verifiedMetric: "Top 5",
    metricLabel: "Store Category Dominance",
  },
];

export default function Testimonials() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const [activeIdx, setActiveIdx] = useState(0);

  const activeTestimonial = TESTIMONIALS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="pageSection theme-warm" ref={revealRef} aria-label="Verified Client Testimonials">
      <div className="container">
        <div className={styles.container}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-subtitle">Client Endorsements &amp; Trust</span>
          <h2 className="section-title">Verified Partner Perspectives</h2>
          <p className="section-desc">
            Direct perspectives from growth and marketing leaders who scaled search visibility, organic revenue, and programmatic efficiency with Adorca 360.
          </p>
        </div>

        {/* Editorial Spotlight Card */}
        <div className={`${styles.editorialWrapper} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.editorialCard} role="region" aria-label={`Testimonial from ${activeTestimonial.name} at ${activeTestimonial.company}`}>
            {/* Quotation Watermark */}
            <div className={styles.quoteWatermark} aria-hidden="true">
              &ldquo;
            </div>

            {/* Top Row: Company Mark & Verified Outcome */}
            <div className={styles.cardTopRow}>
              <div className={styles.companyMark}>
                <span className={styles.companyBadgeText}>{activeTestimonial.companyBadge}</span>
                <span className={styles.verifiedDot} />
              </div>

              <div className={styles.metricPill}>
                <span className={styles.metricVal}>{activeTestimonial.verifiedMetric}</span>
                <span className={styles.metricLabel}>{activeTestimonial.metricLabel}</span>
              </div>
            </div>

            {/* Large Editorial Quote */}
            <blockquote className={styles.quoteBody}>
              &ldquo;{activeTestimonial.quote}&rdquo;
            </blockquote>

            {/* Bottom Meta & Attribution Row */}
            <div className={styles.cardBottomRow}>
              <div className={styles.authorBlock}>
                <div className={styles.authorMonogram} aria-hidden="true">
                  {activeTestimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className={styles.authorMeta}>
                  <h3 className={styles.authorName}>{activeTestimonial.name}</h3>
                  <p className={styles.authorRole}>
                    {activeTestimonial.role} &bull; <span className={styles.authorCompany}>{activeTestimonial.company}</span>
                  </p>
                </div>
              </div>

              {/* Step Controls & Counter */}
              <div className={styles.controlsRow}>
                <span className={styles.counterText}>
                  0{activeIdx + 1} <span className={styles.counterDivider}>/</span> 0{TESTIMONIALS.length}
                </span>

                <div className={styles.btnGroup}>
                  <button
                    type="button"
                    className={styles.controlBtn}
                    onClick={handlePrev}
                    aria-label="Previous testimonial"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="19" y1="12" x2="5" y2="12" />
                      <polyline points="12 19 5 12 12 5" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className={styles.controlBtn}
                    onClick={handleNext}
                    aria-label="Next testimonial"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Selection Navigation Bar */}
          <div className={styles.selectorBar} role="tablist" aria-label="Select Testimonial">
            {TESTIMONIALS.map((t, idx) => {
              const isActive = idx === activeIdx;
              return (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  id={`testimonial-tab-${t.id}`}
                  aria-selected={isActive}
                  className={`${styles.tabBtn} ${isActive ? styles.tabBtnActive : ""}`}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span className={styles.tabName}>{t.name}</span>
                  <span className={styles.tabCompany}>{t.company}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
