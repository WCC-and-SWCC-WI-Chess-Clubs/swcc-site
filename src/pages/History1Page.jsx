// src/swcc/pages/History1Page.jsx — SWCC Club History, Early Years (by Fred Zeilstra)

export default function History1Page() {
  return (
    <div className="swcc-page-shell">
      <div className="swcc-page-banner">
        <p className="swcc-section-label">Club History · Part One</p>
        <h1 className="swcc-section-title">The Early Years</h1>
        <p className="swcc-page-banner-sub">
          The founding and first decade of the Southwest Chess Club · by Fred G. Zeilstra
        </p>
      </div>

      <div className="swcc-page-inner" style={{ maxWidth: 740 }}>
        <div className="swcc-history-meta">
          <strong>Fred G. Zeilstra</strong> · Founder and first Treasurer of the Southwest Chess Club
        </div>

        <div className="swcc-history-chapter">
          <p>
            The Southwest Chess Club was organized on the evening of February 15, 1987, in the Hunt
            Room of the Public Library, in Hales Corners, Wisconsin. The turnout was in response to a
            notice in the local area weekly newspaper — <em>The Hub</em> — placed by Fred G. Zeilstra,
            who was encouraged by some two dozen players attending that first meeting. Dr. James Taylor
            volunteered to record the proceedings. Zeilstra assumed the duties of Treasurer, dues were
            established at five dollars a month, and George Hanson volunteered to be the Tournament
            Director. Though he no longer TDs, George is an active attendee and formidable in the
            endgame. George, Dave Sagunsky, Tom Fogec, and Zeilstra are probably the only active
            members who were at that first meeting.
          </p>
          <p>
            Euphoria was short-lived, as the second meeting the following week found only a
            half-dozen. A few had brought their own sets for the first chess games played in the
            Southwest Chess Club — the name Zeilstra had chosen for the club due to its geographical
            location in Milwaukee County.
          </p>
          <p>
            Convergences of events are quite remarkable — if a philosophical aside may be excused.
            For the Southwest Chess Club, the first event was, and continues to be, the largesse of
            the Village of Hales Corners, in granting the scheduled use of the Hunt Room in exchange
            for a one-time-only payment of $25 — renewable annually. It remains the sole determinant
            for the Club's continued existence — as Zeilstra discovered when he shopped for a meeting
            place 12 years ago and confronted fees from $40–$60 a night!
          </p>
          <p>
            A second determinant was Newton Berry's coming on board in August 1991, and his election,
            at the Club's next annual meeting, to the offices of Tournament Director and Vice President
            in charge of Club Activities — of which his energetic effort to insure the Club's presence
            at the annual Milwaukee German Fest and the slugfest with the Waukesha Chess Club during
            the annual Rose Festival at Whitnall Park are notable examples. In addition to publishing
            the Club's delightfully readable monthly newsletter (which features selected games from
            recent Club Tournaments, annotated and analyzed by various Club experts) with the expertise
            that reflects his experience as a senior editor of World Book Encyclopedia, he instructs
            chess clubs at area high schools and contracts with the Village of Hales Corners for use
            of the James Meadows Room in its Municipal building for occasional tournaments when the
            regular quarters are pre-empted. He also initiated an ongoing program that provides a
            dozen or more videos on a wide range of chess openings for interested members, with profit
            to the Club — financially and "across the board."
          </p>
          <p>
            A third event was the coming on board in September 1991 of National Master Sheldon
            Gelbart, whose credentials are quietly evident at every meeting, during which he might
            go over submitted games with their players; or conduct group analyses on the demo board
            of games with a selected opening — such as variations of the Sicilian; or take over in
            Newton's absence, with an amicability evident of long-time personal friendship — an
            unbeatable combination for the success of any organization. He was also re-elected Club
            Secretary at the annual meeting in March, as was Librarian Bob Fons, competently in
            charge of a repertory of books that include a donation of volumes from late National
            Master Henry Meifert — and custody of the clocks and sets.
          </p>
          <p>
            On fortunate convergences of events: a fourth is the continued re-election of Joe Crothers
            as Club President, since assuming that office — at Zeilstra's suggestion — eight months
            into the Club's first year.
          </p>
          <p>
            At the annual meeting in March 1999, Zeilstra resigned as Club Treasurer, and John Demler
            was duly elected to the post, following a year as Assistant Treasurer. He was re-elected
            at the annual meeting of the year 2000.
          </p>
          <p>
            Annual dues continue at $10, and membership increases steadily — the roster now at 131 —
            with weekly attendance between 30 and 50.
          </p>
        </div>

        <p style={{
          fontSize: '0.82rem', color: 'var(--swcc-color-text-muted)',
          borderTop: '1px solid var(--swcc-color-card-border)',
          paddingTop: '1.25rem', marginTop: '1rem',
        }}>
          Continued in{' '}
          <a href="/history2" className="swcc-text-link">
            History Part Two: 2001–2005 →
          </a>
        </p>
      </div>
    </div>
  );
}
