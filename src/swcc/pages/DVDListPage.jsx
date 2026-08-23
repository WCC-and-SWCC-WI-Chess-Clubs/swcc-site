// src/swcc/pages/DVDListPage.jsx — SWCC DVD & CD Rental List
import { useState } from 'react';

const DVDS = [
  {
    title: 'The …a6 Slav',
    presenter: 'GM James Plaskett',
    duration: '85 min',
    description: 'The ...a6 Slav may be a relative newcomer to the world scene but Shirov, Anand and Sokolov have already refined it into a vicious weapon. GM James Plaskett unveils a host of fiendish but subtle ideas to derail your opponents. A little move with a sting in the tail! Parts cover 5.e3, 5.g3, 5.c5, 5.Bg5, 5.Qb3, 5.a4, 5.cxd5, and 5.Ne5.',
  },
  {
    title: "Queen's Gambit",
    presenter: 'IM Andrew Martin',
    duration: '90 min',
    description: "An enterprising repertoire for White against the Queen's Gambit Declined, Slav and Tarrasch. Based on dangerous attacking schemes in the Exchange Variation. White's clear-cut strategy makes these lines unique in their effectiveness at both GM and club level. Parts cover 3...Nf6, 3...Be7, 3...c6, and 3...c5.",
  },
  {
    title: "Roman's Lab Vol. 1: Learning Openings the Easy Way",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Lesson 1: Learning Openings the Easy Way; Lesson 2: Avoiding & Creating Opening Traps; Lesson 3: Dangers & Advantages of Choosing Sharp Openings; Lesson 4: Punishment for Delaying Development; Lesson 5: Creating Opening Novelties. Covers Caro-Kann, Ruy Lopez, Benko Gambit, Tarrasch Defense, Sicilian, Accelerated Dragon, QGD, English Defense, Scotch Gambit, Nimzo-Indian and more.",
  },
  {
    title: "Roman's Lab Vol. 2: Sacrifices, Tactics & Traps",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Lesson 6: Ambitious Approach to Critical Opening Positions; Lesson 7: Positional Sacrifice in the Opening Part 1; Lesson 8: Positional Sacrifice Part 2; Lesson 9: Powerful Tactics in the Opening Part 1; Lesson 10: Powerful Tactics Part 2. Covers Caro-Kann, Accelerated Dragon, QGA, English, Advanced French, Scotch Gambit, Gruenfeld, KI Saemisch, KI Four Pawns Attack, Ruy Lopez, Marshall Gambit, Smith-Morra Gambit, Najdorf Sicilian and more.",
  },
  {
    title: "Roman's Lab Vol. 3: Transition to the Middle Game",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Lesson 11: Designing Sicilian Assaults from the Opening; Lesson 12: Building Attacking Positions Part 1; Lesson 13: Building Attacking Positions Part 2; Lesson 14: Planning for Pawn Structure in the Opening Part 1; Lesson 15: Planning for Pawn Structure Part 2.",
  },
  {
    title: "Roman's Lab Vol. 5: Opening Repertoire for White",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Rapid and complete opening repertoire for the tournament player. Covers Queens Gambit Accepted & Declined, Queens Indian Defense, Slav Defense, Albin Counter Gambit, Nimzo-Indian Defense, Kings Indian Defense, Grunfeld Defense, Dutch Defense (Nc6 & Bf5 lines), and Benko Gambit. Designed for the player who wants good results without heavy study.",
  },
  {
    title: "Roman's Lab Vol. 6: Opening Repertoire for Black",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Solid, active lines to meet e4, d4, c4, and Nf3. Against e4, Roman recommends d6, Nf6, and e5 — very little theory to remember. Against the Queens Gambit, Roman recommends the Nimzo-Indian Defense. Also covers best lines against The English, Trompowski, and Nf3. Designed for the player who wants good results without heavy study.",
  },
  {
    title: "Roman's Lab Vol. 8: Comprehensive Chess Endings, Part 1",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "How to play for a win or draw in a number of types of endgames. Understand the endgame so you can decide ahead of time whether it is won, lost or drawn. Lessons cover: King and Pawn Endings, More King and Pawn Endings, Practical Rook and Pawn Endings, Tactical Rook Endings, Basic Principles of Minor Piece Endings, and Queen and Pawn Endings.",
  },
  {
    title: "Roman's Lab Vol. 9: Comprehensive Chess Endings, Part 2",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Lessons cover: Queen v. King & Pawn, Queen v. Rook, Queen v. Knight & Bishop, Rook v. 2 Pawns, Rook & Pawn v. Bishop & Pawn, Rook & Pawn v. Bishop & Knight, Pawn & Bishop v. 2 Rooks.",
  },
  {
    title: "Roman's Lab Vol. 11: Greatest Games Ever Played, Part 2",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Roman selects and analyzes 7 of the greatest games ever played. Games: Spassky v. Karpov; Smyslov v. Reshevsky; Fischer v. Spassky; Tal v. Portisch; Kasparov v. Topalov; Larsen v. Spassky; Beliavsky v. Kasparov. Selection criteria: high level of resistance for both sides and how the game contributed to chess history.",
  },
  {
    title: "Roman's Lab Vol. 12: New Improvements in Opening Theory",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "For the ambitious player who never wants to be without an excellent response to White's most solid openings. Openings covered: Accelerated Dragon, Closed Sicilian with g3, Bogo Indian 6.Nc3, Nimzo Indian 4.a3 / 4.f3 / 4.Qc2 / 4.Bg5 Leningrad / 4.e3.",
  },
  {
    title: "Roman's Lab Vol. 13: Secret Weapons for Black vs. 1.b4, 1.c4, 1.d4 and 1.f4",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Solid but ambitious lines to confront some of White's most solid and unsound openings. Openings covered: Blackmar Diemer Gambit, Bird's Opening, Colle System, English Opening, London System, Orang-Utan (Sokolsky) Opening, Torre/Trompowski.",
  },
  {
    title: "Roman's Lab Vol. 14: Combinational Preparation and Tactical Skills, Part 1",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Recognize tactical themes, patterns and combinations to win your own games. Featured topics: Thematic combinations, intuition, pattern recognition, unusual combinations, combinations in the Caro-Kann, Dutch and Grunfeld. Roman's best combinational and tactical game ever.",
  },
  {
    title: "Roman's Lab Vol. 15: Combinational Preparation and Tactical Skills, Part 2",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Featured topics: Multiple thematic combinations in the Nimzo Indian, Unexpected tactical shots in the Scotch, Thematic counter combinations in the Ruy Lopez, Complex combination in the English, Unusual endgame tactics and combinations, and Quiet tactical moves.",
  },
  {
    title: "Roman's Lab Vol. 16: Learn to Play the English Opening the Easy Way",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "White's most solid and easy-to-learn repertoire. Complex theory and variations are replaced with easy-to-learn plans and strategies that achieve good positions against all of Black's responses. Includes a free PGN game file and a free Bookup Express program.",
  },
  {
    title: "Roman's Lab Vol. 17: Unbeatable Secret Weapons for Black",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Two secret weapons: (1) The New Revolutionary Sicilian — 1.e4 c5 2.Nf3 d6 3.d4 cxd4 4.Nxd4 Nf6 5.Nc3 Nc6 6.Bg5 g6!! — a tested powerful line Roman has used to beat top players. (2) The Scandinavian ...Nf6 — a forgotten opening, solid and a great surprise weapon, as good as the French, Caro-Kann, and some Sicilian variations.",
  },
  {
    title: "Roman's Lab Vol. 18: Blitz as a Tool & Secrets to Beating Your Chess Computer",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Roman has had a blitz rating as high as 3450 on the Internet Chess Club. He shares ideas and openings to improve your blitz game that also help over-the-board skills. On beating computer programs: Roman recommends giving computers positions where there is nothing to calculate, exploiting their weaknesses in understanding weak pieces and closed positions.",
  },
  {
    title: "Roman's Lab Vol. 19: Dominating with Pawn Structures",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Pawn structures are involved in all aspects of chess and are the most important part of strategic planning. Roman guides you through all the various pawn structures so you can achieve better positions and dominate your games.",
  },
  {
    title: "Roman's Lab Vol. 20: Maneuvering in Closed Positions",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Step-by-step through highly instructional games by the master of positional maneuvering, the late former world champion Tigran Petrosian. Essential maneuvering skills, planning, and understanding of each position — how to master positional maneuvering in closed positions.",
  },
  {
    title: "Roman's Lab Vol. 26: Nimzowitsch's My System, Part 1",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "First of a two-part set (~4 hours total) based on Nimzowitch's classic 'My System,' the foundation for modern progressive thinking. Roman helps you understand Nimzowitch's ideas and theories while adding 75 years of improvements, updates, and changes. Covers both positional and tactical examples.",
  },
  {
    title: "Roman's Lab Vol. 27: Nimzowitsch's My System, Part 2",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "Second and concluding DVD of the two-part My System series. Continues the exploration of Nimzowitch's foundational ideas with Roman's contemporary commentary and updates.",
  },
  {
    title: "Roman's Encyclopedia of 40 Essential Chess Openings (4-DVD Set)",
    presenter: 'GM Roman Dzhindzhikhashvili',
    series: "Roman's Lab",
    description: "The core ideas and principles of 40 openings in almost 11 hours across 4 DVDs. Vol. 1: Alekhine, Beefeater/Dzindzi Indian, Benko Gambit, Benoni, Bird, Blackmar-Diemer, Blumenfeld, Bogo-Indian, Budapest. Vol. 2: Caro-Kann, Colle, Czech Benoni, Dutch, English Defense, 4 Knights, French. Vol. 3: Giuoco Piano, Gruenfeld, King's Gambit, King's Indian (Classical, Averbakh, Saemisch, Fianchetto, London), Latvian Gambit, Nimzo-Indian. Vol. 4: Petroff, Philidor, Pirc, QGA, QGD (Slav, Chigorin), QID, Ruy Lopez, Scotch, Sicilian (Accelerated Dragon, Grand Prix Attack, Maroczy Bind).",
  },
];

