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
  background: active ? "rgba(91,163,245,0.08)" : "transparent",
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
  "Python", "SQL", "ETL / ELT", "Data-quality validation", "Reconciliation",
  "Excel / XLSX automation", "OCI", "Oracle Analytics", "GenAI workflow design",
  "Custom GPTs", "Skills", "MCP / enterprise connectors", "Jira", "Confluence",
  "Slack", "Executive reporting",
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
        background: "rgba(11,15,26,0.92)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${S.border}`,
      }}>
        <div style={{ ...wrap(), display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <span style={{ fontFamily: S.mono, fontSize: 13, letterSpacing: "0.12em", color: S.fg, fontWeight: 600 }}>
            TEGA ESHARETURI
          </span>
          <nav style={{ display: "flex", gap: 28, alignItems: "center" }}>
            {(["Work", "Architecture", "AI Systems", "Skills", "Resume"] as const).map((label) => {
              const href = label === "Resume" ? "#contact"
                : label === "Work" ? "#work"
                : label === "Architecture" ? "#architecture"
                : label === "Skills" ? "#skills"
                : "#ai-systems";
              return (
                <a key={label} href={href} style={{ fontFamily: S.mono, fontSize: 11, letterSpacing: "0.1em", color: S.dim, textDecoration: "none" }}>
                  {label}
                </a>
              );
            })}
            <a href="#contact" style={{
              fontFamily: S.mono, fontSize: 11, letterSpacing: "0.1em", padding: "7px 18px",
              borderRadius: 4, background: S.accent, color: S.bg, textDecoration: "none", fontWeight: 600,
            }}>
              Connect
            </a>
          </nav>
        </div>
      </header>

      <main>

        {/* ── HERO ── */}
        <section style={{ padding: "100px 0 80px", borderBottom: `1px solid ${S.border}` }}>
          <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "1fr 300px", gap: 60, alignItems: "center" }} className="hero-grid">
            <div>
              <div style={{ ...tagStyle({ color: S.accent }), marginBottom: 24 }}>
                DATA ENGINEERING · GOVERNED GENAI · EXECUTIVE REPORTING
              </div>
              <h1 style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 300, lineHeight: 1.2, letterSpacing: "-0.025em", marginBottom: 28, color: S.fg }}>
                Operational systems that turn fragmented evidence into{" "}
                <em style={{ fontStyle: "italic", color: S.accent }}>decision-ready insight.</em>
              </h1>
              <p style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, maxWidth: 540, marginBottom: 36 }}>
                I design operational data and AI systems that make critical reporting faster, more traceable, and
                easier to trust. My work at Oracle spans Python data pipelines, reconciliation controls, executive
                reporting, and source-grounded GenAI workflows with human approval built in.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {[
                  "3–5 day manual cycle → ~3 hour automated workflow",
                  "Python-first, Excel-compatible reporting",
                  "Source-grounded AI with human approval gates",
                ].map((chip) => (
                  <span key={chip} style={{ ...pillStyle(), border: "1px solid rgba(91,163,245,0.3)", color: "rgba(91,163,245,0.85)", background: "rgba(91,163,245,0.06)", fontSize: 12 }}>
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
                  background: `rgba(91,163,245,${0.05 + i * 0.03})`,
                  border: `1px solid rgba(91,163,245,${0.12 + i * 0.05})`,
                  display: "flex", alignItems: "center", padding: "0 12px",
                  fontSize: 11, fontFamily: S.mono, color: `rgba(238,241,248,${0.35 + i * 0.1})`,
                }}>
                  {label}
                </div>
              ))}
              <p style={{ ...tagStyle({ fontSize: 10, marginTop: 8 }) }}>// abstracted · not real system names</p>
            </div>
          </div>
        </section>

        {/* ── IMPACT ── */}
        <section style={{ padding: "64px 0", borderBottom: `1px solid ${S.border}` }} id="work">
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
        <section style={{ padding: "100px 0", borderBottom: `1px solid ${S.border}` }} id="architecture">
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
                        border: "1px solid rgba(91,163,245,0.35)", background: "rgba(91,163,245,0.06)",
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
                      <div key={o} style={{ padding: "8px 14px", borderRadius: 4, fontSize: 12, color: S.accent, border: "1px solid rgba(91,163,245,0.3)", background: "rgba(91,163,245,0.05)", whiteSpace: "nowrap" }}>
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
                      background: "rgba(91,163,245,0.1)", border: "1px solid rgba(91,163,245,0.3)",
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
              <div style={{ position: "absolute", left: 19, top: 28, bottom: 28, width: 1, background: `linear-gradient(to bottom, ${S.accent}, rgba(91,163,245,0.08))` }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                {TIMELINE.map((t, i) => (
                  <div key={t.s} style={{ display: "grid", gridTemplateColumns: "48px 1fr", gap: 24, paddingBottom: i < TIMELINE.length - 1 ? 44 : 0 }}>
                    <div style={{ display: "flex", justifyContent: "center", paddingTop: 4 }}>
                      <div style={{
                        width: 38, height: 38, borderRadius: "50%", flexShrink: 0,
                        border: "1px solid rgba(91,163,245,0.4)", background: "rgba(91,163,245,0.08)",
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
            <div style={{ marginTop: 56, padding: "24px 28px", borderLeft: `3px solid ${S.accent}`, background: "rgba(91,163,245,0.04)" }}>
              <p style={{ fontSize: 15, color: S.fg, lineHeight: 1.8, fontStyle: "italic" }}>
                &ldquo;The design principle: preserve the business contract, remove fragile manual dependencies,
                and make every important number traceable to an owned source and validation step.&rdquo;
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
                    border: node.accent ? "1px solid rgba(91,163,245,0.5)" : `1px solid ${S.border}`,
                    background: node.accent ? "rgba(91,163,245,0.1)" : S.card,
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
                  border: "1px solid rgba(91,163,245,0.35)", color: S.accent,
                  background: "rgba(91,163,245,0.07)", letterSpacing: "0.1em",
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
                    height: 1, background: `linear-gradient(to right, ${S.accent}, rgba(91,163,245,0.2))`,
                    pointerEvents: "none",
                  }} />

                  {INVESTIGATION_STEPS.map((step, i) => (
                    <div key={step.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "0 8px", textAlign: "center" }}>
                      {/* node */}
                      <div style={{
                        width: 38, height: 38, borderRadius: "50%", flexShrink: 0, zIndex: 1, marginBottom: 14,
                        background: i === 5 ? "rgba(91,163,245,0.15)" : S.card,
                        border: i === 5 ? "1.5px solid rgba(91,163,245,0.6)" : `1px solid ${S.border}`,
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
              <div style={{ borderTop: `1px solid ${S.border}`, padding: "20px 28px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="skill-props">
                {[
                  { label: "Source boundary", val: "Jira · Slack · Confluence · Service telemetry — read-only, pre-approved" },
                  { label: "Inference rule",   val: "Evidence only — missing source triggers a flag, not a guess" },
                  { label: "Review gate",      val: "No artifact leaves the skill without human approval and sign-off" },
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

        {/* ── CONTACT ── */}
        <section style={{ padding: "120px 0" }} id="contact">
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
              <a href="#" style={{ fontFamily: S.mono, fontSize: 12, letterSpacing: "0.08em", padding: "11px 22px", borderRadius: 4, border: `1px solid ${S.border}`, color: S.fg, textDecoration: "none" }}>
                Download résumé
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
        }
        @media (max-width: 540px) {
          .principles-grid  { grid-template-columns: 1fr !important; }
          .skill-steps      { grid-template-columns: repeat(2,1fr) !important; }
        }
        a { transition: opacity 0.2s; }
        a:hover { opacity: 0.8; }
      `}</style>
    </>
  );
}
