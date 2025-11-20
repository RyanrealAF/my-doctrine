import React, {useState} from 'react';
import './App.css';
import content from './content';

function App() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="app-root">
      <header className="cinematic-header">
        <div className="brand">
          <h1>My Doctrine Archive</h1>
          <p className="tagline glitch" data-text="Pain is Data. Lies leave Debt. Shields invert.">Pain is Data. Lies leave Debt. Shields invert.</p>
        </div>
      </header>

      <main className="container">
        {content.map((section, i) => (
          <section className="doc-section" key={i}>
            <button
              className={`section-toggle ${openIndex === i ? 'open' : ''}`}
              onClick={() => toggle(i)}
              aria-expanded={openIndex === i}
              aria-controls={`section-content-${i}`}
            >
              <span className="section-title">{section.title}</span>
              <span className="chev">{openIndex === i ? '▾' : '▸'}</span>
            </button>

            <div
              id={`section-content-${i}`}
              className={`section-content ${openIndex === i ? 'expanded' : ''}`}
            >
              <ul>
                {section.bullets.map((b, idx) => (
                  <li key={idx}>{b}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </main>

      <footer className="cinematic-footer">
        <div className="footer-inner">
          <span className="logo">■</span>
          <span className="foot-text">My Doctrine — Archive & Analysis</span>
        </div>
      </footer>
    </div>
  );
}

export default App;