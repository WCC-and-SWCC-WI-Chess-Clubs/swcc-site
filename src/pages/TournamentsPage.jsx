// src/swcc/pages/TournamentsPage.jsx — SWCC Past Tournaments
import { TOURNAMENTS } from '../data.js';

export default function TournamentsPage() {
  return (
    <div className="swcc-page-shell">
      <div className="swcc-page-banner">
        <p className="swcc-section-label">Results Archive</p>
        <h1 className="swcc-section-title">Past Tournaments</h1>
        <p className="swcc-page-banner-sub">
          Results linked to USCF event pages
        </p>
      </div>

      <div className="swcc-page-inner wide">
        {Object.entries(TOURNAMENTS)
          .sort(([a], [b]) => Number(b) - Number(a))
          .map(([year, events]) => (
          <div key={year} className="swcc-tourney-year-section">
            <div className="swcc-tourney-year-header">{year}</div>
            <ul className="swcc-tourney-list">
              {events.map((event, i) => (
                <li key={i}>
                  <a href={event.url} target="_blank" rel="noreferrer">
                    {event.name} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
