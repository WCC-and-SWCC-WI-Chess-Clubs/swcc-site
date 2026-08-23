// src/swcc/ColorSchemePicker.jsx — SWCC color theme selector
const THEMES = [
  {
    id: 'forest',
    name: 'Forest Green',
    desc: 'Classic dark green & pale yellow · Playfair Display',
    swatches: ['#1B4A2A', '#F5F0C0', '#f5f8f5', '#C8941A'],
  },
  {
    id: 'earthy',
    name: 'Warm & Earthy',
    desc: 'Cream, terracotta & sage green · Lora + Nunito',
    swatches: ['#5B7A4F', '#F5EDD8', '#FAF5EC', '#C4603B'],
  },
  {
    id: 'midnight',
    name: 'Midnight Chess',
    desc: 'Deep navy & antique gold · Playfair Display',
    swatches: ['#0F1B3A', '#E8D48A', '#F2EED8', '#D4AF37'],
  },
  {
    id: 'parchment',
    name: 'Ink & Parchment',
    desc: 'Ink brown, parchment & crimson',
    swatches: ['#2C1810', '#F4ECD8', '#FAF6EE', '#C84B1A'],
  },
  {
    id: 'slate',
    name: 'Slate & Copper',
    desc: 'Cool slate blue with copper accents',
    swatches: ['#2E3A4A', '#F2EAD8', '#F5F2EC', '#B87333'],
  },
  {
    id: 'burgundy',
    name: 'Royal Burgundy',
    desc: 'Deep burgundy, champagne & gold',
    swatches: ['#5C1A2E', '#F5EDD8', '#FBF5EE', '#C8A020'],
  },
  {
    id: 'cobalt',
    name: 'Cobalt & Ivory',
    desc: 'Bold cobalt blue, ivory & warm gold',
    swatches: ['#1A3A7A', '#F5F0E6', '#F8F5EE', '#D4921A'],
  },
];

export default function ColorSchemePicker({ theme, onThemeChange }) {
  return (
    <section className="swcc-theme-picker-section" id="color-scheme">
      <p className="swcc-section-label">Appearance</p>
      <h2 className="swcc-section-title">Color Scheme</h2>
      <p style={{ color: 'var(--swcc-color-text-muted)', fontSize: '0.88rem', marginTop: '0.25rem' }}>
        Choose a palette — your preference is saved in your browser.
      </p>
      <div className="swcc-theme-grid">
        {THEMES.map((t) => (
          <button
            key={t.id}
            className={`swcc-theme-card${theme === t.id ? ' active' : ''}`}
            onClick={() => onThemeChange(t.id)}
            aria-pressed={theme === t.id}
          >
            <div className="swcc-theme-swatches">
              {t.swatches.map((color, i) => (
                <span
                  key={i}
                  className="swcc-theme-swatch"
                  style={{ background: color }}
                />
              ))}
            </div>
            <div className="swcc-theme-card-name">{t.name}</div>
            <div className="swcc-theme-card-desc">{t.desc}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
