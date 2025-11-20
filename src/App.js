import React from "react";
import "./App.css";
import { SITE, SECTIONS } from "./content";

function Section({ title, items }) {
  return (
    <details className="doctrine-section fade-in" open={false}>
      <summary className="doctrine-title">
        <span className="title-text">{title}</span>
        <span className="caret">▾</span>
      </summary>
      <div className="doctrine-content">
        <ul className="doctrine-list">
          {items.map((item, idx) => (
            <li key={idx}>
              <strong className="label">{item.label}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}

function App() {
  return (
    <div className="App">
      <header className="doctrine-header">
        <h1 className="brand">{SITE.title}</h1>
        <p className="tagline glitch" data-text={SITE.tagline}>
          {SITE.tagline}
        </p>
      </header>

      <main className="container">
        {SECTIONS.map((section) => (
          <Section key={section.title} title={section.title} items={section.items} />
        ))}
      </main>

      <footer className="doctrine-footer">
        <p>© {new Date().getFullYear()} {SITE.owner} — {SITE.brand}</p>
        <p className="footnote">{SITE.footerNote}</p>
      </footer>
    </div>
  );
}

export default App;
/* Glitch animation */
.glitch {
  position: relative;
  display: inline-block;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
}
.glitch::before {
  animation: glitchTop 2.8s infinite;
  color: var(--accent-soft);
  clip-path: polygon(0 0, 100% 0, 100% 48%, 0 48%);
}
.glitch::after {
  animation: glitchBottom 3.2s infinite;
  color: var(--accent);
  clip-path: polygon(0 52%, 100% 52%, 100% 100%, 0 100%);
}
@keyframes glitchTop {
  0% { transform: translate(0,0); opacity: 0.85; }
  8% { transform: translate(-2px,-1px); }
  10% { transform: translate(2px,1px); }
  12% { transform: translate(-1px,2px); opacity: 1; }
  14% { transform: translate(0,0); }
  100% { transform: translate(0,0); opacity: 0.85; }
}
@keyframes glitchBottom {
  0% { transform: translate(0,0); opacity: 0.85; }
  6% { transform: translate(1px,2px); }
  8% { transform: translate(-2px,-1px); opacity: 1; }
  10% { transform: translate(0,0); }
  100% { transform: translate(0,0); opacity: 0.85; }
}

/* Layout */
.container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Collapsible sections */
.doctrine-section {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 10px;
  margin: 1rem 0;
  overflow: hidden;
}
.doctrine-title {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 1.25rem;
  cursor: pointer;
  color: var(--text);
  font-weight: 700;
  user-select: none;
}
.doctrine-title:hover .title-text { color: var(--accent); }
.caret { margin-left: auto; color: var(--muted); transition: transform 200ms ease; }
.doctrine-section[open] .caret { transform: rotate(180deg); }

.doctrine-content {
  padding: 0 1.25rem 1rem;
  border-top: 1px solid var(--border);
  animation: reveal 260ms ease;
}
@keyframes reveal {
  from { opacity: 0; transform: translateY(-2px); }
  to { opacity: 1; transform: translateY(0); }
}

.doctrine-list {
  margin: 0.75rem 0 0;
  padding: 0 0 0 1rem;
  display: grid;
  gap: 0.5rem;
}
.label { color: var(--accent); }

/* Subtle fade-in */
.fade-in { animation: fadeIn 500ms ease both; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Footer */
.doctrine-footer {
  margin-top: auto;
  text-align: center;
  padding: 2rem 1rem 2.5rem;
  border-top: 1px solid var(--border);
  color: var(--muted);
}
.footnote { margin-top: 0.25rem; font-size: 0.85rem; }

/* Responsive */
@media (max-width: 640px) {
  .brand { font-size: 1.65rem; }
  .tagline { font-size: 0.95rem; }
}
