"use client";

import { useState } from "react";
import Link from "next/link";
import { useIntersection } from "./utils";
import styles from "./GrowthOpportunityTool.module.css";

interface DiagnosticParams {
  market: string;
  objective: string;
  region: string;
  constraint: string;
  website: string;
  name: string;
  email: string;
  notes: string;
}

interface DiagnosticResponse {
  success: boolean;
  message: string;
  brief: {
    market: string;
    objective: string;
    region: string;
    constraint: string;
    website: string;
    name: string;
    email: string;
  };
  diagnostic: {
    diagnosticId: string;
    timestamp: string;
    domain: string;
    healthScore: number;
    criticalFinding: {
      category: string;
      bottleneck: string;
      severity: "HIGH" | "CRITICAL" | "ELEVATED";
      impactArea: string;
    };
    technicalIntervention: {
      protocol: string;
      architectureAction: string;
      deliverables: string[];
    };
    projectedMilestone: {
      compoundingHorizon: string;
      targetKPI: string;
      expectedGain: string;
    };
    executionPhases: {
      phase: string;
      title: string;
      timeline: string;
    }[];
  };
}

const MARKETS = [
  { id: "ecom", title: "E-Commerce & Retail", descriptor: "Cross-Border Catalog & SKUs" },
  { id: "saas", title: "B2B SaaS & Enterprise", descriptor: "Pipeline Velocity & High ACV" },
  { id: "app", title: "Mobile Apps & Gaming", descriptor: "Global Store Ranking & Retention" },
  { id: "fintech", title: "Fintech & Regulated", descriptor: "High Compliance & Trust Equity" },
  { id: "health", title: "Healthcare & Life Sciences", descriptor: "High-Intent Search Verification" },
  { id: "d2c", title: "Global D2C Brands", descriptor: "Omnichannel Direct Scale" },
];

const OBJECTIVES = [
  { id: "seo", title: "Organic Search Scale", metric: "+140% Organic Growth", descriptor: "Technical crawl architecture & semantic cluster equity" },
  { id: "cpa", title: "Lower CPA & Media Efficiency", metric: "-42% CPA Reduction", descriptor: "Algorithmic bidding rules & server-side conversion APIs" },
  { id: "global", title: "Cross-Border Expansion", metric: "50+ Search Markets", descriptor: "Native linguistic intent & sovereign regional routing" },
  { id: "aso", title: "App Store Top 5 Ranking", metric: "Top 5 Category Rank", descriptor: "ASO keyword velocity & multivariate listing CRO" },
  { id: "attribution", title: "100% Attribution Ownership", metric: "Zero Data Loss", descriptor: "First-party warehouse pipelines & deterministic modeling" },
];

const REGIONS = [
  { id: "global", title: "Global Multi-Region (50+ Markets)", coverage: "Worldwide ccTLD" },
  { id: "na", title: "North America (US & Canada)", coverage: "Tier 1 High Competition" },
  { id: "eu", title: "Western Europe & UK", coverage: "Multilingual GDPR Core" },
  { id: "apac", title: "Asia-Pacific (AU, SG, JP)", coverage: "Rapid Mobile Growth" },
  { id: "latam", title: "Latin America (BR, MX, LATAM)", coverage: "Emerging Organic Markets" },
];

const CONSTRAINTS = [
  { id: "cpa_bleed", title: "High Customer Acquisition Costs (CPA)", detail: "Broad-match ad waste & attribution leakage" },
  { id: "crawl_debt", title: "Crawl Inefficiencies & Indexing Debt", detail: "Rendering latency & orphaned navigational URLs" },
  { id: "hreflang_conflicts", title: "Multilingual Canonical Conflicts", detail: "Cross-domain regional cannibalization loops" },
  { id: "attribution_loss", title: "Attribution Gaps & Data Disconnect", detail: "Fragmented analytics & blind spot marketing spend" },
  { id: "funnel_friction", title: "Conversion Funnel Drop-off (CRO)", detail: "Suboptimal Core Web Vitals & post-click friction" },
];

