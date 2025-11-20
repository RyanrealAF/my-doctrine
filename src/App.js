:root {
  --bg: #0d0d0d;
  --panel: #141414;
  --border: #2a2a2a;
  --text: #e6e6e6;
  --muted: #9a9a9a;
  --accent: #ff0040;
  --accent-soft: #ff335f;
}

* { box-sizing: border-box; }
html, body, #root { height: 100%; background: var(--bg); }
body { margin: 0; color: var(--text); font-family: "Courier New", monospace; }

.App { min-height: 100%; display: flex; flex-direction: column; }

.doctrine-header {
  text-align: center;
  padding: 3rem 1.25rem 2rem;
  border-bottom: 1px solid var(--border);
  background: linear-gradient(180deg, rgba(255,0,64,0.06), transparent 60%);
}

.brand {
  margin: 0;
  font-size: 2rem;
  letter-spacing: 0.05em;
}

.tagline {
  margin: 0.75rem auto 0;
  color: var(--accent);
  max-width: 900px;
  font-weight: 700;
  letter-spacing: 0.04em;
}

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
