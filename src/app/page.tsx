/* ─────────────────────────────────────────────────────────────────────────────
   TEGA ESHARETURI — Oracle Work Portfolio
   All copy lives in the DATA section below. No confidential data exposed.
───────────────────────────────────────────────────────────────────────────── */

import type { CSSProperties } from "react";

const S = {
  bg:      "var(--bg)",
  surface: "var(--surface)",
  card:    "var(--card)",
  border:  "var(--border)",
  fg:      "var(--fg)",
  dim:     "var(--dim)",
  dimmer:  "var(--dimmer)",
  accent:  "var(--accent)",
  mono:    "var(--font-geist-mono), monospace",
} as const;

const tagStyle = (extra?: CSSProperties): CSSProperties => ({
  fontFamily: S.mono, fontSize: 11, letterSpacing: "0.14em",
  textTransform: "uppercase", color: S.dim, ...extra,
});
const pillStyle = (active?: boolean): CSSProperties => ({
  display: "inline-block", padding: "5px 14px", borderRadius: 20,
  border: `1px solid ${active ? S.accent : S.border}`,
  color: active ? S.accent : S.dim,
  background: active ? "rgba(200,169,110,0.07)" : "transparent",
  fontFamily: S.mono, fontSize: 11, letterSpacing: "0.06em",
  whiteSpace: "nowrap",
});
const cardStyle = (extra?: CSSProperties): CSSProperties => ({
  background: S.card, border: `1px solid ${S.border}`, borderRadius: 8, padding: "28px", ...extra,
});
const wrap = (extra?: CSSProperties): CSSProperties => ({
  maxWidth: 1100, margin: "0 auto", padding: "0 28px", ...extra,
});

/* ── copy data ── */
const IMPACT = [
  { n: "01", title: "Reporting modernization", body: "Re-engineered monthly uptime reporting from an Excel-led, multi-day process into a configuration-driven Python workflow." },
  { n: "02", title: "Trust by design", body: "Built validation gates that reconcile operational sources before availability and leadership reporting is released." },
  { n: "03", title: "AI systems evolution", body: "Moved from useful Custom GPT prototypes to reusable skills and connector-enabled workflows that preserve evidence, scope, and human review." },
];

const THEN_NOW: [string, string][] = [
  ["Manual imports and workbook-dependent formulas", "Configuration-driven Python CLI and guided desktop workflow"],
  ["Legacy script and Excel steps", "Direct, read-only operational data retrieval with file fallbacks"],
  ["Difficult-to-trace reconciliation", "Explicit validation, source manifests, exception flags, and audit outputs"],
  ["Workbook as the number source", "Curated CSV/JSON datasets as the trusted archive; workbook as compatibility export"],
  ["Multi-day monthly reporting cycle", "Approximately three-hour end-to-end workflow with human review"],
];

const CONTROLS = [
  { n: "1", title: "Eligibility control", body: "Separate active reporting accounts from excluded/inactive impacts before availability is calculated." },
  { n: "2", title: "Source reconciliation", body: "Match operational event records and ticket metadata, preserve exceptions, and prevent duplicate impact counting." },
  { n: "3", title: "Time-boundary control", body: "Apply explicit monthly boundaries and flag cross-month activity rather than silently misallocating it." },
  { n: "4", title: "Publication gate", body: "Distinguish early month-to-date insight from final, publication-ready reporting when a required source or validation is incomplete." },
];

const TIMELINE = [
  { s: "01", title: "Manual reporting foundation", body: "Excel workbooks, manual exports, legacy scripts, and analyst reconciliation established the reporting contract — but made the monthly process slow and fragile." },
  { s: "02", title: "Python-owned data foundation", body: "Modular transformations rebuilt the source tabs and account-level summary outside workbook formulas while retaining an Excel-compatible deliverable." },
  { s: "03", title: "Validation and operational maturity", body: "Configuration-driven month boundaries, direct read-only source retrieval, audit datasets, exception flags, and explicit publication gates made the workflow repeatable and reviewable." },
  { s: "04", title: "Assessment-era reporting and decision support", body: "The platform adapts to evolving operational event models, maintains legacy-record auditing where needed, and produces structured inputs for monthly operating reviews and leadership communication." },
];

const AI_CARDS = [
  { n: "1", title: "Custom GPTs — reusable starting point", body: "Early Custom GPT workflows helped standardize prompts, templates, and expert reasoning for postmortems, executive summaries, ticket-quality reviews, and operational follow-up.", strength: "Strength: fast workflow standardization" },
  { n: "2", title: "Skills — executable operating playbooks", body: "Reusable skills make the operating method explicit: when the workflow applies, which sources are valid, what must be checked, which artifacts to create, and where human review is required.", strength: "Strength: repeatability, guardrails, and quality control" },
  { n: "3", title: "Plugins & connectors — governed enterprise context", body: "Connector-enabled workflows can retrieve approved enterprise context, assemble source-backed evidence, and route work to the right system while preserving access boundaries and approval gates.", strength: "Strength: current context, provenance, and controlled action" },
];

const PRINCIPLES = [
  { title: "Source-grounded", body: "Important outputs trace back to authorized operational sources, not unstated assumptions." },
  { title: "Human-in-the-loop", body: "AI supports analysis and drafting; approval stays with accountable operators." },
  { title: "Read-only by default", body: "Data retrieval and analysis are separated from consequential writes." },
  { title: "Compatibility-aware", body: "Modernize the data layer without breaking the views and workflows teams still depend on." },
  { title: "Built for handoff", body: "Clear artifacts, runbooks, validation outputs, and reusable instructions reduce single-person dependency." },
];

