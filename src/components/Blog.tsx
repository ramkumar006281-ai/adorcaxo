"use client";

import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./Blog.module.css";

const ARTICLES = [
  {
    id: "seo-global",
    tag: "Organic Growth",
    date: "August 24, 2026",
    readTime: "6 min read",
    title: "Unlocking Organic Growth: The Future of Global Multi-Region SEO",
    desc: "How localized regional intent matching, server-side hreflang tagging, and Core Web Vitals optimization drive sustainable organic traffic acquisition across cross-border markets.",
    isFeatured: true,
  },
  {
    id: "aso-boosters",
    tag: "App Store Optimization",
    date: "August 18, 2026",
    readTime: "5 min read",
    title: "ASO Best Practices for App Revenue Boosting & Category Dominance",
    desc: "Key tactical steps to optimize app store conversion velocity, streamline onboarding funnels, and boost organic store algorithms.",
    isFeatured: false,
  },
  {
    id: "programmatic-ads",
    tag: "Programmatic Bidding",
    date: "August 10, 2026",
    readTime: "7 min read",
    title: "Why Programmatic Bidding is Outperforming Generic Ad Networks",
    desc: "Leveraging algorithmic audience segmentation and real-time bid adjustments to eliminate budget leakage and slash acquisition costs.",
    isFeatured: false,
  },
];

export default function Blog() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });
  const featuredArticle = ARTICLES.find((a) => a.isFeatured) || ARTICLES[0];
  const secondaryArticles = ARTICLES.filter((a) => !a.isFeatured);

  return (
    <section id="insights" className="pageSection theme-warm" ref={revealRef}>
      <div className="container">
      {/* Section Header */}
      <div className="section-header">
        <div className={styles.headerRow}>
          <div>
            <span className="section-subtitle">Strategic Intelligence</span>
            <h2 className="section-title">News &amp; Insights</h2>
            <p className="section-desc">
              Stay ahead with tactical breakdowns on organic search architecture, international SEO, and programmatic performance.
            </p>
          </div>
          <Link href="/blog" className="btn btn-secondary" style={{ width: "max-content", height: "max-content" }}>
            View All Articles &rarr;
          </Link>
        </div>
      </div>

      {/* Editorial Grid: 1 Featured (Left) + 2 Secondary (Right) */}
      <div className={`${styles.articlesGrid} ${isVisible ? styles.visible : ""}`}>
        {/* Featured Article Card */}
        <article className={styles.featuredCard}>
          <div className={styles.metaRow}>
            <span className={styles.tagBadge}>{featuredArticle.tag}</span>
            <span className={styles.metaDot}>&bull;</span>
            <span className={styles.metaText}>{featuredArticle.date}</span>
            <span className={styles.metaDot}>&bull;</span>
            <span className={styles.metaText}>{featuredArticle.readTime}</span>
          </div>

          <h3 className={styles.featuredTitle}>
            <Link href={`/blog/${featuredArticle.id}`}>{featuredArticle.title}</Link>
          </h3>

          <p className={styles.featuredDesc}>{featuredArticle.desc}</p>

          <Link href={`/blog/${featuredArticle.id}`} className={styles.readMoreBtn}>
            Read Full Intelligence Brief
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </article>

        {/* Secondary Articles Stack */}
        <div className={styles.secondaryStack}>
          {secondaryArticles.map((article) => (
            <article key={article.id} className={styles.secondaryCard}>
              <div className={styles.metaRow}>
                <span className={styles.tagBadge}>{article.tag}</span>
                <span className={styles.metaDot}>&bull;</span>
                <span className={styles.metaText}>{article.date}</span>
                <span className={styles.metaDot}>&bull;</span>
                <span className={styles.metaText}>{article.readTime}</span>
              </div>

              <h3 className={styles.secondaryTitle}>
                <Link href={`/blog/${article.id}`}>{article.title}</Link>
              </h3>

              <p className={styles.secondaryDesc}>{article.desc}</p>

              <Link href={`/blog/${article.id}`} className={styles.readLink}>
                Read Article &rarr;
              </Link>
            </article>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
