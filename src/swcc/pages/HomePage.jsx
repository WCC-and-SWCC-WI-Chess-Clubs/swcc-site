// src/swcc/pages/HomePage.jsx — Southwest Chess Club home page
import { SCHEDULE_CSV_URL, HC_CHALLENGE, CURRENT_CHAMPION, BLOG_URL, USCF_URL } from '../data.js';
import ColorSchemePicker from '../ColorSchemePicker.jsx';
import { useSchedule } from '../useSchedule.js';

export default function HomePage({ onNavigate, theme, onThemeChange }) {
  const { rows: schedule, error: scheduleError } = useSchedule(SCHEDULE_CSV_URL);

  return (
    <div className="swcc-page-shell">

      {/* ── Hero ── */}
      <section className="swcc-hero">
        <p className="swcc-hero-eyebrow">Hales Corners, Wisconsin · USCF Affiliate</p>
        <h1 className="swcc-hero-title">
          Southwest Chess Club
          <em>Every Thursday Night</em>
        </h1>
        <p className="swcc-hero-subtitle">
          Welcoming players of all skill levels since the 1970s. Come for casual games
          or compete in our USCF-rated monthly events and the annual Hales Corners Challenge.
        </p>

        <div className="swcc-hero-grid">
          <div className="swcc-hero-block">
            <p className="swcc-hero-block-label">When We Meet</p>
            <p className="swcc-hero-block-main">Every Thursday Night</p>
            <div className="swcc-time-row">
              <div>
                <div className="swcc-time-val">6:00<span style={{ fontSize: '1rem' }}>pm</span></div>
                <div className="swcc-time-lbl">Doors open</div>
              </div>
              <div>
                <div className="swcc-time-val">7:00<span style={{ fontSize: '1rem' }}>pm</span></div>
                <div className="swcc-time-lbl">Games begin</div>
              </div>
            </div>
            <p className="swcc-hero-block-detail" style={{ marginTop: '1rem' }}>
              Time control: G/90; d5 (unless noted)
            </p>
          </div>
          <div className="swcc-hero-block">
            <p className="swcc-hero-block-label">Where We Meet</p>
            <p className="swcc-hero-block-main">Hales Corners Village Hall</p>
            <p className="swcc-hero-block-detail">
              5635 South New Berlin Road<br />
              Hales Corners, Wisconsin<br />
              Downstairs Community Room
            </p>
            <p className="swcc-hero-block-detail" style={{ marginTop: '0.75rem' }}>
              <a
                href="http://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=5635+South+New+Berlin+Road,+Hales+Corners,+Wisconsin&ie=UTF8&hq=&hnear=5635+S+New+Berlin+Rd,+Hales+Corners,+Milwaukee,+Wisconsin+53130&z=16"
                target="_blank"
                rel="noreferrer"
              >
                Get directions →
              </a>
            </p>
          </div>
        </div>

        <div className="swcc-hero-cta">
          <button
            onClick={() => onNavigate('tournament')}
            className="swcc-btn-primary"
          >
            {HC_CHALLENGE.shortName} →
          </button>
          <a href={BLOG_URL} target="_blank" rel="noreferrer" className="swcc-btn-outline-light">
            Club Blog ↗
          </a>
        </div>

        <div className="swcc-hero-bg-text">♜</div>
      </section>

      {/* ── Current Schedule ── */}
      <section className="swcc-schedule-section" id="schedule">
        <p className="swcc-section-label">Upcoming Events</p>
        <h2 className="swcc-section-title">Club Schedule</h2>
        <p style={{ color: 'var(--swcc-color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
          All events are Thursday evenings unless noted · Time control G/90; d5
        </p>
        {scheduleError ? (
          <p style={{ color: 'var(--swcc-color-text-muted)', fontStyle: 'italic' }}>
            Couldn't load the schedule right now — check{' '}
            <a href={BLOG_URL} target="_blank" rel="noreferrer" className="swcc-text-link">
              our blog
            </a>{' '}
            for the latest, or try refreshing.
          </p>
        ) : !schedule ? (
          <p style={{ color: 'var(--swcc-color-text-muted)' }}>Loading schedule…</p>
        ) : (
        <div style={{ overflowX: 'auto' }}>
          <table className="swcc-sched-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, i) => (
                <tr
                  key={i}
                  className={row.highlight ? 'highlight' : row.note ? 'note' : ''}
                >
                  <td>{row.date}</td>
                  <td>{row.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        )}
        <p style={{ marginTop: '1.5rem', fontSize: '0.85rem', color: 'var(--swcc-color-text-muted)' }}>
          Download the full{' '}
          <a
            href="/downloads/Calendar.pdf"
            target="_blank"
            rel="noreferrer"
            className="swcc-text-link"
          >
            club calendar (PDF) ↓
          </a>
        </p>
      </section>

      {/* ── Current Champion ── */}
      <section className="swcc-champion-section" id="champion">
        <p className="swcc-section-label">Hall of Fame</p>
        <h2 className="swcc-section-title">Club Champion</h2>
        <div className="swcc-champion-card">
          <p className="swcc-champ-label">{CURRENT_CHAMPION.year} Champion</p>
          <p className="swcc-champ-event">{CURRENT_CHAMPION.event}</p>
          <p className="swcc-champ-name">{CURRENT_CHAMPION.name}</p>
        </div>
        <p style={{ marginTop: '1.5rem' }}>
          <a
            href={USCF_URL}
            target="_blank"
            rel="noreferrer"
            className="swcc-text-link"
          >
            View all past results on USCF →
          </a>
        </p>
      </section>

      {/* ── Hales Corners Challenge ── */}
      <section className="swcc-tournament-section" id="tournament">
        <p className="swcc-section-label">Weekend Tournament</p>
        <h2 className="swcc-section-title">{HC_CHALLENGE.name}</h2>
        <p style={{
          color: 'rgba(245,240,192,0.6)', fontSize: '0.9rem',
          marginBottom: '2rem',
        }}>
          {HC_CHALLENGE.date} · {HC_CHALLENGE.tagline}
        </p>

        <div className="swcc-tourn-card">
          <table className="swcc-tourn-table">
            <tbody>
              <tr>
                <td>Sections</td>
                <td>{HC_CHALLENGE.sections}<br />
                  <span style={{ fontSize: '0.78rem', opacity: 0.7 }}>{HC_CHALLENGE.capacity}</span>
                </td>
              </tr>
              <tr>
                <td>Format</td>
                <td>{HC_CHALLENGE.format}</td>
              </tr>
              <tr>
                <td>Time Control</td>
                <td>{HC_CHALLENGE.timeControl}</td>
              </tr>
              <tr>
                <td>Rounds</td>
                <td>
                  {HC_CHALLENGE.rounds}<br />
                  <span style={{ fontSize: '0.78rem', opacity: 0.7 }}>
                    {HC_CHALLENGE.roundsNote}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Entry Fee</td>
                <td>
                  {HC_CHALLENGE.entryFee}<br />
                  <span style={{ fontSize: '0.78rem', opacity: 0.7 }}>
                    {HC_CHALLENGE.entryFeeNote}
                  </span>
                </td>
              </tr>
              <tr>
                <td>Site Reg.</td>
                <td>{HC_CHALLENGE.siteReg}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{HC_CHALLENGE.location}</td>
              </tr>
              <tr>
                <td>Flyer</td>
                <td>
                  <a href={HC_CHALLENGE.flyer} target="_blank" rel="noreferrer">
                    {HC_CHALLENGE.shortName} (PDF) ↓
                  </a>
                </td>
              </tr>
              <tr>
                <td>Register</td>
                <td>
                  <a href={HC_CHALLENGE.register} target="_blank" rel="noreferrer">
                    King Registration ↗
                  </a>
                </td>
              </tr>
              <tr>
                <td>Contact</td>
                <td>
                  <a href={`mailto:${HC_CHALLENGE.contact}`}>{HC_CHALLENGE.contact}</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href={HC_CHALLENGE.register} target="_blank" rel="noreferrer" className="swcc-btn-primary">
            Register Now →
          </a>
          <a href={HC_CHALLENGE.flyer} target="_blank" rel="noreferrer" className="swcc-btn-outline-light">
            Download Flyer ↓
          </a>
        </div>
      </section>

      {/* ── About / Links strip ── */}
      <section id="about" style={{
        padding: '4rem',
        background: 'var(--swcc-color-off-white)',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem',
          maxWidth: 900, margin: '0 auto',
        }}>
          <div>
            <p className="swcc-section-label">About Us</p>
            <h2 className="swcc-section-title">The Southwest Chess Club</h2>
            <div style={{
              fontSize: '0.93rem', lineHeight: 1.85,
              color: 'var(--swcc-color-text-dark)', marginTop: '1rem',
            }}>
              <p style={{ marginBottom: '1rem' }}>
                The Southwest Chess Club meets every Thursday night at the Hales Corners
                Village Hall / Police Station, 5635 South New Berlin Road, in the downstairs
                Community Room. The club opens at 6 PM and tournament games begin at 7 PM.
              </p>
              <p style={{ marginBottom: '1rem' }}>
                We have a{' '}
                <a href={BLOG_URL} target="_blank" rel="noreferrer" className="swcc-text-link">
                  blog ↗
                </a>
                {' '}that shows current club news, and you are invited to contribute information,
                games, and any items of interest. You can subscribe to the blog and receive
                email notification of new events or announcements.
              </p>
              <p>
                The{' '}
                <a href="http://www.uschess.org/" target="_blank" rel="noreferrer" className="swcc-text-link">
                  US Chess Federation ↗
                </a>
                {' '}provides results of our completed events online. The{' '}
                <a href={USCF_URL} target="_blank" rel="noreferrer" className="swcc-text-link">
                  crosstables ↗
                </a>
                {' '}contain complete pre- and post-ratings for all participants.
              </p>
            </div>
          </div>

          <div>
            <p className="swcc-section-label">Links</p>
            <h2 className="swcc-section-title">Resources</h2>
            <div style={{ marginTop: '1rem' }}>
              {[
                { label: 'SWCC Blog', url: BLOG_URL },
                { label: 'USCF Crosstables (SWCC)', url: USCF_URL },
                { label: 'King Registration (WI Tournaments)', url: 'https://www.kingregistration.com/tournaments/state/WI' },
                { label: 'Wisconsin Chess Association', url: 'https://wischess.org/' },
                { label: 'US Chess Federation', url: 'http://www.uschess.org/' },
                { label: 'Waukesha Chess Club', url: '/wcc' },
              ].map((link, i) => (
                <div
                  key={i}
                  style={{
                    padding: '0.6rem 0',
                    borderBottom: '1px solid var(--swcc-color-card-border)',
                  }}
                >
                  {link.url.startsWith('/') ? (
                    <a
                      href={link.url}
                      className="swcc-text-link"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="swcc-text-link"
                    >
                      {link.label} ↗
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Color Scheme Picker ── */}
      {/*{onThemeChange && (*/}
      {/*  <ColorSchemePicker theme={theme} onThemeChange={onThemeChange} />*/}
      {/*)}*/}

    </div>
  );
}