const CAPS = [
  // Data Engineering
  "Python", "SQL", "Pandas", "PySpark", "OpenPyXL", "python-oracledb",
  "ETL / ELT", "Runtime configuration", "Data-quality validation", "Reconciliation",
  "Immutable snapshots", "Current views", "CSV / JSON / XLSX generation", "CLI / GUI tooling",
  // OCI & Data Platform
  "Oracle Cloud Infrastructure", "Autonomous Database Serverless", "Oracle APEX",
  "mTLS wallet authentication", "OCI Data Flow", "OCI Data Science", "OCI Generative AI",
  "Oracle Analytics Cloud", "NetSuite", "Supabase", "Google BigQuery",
  // Agentic AI & Automation
  "Reusable skill design", "Plugin / connector orchestration", "MCP",
  "Source provenance", "Human-in-the-loop approval", "LLM implementation",
  "RAG concepts", "Model-lifecycle tracking",
  // Reporting & BI
  "Uptime & reliability reporting", "CIM reconciliation", "MOR readiness",
  "Service-availability analysis", "Power BI", "Tableau", "Excel / XLSX automation",
  // Enterprise & Delivery
  "Jira", "Confluence", "Slack", "NetSuite Hub", "Event Assessment data",
  "Agile", "Scrum", "Incident response", "RCA support",
];

const CLOUD_PROOF_CARDS = [
  { n: "1", title: "Validated run to cloud view", body: "A successful Python run writes an immutable database snapshot and refreshes latest-state views consumed by APEX without rebuilding the UI." },
  { n: "2", title: "One owner for each fact", body: "Hub Assessments own identity and CIM; Jira owns narrative, support-case, and team metadata; the uptime pipeline owns availability." },
  { n: "3", title: "Readiness, not false certainty", body: "PASS, REVIEW, BLOCKED, and CONTEXT separate publishable results, human-review work, blockers, and audit context." },
  { n: "4", title: "Private by default", body: "A dedicated schema, mTLS wallet, Keychain-backed secret retrieval, and authenticated APEX access protect the POC." },
];

const CLOUD_ARCH_STEPS = [
  { label: "Hub Event Assessments\n+ Jira + ACL/uptime inputs", sub: "Evidence sources" },
  { label: "Python skills\nand monthly runbook", sub: "Automation" },
  { label: "Validation, reconciliation\n+ publication gates", sub: "Governance" },
  { label: "python-oracledb\nloader", sub: "Secure loader" },
  { label: "OCI Autonomous Database\nimmutable runs + current views", sub: "OCI data layer" },
  { label: "Oracle APEX\noperator application", sub: "Operator UI" },
];

const CLOUD_PAGES = [
  { name: "Uptime Overview", description: "Latest CIM, Assessment count, month-to-date uptime, refresh time, and Assessment-level event detail." },
  { name: "MOR Readiness", description: "Publication gate, coverage, contextual difference, Top 5 CIM/cases, and open gate results." },
  { name: "MOR Gaps Breakdown", description: "Priority, gap reason, evidence, missing fields, process warning, and required action." },
  { name: "Snapshot History", description: "Immutable refresh history and the foundation for finalized monthly trend reporting." },
];

const INVESTIGATION_STEPS = [
  { label: "Trigger",        detail: "Operational question or incident signal received — scope is defined before any source retrieval begins." },
  { label: "Scope check",    detail: "Skill enforces what applies: event type, reporting window, affected accounts, and which sources are valid for this investigation." },
  { label: "Source pull",    detail: "Connector retrieves read-only records from Jira, Slack, Confluence, and service telemetry — only approved sources, no hallucination fill-in." },
  { label: "Evidence bundle", detail: "Retrieved records are assembled and structured. If a required source is missing or incomplete, the skill flags it rather than proceeding." },
  { label: "AI draft",       detail: "Investigation document is generated from the evidence bundle only — scope, timeline, signals, open questions, and recommended actions." },
  { label: "Review gate",    detail: "Human reviews the draft, approves, adds judgment, or requests revision. No output leaves this stage without an accountable sign-off." },
  { label: "Artifact",       detail: "Approved investigation document is published to Confluence or handed to the operator for downstream action." },
];

const SKILL_CATALOG = [
  {
    name: "Postmortem Builder",
    tag: "INCIDENT REVIEW",
    desc: "Structured postmortem from incident signals. Assembles timeline, impact scope, contributing factors, and action items from Jira, Slack, and event data. Human review before distribution.",
  },
  {
    name: "Executive Summary Builder",
    tag: "LEADERSHIP COMMS",
    desc: "Leadership-ready incident summary with context, scope, customer impact, and resolution path. Scoped strictly to verified signals — no speculation included.",
  },
  {
    name: "Event Management Triage",
    tag: "OPERATIONAL RESPONSE",
    desc: "Classifies incoming operational signals, routes to the correct response path, and assembles an initial evidence bundle to reduce investigation startup time.",
  },
  {
    name: "Ticket Quality Review",
    tag: "QUALITY CONTROL",
    desc: "Checks ticket completeness, classification accuracy, and required fields before escalation or closure. Flags gaps for operator resolution rather than auto-closing.",
  },
  {
    name: "Automated Ticket Creation",
    tag: "WRITE · JIRA",
    desc: "Drafts and submits Jira tickets for bugs, builder improvements, and documentation gaps — pre-populated with summary, description, component, priority, and acceptance criteria derived from investigation evidence. Operator confirms field values before submission; no ticket is created without explicit approval.",
  },
];

