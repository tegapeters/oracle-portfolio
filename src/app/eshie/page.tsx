"use client";

import { useEffect, useState } from "react";
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

const tag = (extra?: CSSProperties): CSSProperties => ({
  fontFamily: S.mono, fontSize: 11, letterSpacing: "0.14em",
  textTransform: "uppercase", color: S.dim, ...extra,
});
const pill = (active?: boolean): CSSProperties => ({
  display: "inline-block", padding: "5px 14px", borderRadius: 20,
  border: `1px solid ${active ? S.accent : S.border}`,
  color: active ? S.accent : S.dim,
  background: active ? "rgba(200,169,110,0.07)" : "transparent",
  fontFamily: S.mono, fontSize: 11, letterSpacing: "0.06em",
  whiteSpace: "nowrap",
});
const card = (extra?: CSSProperties): CSSProperties => ({
  background: S.card, border: `1px solid ${S.border}`, borderRadius: 8, padding: "28px", ...extra,
});
const wrap = (extra?: CSSProperties): CSSProperties => ({
  maxWidth: 1100, margin: "0 auto", padding: "0 28px", ...extra,
});

const FEATURES = [
  {
    n: "01",
    title: "Live case briefs",
    body: "Ask about any client in plain English. Eshie pulls current status, open tasks, recent notes, client messages, and documents on file — all in one attorney-ready summary.",
    detail: "\"What's the status on Johnson?\" → full case brief in seconds",
  },
  {
    n: "02",
    title: "Morning brief",
    body: "Every morning, each staff member gets a personalized rundown: deadlines today, overnight messages that need a response, and unreviewed documents waiting in Dropbox.",
    detail: "Filtered per employee — you only see what's assigned to you",
  },
  {
    n: "03",
    title: "Log notes and tasks from chat",
    body: "Staff can log case notes and create tasks directly through conversation. No context switching, no opening CASEpeer just to write a line.",
    detail: "\"Log that we received medical records from Dr. Smith today\"",
  },
];

const INTEGRATIONS = [
  { name: "CASEpeer", desc: "Real-time case sync", detail: "New cases, status changes, leads, and messages pushed automatically via Zapier" },
  { name: "Dropbox", desc: "Document intake", detail: "New files in client folders detected and linked to the right case by folder name" },
  { name: "Google", desc: "Team sign-in", detail: "Staff sign in with their existing Google accounts — no separate passwords" },
  { name: "Zapier", desc: "Workflow automation", detail: "4 live Zaps connect CASEpeer and Dropbox events to Eshie in real time" },
];

const HOW_IT_WORKS = [
  { label: "Staff asks a question", sub: "in plain English" },
  { label: "Eshie queries your data", sub: "CASEpeer · Dropbox · task history" },
  { label: "Claude assembles the answer", sub: "from live case data only" },
  { label: "Staff gets a brief", sub: "accurate, current, formatted" },
];

const TRUST_POINTS = [
  { title: "Your data, your server", body: "Eshie runs on your own backend. Case data stays in your Postgres database — it never leaves your infrastructure." },
  { title: "Read before it writes", body: "Notes and tasks are shown to staff before being submitted. Nothing is created without a confirmation." },
  { title: "Per-user briefs", body: "Each employee sees only what's assigned to them. The morning brief is filtered to your name before it's shown." },
  { title: "Audit trail", body: "Every note and task created through chat is stamped with who created it, the same as a direct CASEpeer entry." },
];