const CDS = [
  {
    title: 'Garry Kasparov Teaches Chess, Volume 1',
    presenter: 'Garry Kasparov',
    duration: 'approx. 3 hr 30 min',
    description: "How to play the Queen's Gambit. (Also available as DVD.)",
  },
  {
    title: 'Learn to Play Chess with Fritz and Chester, Volume 1',
    presenter: 'Fritz & Chester',
    duration: '',
    description: 'Ages 8 and up. Beginners CD.',
  },
  {
    title: 'Learn to Play Chess with Fritz and Chester, Volume 2',
    presenter: 'Fritz & Chester',
    duration: '',
    description: 'Ages 8 and up. Beginners CD.',
  },
];

function DVDItem({ item }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="swcc-dvd-item">
      <div className="swcc-dvd-header" onClick={() => setOpen(o => !o)}>
        <div>
          <p className="swcc-dvd-title">{item.title}</p>
          <p className="swcc-dvd-meta">
            {item.presenter}
            {item.duration ? ` · ${item.duration}` : ''}
          </p>
        </div>
        <span style={{
          fontSize: '0.8rem', color: 'var(--swcc-color-text-muted)',
          flexShrink: 0, paddingTop: 2,
        }}>
          {open ? '▲' : '▼'}
        </span>
      </div>
      {open && (
        <div className="swcc-dvd-body">{item.description}</div>
      )}
    </div>
  );
}