const CERTS = [
  { name: "OCI Data Science Professional", year: "2026", issuer: "Oracle" },
  { name: "OCI Generative AI Professional", year: "2025", issuer: "Oracle" },
  { name: "OCI AI Foundations Associate", year: "2025", issuer: "Oracle" },
  { name: "OCI Data Management Foundations Associate", year: "2024", issuer: "Oracle" },
  { name: "OCI Foundations Associate", year: "2024", issuer: "Oracle" },
  { name: "Professional Scrum Product Owner II", year: "2023", issuer: "Scrum.org" },
  { name: "Professional Scrum Product Owner I", year: "2023", issuer: "Scrum.org" },
  { name: "Professional Scrum Master II", year: "2023", issuer: "Scrum.org" },
  { name: "Professional Scrum Master I", year: "2023", issuer: "Scrum.org" },
  { name: "Artificial Intelligence Essentials", year: "2023", issuer: "EXIN" },
  { name: "Cloud Computing Foundations", year: "2022", issuer: "EXIN" },
  { name: "IT Information Library Foundations", year: "2022", issuer: "ITIL" },
];

const SOURCES = ["Account & commerce eligibility", "Operational event impacts", "Ticketing metadata", "Reporting configuration"];
const OUTPUTS = ["Availability / bracket views", "Event / impact summaries", "Excel-compatible workbook"];
const PIPE_STAGES = [
  { label: "Normalize\n+ enrich", sub: "Python CLI\n+ guided GUI" },
  { label: "Reconcile\n+ validate", sub: "" },
  { label: "Curated\ndatasets", sub: "" },
];

const AI_FLOW = [
  { label: "Operational question", accent: false, wide: false },
  null,
  { label: "Task-specific skill / playbook", accent: false, wide: false },
  null,
  { label: "Approved source connectors  →  Evidence bundle  →  Structured draft / analysis", accent: false, wide: true },
  null,
  { label: "Human review + approval gate", accent: true, wide: false },
  null,
  { label: "Publish · hand off · or request revision", accent: false, wide: false },
];

/* ─────────────────────────────────────────────────────────────────────────── */

