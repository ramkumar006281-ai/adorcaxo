import styles from "./ProofStrip.module.css";

const PROOF_POINTS = [
  {
    val: "50+",
    label: "Markets Served",
    desc: "Localized search intelligence across international territories",
  },
  {
    val: "12+",
    label: "Years Experience",
    desc: "Algorithmic search resilience across every major core update",
  },
  {
    val: "100%",
    label: "Attribution Ownership",
    desc: "Complete administrative control of your analytics & tag pipelines",
  },
  {
    val: "Direct",
    label: "Network Integrations",
    desc: "Premier real-time bidding on top search & affiliate platforms",
  },
];

/* ─── High-Visibility Theme-Adaptive Partner Logos (Crisp in Light & Dark Mode) ─── */
function GoogleAdsLogo() {
  return (
    <svg viewBox="0 0 160 36" width="130" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Google Ads">
      <g transform="translate(2, 2)">
        <path d="M6.2 26.8L18.4 5.6C19.6 3.6 22.1 2.9 24.1 4.1C26.1 5.3 26.8 7.8 25.6 9.8L13.4 31C12.2 33 9.7 33.7 7.7 32.5C5.7 31.3 5 28.8 6.2 26.8Z" fill="#FBBC04" />
        <path d="M25.6 9.8L13.4 31C12.2 33 9.7 33.7 7.7 32.5C5.7 31.3 5 28.8 6.2 26.8L18.4 5.6C19.6 3.6 22.1 2.9 24.1 4.1C26.1 5.3 26.8 7.8 25.6 9.8Z" fill="#4285F4" opacity="0.95" />
        <circle cx="6.8" cy="29.2" r="5.8" fill="#34A853" />
      </g>
      <text x="44" y="24" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="18" fontWeight="700" fill="currentColor" letterSpacing="-0.3">
        Google <tspan fill="#4285F4">Ads</tspan>
      </text>
    </svg>
  );
}

function AmazonPartnerLogo() {
  return (
    <svg viewBox="0 0 160 36" width="130" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Amazon Partner">
      <g transform="translate(4, 3)">
        <text x="0" y="19" fontFamily="'Amazon Ember', -apple-system, Arial, sans-serif" fontSize="20" fontWeight="900" fill="currentColor" letterSpacing="-0.8">
          amazon
        </text>
        <text x="86" y="18" fontFamily="-apple-system, BlinkMacSystemFont, sans-serif" fontSize="11" fontWeight="700" fill="#FF9900" letterSpacing="0.5">
          PARTNER
        </text>
        <path d="M4 25C26 33 58 31 78 23" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round" fill="none" />
        <path d="M74 20L80 23L72 27" fill="#FF9900" />
      </g>
    </svg>
  );
}

function TaboolaLogo() {
  return (
    <svg viewBox="0 0 150 36" width="120" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Taboola Ads">
      <g transform="translate(4, 3)">
        <circle cx="10" cy="14" r="8" fill="#2563EB" />
        <circle cx="22" cy="14" r="5" fill="#3B82F6" opacity="0.85" />
        <circle cx="31" cy="14" r="3" fill="#60A5FA" opacity="0.75" />
        <text x="40" y="20" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="18" fontWeight="800" fill="currentColor" letterSpacing="-0.4">
          Taboola
        </text>
      </g>
    </svg>
  );
}

function OutbrainLogo() {
  return (
    <svg viewBox="0 0 150 36" width="120" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Outbrain">
      <g transform="translate(4, 3)">
        <circle cx="14" cy="14" r="12" stroke="#EE6529" strokeWidth="3.5" fill="none" />
        <circle cx="14" cy="6" r="3.5" fill="#EE6529" />
        <text x="34" y="20" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="18" fontWeight="800" fill="currentColor" letterSpacing="-0.3">
          outbrain
        </text>
      </g>
    </svg>
  );
}

