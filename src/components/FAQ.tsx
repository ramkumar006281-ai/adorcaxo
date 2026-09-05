"use client";

import { useState } from "react";
import { useIntersection } from "./utils";
import { FAQ_DATA } from "@/data/faqData";
import styles from "./FAQ.module.css";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-timeline");
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFAQ(id);
    }
  };

  return (
    <section id="faq" className="pageSection theme-warm" ref={revealRef} aria-label="Frequently Asked Questions">
      <div className="container">
        <div className={styles.container}>
        {/* Section Header */}
        <div className="section-header center">
          <span className="section-subtitle">Frequently Asked Questions</span>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-desc">
            Clear, transparent answers regarding our search engineering methodologies, multi-region indexing timelines, network integrations, and data ownership.
          </p>
        </div>

        {/* Accordion List */}
        <div className={`${styles.accordionWrapper} ${isVisible ? styles.visible : ""}`} role="presentation">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.questionBtn}
                  onClick={() => toggleFAQ(item.id)}
                  onKeyDown={(e) => handleKeyDown(e, item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-question-${item.id}`}
                >
                  <div className={styles.questionLeft}>
                    <span className={styles.indexNum}>0{idx + 1}</span>
                    <span className={styles.questionText}>{item.question}</span>
                  </div>

                  <span className={`${styles.chevronWrapper} ${isOpen ? styles.chevronOpen : ""}`} aria-hidden="true">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-question-${item.id}`}
                  className={`${styles.answerContainer} ${isOpen ? styles.answerOpen : ""}`}
                >
                  <div className={styles.answerContent}>
                    <div className={styles.answerInner}>
                      <div className={styles.answerIndicator} aria-hidden="true" />
                      <p className={styles.answerText}>{item.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
    </section>
  );
}
