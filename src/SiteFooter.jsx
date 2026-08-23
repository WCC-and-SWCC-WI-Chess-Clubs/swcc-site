// src/swcc/SiteFooter.jsx — Southwest Chess Club footer
import { NAV_LINKS, BLOG_URL } from './data.js';

// Flatten nav tree into a single list of leaf items for the footer
function flattenNav(links) {
  return links.flatMap(link =>
    link.type === 'dropdown' ? link.children : [link]
  );
}

const FOOTER_LINKS = flattenNav(NAV_LINKS);

export default function SiteFooter({ onNavigate }) {
  return (
    <footer className="swcc-footer">
      <strong>Southwest Chess Club</strong><br />
      Hales Corners Village Hall · 5635 South New Berlin Road · Hales Corners, WI<br />
      Thursday nights · Doors 6:00 pm · Games 7:00 pm
      <div className="swcc-footer-links">
        {FOOTER_LINKS.map((link, i) => (
          <span key={link.id}>
            {i > 0 && <span style={{ opacity: 0.4 }}> · </span>}
            <a
              onClick={() => onNavigate(link.id)}
              style={{ cursor: 'pointer' }}
            >
              {link.label}
            </a>
          </span>
        ))}
        <span>
          <span style={{ opacity: 0.4 }}> · </span>
          <a href={BLOG_URL} target="_blank" rel="noreferrer">Blog ↗</a>
        </span>
        <span>
          <span style={{ opacity: 0.4 }}> · </span>
          <a href="/" style={{ color: 'rgba(245,240,192,0.4)', textDecoration: 'none' }}>
            ← ChessMKE.org
          </a>
        </span>
      </div>
    </footer>
  );
}
