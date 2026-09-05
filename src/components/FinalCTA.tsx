"use client";

import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./FinalCTA.module.css";

export default function FinalCTA() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  return (
    <section id="contact" className="darkCardSection theme-dark" ref={revealRef} aria-label="Final Call to Action">
      {/* Signature Ambient Growth Orbit Background */}
      <div className={styles.ambientOrbit} aria-hidden="true">
        <svg
          className={styles.orbitSvg}
          viewBox="0 0 800 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="ctaGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#B7E56B" stopOpacity="0.16" />
              <stop offset="70%" stopColor="#0B0D0F" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#0B0D0F" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Ambient Glow Aura */}
          <ellipse cx="400" cy="250" rx="360" ry="200" fill="url(#ctaGlow)" />

          {/* Outer Orbital Ring */}
          <ellipse
            cx="400"
            cy="250"
            rx="340"
            ry="180"
            className={`${styles.orbitRing} ${styles.orbitOuter}`}
            strokeDasharray="8 8"
          />

          {/* Mid Orbital Ring */}
          <ellipse
            cx="400"
            cy="250"
            rx="240"
            ry="120"
            className={`${styles.orbitRing} ${styles.orbitMid}`}
            strokeDasharray="4 6"
          />

          {/* Inner Orbital Ring */}
          <ellipse
            cx="400"
            cy="250"
            rx="140"
            ry="70"
            className={`${styles.orbitRing} ${styles.orbitInner}`}
          />

          {/* Glowing Orbit Nodes */}
          <circle cx="160" cy="140" r="6" className={`${styles.orbitNode} ${styles.nodeLime}`} />
          <circle cx="640" cy="360" r="5" className={`${styles.orbitNode} ${styles.nodeBlue}`} />
          <circle cx="260" cy="340" r="4" className={`${styles.orbitNode} ${styles.nodeLime}`} />
          <circle cx="540" cy="160" r="5" className={`${styles.orbitNode} ${styles.nodeBlue}`} />
        </svg>
      </div>

      {/* Content Wrapper */}
      <div className={`${styles.contentWrapper} ${isVisible ? styles.visible : ""}`}>
        <span className="section-subtitle">Start Your Expansion</span>

        <h2 className={styles.title}>
          Ready To Build <br />
          <span className={styles.highlightText}>What&apos;s Next?</span>
        </h2>

        <p className={styles.desc}>
          Tell us where you are. <br className={styles.breakOnDesktop} />
          We&apos;ll show you where the next opportunity is.
        </p>

        <div className={styles.actionsRow}>
          <Link href="/#opportunity-tool" className="btn btn-lime" id="final-cta-btn">
            Talk to a Strategist &rarr;
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
            <span>50+ Global Markets Supported</span>
          </div>
        </div>
      </div>
    </section>
  );
}
