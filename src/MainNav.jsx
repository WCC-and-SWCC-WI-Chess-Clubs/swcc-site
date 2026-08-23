// src/swcc/MainNav.jsx — Southwest Chess Club navigation
import { useState, useEffect } from 'react';
import { NAV_LINKS, BLOG_URL, USCF_URL } from './data.js';

export default function MainNav({ currentPage, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 860);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 860);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavigate = (id) => {
    onNavigate(id);
    setMenuOpen(false);
    setMobileExpanded(null);
  };

  // Determine if a top-level dropdown is "active" (any child matches currentPage)
  const dropdownActive = (link) =>
    link.children && link.children.some(c => currentPage === c.id);

  return (
    <header className="swcc-header">
      {/* Row 1: brand + back link + hamburger */}
      <div className="swcc-nav-top">
        <button
          onClick={() => handleNavigate('home')}
          className="swcc-nav-brand"
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          ♜ Southwest Chess Club
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          {/* Real cross-deployment link, not a router Link — this build's
              basename is /swcc/, so a router Link to "/" would only
              bounce back to the SWCC home page, not the actual root site. */}
          {/*<a href="/" className="swcc-back-link">← ChessMKE.org</a>*/}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              style={{
                display: 'flex', flexDirection: 'column', gap: 5,
                background: 'none', border: 'none', cursor: 'pointer', padding: 4,
              }}
            >
              {[0, 1, 2].map(i => (
                <span
                  key={i}
                  style={{
                    display: 'block', width: 22, height: 2,
                    background: 'var(--swcc-color-pale-yellow)',
                    transition: 'all 0.25s', transformOrigin: 'center',
                    ...(menuOpen && i === 0 ? { transform: 'translateY(7px) rotate(45deg)' } : {}),
                    ...(menuOpen && i === 1 ? { opacity: 0 } : {}),
                    ...(menuOpen && i === 2 ? { transform: 'translateY(-7px) rotate(-45deg)' } : {}),
                  }}
                />
              ))}
            </button>
          )}
        </div>
      </div>

      {/* Row 2: desktop nav */}
      <ul className="swcc-nav-links">
        {NAV_LINKS.map(link => {
          if (link.type === 'dropdown') {
            return (
              <li key={link.id} className="swcc-nav-dropdown">
                <button className={dropdownActive(link) ? 'active' : ''}>
                  {link.label}
                  <span className="swcc-nav-dropdown-caret">▾</span>
                </button>
                <div className="swcc-nav-dropdown-menu">
                  {link.children.map(child => (
                    <button
                      key={child.id}
                      onClick={() => handleNavigate(child.id)}
                      className={currentPage === child.id ? 'active' : ''}
                    >
                      {child.label}
                    </button>
                  ))}
                </div>
              </li>
            );
          }
          return (
            <li key={link.id}>
              <button
                onClick={() => handleNavigate(link.id)}
                className={currentPage === link.id ? 'active' : ''}
              >
                {link.label}
              </button>
            </li>
          );
        })}
        <li>
          <a href={BLOG_URL} target="_blank" rel="noreferrer">Blog ↗</a>
        </li>
      </ul>

      {/* Mobile drawer */}
      {isMobile && menuOpen && (
        <>
          <div
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.6)', zIndex: 250,
            }}
          />
          <nav style={{
            position: 'fixed', top: 0, right: 0, bottom: 0, width: 280,
            background: 'var(--swcc-color-green-dark)', zIndex: 300,
            padding: '5rem 2rem 2rem',
            display: 'flex', flexDirection: 'column',
            overflowY: 'auto',
          }}>
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute', top: '1.25rem', right: '1.5rem',
                background: 'none', border: 'none',
                color: 'rgba(245,240,192,0.6)', fontSize: '1.5rem', cursor: 'pointer',
              }}
            >
              ✕
            </button>

            {NAV_LINKS.map(link => {
              if (link.type === 'dropdown') {
                const expanded = mobileExpanded === link.id;
                return (
                  <div key={link.id}>
                    <button
                      onClick={() => setMobileExpanded(expanded ? null : link.id)}
                      style={{
                        display: 'flex', justifyContent: 'space-between',
                        alignItems: 'center', width: '100%', textAlign: 'left',
                        padding: '0.9rem 0', background: 'none', border: 'none',
                        cursor: 'pointer',
                        color: dropdownActive(link)
                          ? 'var(--swcc-color-pale-yellow)'
                          : 'rgba(245,240,192,0.8)',
                        fontSize: '1rem', fontWeight: 500,
                        borderBottom: expanded ? 'none' : '1px solid rgba(245,240,192,0.12)',
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {link.label}
                      <span style={{ fontSize: '0.7rem', opacity: 0.6 }}>
                        {expanded ? '▲' : '▼'}
                      </span>
                    </button>
                    {expanded && (
                      <div style={{
                        paddingLeft: '1rem',
                        borderBottom: '1px solid rgba(245,240,192,0.12)',
                        marginBottom: '0.25rem',
                      }}>
                        {link.children.map(child => (
                          <button
                            key={child.id}
                            onClick={() => handleNavigate(child.id)}
                            style={{
                              display: 'block', width: '100%', textAlign: 'left',
                              padding: '0.6rem 0', background: 'none', border: 'none',
                              cursor: 'pointer',
                              color: currentPage === child.id
                                ? 'var(--swcc-color-pale-yellow)'
                                : 'rgba(245,240,192,0.7)',
                              fontSize: '0.9rem', fontWeight: 400,
                              borderBottom: '1px solid rgba(245,240,192,0.07)',
                              fontFamily: "'DM Sans', sans-serif",
                            }}
                          >
                            {child.label}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavigate(link.id)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '0.9rem 0', background: 'none', border: 'none',
                    cursor: 'pointer',
                    color: currentPage === link.id
                      ? 'var(--swcc-color-pale-yellow)'
                      : 'rgba(245,240,192,0.8)',
                    fontSize: '1rem', fontWeight: 500,
                    borderBottom: '1px solid rgba(245,240,192,0.12)',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  {link.label}
                </button>
              );
            })}

            <a
              href={BLOG_URL} target="_blank" rel="noreferrer"
              style={{
                display: 'block', padding: '0.9rem 0',
                color: 'var(--swcc-color-pale-yellow-dim)', textDecoration: 'none',
                fontSize: '1rem', fontWeight: 500,
              }}
            >
              Blog ↗
            </a>
          </nav>
        </>
      )}
    </header>
  );
}