export default function GrowthOpportunityTool() {
  const [revealRef, isVisible] = useIntersection({ threshold: 0.08 });

  const [params, setParams] = useState<DiagnosticParams>({
    market: MARKETS[0].title,
    objective: OBJECTIVES[0].title,
    region: REGIONS[0].title,
    constraint: CONSTRAINTS[0].title,
    website: "",
    name: "",
    email: "",
    notes: "",
  });

  const [validationErrors, setValidationErrors] = useState<{
    website?: string;
    name?: string;
    email?: string;
  }>({});

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [diagnosticResult, setDiagnosticResult] = useState<DiagnosticResponse["diagnostic"] | null>(null);

  const validateInputs = (): boolean => {
    const errors: typeof validationErrors = {};
    if (!params.website.trim()) {
      errors.website = "Target domain or website URL is required.";
    }
    if (!params.name.trim()) {
      errors.name = "Executive contact name is required.";
    }
    if (!params.email.trim()) {
      errors.email = "Business email address is required.";
    } else if (!/\S+@\S+\.\S+/.test(params.email)) {
      errors.email = "Please provide a valid corporate email.";
    }
    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    if (!validateInputs()) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/opportunity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(params),
      });

      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || "Failed to generate growth diagnostic. Please verify inputs.");
      }

      const data: DiagnosticResponse = await res.json();
      setDiagnosticResult(data.diagnostic);
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Network error generating diagnostic.");
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setDiagnosticResult(null);
  };

  return (
    <section
      id="opportunity-tool"
      className="darkCardSection theme-dark"
      ref={revealRef}
      aria-label="Growth Diagnostics Strategic Instrument"
    >
      <div className={styles.container}>
        {/* Editorial Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.systemBadge}>
            <span className={styles.beaconDot} aria-hidden="true" />
            <span className={styles.badgeText}>Strategic Instrument // 04 Vectors</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Growth <br />
            <span className={styles.accentWord}>Diagnostics.</span>
          </h2>
          <p className={styles.sectionDesc}>
            Configure your operating vectors to benchmark crawl architecture, international intent depth, and cross-channel attribution. Never fabricated. Grounded directly in verified engineering telemetry.
          </p>
        </div>

        {/* Strategic Instrument Canvas */}
        <div className={`${styles.instrumentShell} ${isVisible ? styles.visible : ""}`}>
          {status === "success" && diagnosticResult ? (
            /* Diagnostic Dossier Result Terminal */
            <div className={styles.resultDossier}>
              {/* Dossier Top Bar */}
              <div className={styles.dossierTopBar}>
                <div className={styles.dossierMetaGroup}>
                  <span className={styles.dossierBadge}>DIAGNOSTIC COMPLETE</span>
                  <span className={styles.dossierId}>{diagnosticResult.diagnosticId}</span>
                </div>
                <div className={styles.dossierDomain}>
                  <span className={styles.metaLabel}>TARGET DOMAIN:</span>
                  <span className={styles.metaValue}>{diagnosticResult.domain}</span>
                </div>
                <button
                  type="button"
                  onClick={handleReset}
                  className={styles.resetButton}
                  aria-label="Re-run Growth Diagnostic"
                >
                  Configure New Vector ↺
                </button>
              </div>

              {/* Dossier Main Content */}
              <div className={styles.dossierBody}>
                {/* Health Index & Severity Banner */}
                <div className={styles.findingCard}>
                  <div className={styles.findingHeader}>
                    <div className={styles.healthScoreBox}>
                      <span className={styles.healthScoreVal}>{diagnosticResult.healthScore}</span>
                      <span className={styles.healthScoreLabel}>/ 100 HEALTH INDEX</span>
                    </div>
                    <div className={styles.findingDetails}>
                      <div className={styles.severityRow}>
                        <span className={styles.severityTag}>{diagnosticResult.criticalFinding.severity} CONSTRAINT</span>
                        <span className={styles.categoryTag}>{diagnosticResult.criticalFinding.category}</span>
                      </div>
                      <h3 className={styles.bottleneckHeadline}>{diagnosticResult.criticalFinding.bottleneck}</h3>
                      <p className={styles.impactArea}>
                        <strong>Primary Impact:</strong> {diagnosticResult.criticalFinding.impactArea}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Intervention Protocol */}
                <div className={styles.protocolCard}>
                  <div className={styles.protocolHeader}>
                    <span className={styles.stepNum}>PROTOCOL // 01</span>
                    <h4 className={styles.protocolTitle}>{diagnosticResult.technicalIntervention.protocol}</h4>
                  </div>
                  <p className={styles.protocolAction}>{diagnosticResult.technicalIntervention.architectureAction}</p>

                  <div className={styles.deliverablesList}>
                    <span className={styles.deliverableTitle}>Mandatory Architecture Deliverables:</span>
                    <ul>
                      {diagnosticResult.technicalIntervention.deliverables.map((item, idx) => (
                        <li key={idx}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Projected Compounding Milestone */}
                <div className={styles.milestoneGrid}>
                  <div className={styles.milestoneBox}>
                    <span className={styles.milestoneLabel}>Target KPI Milestone</span>
                    <span className={styles.milestoneValue}>{diagnosticResult.projectedMilestone.targetKPI}</span>
                    <span className={styles.milestoneSub}>{diagnosticResult.projectedMilestone.expectedGain}</span>
                  </div>
                  <div className={styles.milestoneBox}>
                    <span className={styles.milestoneLabel}>Compounding Horizon</span>
                    <span className={styles.milestoneValue}>{diagnosticResult.projectedMilestone.compoundingHorizon}</span>
                    <span className={styles.milestoneSub}>Sprint-based technical verification</span>
                  </div>
                </div>

                {/* Sprints Roadmap */}
                <div className={styles.sprintsContainer}>
                  <span className={styles.sprintHeading}>3-Sprint Execution Schedule:</span>
                  <div className={styles.sprintRow}>
                    {diagnosticResult.executionPhases.map((phase) => (
                      <div key={phase.phase} className={styles.sprintCol}>
                        <span className={styles.sprintTag}>PHASE {phase.phase}</span>
                        <span className={styles.sprintTitle}>{phase.title}</span>
                        <span className={styles.sprintTime}>{phase.timeline}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action Deck */}
                <div className={styles.dossierActions}>
                  <Link href="#contact" className="btn btn-primary">
                    Book Executive Debrief with Senior Strategist →
                  </Link>
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="btn btn-secondary"
                  >
                    Export Strategic Dossier (PDF)
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Strategic Instrument Configuration Form */
            <form onSubmit={handleGenerate} className={styles.instrumentForm}>
              {/* Instrument Top Status Header */}
              <div className={styles.instrumentBar}>
                <div className={styles.indicatorNodes}>
                  <span className={styles.nodeActive} />
                  <span className={styles.barLabel}>TELEMETRY ACTIVE // 4-VECTOR SYSTEM BENCHMARK</span>
                </div>
                <div className={styles.instrumentState}>
                  {status === "loading" ? "ANALYZING SYSTEM DATA..." : "READY FOR CONFIGURATION"}
                </div>
              </div>

              {errorMessage && (
                <div className={styles.errorAlert} role="alert">
                  <span className={styles.errorIcon}>⚠</span>
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Vector 01: YOUR MARKET */}
              <div className={styles.vectorBlock}>
                <div className={styles.vectorHeader}>
                  <span className={styles.vectorIndex}>01</span>
                  <div className={styles.vectorTitleWrap}>
                    <h3 className={styles.vectorTitle}>YOUR MARKET</h3>
                    <p className={styles.vectorSubtitle}>Select the primary commercial landscape and SKU complexity.</p>
                  </div>
                </div>
                <div className={styles.optionsGrid} role="radiogroup" aria-label="01 Your Market">
                  {MARKETS.map((m) => {
                    const isSelected = params.market === m.title;
                    return (
                      <button
                        type="button"
                        key={m.id}
                        role="radio"
                        aria-checked={isSelected}
                        className={`${styles.vectorOption} ${isSelected ? styles.optionSelected : ""}`}
                        onClick={() => setParams((prev) => ({ ...prev, market: m.title }))}
                      >
                        <div className={styles.optionTop}>
                          <span className={styles.optionRadio} />
                          <span className={styles.optionTitle}>{m.title}</span>
                        </div>
                        <span className={styles.optionDesc}>{m.descriptor}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Vector 02: YOUR OBJECTIVE */}
              <div className={styles.vectorBlock}>
                <div className={styles.vectorHeader}>
                  <span className={styles.vectorIndex}>02</span>
                  <div className={styles.vectorTitleWrap}>
                    <h3 className={styles.vectorTitle}>YOUR OBJECTIVE</h3>
                    <p className={styles.vectorSubtitle}>Select the core compounding growth milestone to engineer.</p>
                  </div>
                </div>
                <div className={styles.optionsGrid} role="radiogroup" aria-label="02 Your Objective">
                  {OBJECTIVES.map((o) => {
                    const isSelected = params.objective === o.title;
                    return (
                      <button
                        type="button"
                        key={o.id}
                        role="radio"
                        aria-checked={isSelected}
                        className={`${styles.vectorOption} ${isSelected ? styles.optionSelected : ""}`}
                        onClick={() => setParams((prev) => ({ ...prev, objective: o.title }))}
                      >
                        <div className={styles.optionTop}>
                          <span className={styles.optionRadio} />
                          <span className={styles.optionTitle}>{o.title}</span>
                        </div>
                        <span className={styles.optionMetric}>{o.metric}</span>
                        <span className={styles.optionDesc}>{o.descriptor}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Vector 03: YOUR REGION */}
              <div className={styles.vectorBlock}>
                <div className={styles.vectorHeader}>
                  <span className={styles.vectorIndex}>03</span>
                  <div className={styles.vectorTitleWrap}>
                    <h3 className={styles.vectorTitle}>YOUR REGION</h3>
                    <p className={styles.vectorSubtitle}>Target territorial search scope &amp; linguistic routing depth.</p>
                  </div>
                </div>
                <div className={styles.optionsGrid} role="radiogroup" aria-label="03 Your Region">
                  {REGIONS.map((r) => {
                    const isSelected = params.region === r.title;
                    return (
                      <button
                        type="button"
                        key={r.id}
                        role="radio"
                        aria-checked={isSelected}
                        className={`${styles.vectorOption} ${isSelected ? styles.optionSelected : ""}`}
                        onClick={() => setParams((prev) => ({ ...prev, region: r.title }))}
                      >
                        <div className={styles.optionTop}>
                          <span className={styles.optionRadio} />
                          <span className={styles.optionTitle}>{r.title}</span>
                        </div>
                        <span className={styles.optionDesc}>{r.coverage}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Vector 04: YOUR GROWTH CONSTRAINT */}
              <div className={styles.vectorBlock}>
                <div className={styles.vectorHeader}>
                  <span className={styles.vectorIndex}>04</span>
                  <div className={styles.vectorTitleWrap}>
                    <h3 className={styles.vectorTitle}>YOUR GROWTH CONSTRAINT</h3>
                    <p className={styles.vectorSubtitle}>The primary bottleneck choking scalability or inflating spend.</p>
                  </div>
                </div>
                <div className={styles.optionsGrid} role="radiogroup" aria-label="04 Your Growth Constraint">
                  {CONSTRAINTS.map((c) => {
                    const isSelected = params.constraint === c.title;
                    return (
                      <button
                        type="button"
                        key={c.id}
                        role="radio"
                        aria-checked={isSelected}
                        className={`${styles.vectorOption} ${isSelected ? styles.optionSelected : ""}`}
                        onClick={() => setParams((prev) => ({ ...prev, constraint: c.title }))}
                      >
                        <div className={styles.optionTop}>
                          <span className={styles.optionRadio} />
                          <span className={styles.optionTitle}>{c.title}</span>
                        </div>
                        <span className={styles.optionDesc}>{c.detail}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Domain & Executive Contact Inputs */}
              <div className={styles.targetSection}>
                <div className={styles.targetSectionHeader}>
                  <span className={styles.vectorIndex}>VERIFY</span>
                  <div>
                    <h3 className={styles.vectorTitle}>TARGET DOMAIN &amp; EXECUTIVE ROUTING</h3>
                    <p className={styles.vectorSubtitle}>Enter the domain to evaluate and the email address for delivery.</p>
                  </div>
                </div>

                <div className={styles.inputGrid}>
                  {/* Website */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="diag-website" className={styles.fieldLabel}>
                      Target Website / Domain <span className={styles.requiredMark}>*</span>
                    </label>
                    <input
                      id="diag-website"
                      type="text"
                      className={`${styles.textInput} ${validationErrors.website ? styles.inputError : ""}`}
                      placeholder="e.g. yourcompany.com"
                      value={params.website}
                      onChange={(e) => {
                        setParams((prev) => ({ ...prev, website: e.target.value }));
                        if (validationErrors.website) {
                          setValidationErrors((prev) => ({ ...prev, website: undefined }));
                        }
                      }}
                      required
                    />
                    {validationErrors.website && (
                      <span className={styles.errorSpan}>{validationErrors.website}</span>
                    )}
                  </div>

                  {/* Executive Name */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="diag-name" className={styles.fieldLabel}>
                      Executive Contact Name <span className={styles.requiredMark}>*</span>
                    </label>
                    <input
                      id="diag-name"
                      type="text"
                      className={`${styles.textInput} ${validationErrors.name ? styles.inputError : ""}`}
                      placeholder="e.g. Jordan Vance"
                      value={params.name}
                      onChange={(e) => {
                        setParams((prev) => ({ ...prev, name: e.target.value }));
                        if (validationErrors.name) {
                          setValidationErrors((prev) => ({ ...prev, name: undefined }));
                        }
                      }}
                      required
                    />
                    {validationErrors.name && (
                      <span className={styles.errorSpan}>{validationErrors.name}</span>
                    )}
                  </div>

                  {/* Work Email */}
                  <div className={styles.fieldGroup}>
                    <label htmlFor="diag-email" className={styles.fieldLabel}>
                      Corporate Work Email <span className={styles.requiredMark}>*</span>
                    </label>
                    <input
                      id="diag-email"
                      type="email"
                      className={`${styles.textInput} ${validationErrors.email ? styles.inputError : ""}`}
                      placeholder="e.g. j.vance@company.com"
                      value={params.email}
                      onChange={(e) => {
                        setParams((prev) => ({ ...prev, email: e.target.value }));
                        if (validationErrors.email) {
                          setValidationErrors((prev) => ({ ...prev, email: undefined }));
                        }
                      }}
                      required
                    />
                    {validationErrors.email && (
                      <span className={styles.errorSpan}>{validationErrors.email}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* System Check Readiness Protocol */}
              <div className={styles.systemCheckBlock}>
                <div className={styles.systemCheckHeader}>
                  <div className={styles.systemCheckTitleRow}>
                    <span className={styles.systemCheckDot} />
                    <span className={styles.systemCheckTitle}>GROWTH DIAGNOSTIC // SYSTEM PRE-FLIGHT CHECK</span>
                  </div>
                  <span className={styles.systemCheckStatusBadge}>
                    {status === "loading" ? "EVALUATING PROTOCOLS..." : "CONFIGURED TELEMETRY"}
                  </span>
                </div>

                <div className={styles.systemCheckMatrix}>
                  <div className={styles.vectorReadoutRow}>
                    <div className={styles.readoutItem}>
                      <span className={styles.readoutLabel}>DOMAIN</span>
                      <span className={styles.readoutValue}>{params.website.trim() || "Awaiting target input..."}</span>
                    </div>
                    <div className={styles.readoutItem}>
                      <span className={styles.readoutLabel}>MARKET</span>
                      <span className={styles.readoutValue}>{params.market}</span>
                    </div>
                    <div className={styles.readoutItem}>
                      <span className={styles.readoutLabel}>OBJECTIVE</span>
                      <span className={styles.readoutValue}>{params.objective}</span>
                    </div>
                  </div>

                  <div className={styles.checksList}>
                    <div className={styles.checkItem}>
                      <span className={styles.checkName}>TECHNICAL HEALTH &amp; LOG AUDIT</span>
                      <span className={`${styles.checkStatus} ${status === "loading" ? styles.checkRunning : styles.checkReady}`}>
                        {status === "loading" ? "ANALYZING CRAWL..." : "✓ READY"}
                      </span>
                    </div>
                    <div className={styles.checkItem}>
                      <span className={styles.checkName}>SEARCH DEMAND &amp; REGIONAL CRAWL</span>
                      <span className={`${styles.checkStatus} ${status === "loading" ? styles.checkRunning : styles.checkReady}`}>
                        {status === "loading" ? "INDEXING TAXONOMY..." : "✓ READY"}
                      </span>
                    </div>
                    <div className={styles.checkItem}>
                      <span className={styles.checkName}>COMPETITIVE BOTTLENECK ANALYSIS</span>
                      <span className={`${styles.checkStatus} ${status === "loading" ? styles.checkActive : styles.checkPending}`}>
                        {status === "loading" ? "CALCULATING GAP..." : "… PENDING RUN"}
                      </span>
                    </div>
                    <div className={styles.checkItem}>
                      <span className={styles.checkName}>CONVERSION PATH &amp; CRO PROTOCOL</span>
                      <span className={`${styles.checkStatus} ${status === "loading" ? styles.checkActive : styles.checkPending}`}>
                        {status === "loading" ? "MODELING FUNNEL..." : "… PENDING RUN"}
                      </span>
                    </div>
                    <div className={styles.checkItem}>
                      <span className={styles.checkName}>FIRST-PARTY ATTRIBUTION PIPELINE</span>
                      <span className={`${styles.checkStatus} ${status === "loading" ? styles.checkActive : styles.checkPending}`}>
                        {status === "loading" ? "VERIFYING ATTRIBUTION..." : "… PENDING RUN"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Execution Action Deck */}
              <div className={styles.submitDeck}>
                <div className={styles.summaryBrief}>
                  <span className={styles.briefLabel}>CONFIGURED TELEMETRY:</span>
                  <p className={styles.briefContent}>
                    <strong>{params.market}</strong> • {params.objective} • {params.region} •{" "}
                    <em>{params.constraint}</em>
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={styles.generateButton}
                >
                  {status === "loading" ? (
                    <>
                      <span className={styles.spinnerDot} />
                      ANALYZING SYSTEM TELEMETRY...
                    </>
                  ) : (
                    "GENERATE GROWTH DIAGNOSTIC →"
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
