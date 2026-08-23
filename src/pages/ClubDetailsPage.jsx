// src/swcc/pages/ClubDetailsPage.jsx — SWCC Club Details
import { BLOG_URL, USCF_URL } from '../data.js';

const DIRECTORS = [
  { name: 'Robin Grochowski',  email: 'rgrochowski@wi.rr.com',          phone: '(414) 744-4872' },
  { name: 'Chris Wainscott',   email: 'chris.wainscott13@outlook.com',   phone: '(414) 839-5232' },
  { name: 'Allen Becker',      email: 'allenbecker@wi.rr.com',           phone: '(414) 807-0269' },
  { name: 'John DeMastri',     email: 'chess@demastri.com',              phone: '(312) 952-6495' },
  { name: 'Ryan Murphy',       email: 'ryanmurphy@ia-chess.com',         phone: '(414) 439-6778' },
];

export default function ClubDetailsPage() {
  return (
    <div className="swcc-page-shell">
      <div className="swcc-page-banner">
        <p className="swcc-section-label">Southwest Chess Club</p>
        <h1 className="swcc-section-title">Club Details</h1>
        <p className="swcc-page-banner-sub">
          Everything you need to know about joining and playing
        </p>
      </div>

      <div className="swcc-page-inner">

        {/* Meeting Info */}
        <section style={{ marginBottom: '3rem' }}>
          <p className="swcc-section-label">When &amp; Where</p>
          <h2 className="swcc-section-title" style={{ fontSize: '1.4rem', marginBottom: '1.25rem' }}>
            Thursday Nights at the Club
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem',
            background: 'var(--swcc-color-stripe)',
            border: '1px solid var(--swcc-color-card-border)',
            padding: '1.75rem 2rem',
          }}>
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--swcc-color-text-muted)', marginBottom: '0.5rem' }}>Location</p>
              <p style={{ fontWeight: 600, marginBottom: '0.25rem' }}>Hales Corners Village Hall</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--swcc-color-text-muted)', lineHeight: 1.6 }}>
                5635 South New Berlin Road<br />
                Hales Corners, Wisconsin<br />
                Downstairs Community Room
              </p>
              <p style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
                <a
                  href="http://maps.google.com/maps?q=5635+South+New+Berlin+Road,+Hales+Corners,+Wisconsin"
                  target="_blank" rel="noreferrer"
                  className="swcc-text-link"
                >
                  Get directions →
                </a>
              </p>
            </div>
            <div>
              <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--swcc-color-text-muted)', marginBottom: '0.5rem' }}>Schedule</p>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Every Thursday Night</p>
              <p style={{ fontSize: '0.88rem', color: 'var(--swcc-color-text-muted)', lineHeight: 1.8 }}>
                Doors open: <strong style={{ color: 'var(--swcc-color-text-dark)' }}>6:00 pm</strong><br />
                Games begin: <strong style={{ color: 'var(--swcc-color-text-dark)' }}>7:00 pm</strong><br />
                Time control: G/90; d5 (unless noted)
              </p>
            </div>
          </div>
        </section>

        {/* About the Club */}
        <section style={{ marginBottom: '3rem' }}>
          <p className="swcc-section-label">About</p>
          <h2 className="swcc-section-title" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
            The Southwest Chess Club
          </h2>
          <div style={{ fontSize: '0.93rem', lineHeight: 1.85, maxWidth: 680 }}>
            <p style={{ marginBottom: '1rem' }}>
              The Southwest Chess Club has welcomed players of all skill levels since the 1970s.
              We host USCF-rated monthly tournaments and the annual{' '}
              <a href="/downloads/HC_Challenge_39.pdf"
                target="_blank" rel="noreferrer" className="swcc-text-link">
                Hales Corners Challenge
              </a>{' '}
              weekend event. Members can also enjoy casual "skittles" games and lecture nights.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              We have a{' '}
              <a href={BLOG_URL} target="_blank" rel="noreferrer" className="swcc-text-link">
                club blog ↗
              </a>{' '}
              with current news. Subscribe to receive email notifications of new events and announcements.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              The club maintains the{' '}
              <strong>Henry R. Meifert Memorial Library</strong> — a large lending library of{' '}
              <a href="/books" className="swcc-text-link">chess books</a> and{' '}
              <a href="/dvds" className="swcc-text-link">instructional DVDs</a>{' '}
              available to members for 3-week checkouts. For loans, see Chris Wainscott.
            </p>
            <p>
              The{' '}
              <a href="http://www.uschess.org/" target="_blank" rel="noreferrer" className="swcc-text-link">
                US Chess Federation ↗
              </a>{' '}
              provides results of completed events online. Our{' '}
              <a href={USCF_URL} target="_blank" rel="noreferrer" className="swcc-text-link">
                USCF crosstables ↗
              </a>{' '}
              contain complete pre- and post-ratings for all participants.
            </p>
          </div>
        </section>

        {/* Tournament Directors */}
        <section style={{ marginBottom: '3rem' }}>
          <p className="swcc-section-label">Contact</p>
          <h2 className="swcc-section-title" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
            Tournament Directors
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--swcc-color-text-muted)', marginBottom: '1.25rem' }}>
            For more information, contact any of the tournament directors by phone or email.
          </p>
          <div style={{ border: '1px solid var(--swcc-color-card-border)' }}>
            <table className="swcc-contact-table">
              <tbody>
                {DIRECTORS.map(d => (
                  <tr key={d.name}>
                    <td><a href={`mailto:${d.email}`}>{d.name}</a></td>
                    <td style={{ color: 'var(--swcc-color-text-muted)' }}>{d.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'var(--swcc-color-text-muted)' }}>
            Website maintained by{' '}
            <a href="mailto:allenbecker@wi.rr.com" className="swcc-text-link">Allen Becker</a>
            {' '}and Mike La Budde
          </p>
        </section>

        {/* Membership */}
        <section>
          <p className="swcc-section-label">Membership</p>
          <h2 className="swcc-section-title" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
            Membership Fees
          </h2>
          <div style={{ fontSize: '0.93rem', lineHeight: 1.85, maxWidth: 680 }}>
            <p>
              There are no membership fees for anyone under 18 or 65 and older.
              (Kids should have a parent or adult supervisor present.) <br/>
              Adults 18 — 64 pay $10 annually.
            </p>
          </div>
          <br/>

          <h2 className="swcc-section-title" style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>
            Join the Club
          </h2>
          <div style={{ fontSize: '0.93rem', lineHeight: 1.85, maxWidth: 680 }}>
            <p>
              There is always a game to be had — we have players of all{' '}
              <a href={USCF_URL} target="_blank" rel="noreferrer" className="swcc-text-link">
                ratings ↗
              </a>{' '}
              and experience levels who are always willing to help you improve your game.
              Stop by any Thursday night and meet the friendly people of the Southwest Chess Club.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}