export default function DVDListPage() {
  return (
    <div className="swcc-page-shell">
      <div className="swcc-page-banner">
        <p className="swcc-section-label">Henry R. Meifert Memorial Library</p>
        <h1 className="swcc-section-title">DVDs &amp; CDs</h1>
        <p className="swcc-page-banner-sub">
          {DVDS.length} DVDs · {CDS.length} CDs available for rental · $3.00 for a 3-week rental
        </p>
      </div>

      <div className="swcc-page-inner">
        <p style={{ fontSize: '0.88rem', color: 'var(--swcc-color-text-muted)', marginBottom: '1.75rem' }}>
          See <strong>Robin Grochowski</strong> to request a rental. Requested DVDs/CDs will be
          brought in the following week. Cost is <strong>$3.00 for a 3-week rental</strong>.
          Click any title to expand its description.
          Also see the{' '}
          <a href="/swcc/books" className="swcc-text-link">full book list →</a>
        </p>

        <section style={{ marginBottom: '3rem' }}>
          <p className="swcc-section-label" style={{ marginBottom: '1rem' }}>DVDs</p>
          {DVDS.map((dvd, i) => <DVDItem key={i} item={dvd} />)}
        </section>

        <section>
          <p className="swcc-section-label" style={{ marginBottom: '1rem' }}>CDs</p>
          {CDS.map((cd, i) => <DVDItem key={i} item={cd} />)}
        </section>
      </div>
    </div>
  );
}
