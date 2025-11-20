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
