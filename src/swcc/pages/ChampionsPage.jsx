// src/swcc/pages/ChampionsPage.jsx — SWCC Club Champions
import { ALL_CHAMPIONS, USCF_URL } from '../data.js';

export default function ChampionsPage() {
  return (
    <div className="swcc-page-shell">
      <div className="swcc-page-banner">
        <p className="swcc-section-label">Hall of Fame</p>
        <h1 className="swcc-section-title">Club Champions</h1>
        <p className="swcc-page-banner-sub">
          Southwest Chess Club Championship · 1993 – Present · USCF Rated
        </p>
      </div>

      <div className="swcc-page-inner">
        <p style={{ fontSize: '0.88rem', color: 'var(--swcc-color-text-muted)', marginBottom: '1.75rem' }}>
          The annual Joe Crothers Memorial Southwest Chess Club Championship is our most prestigious
          event, typically contested over six to seven Thursday nights in June and July.
          Full results are available on{' '}
          <a href={USCF_URL} target="_blank" rel="noreferrer" className="swcc-text-link">
            USCF crosstables ↗
          </a>.
        </p>

        <table className="swcc-champions-table">
          <thead>
            <tr>
              <th className="swcc-champ-year">Year</th>
              <th>Champion</th>
            </tr>
          </thead>
          <tbody>
            {ALL_CHAMPIONS.map((row, i) => {
              if (row.name === null) {
                return (
                  <tr key={row.year} style={{ opacity: 0.45, fontStyle: 'italic' }}>
                    <td className="swcc-champ-year">{row.year}</td>
                    <td>— no championship held —</td>
                  </tr>
                );
              }
              const isCurrent = i === 0;
              return (
                <tr key={row.year} className={isCurrent ? 'current' : ''}>
                  <td className="swcc-champ-year">{row.year}</td>
                  <td>
                    {row.name}
                    {isCurrent && (
                      <span style={{
                        marginLeft: '0.75rem',
                        fontSize: '0.7rem', fontWeight: 600,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        background: 'var(--swcc-color-green)',
                        color: 'var(--swcc-color-pale-yellow)',
                        padding: '0.15rem 0.55rem',
                        verticalAlign: 'middle',
                      }}>
                        Current
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