export default function Page() {
  return (
    <>
      {/* ── NAV ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "rgba(15,25,35,0.95)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${S.border}`,
      }}>
        <div style={{ ...wrap(), display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <span style={{ fontFamily: S.mono, fontSize: 13, letterSpacing: "0.12em", color: S.fg, fontWeight: 600 }}>
            TEGA ESHARETURI
          </span>
          <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <div className="nav-links" style={{ display: "flex", gap: 28, alignItems: "center" }}>
              {(["Work", "Architecture", "Cloud Platform", "AI Systems", "Skills", "Resume"] as const).map((label) => {
                const href = label === "Resume" ? "#contact"
                  : label === "Work" ? "#work"
                  : label === "Architecture" ? "#architecture"
                  : label === "Cloud Platform" ? "#cloud-platform"
                  : label === "Skills" ? "#skills"
                  : "#ai-systems";
                return (
                  <a key={label} href={href} style={{ fontFamily: S.mono, fontSize: 11, letterSpacing: "0.1em", color: S.dim, textDecoration: "none" }}>
                    {label}
                  </a>
                );
              })}
            </div>
            <a href="#contact" style={{
              fontFamily: S.mono, fontSize: 11, letterSpacing: "0.1em", padding: "7px 18px",
              borderRadius: 4, background: S.accent, color: S.bg, textDecoration: "none", fontWeight: 600,
            }}>
              Connect
            </a>
          </nav>
        </div>
      </header>

      {/* ── MOBILE SUB-NAV ── */}
      <div className="mobile-subnav" style={{
        display: "none", overflowX: "auto", borderBottom: `1px solid ${S.border}`,
        background: "rgba(15,25,35,0.98)",
        WebkitOverflowScrolling: "touch" as React.CSSProperties["WebkitOverflowScrolling"],
      }}>
        <div style={{ display: "flex", gap: 0, padding: "0 16px", whiteSpace: "nowrap" }}>
          {([
            ["Work", "#work"], ["Architecture", "#architecture"], ["Cloud Platform", "#cloud-platform"],
            ["AI Systems", "#ai-systems"], ["Skills", "#skills"], ["Resume", "#contact"],
          ] as const).map(([label, href]) => (
            <a key={label} href={href} style={{
              fontFamily: S.mono, fontSize: 11, letterSpacing: "0.08em", color: S.dim,
              textDecoration: "none", padding: "10px 14px", display: "block",
            }}>
              {label}
            </a>
          ))}
        </div>
      </div>

      <main>

        {/* ── HERO ── */}
        <section style={{ padding: "120px 0 100px", borderBottom: `1px solid ${S.border}` }}>
          <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "1fr 300px", gap: 60, alignItems: "center" }} className="hero-grid">
            <div>
              <div style={{ ...tagStyle({ color: S.accent }), marginBottom: 24 }}>
                DATA ENGINEERING · UPTIME &amp; RELIABILITY AUTOMATION · OCI ANALYTICS · GOVERNED GENAI WORKFLOWS
              </div>
              <h1 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 28, color: S.fg }}>
                Operational systems that turn fragmented evidence into{" "}
                <em style={{ fontStyle: "italic", color: S.accent }}>decision-ready insight.</em>
              </h1>
              <p style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, maxWidth: 540, marginBottom: 36 }}>
                Data engineer specializing in production analytics automation, cloud-delivered operational
                intelligence, and governed GenAI workflows at Oracle. Builds Python/SQL pipelines,
                reconciliation controls, and secure OCI analytics applications that turn Jira, service
                telemetry, Event Assessment, Slack, and Confluence evidence into trusted uptime reporting
                and source-backed incident artifacts.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  "3–5 day manual cycle → ~3 hour automated workflow",
                  "Python-first, Excel-compatible reporting",
                  "Source-grounded AI with human approval gates",
                ].map((chip) => (
                  <span key={chip} style={{ ...pillStyle(), border: "1px solid rgba(200,169,110,0.22)", color: "rgba(234,232,227,0.85)", background: "rgba(200,169,110,0.06)", fontSize: 12 }}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* decorative abstract flow */}
            <div aria-hidden="true" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "Operational sources", pct: "100%" },
                { label: "Normalize + enrich",  pct: "84%"  },
                { label: "Reconcile + validate", pct: "68%" },
                { label: "Curated datasets",    pct: "55%"  },
                { label: "Leadership outputs",  pct: "42%"  },
              ].map(({ label, pct }, i) => (
                <div key={label} style={{
                  height: 34, borderRadius: 4, width: pct,
                  background: `rgba(200,169,110,${0.04 + i * 0.03})`,
                  border: `1px solid rgba(200,169,110,${0.1 + i * 0.05})`,
                  display: "flex", alignItems: "center", padding: "0 12px",
                  fontSize: 11, fontFamily: S.mono, color: `rgba(234,232,227,${0.4 + i * 0.12})`,
                }}>
                  {label}
                </div>
              ))}
              <p style={{ ...tagStyle({ fontSize: 10, marginTop: 8 }) }}>// abstracted · not real system names</p>
            </div>
          </div>
        </section>

        {/* ── MISSION CONTEXT ── */}
        <section style={{ padding: "48px 0", borderBottom: `1px solid ${S.border}`, background: "rgba(200,169,110,0.04)" }}>
          <div style={wrap()}>
            <div style={{ maxWidth: 780, borderLeft: `3px solid ${S.accent}`, paddingLeft: 24 }}>
              <div style={{ ...tagStyle({ color: S.accent, marginBottom: 12 }) }}>// ORGANIZATIONAL CONTEXT</div>
              <p style={{ fontSize: 15, color: S.fg, lineHeight: 1.85 }}>
                The mission is unambiguous: 99.99% customer uptime — four nines, no exceptions. Working within
                Oracle&rsquo;s Cloud Service Improvement Organization (CSIO, formerly NetSuite Cloud Ops), teams
                coordinate cloud event response and structured postmortems to ensure customer databases stay
                active and incidents stay contained. This portfolio documents the data engineering and AI systems
                built to support that standard.
              </p>
            </div>
          </div>
        </section>

        {/* ── IMPACT ── */}
        <section style={{ padding: "88px 0", borderBottom: `1px solid ${S.border}` }} id="work">
          <div style={wrap()}>
            <div style={{ ...tagStyle(), marginBottom: 32 }}>// THE WORK IN ONE VIEW</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="impact-grid">
              {IMPACT.map((c) => (
                <div key={c.n} style={cardStyle()}>
                  <div style={{ fontFamily: S.mono, fontSize: 11, color: S.accent, marginBottom: 14, letterSpacing: "0.1em" }}>{c.n}</div>
                  <h3 style={{ fontSize: 16, fontWeight: 500, color: S.fg, marginBottom: 10, lineHeight: 1.3 }}>{c.title}</h3>
                  <p style={{ fontSize: 14, color: S.dim, lineHeight: 1.75 }}>{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY ── */}
        <section style={{ padding: "120px 0", borderBottom: `1px solid ${S.border}` }} id="architecture">
          <div style={wrap()}>
            <div style={{ ...tagStyle(), marginBottom: 14 }}>// FEATURED CASE STUDY</div>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 24, color: S.fg }}>
              Uptime Reporting Automation
            </h2>
            <p style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, maxWidth: 700, marginBottom: 56 }}>
              A monthly service-availability report had to bring together account eligibility, operational event
              impacts, ticket metadata, customer classifications, and executive reporting views. The original process
              depended on manual imports, workbook formulas, macros, and several handoffs. It could take three to five
              days and was difficult to audit when source data changed.
            </p>

            {/* Challenge */}
            <div style={{ ...cardStyle({ marginBottom: 40, borderLeft: `3px solid ${S.accent}`, borderRadius: "0 8px 8px 0", padding: "24px 28px" }) }}>
              <div style={{ ...tagStyle({ color: S.accent, marginBottom: 12 }) }}>CHALLENGE</div>
              <p style={{ fontSize: 15, color: S.dim, lineHeight: 1.8 }}>
                The problem was not just calculation. It was establishing a trustworthy monthly reporting path:
                consistent reporting boundaries, correct account eligibility, source reconciliation, clear exception
                handling, and an output that existing teams could still use.
              </p>
            </div>

            {/* Architecture diagram */}
            <div style={{ marginBottom: 48 }}>
              <div style={{ ...tagStyle(), marginBottom: 20 }}>ARCHITECTURE</div>
              <div
                role="img"
                aria-label="Data pipeline diagram: four source types (account eligibility, operational event impacts, ticketing metadata, reporting configuration) feed into normalize and enrich, then reconcile and validate, then curated datasets, then three outputs: availability/bracket views, event/impact summaries, and Excel-compatible workbook."
                style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, padding: "28px 24px", overflowX: "auto" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 740 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {SOURCES.map((s) => (
                      <div key={s} style={{ padding: "8px 14px", borderRadius: 4, fontSize: 12, color: S.dim, border: `1px solid ${S.border}`, background: S.card, whiteSpace: "nowrap" }}>
                        {s}
                      </div>
                    ))}
                  </div>
                  <div style={{ color: S.accent, fontSize: 20, flexShrink: 0 }}>→</div>
                  {PIPE_STAGES.map((stage, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                      <div style={{
                        padding: "14px 18px", borderRadius: 6, fontSize: 12, fontWeight: 500, color: S.fg,
                        border: "1px solid rgba(200,169,110,0.22)", background: "rgba(200,169,110,0.06)",
                        textAlign: "center", whiteSpace: "pre-line", lineHeight: 1.5,
                      }}>
                        {stage.label}
                        {stage.sub && <div style={{ fontFamily: S.mono, fontSize: 10, color: S.accent, marginTop: 6, whiteSpace: "pre-line" }}>{stage.sub}</div>}
                      </div>
                      {i < PIPE_STAGES.length - 1 && <div style={{ color: S.accent, fontSize: 20, flexShrink: 0 }}>→</div>}
                    </div>
                  ))}
                  <div style={{ color: S.accent, fontSize: 20, flexShrink: 0 }}>→</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                    {OUTPUTS.map((o) => (
                      <div key={o} style={{ padding: "8px 14px", borderRadius: 4, fontSize: 12, color: S.accent, border: "1px solid rgba(200,169,110,0.2)", background: "rgba(200,169,110,0.05)", whiteSpace: "nowrap" }}>
                        {o}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p style={{ fontFamily: S.mono, fontSize: 12, color: S.dimmer, marginTop: 14, lineHeight: 1.6 }}>
                Python is the calculation and data-quality authority. Excel remains a compatibility output for teams that need familiar downstream views.
              </p>
            </div>

            {/* Then / Now */}
            <div style={{ marginBottom: 48 }}>
              <div style={{ ...tagStyle(), marginBottom: 20 }}>WHAT CHANGED</div>
              <div style={{ border: `1px solid ${S.border}`, borderRadius: 8, overflow: "hidden" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: S.surface, borderBottom: `1px solid ${S.border}`, padding: "12px 20px" }}>
                  <span style={{ ...tagStyle({ color: S.dimmer }) }}>THEN</span>
                  <span style={{ ...tagStyle({ color: S.accent }) }}>NOW</span>
                </div>
                {THEN_NOW.map(([then, now], i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: i < THEN_NOW.length - 1 ? `1px solid ${S.border}` : "none" }}>
                    <div style={{ padding: "16px 20px", fontSize: 14, color: S.dim, lineHeight: 1.65, borderRight: `1px solid ${S.border}` }}>{then}</div>
                    <div style={{ padding: "16px 20px", fontSize: 14, color: S.fg, lineHeight: 1.65 }}>{now}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div style={{ marginBottom: 48 }}>
              <div style={{ ...tagStyle(), marginBottom: 20 }}>CONTROLS THAT MAKE THE REPORT TRUSTWORTHY</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="controls-grid">
                {CONTROLS.map((c) => (
                  <div key={c.n} style={cardStyle({ display: "flex", gap: 16 })}>
                    <div style={{
                      width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                      background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontFamily: S.mono, fontSize: 11, color: S.accent, fontWeight: 700,
                    }}>
                      {c.n}
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: S.fg, marginBottom: 6 }}>{c.title}</div>
                      <div style={{ fontSize: 14, color: S.dim, lineHeight: 1.7 }}>{c.body}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Outputs blurb */}
            <div style={{ ...cardStyle({ borderLeft: `3px solid ${S.border}`, borderRadius: "0 8px 8px 0" }) }}>
              <div style={{ ...tagStyle({ marginBottom: 12 }) }}>OUTPUTS</div>
              <p style={{ fontSize: 15, color: S.dim, lineHeight: 1.8 }}>
                The platform produces curated account and event datasets, availability and bracket summaries,
                validation artifacts, historical trend data, Excel-compatible workbooks, and executive-ready
                reporting inputs. The goal is not automation for its own sake; it is faster reporting with a
                clear audit trail.
              </p>
            </div>
          </div>
        </section>

        {/* ── TIMELINE ── */}
        <section style={{ padding: "100px 0", borderBottom: `1px solid ${S.border}` }}>
          <div style={wrap()}>
            <div style={{ ...tagStyle(), marginBottom: 14 }}>// EVOLUTION</div>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: 56, color: S.fg }}>
              From spreadsheet process to governed reporting platform
            </h2>
            <div style={{ position: "relative" }}>
              <div style={{ position: "absolute", left: 19, top: 28, bottom: 28, width: 1, background: `linear-gradient(to bottom, ${S.accent}, rgba(200,169,110,0.07))` }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                {TIMELINE.map((t, i) => (
                  <div key={t.s} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 24, paddingBottom: i < TIMELINE.length - 1 ? 44 : 0 }}>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: 4 }}>
                      <div style={{
                        width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                        border: "1px solid rgba(200,169,110,0.28)", background: "rgba(200,169,110,0.07)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: S.mono, fontSize: 11, color: S.accent, zIndex: 1,
                      }}>{t.s}</div>
                    </div>
                    <div style={{ paddingTop: 8 }}>
                      <h3 style={{ fontSize: 16, fontWeight: 500, color: S.fg, marginBottom: 8 }}>{t.title}</h3>
                      <p style={{ fontSize: 14, color: S.dim, lineHeight: 1.75 }}>{t.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 56, padding: "24px 28px", borderLeft: `3px solid ${S.accent}`, background: "rgba(200,169,110,0.05)" }}>
              <p style={{ fontSize: 15, color: S.fg, lineHeight: 1.8, fontStyle: "italic" }}>
                &ldquo;The design principle: preserve the business contract, remove fragile manual dependencies,
                and make every important number traceable to an owned source and validation step.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* ── CLOUD PLATFORM ── */}
        <section style={{ padding: "100px 0", borderBottom: `1px solid ${S.border}` }} id="cloud-platform">
          <div style={wrap()}>
            <div style={{ ...tagStyle({ color: S.accent }), marginBottom: 14 }}>DEPLOYED CLOUD ANALYTICS POC</div>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 24, color: S.fg }}>
              From monthly automation to an operator-facing OCI control plane.
            </h2>
            <p style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, maxWidth: 720, marginBottom: 56 }}>
              I extended the Python uptime pipeline into a secure OCI application that loads every validated run
              into Autonomous Database Serverless and exposes current uptime, MOR publication readiness,
              gap drill-down, and snapshot history through Oracle APEX. The result is a governed, run-triggered
              data path from source evidence to an authenticated decision interface.
            </p>

            {/* Proof cards */}
            <div style={{ ...tagStyle(), marginBottom: 20 }}>PROOF POINTS</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, marginBottom: 56 }} className="controls-grid">
              {CLOUD_PROOF_CARDS.map((c) => (
                <div key={c.n} style={cardStyle({ display: "flex", gap: 16 })}>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    background: "rgba(200,169,110,0.08)", border: "1px solid rgba(200,169,110,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: S.mono, fontSize: 11, color: S.accent, fontWeight: 700,
                  }}>{c.n}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: S.fg, marginBottom: 6 }}>{c.title}</div>
                    <div style={{ fontSize: 14, color: S.dim, lineHeight: 1.7 }}>{c.body}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Architecture flow */}
            <div style={{ marginBottom: 48 }}>
              <div style={{ ...tagStyle(), marginBottom: 20 }}>A CONTROLLED DATA PATH FROM EVIDENCE TO DECISION</div>
              <div
                role="img"
                aria-label="Six-stage data flow: Hub Event Assessments, Jira, ACL and uptime inputs feed into Python skills and monthly runbook, then validation reconciliation and publication gates, then python-oracledb loader over mTLS, then OCI Autonomous Database with immutable runs and current views, then Oracle APEX operator application."
                style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, padding: "28px 24px", overflowX: "auto" }}
              >
                <div style={{ display: "flex", alignItems: "stretch", minWidth: 860 }}>
                  {CLOUD_ARCH_STEPS.map((step, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center" }}>
                      <div style={{
                        padding: "16px 14px", borderRadius: 6,
                        border: "1px solid rgba(200,169,110,0.22)", background: "rgba(200,169,110,0.06)",
                        textAlign: "center", lineHeight: 1.5, width: 130, flexShrink: 0,
                      }}>
                        <div style={{ fontFamily: S.mono, fontSize: 9, color: S.accent, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>{step.sub}</div>
                        <div style={{ fontSize: 11, color: S.fg, whiteSpace: "pre-line" }}>{step.label}</div>
                      </div>
                      {i < CLOUD_ARCH_STEPS.length - 1 && (
                        <div style={{ color: S.accent, fontSize: 16, padding: "0 8px", flexShrink: 0 }}>→</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <p style={{ fontFamily: S.mono, fontSize: 12, color: S.dimmer, marginTop: 14, lineHeight: 1.6 }}>
                The feed is on demand and run-triggered — not an event-streaming claim. Each accepted run is preserved
                for traceability while current views give the application a stable contract for the latest validated state.
              </p>
            </div>

            {/* Operator pages */}
            <div style={{ marginBottom: 48 }}>
              <div style={{ ...tagStyle(), marginBottom: 20 }}>FOUR PAGES, ONE OPERATIONAL STORY</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }} className="controls-grid">
                {CLOUD_PAGES.map((pg) => (
                  <div key={pg.name} style={cardStyle()}>
                    <div style={{ fontSize: 15, fontWeight: 500, color: S.fg, marginBottom: 8 }}>{pg.name}</div>
                    <p style={{ fontSize: 14, color: S.dim, lineHeight: 1.7 }}>{pg.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope note */}
            <div style={{ ...cardStyle({ borderLeft: `3px solid ${S.border}`, borderRadius: "0 8px 8px 0" }) }}>
              <div style={{ ...tagStyle({ marginBottom: 12 }) }}>DELIBERATE POC BOUNDARIES</div>
              <p style={{ fontSize: 15, color: S.dim, lineHeight: 1.8 }}>
                This is an authenticated OCI Always Free proof of concept, not an externally exposed production service.
                Monthly values remain preliminary until source data is locked. The design proves the data contract,
                control model, secure connection path, and operator workflow needed for a governed internal deployment.
              </p>
            </div>
          </div>
        </section>

        {/* ── AI SYSTEMS ── */}
        <section style={{ padding: "100px 0", borderBottom: `1px solid ${S.border}` }} id="ai-systems">
          <div style={wrap()}>
            <div style={{ ...tagStyle(), marginBottom: 14 }}>// AI SYSTEMS</div>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: 24, color: S.fg }}>
              From GPT prototypes to reusable enterprise workflows
            </h2>
            <p style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, maxWidth: 660, marginBottom: 56 }}>
              The second part of my work is making operational expertise repeatable through AI — without treating
              an AI response as a source of truth. The workflow has matured from Custom GPT prototypes into
              reusable skills and connector-enabled workflows with explicit source boundaries, structured artifacts,
              and human approval for consequential outputs.
            </p>

            {/* 3-card evolution */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 28px 1fr 28px 1fr", gap: 0, alignItems: "start", marginBottom: 56 }} className="ai-grid">
              {AI_CARDS.map((c, i) => (
                <>
                  <div key={c.n} style={cardStyle()}>
                    <div style={{ fontFamily: S.mono, fontSize: 10, color: S.accent, letterSpacing: "0.1em", marginBottom: 12 }}>0{c.n}</div>
                    <h3 style={{ fontSize: 15, fontWeight: 500, color: S.fg, lineHeight: 1.35, marginBottom: 14 }}>{c.title}</h3>
                    <p style={{ fontSize: 14, color: S.dim, lineHeight: 1.7, marginBottom: 16 }}>{c.body}</p>
                    <div style={{ fontFamily: S.mono, fontSize: 10, color: S.accent, letterSpacing: "0.06em", lineHeight: 1.5 }}>{c.strength}</div>
                  </div>
                  {i < 2 && (
                    <div key={`arr-${i}`} style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 56, color: S.accent, fontSize: 18 }}>→</div>
                  )}
                </>
              ))}
            </div>

            {/* AI flow diagram */}
            <div style={{ ...tagStyle(), marginBottom: 20 }}>AI WORKFLOW ARCHITECTURE</div>
            <div
              role="img"
              aria-label="AI workflow: Operational question flows into a task-specific skill or playbook, then approved source connectors assemble an evidence bundle and structured draft, which goes to human review and approval gate, then is published, handed off, or sent back for revision."
              style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, padding: "36px 24px", display: "flex", flexDirection: "column", alignItems: "center" }}
            >
              {AI_FLOW.map((node, i) =>
                node === null ? (
                  <div key={i} style={{ color: S.accent, fontSize: 18, margin: "4px 0" }}>↓</div>
                ) : (
                  <div key={i} style={{
                    padding: "11px 22px", borderRadius: 6, fontSize: 13,
                    border: node.accent ? "1px solid rgba(200,169,110,0.32)" : `1px solid ${S.border}`,
                    background: node.accent ? "rgba(200,169,110,0.08)" : S.card,
                    color: node.accent ? S.accent : S.fg,
                    width: node.wide ? "100%" : "auto", maxWidth: node.wide ? "100%" : 300,
                    textAlign: "center", lineHeight: 1.5,
                  }}>
                    {node.label}
                  </div>
                )
              )}
            </div>
            <p style={{ fontFamily: S.mono, fontSize: 12, color: S.dimmer, marginTop: 14, lineHeight: 1.6 }}>
              The AI layer accelerates evidence assembly and drafting; people remain accountable for judgment, approval, and final publication.
            </p>
          </div>
        </section>

        {/* ── SKILLS IN PRODUCTION ── */}
        <section style={{ padding: "100px 0", borderBottom: `1px solid ${S.border}` }} id="skills">
          <div style={wrap()}>
            <div style={{ ...tagStyle(), marginBottom: 14 }}>// SKILLS IN PRODUCTION</div>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: 24, color: S.fg }}>
              The Unified Investigation Builder
            </h2>
            <p style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, maxWidth: 680, marginBottom: 56 }}>
              A skill is not a prompt. It is an executable playbook: it defines when the workflow applies, which
              sources are valid, what the AI is allowed to infer versus what it must retrieve, what artifact is
              produced, and where a human must review before anything ships. The Investigation Builder is the
              most complete example of this pattern in my current skill set.
            </p>

            {/* Featured: Investigation Builder anatomy */}
            <div style={{ ...cardStyle({ marginBottom: 48, padding: 0, overflow: "hidden" }) }}>
              {/* header bar */}
              <div style={{
                background: S.surface, borderBottom: `1px solid ${S.border}`,
                padding: "18px 28px", display: "flex", alignItems: "center", justifyContent: "space-between",
              }}>
                <div>
                  <div style={{ fontFamily: S.mono, fontSize: 10, color: S.accent, letterSpacing: "0.12em", marginBottom: 4 }}>
                    UNIFIED INVESTIGATION BUILDER · SKILL ANATOMY
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 500, color: S.fg }}>
                    From operational signal to approved investigation artifact
                  </div>
                </div>
                <div style={{
                  fontFamily: S.mono, fontSize: 10, padding: "4px 12px", borderRadius: 12,
                  border: "1px solid rgba(200,169,110,0.22)", color: S.accent,
                  background: "rgba(200,169,110,0.06)", letterSpacing: "0.1em",
                }}>
                  ACTIVE
                </div>
              </div>

              {/* step-by-step anatomy */}
              <div style={{ padding: "28px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 0, position: "relative" }} className="skill-steps">
                  {/* connector line */}
                  <div aria-hidden="true" style={{
                    position: "absolute", top: 19, left: "calc(100% / 14)", right: "calc(100% / 14)",
                    height: 1, background: `linear-gradient(to right, ${S.accent}, rgba(200,169,110,0.14))`,
                    pointerEvents: "none",
                  }} />

                  {INVESTIGATION_STEPS.map((step, i) => (
                    <div key={step.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 8px", textAlign: "center" }}>
                      {/* node */}
                      <div style={{
                        width: 38, height: 38, borderRadius: "50%", flexShrink: 0, zIndex: 1, marginBottom: 14,
                        background: i === 5 ? "rgba(200,169,110,0.1)" : S.card,
                        border: i === 5 ? "1.5px solid rgba(200,169,110,0.45)" : `1px solid ${S.border}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontFamily: S.mono, fontSize: 10, color: i === 5 ? S.accent : S.dimmer,
                        fontWeight: i === 5 ? 700 : 400,
                      }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      {/* label */}
                      <div style={{ fontFamily: S.mono, fontSize: 10, color: i === 5 ? S.accent : S.dim, letterSpacing: "0.08em", marginBottom: 8, lineHeight: 1.3 }}>
                        {step.label}
                      </div>
                      {/* detail */}
                      <div style={{ fontSize: 11, color: S.dimmer, lineHeight: 1.6 }}>
                        {step.detail}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* what makes it a skill, not a prompt */}
              <div style={{ borderTop: `1px solid ${S.border}`, padding: "20px 28px", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }} className="skill-props">
                {[
                  { label: "Source boundary", val: "Jira · Slack · Confluence · Service telemetry — read-only retrieval, pre-approved sources only" },
                  { label: "Write capability", val: "Can draft and submit Jira tickets (bugs, improvements, docs) — fields pre-populated from evidence, operator approves before any write" },
                  { label: "Inference rule",   val: "Evidence only — missing source triggers a flag, not a guess" },
                  { label: "Review gate",      val: "No artifact or ticket leaves the skill without human approval and explicit sign-off" },
                ].map((row) => (
                  <div key={row.label}>
                    <div style={{ fontFamily: S.mono, fontSize: 10, color: S.accent, letterSpacing: "0.1em", marginBottom: 6 }}>{row.label}</div>
                    <div style={{ fontSize: 13, color: S.dim, lineHeight: 1.6 }}>{row.val}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skill catalog */}
            <div style={{ ...tagStyle(), marginBottom: 20 }}>SKILL CATALOG</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }} className="controls-grid">
              {SKILL_CATALOG.map((s) => (
                <div key={s.name} style={cardStyle({ display: "flex", flexDirection: "column", gap: 12 })}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
                    <div style={{ fontSize: 15, fontWeight: 500, color: S.fg }}>{s.name}</div>
                    <div style={{
                      fontFamily: S.mono, fontSize: 9, padding: "3px 10px", borderRadius: 10,
                      border: `1px solid ${S.border}`, color: S.dimmer, letterSpacing: "0.1em", whiteSpace: "nowrap",
                    }}>
                      {s.tag}
                    </div>
                  </div>
                  <p style={{ fontSize: 14, color: S.dim, lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRINCIPLES ── */}
        <section style={{ padding: "100px 0", borderBottom: `1px solid ${S.border}` }}>
          <div style={wrap()}>
            <div style={{ ...tagStyle(), marginBottom: 14 }}>// DESIGN PRINCIPLES</div>
            <h2 style={{ fontSize: "clamp(22px,3vw,36px)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: 44, color: S.fg }}>
              How I design reliable automation
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="principles-grid">
              {PRINCIPLES.map((p, i) => (
                <div key={p.title} style={cardStyle({ borderTop: `2px solid ${i < 2 ? S.accent : S.border}`, borderRadius: "0 0 8px 8px" })}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: S.fg, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: S.dim, lineHeight: 1.7 }}>{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CAPABILITIES ── */}
        <section style={{ padding: "72px 0", borderBottom: `1px solid ${S.border}` }}>
          <div style={wrap()}>
            <div style={{ ...tagStyle(), marginBottom: 24 }}>// CORE CAPABILITIES</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {CAPS.map((c) => <span key={c} style={pillStyle()}>{c}</span>)}
            </div>
          </div>
        </section>

        {/* ── CERTIFICATIONS ── */}
        <section style={{ padding: "72px 0", borderBottom: `1px solid ${S.border}` }}>
          <div style={wrap()}>
            <div style={{ ...tagStyle(), marginBottom: 28 }}>// CERTIFICATIONS</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="cert-grid">
              {CERTS.map((c) => (
                <div key={c.name} style={{
                  display: "flex", alignItems: "flex-start", gap: 14,
                  padding: "16px 20px", borderRadius: 6,
                  border: `1px solid ${S.border}`, background: S.card,
                }}>
                  <div style={{
                    flexShrink: 0, marginTop: 2,
                    width: 6, height: 6, borderRadius: "50%",
                    background: S.accent,
                  }} />
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: S.fg, lineHeight: 1.4, marginBottom: 4 }}>{c.name}</div>
                    <div style={{ fontFamily: S.mono, fontSize: 10, color: S.dimmer, letterSpacing: "0.08em" }}>
                      {c.issuer} · {c.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section style={{ padding: "140px 0" }} id="contact">
          <div style={{ ...wrap(), maxWidth: 600, textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 300, letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 24, color: S.fg }}>
              Building operational systems{" "}
              <em style={{ fontStyle: "italic", color: S.accent }}>people can trust.</em>
            </h2>
            <p style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, marginBottom: 44 }}>
              I work at the intersection of data engineering, service operations, and governed GenAI — turning
              complex operational evidence into reporting and workflows that are faster to run, easier to review,
              and safer to scale.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="/resume.pdf" download style={{ fontFamily: S.mono, fontSize: 12, letterSpacing: "0.08em", padding: "11px 22px", borderRadius: 4, border: `1px solid ${S.border}`, color: S.fg, textDecoration: "none" }}>
                Download updated résumé
              </a>
              <a href="https://github.com/tegapeters/ai-portfolio" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: S.mono, fontSize: 12, letterSpacing: "0.08em", padding: "11px 22px", borderRadius: 4, border: `1px solid ${S.border}`, color: S.fg, textDecoration: "none" }}>
                GitHub portfolio ↗
              </a>
              <a href="mailto:Tegapeters11@gmail.com"
                style={{ fontFamily: S.mono, fontSize: 12, letterSpacing: "0.08em", padding: "11px 22px", borderRadius: 4, background: S.accent, color: S.bg, textDecoration: "none", fontWeight: 600 }}>
                Email Tega
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ borderTop: `1px solid ${S.border}`, padding: "22px 0" }}>
        <div style={{ ...wrap(), display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: S.mono, fontSize: 11, color: S.dimmer }}>© 2026 Tega Eshareturi</span>
          <span style={{ fontFamily: S.mono, fontSize: 11, color: S.dimmer }}>
            This case study intentionally abstracts confidential systems, data, and operating details. Public-safe scope only.
          </span>
        </div>
      </footer>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid        { grid-template-columns: 1fr !important; }
          .impact-grid      { grid-template-columns: 1fr !important; }
          .controls-grid    { grid-template-columns: 1fr !important; }
          .ai-grid          { grid-template-columns: 1fr !important; }
          .principles-grid  { grid-template-columns: 1fr 1fr !important; }
          .skill-steps      { grid-template-columns: repeat(3,1fr) !important; }
          .skill-props      { grid-template-columns: 1fr !important; }
          .cert-grid        { grid-template-columns: 1fr 1fr !important; }
          .nav-links        { display: none !important; }
          .mobile-subnav    { display: block !important; }
        }
        @media (max-width: 540px) {
          .principles-grid  { grid-template-columns: 1fr !important; }
          .skill-steps      { grid-template-columns: repeat(2,1fr) !important; }
          .cert-grid        { grid-template-columns: 1fr !important; }
        }
        a { transition: opacity 0.2s; }
        a:hover { opacity: 0.8; }
      `}</style>
    </>
  );
}