export default function EshiePage() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const revealObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("revealed"); }),
      { threshold: 0.08, rootMargin: "0px 0px -48px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObs.observe(el));

    const navObs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }),
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((s) => navObs.observe(s));

    return () => { revealObs.disconnect(); navObs.disconnect(); };
  }, []);

  const navActive = (id: string) => activeSection === id ? S.accent : S.dim;

  return (
    <>
      {/* ── NAV ── */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "var(--nav-bg)", backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${S.border}`,
      }}>
        <div style={{ ...wrap(), display: "flex", alignItems: "center", justifyContent: "space-between", height: 60 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            {/* Eshie mark */}
            <div style={{
              width: 28, height: 28, borderRadius: "50%",
              background: "rgba(200,169,110,0.12)", border: "1px solid rgba(200,169,110,0.35)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 13,
            }}>🐻</div>
            <span style={{ fontFamily: S.mono, fontSize: 13, letterSpacing: "0.12em", color: S.fg, fontWeight: 600 }}>
              ESHIE
            </span>
            <span style={{
              fontFamily: S.mono, fontSize: 9, letterSpacing: "0.1em",
              padding: "2px 8px", borderRadius: 10,
              border: "1px solid rgba(200,169,110,0.28)", color: S.accent,
              background: "rgba(200,169,110,0.06)", marginLeft: 4,
            }}>LIVE</span>
          </div>

          <nav style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <div className="eshie-nav-links" style={{ display: "flex", gap: 24, alignItems: "center" }}>
              {([
                ["Features", "#features", "features"],
                ["Integrations", "#integrations", "integrations"],
                ["Trust", "#trust", "trust"],
              ] as const).map(([label, href, id]) => (
                <a key={label} href={href} className="nav-link"
                  style={{ fontFamily: S.mono, fontSize: 11, letterSpacing: "0.1em", color: navActive(id), textDecoration: "none" }}>
                  {label}
                </a>
              ))}
            </div>
            <button
              onClick={() => setTheme(t => t === "dark" ? "light" : "dark")}
              title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                background: "none", border: `1px solid ${S.border}`, borderRadius: 4,
                padding: "6px 10px", cursor: "pointer", color: S.dim, lineHeight: 1,
                fontSize: 14, display: "flex", alignItems: "center",
              }}
            >
              {theme === "dark" ? "☀" : "☾"}
            </button>
            <a href="#contact" className="connect-btn" style={{
              fontFamily: S.mono, fontSize: 11, letterSpacing: "0.1em", padding: "7px 18px",
              borderRadius: 4, background: S.accent, color: "#1A1A1A", textDecoration: "none", fontWeight: 600,
            }}>
              Request demo
            </a>
          </nav>
        </div>
      </header>

      {/* ── MOBILE NAV ── */}
      <div className="eshie-mobile-nav" style={{
        display: "none", overflowX: "auto", borderBottom: `1px solid ${S.border}`,
        background: "var(--subnav-bg)", WebkitOverflowScrolling: "touch" as CSSProperties["WebkitOverflowScrolling"],
      }}>
        <div style={{ display: "flex", gap: 0, padding: "0 16px", whiteSpace: "nowrap" }}>
          {(["Features", "How it works", "Integrations", "Trust"] as const).map((label) => (
            <a key={label} href={`#${label.toLowerCase().replace(/ /g, "-")}`} style={{
              fontFamily: S.mono, fontSize: 11, letterSpacing: "0.08em", color: S.dim,
              textDecoration: "none", padding: "10px 14px", display: "block",
            }}>{label}</a>
          ))}
        </div>
      </div>

      <main>

        {/* ── HERO ── */}
        <section style={{ padding: "120px 0 100px", borderBottom: `1px solid ${S.border}` }}>
          <div style={{ ...wrap(), display: "grid", gridTemplateColumns: "1fr 380px", gap: 60, alignItems: "center" }} className="hero-grid">
            <div>
              <div className="hero-tag" style={{ ...tag({ color: S.accent }), marginBottom: 24 }}>
                AI CASE ASSISTANT · ESH LAW GROUP · PERSONAL INJURY
              </div>
              <h1 className="hero-h1" style={{ fontSize: "clamp(32px,4vw,54px)", fontWeight: 300, lineHeight: 1.15, letterSpacing: "-0.025em", marginBottom: 28, color: S.fg }}>
                Ask about any client.<br />
                Get the full picture{" "}
                <em style={{ fontStyle: "italic", color: S.accent }}>instantly.</em>
              </h1>
              <p className="hero-body" style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, maxWidth: 520, marginBottom: 36 }}>
                Eshie is an AI assistant built specifically for Esh Law Group. Staff ask questions in plain
                English and get live, accurate case briefs — status, open tasks, recent notes, client messages,
                and documents on file — pulled from CASEpeer and Dropbox in real time.
              </p>
              <div className="hero-chips" style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 40 }}>
                {[
                  "Live since 2026",
                  "210 cases imported day one",
                  "4 Zapier Zaps running",
                  "Google SSO for the team",
                ].map((chip) => (
                  <span key={chip} className="hover-pill" style={{ ...pill(), border: "1px solid rgba(200,169,110,0.35)", color: S.accent, background: "rgba(200,169,110,0.08)", fontSize: 12 }}>
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Chat mockup */}
            <div className="hero-viz" style={{ display: "flex", flexDirection: "column" }}>
              <div style={{
                background: S.card, border: `1px solid ${S.border}`, borderRadius: 12, overflow: "hidden",
                boxShadow: "0 24px 64px rgba(0,0,0,0.3)",
              }}>
                {/* Chat header */}
                <div style={{ background: S.surface, borderBottom: `1px solid ${S.border}`, padding: "14px 18px", display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "rgba(200,169,110,0.12)", border: "1px solid rgba(200,169,110,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>🐻</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: S.fg, lineHeight: 1 }}>Eshie</div>
                    <div style={{ fontFamily: S.mono, fontSize: 9, color: S.accent, letterSpacing: "0.1em", marginTop: 3 }}>CASE BRIEFS</div>
                  </div>
                </div>
                {/* Messages */}
                <div style={{ padding: "18px", display: "flex", flexDirection: "column", gap: 14 }}>
                  {/* User */}
                  <div style={{ alignSelf: "flex-end", maxWidth: "85%" }}>
                    <div style={{ background: "rgba(200,169,110,0.12)", border: "1px solid rgba(200,169,110,0.2)", borderRadius: "12px 12px 3px 12px", padding: "10px 14px", fontSize: 13, color: S.fg, lineHeight: 1.5 }}>
                      What&rsquo;s the status on Johnson?
                    </div>
                  </div>
                  {/* Eshie brief */}
                  <div style={{ alignSelf: "flex-start", maxWidth: "95%" }}>
                    <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: "12px 12px 12px 3px", padding: "14px 16px", fontSize: 12, color: S.dim, lineHeight: 1.65 }}>
                      <div style={{ fontFamily: S.mono, fontSize: 9, color: S.accent, letterSpacing: "0.1em", marginBottom: 10 }}>JOHNSON, MARCUS · PI · CASE #8821</div>
                      <div style={{ color: S.fg, fontWeight: 500, marginBottom: 6 }}>Status: Treatment — Ongoing</div>
                      <div style={{ marginBottom: 6 }}><span style={{ color: S.accent }}>Open tasks:</span> Follow up with Dr. Patel re MRI (due today) · Demand letter draft pending</div>
                      <div style={{ marginBottom: 6 }}><span style={{ color: S.accent }}>Last note:</span> Client called 8/22 — still treating, no settlement discussion yet</div>
                      <div><span style={{ color: S.accent }}>Docs on file:</span> Medical records (3), Photos (12), Claims intake</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTEXT BAND ── */}
        <section style={{ padding: "48px 0", borderBottom: `1px solid ${S.border}`, background: "rgba(200,169,110,0.04)" }}>
          <div style={wrap()}>
            <div style={{ maxWidth: 780, borderLeft: `3px solid ${S.accent}`, paddingLeft: 24 }}>
              <div style={{ ...tag({ color: S.accent, marginBottom: 12 }) }}>// WHY ESHIE EXISTS</div>
              <p style={{ fontSize: 15, color: S.fg, lineHeight: 1.85 }}>
                Personal injury case files span CASEpeer, Dropbox, Outlook, and handwritten notes. Getting a full
                picture of a single client means opening multiple systems, hunting through folders, and reading
                through history. Eshie connects those sources and surfaces the answer to a plain-English question
                in seconds — so staff spend time on cases, not on finding information about them.
              </p>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section style={{ padding: "100px 0", borderBottom: `1px solid ${S.border}` }} id="features">
          <div style={wrap()}>
            <div style={{ ...tag(), marginBottom: 14 }}>// WHAT ESHIE DOES</div>
            <h2 style={{ fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 300, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 56, color: S.fg }}>
              Three things your team will use every day.
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="eshie-3col">
              {FEATURES.map((f, i) => (
                <div key={f.n} className={`hover-card reveal reveal-delay-${i + 1}`} style={card()}>
                  <div style={{ fontFamily: S.mono, fontSize: 11, color: S.accent, marginBottom: 14, letterSpacing: "0.1em" }}>{f.n}</div>
                  <h3 style={{ fontSize: 17, fontWeight: 500, color: S.fg, marginBottom: 12, lineHeight: 1.3 }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: S.dim, lineHeight: 1.75, marginBottom: 20 }}>{f.body}</p>
                  <div style={{
                    fontFamily: S.mono, fontSize: 11, padding: "10px 14px", borderRadius: 6,
                    background: "rgba(200,169,110,0.06)", border: "1px solid rgba(200,169,110,0.18)",
                    color: S.accent, lineHeight: 1.5, fontStyle: "italic",
                  }}>
                    {f.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        {/* ── INTEGRATIONS ── */}
        <section style={{ padding: "100px 0", borderBottom: `1px solid ${S.border}` }} id="integrations">
          <div style={wrap()}>
            <div style={{ ...tag(), marginBottom: 14 }}>// INTEGRATIONS</div>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: 24, color: S.fg }}>
              Connects to what the firm already uses.
            </h2>
            <p style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, maxWidth: 620, marginBottom: 56 }}>
              No new software to adopt for the firm. Eshie plugs into CASEpeer, Dropbox, and Google via
              Zapier — the tools Esh Law Group already runs on. Data flows in automatically; nothing requires
              a manual export or import.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 48 }} className="eshie-4col">
              {INTEGRATIONS.map((int, i) => (
                <div key={int.name} className={`hover-card reveal reveal-delay-${i + 1}`} style={card({ textAlign: "center" })}>
                  <div style={{ fontFamily: S.mono, fontSize: 15, color: S.fg, fontWeight: 600, marginBottom: 6 }}>{int.name}</div>
                  <div style={{ fontFamily: S.mono, fontSize: 10, color: S.accent, letterSpacing: "0.1em", marginBottom: 14 }}>{int.desc}</div>
                  <p style={{ fontSize: 13, color: S.dim, lineHeight: 1.65 }}>{int.detail}</p>
                </div>
              ))}
            </div>

            {/* Live Zaps detail */}
            <div style={{ ...card({ padding: 0, overflow: "hidden" }) }}>
              <div style={{ background: S.surface, borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ fontFamily: S.mono, fontSize: 10, color: S.dimmer, letterSpacing: "0.12em" }}>LIVE ZAPIER ZAPS</div>
                <div style={{ fontFamily: S.mono, fontSize: 9, padding: "3px 10px", borderRadius: 10, border: "1px solid rgba(200,169,110,0.28)", color: S.accent, letterSpacing: "0.1em" }}>4 ACTIVE</div>
              </div>
              {[
                { n: "01", name: "New case in CASEpeer", action: "→ Inserted into Eshie Postgres in real time" },
                { n: "02", name: "Case status changed", action: "→ Status + history updated automatically" },
                { n: "03", name: "New lead submitted", action: "→ Lead record created with contact info and case type" },
                { n: "04", name: "New file added to Dropbox", action: "→ Document linked to the right case by folder name" },
              ].map((zap, i) => (
                <div key={zap.n} style={{
                  display: "grid", gridTemplateColumns: "40px 1fr 1fr",
                  padding: "14px 24px", borderBottom: i < 3 ? `1px solid ${S.border}` : "none",
                  alignItems: "center", gap: 16,
                }}>
                  <div style={{ fontFamily: S.mono, fontSize: 10, color: S.dimmer }}>{zap.n}</div>
                  <div style={{ fontSize: 13, color: S.fg }}>{zap.name}</div>
                  <div style={{ fontSize: 13, color: S.dim }}>{zap.action}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TRUST ── */}
        <section style={{ padding: "100px 0", borderBottom: `1px solid ${S.border}` }} id="trust">
          <div style={wrap()}>
            <div style={{ ...tag(), marginBottom: 14 }}>// BUILT TO TRUST</div>
            <h2 style={{ fontSize: "clamp(22px,3vw,38px)", fontWeight: 300, letterSpacing: "-0.02em", marginBottom: 24, color: S.fg }}>
              AI that stays in its lane.
            </h2>
            <p style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, maxWidth: 640, marginBottom: 56 }}>
              Eshie answers questions using what is in the system. It does not speculate, does not fabricate
              records, and does not act without confirmation. Staff are always in control of what gets
              created or logged.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, marginBottom: 56 }} className="eshie-2col">
              {TRUST_POINTS.map((p, i) => (
                <div key={p.title} className="hover-card reveal" style={card({ borderTop: `2px solid ${i < 2 ? S.accent : S.border}`, borderRadius: "0 0 8px 8px" })}>
                  <h3 style={{ fontSize: 15, fontWeight: 600, color: S.fg, marginBottom: 10 }}>{p.title}</h3>
                  <p style={{ fontSize: 14, color: S.dim, lineHeight: 1.75 }}>{p.body}</p>
                </div>
              ))}
            </div>

            {/* Auth detail */}
            <div style={{ ...card({ padding: 0, overflow: "hidden" }) }}>
              <div style={{ background: S.surface, borderBottom: `1px solid ${S.border}`, padding: "16px 24px" }}>
                <div style={{ fontFamily: S.mono, fontSize: 10, color: S.dimmer, letterSpacing: "0.12em" }}>AUTHENTICATION</div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} className="eshie-2col">
                <div style={{ padding: "24px", borderRight: `1px solid ${S.border}` }}>
                  <div style={{ fontFamily: S.mono, fontSize: 10, color: S.accent, letterSpacing: "0.1em", marginBottom: 12 }}>GOOGLE SIGN-IN</div>
                  <p style={{ fontSize: 14, color: S.dim, lineHeight: 1.75 }}>
                    Staff sign in with their existing Google accounts. No separate Eshie password to manage.
                    Google OAuth2 — the same authentication the firm already uses for email and Drive.
                  </p>
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ fontFamily: S.mono, fontSize: 10, color: S.accent, letterSpacing: "0.1em", marginBottom: 12 }}>PER-USER BRIEF</div>
                  <p style={{ fontSize: 14, color: S.dim, lineHeight: 1.75 }}>
                    The morning brief and task views are filtered to the signed-in user. Each employee sees
                    only what is assigned to their name — not the entire firm&apos;s workload.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── STACK ── */}
        <section style={{ padding: "72px 0", borderBottom: `1px solid ${S.border}` }}>
          <div style={wrap()}>
            <div style={{ ...tag(), marginBottom: 24 }}>// STACK</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {[
                "React · Vite", "Tailwind CSS", "FastAPI", "Python",
                "PostgreSQL", "psycopg2", "Claude Sonnet", "Anthropic API",
                "python-jose (JWT)", "Google OAuth2",
                "Vercel (frontend)", "Render (backend + database)",
                "Zapier (4 Zaps)", "CASEpeer API", "Dropbox",
              ].map((s) => <span key={s} className="hover-pill" style={pill()}>{s}</span>)}
            </div>
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section style={{ padding: "140px 0" }} id="contact">
          <div style={{ ...wrap(), maxWidth: 600, textAlign: "center" }}>
            <div style={{ ...tag({ color: S.accent, marginBottom: 20 }) }}>// BUILT BY TEGA ESHARETURI</div>
            <h2 style={{ fontSize: "clamp(28px,4vw,48px)", fontWeight: 300, letterSpacing: "-0.025em", lineHeight: 1.2, marginBottom: 24, color: S.fg }}>
              Want Eshie at{" "}
              <em style={{ fontStyle: "italic", color: S.accent }}>your firm?</em>
            </h2>
            <p style={{ fontSize: 16, color: S.dim, lineHeight: 1.8, marginBottom: 44 }}>
              Eshie is a custom build, not a SaaS subscription. If you run a personal injury practice on
              CASEpeer and want an AI assistant that actually knows your cases, reach out — I can scope a
              build for your firm.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="https://github.com/tegapeters/esh-law-ai" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: S.mono, fontSize: 12, letterSpacing: "0.08em", padding: "11px 22px", borderRadius: 4, border: `1px solid ${S.border}`, color: S.fg, textDecoration: "none" }}>
                Repo (private) ↗
              </a>
              <a href="mailto:tegaomega11@gmail.com"
                style={{ fontFamily: S.mono, fontSize: 12, letterSpacing: "0.08em", padding: "11px 22px", borderRadius: 4, background: S.accent, color: "#1A1A1A", textDecoration: "none", fontWeight: 600 }}>
                Contact Tega
              </a>
            </div>
          </div>
        </section>

      </main>

      <footer style={{ borderTop: `1px solid ${S.border}`, padding: "22px 0" }}>
        <div style={{ ...wrap(), display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: S.mono, fontSize: 11, color: S.dimmer }}>Eshie — built by Tega Eshareturi · 2026</span>
          <a href="/" style={{ fontFamily: S.mono, fontSize: 11, color: S.dimmer, textDecoration: "none" }}>
            ← Oracle Portfolio
          </a>
        </div>
      </footer>

      <style>{`
        @media (max-width: 860px) {
          .hero-grid      { grid-template-columns: 1fr !important; }
          .eshie-3col     { grid-template-columns: 1fr !important; }
          .eshie-2col     { grid-template-columns: 1fr !important; border-right: none !important; }
          .eshie-4col     { grid-template-columns: 1fr 1fr !important; }
          .eshie-nav-links { display: none !important; }
          .eshie-mobile-nav { display: block !important; }
        }
        @media (max-width: 540px) {
          .eshie-4col     { grid-template-columns: 1fr !important; }
        }
        a { transition: opacity 0.2s; }
        a:hover { opacity: 0.8; }
      `}</style>
    </>
  );
}