function CJAffiliateLogo() {
  return (
    <svg viewBox="0 0 160 36" width="130" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CJ Affiliate">
      <g transform="translate(4, 2)">
        <rect x="0" y="2" width="26" height="26" rx="6" fill="#00A859" />
        <text x="3" y="21" fontFamily="'Arial Black', -apple-system, sans-serif" fontSize="14" fontWeight="900" fill="#FFFFFF">
          CJ
        </text>
        <text x="34" y="17" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="12" fontWeight="800" fill="currentColor" letterSpacing="-0.2">
          CJ AFFILIATE
        </text>
        <text x="34" y="26" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="8" fontWeight="600" fill="var(--text-muted)" letterSpacing="0.5">
          COMMISSION JUNCTION
        </text>
      </g>
    </svg>
  );
}

function ClickBankLogo() {
  return (
    <svg viewBox="0 0 160 36" width="130" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ClickBank">
      <g transform="translate(4, 3)">
        <circle cx="14" cy="14" r="14" fill="#1D4ED8" />
        <text x="5" y="19" fontFamily="'Arial Black', -apple-system, sans-serif" fontSize="11" fontWeight="900" fill="#FFFFFF">
          CB
        </text>
        <text x="36" y="20" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="16" fontWeight="800" fill="currentColor" letterSpacing="-0.3">
          CLICK<tspan fill="#3B82F6">BANK</tspan>
        </text>
      </g>
    </svg>
  );
}

function ShareASaleLogo() {
  return (
    <svg viewBox="0 0 160 36" width="130" height="30" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="ShareASale">
      <g transform="translate(4, 3)">
        <circle cx="8" cy="14" r="5" fill="#8B5CF6" />
        <circle cx="22" cy="6" r="4" fill="#FF6B57" />
        <circle cx="22" cy="22" r="4" fill="#22C55E" />
        <line x1="8" y1="14" x2="22" y2="6" stroke="#8B5CF6" strokeWidth="1.5" />
        <line x1="8" y1="14" x2="22" y2="22" stroke="#22C55E" strokeWidth="1.5" />
        <text x="32" y="19" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="15" fontWeight="800" fill="currentColor" letterSpacing="-0.3">
          share<tspan fill="#8B5CF6">a</tspan>sale
        </text>
      </g>
    </svg>
  );
}

const PARTNER_ITEMS = [
  { name: "Google Ads", Component: GoogleAdsLogo },
  { name: "Amazon Partner", Component: AmazonPartnerLogo },
  { name: "Taboola Ads", Component: TaboolaLogo },
  { name: "Outbrain", Component: OutbrainLogo },
  { name: "CJ Affiliate", Component: CJAffiliateLogo },
  { name: "ClickBank", Component: ClickBankLogo },
  { name: "ShareASale", Component: ShareASaleLogo },
];

export default function ProofStrip() {
  return (
    <section className={styles.section} aria-label="Verified Performance Proof">
      <div className="container">
        {/* Minimal Typography-Driven Credibility Grid */}
        <div className={styles.kpiGrid}>
          {PROOF_POINTS.map((item, idx) => (
            <div key={idx} className={styles.kpiCard}>
              <div className={styles.kpiTop}>
                <span className={styles.kpiVal}>{item.val}</span>
                <span className={styles.kpiBadge}>Verified</span>
              </div>
              <span className={styles.kpiLabel}>{item.label}</span>
              <p className={styles.kpiDesc}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Direct Partner Networks Bar */}
        <div className={styles.partnerRow}>
          <span className={styles.partnerIntro}>Direct Network Integrations:</span>
          <div className={styles.marqueeTrack}>
            <div className={styles.marqueeContent}>
              {[...PARTNER_ITEMS, ...PARTNER_ITEMS, ...PARTNER_ITEMS, ...PARTNER_ITEMS].map((p, i) => (
                <div key={`${p.name}-${i}`} className={styles.partnerLogoItem} title={p.name}>
                  <p.Component />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
