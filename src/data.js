// src/swcc/data.js — Southwest Chess Club data

export const BLOG_URL = 'http://swccchess.blogspot.com';
export const USCF_URL = 'https://ratings.uschess.org/affiliate/A6011047';

// type: 'scroll'    → navigate to homepage and scrollIntoView by id
// type: 'page'      → navigate to /swcc/<id>
// type: 'dropdown'  → parent with children array
export const NAV_LINKS = [
  { id: 'home',       label: 'Home',         type: 'scroll' },
  { id: 'schedule',   label: 'Schedule',     type: 'scroll' },
  { id: 'tournament', label: 'HC Challenge', type: 'scroll' },
  { id: 'champions',  label: 'Champions',    type: 'page'   },
  { id: 'tournaments', label: 'Past Tournaments', type: 'page' },
  {
    id: 'library', label: 'Library', type: 'dropdown',
    children: [
      { id: 'books', label: 'Books',      type: 'page' },
      { id: 'dvds',  label: 'DVDs & CDs', type: 'page' },
    ],
  },
  {
    id: 'history', label: 'History', type: 'dropdown',
    children: [
      { id: 'history1', label: 'Early Years', type: 'page' },
      { id: 'history2', label: '2001–2005',   type: 'page' },
    ],
  },
  {
    id: 'about-group', label: 'About', type: 'dropdown',
    children: [
      { id: 'club-details',  label: 'Club Details',  type: 'page'   },
      { id: 'personalities', label: 'Personalities', type: 'page'   },
      { id: 'about',         label: 'Links & Info',  type: 'scroll' },
    ],
  },
];

// Schedule is maintained via a Google Form → Sheet, published to the web as
// CSV and fetched at runtime (see useSchedule.js) — no code change or
// redeploy needed to add/edit events. Expected columns: Date, Event, Style
// (Style is "Highlight", "Note", or blank/"Normal").
//
// To point this at your own sheet: Form → Responses → link to Sheets, then
// in the Sheet: File → Share → Publish to web → pick the "Form Responses 1"
// tab → format "Comma-separated values (.csv)" → Publish → paste the URL
// below.
export const SCHEDULE_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQg_nfLhNCQwyll9XkpaOyztHiO9aB9p2KV7wRuFpLQpk53JXL0che4fdVX10fWx2UmfOpn2_Jl-crK/pub?gid=1318887916&single=true&output=csv';

export const HC_CHALLENGE = {
  name: 'Hales Corners Challenge XXXIX',
  shortName: 'HC Challenge XXXIX',
  date: 'October 03, 2026 (Saturday)',
  tagline: 'A Wisconsin Tour event',
  sections: 'Two Sections — Open & Reserve (Under 1601)',
  capacity: 'Total capacity limited to 104 — Register Today!',
  format: 'Four round Swiss System · Four games in one day · USCF rated',
  timeControl: 'G/60; d5 (Game in 60 Minutes; 5 second delay)',
  rounds: '10:00 am · 1:00 pm · 3:30 pm · 6:00 pm',
  roundsNote: 'Accelerated pairings may be used.',
  entryFee: '$50 — Open · $40 — Reserve',
  entryFeeNote: 'Both $10 more after September 26, 2026. Comp entry for USCF 2200+; entry fee subtracted from any prizes won; must register by September 03, 2026.',
  siteReg: '8:30 am – 9:30 am',
  flyer: '/downloads/HC_Challenge_39.pdf',
  register: 'https://www.kingregistration.com/event/HCC39',
  location: 'Country Inn & Suites · 1250 S. Moorland Rd · Brookfield, WI 53005',
  contact: 'chris.wainscott13@outlook.com',
};

export const CURRENT_CHAMPION = {
  year: '2025',
  event: 'Joe Crothers Memorial Southwest Chess Club Championship',
  name: 'Evan Seghers',
};

// Full champions list, 1993 – present
export const ALL_CHAMPIONS = [
  { year: 2025, name: 'Evan Seghers' },
  { year: 2024, name: 'Aethelred Templin' },
  { year: 2023, name: 'Andrew Rivedal' },
  { year: 2022, name: 'Ben Durost' },
  { year: 2021, name: 'Allen J. Becker' },
  { year: 2020, name: null },  // no championship held
  { year: 2019, name: 'Scott A. Haubrich' },
  { year: 2018, name: 'Shaunak Bhattacharyya' },
  { year: 2017, name: 'Jason Markowski' },
  { year: 2016, name: 'Bill Williams' },
  { year: 2015, name: 'Richard Martin III' },
  { year: 2014, name: 'Scott Haubrich' },
  { year: 2013, name: 'Bill Williams' },
  { year: 2012, name: 'Bill Williams' },
  { year: 2011, name: 'Jerry Zhou' },
  { year: 2010, name: 'Matt Waller' },
  { year: 2009, name: 'John Becker' },
  { year: 2008, name: 'Anthony Parker' },
  { year: 2007, name: 'Allen Becker' },
  { year: 2006, name: 'Allen Becker' },
  { year: 2005, name: 'Kenneth Bastin' },
  { year: 2004, name: 'Robert Murphy' },
  { year: 2003, name: 'Allen Becker' },
  { year: 2002, name: 'Dave Van Scyoc' },
  { year: 2001, name: 'Isaak Gabrilovich' },
  { year: 2000, name: 'Bill Wenz' },
  { year: 1999, name: 'Mark Sokolowski' },
  { year: 1998, name: 'Dave Van Scyoc' },
  { year: 1997, name: 'Mark Sokolowski' },
  { year: 1996, name: 'Mark Sokolowski' },
  { year: 1995, name: 'Sheldon Gelbart' },
  { year: 1994, name: 'Sheldon Gelbart' },
  { year: 1993, name: 'Newton Berry' },
];

// Keep for backward-compat with HomePage
export const PAST_CHAMPIONS = [
  { year: '2025', name: 'Evan Seghers', event: 'Joe Crothers Memorial Championship' },
];

export const TOURNAMENTS = {
  '2026': [
    { name: 'Snoopy Snags A Bishop', url: 'https://ratings.uschess.org/event/202607090263' },
    { name: 'Daniel Perelman Memorial', url: 'https://ratings.uschess.org/event/202606180373' },
    { name: 'Hales Corners Challenge XXXVIII', url: 'https://ratings.uschess.org/event/202605160733' },
    { name: 'Hedwig\'S Smothered Mate Swiss', url: 'https://ratings.uschess.org/event/202605140123' },
    { name: 'Danger Duck Dodges Mate Swiss', url: 'https://ratings.uschess.org/event/202604020183' },
    { name: 'Cheshire Cat Checkmate Swiss', url: 'https://ratings.uschess.org/event/202603050123' },
    { name: 'Mr Ed\'S Pawn Storming Swiss', url: 'https://ratings.uschess.org/event/202602050143' },
  ],
  '2025': [
    { name: 'Garfield Gambits A Pawn Swiss', url: 'https://ratings.uschess.org/event/202512180313' },
    { name: 'Joe Crothers Memorial Club Chmp Part 2', url: 'https://ratings.uschess.org/event/202511060143' },
    { name: 'Hales Corners Challenge XXXVII', url: 'https://ratings.uschess.org/event/202510043512' },
    { name: 'Joe Crothers Memorial Club Chmp Part 1', url: 'https://ratings.uschess.org/event/202508072292' },
    { name: 'Snoopy Snags A Piece Swiss', url: 'https://ratings.uschess.org/event/202507101092' },
    { name: '4th Daniel Perelman Memorial Swiss', url: 'https://ratings.uschess.org/event/202506124902' },
    { name: 'Hedwigs Smothered Mate Swiss', url: 'https://ratings.uschess.org/event/202505088402' },
    { name: 'Hales Corners Challenge XXXVI', url: 'https://ratings.uschess.org/event/202504267852' },
    { name: 'Danger Duck Dodges Checkmate Swiss', url: 'https://ratings.uschess.org/event/202504171862' },
    { name: 'Southwest Chess Club - April Action', url: 'https://ratings.uschess.org/event/202504032662' },
    { name: 'Cheshire Cat Checkmate Swiss', url: 'https://ratings.uschess.org/event/202503064982' },
    { name: 'Mr. Ed\'S Pawn Storming Swiss', url: 'https://ratings.uschess.org/event/202501237272' },
  ],
  '2024': [
    { name: 'Santa Drives A Mustang Swiss', url: 'https://ratings.uschess.org/event/202412198842' },
    { name: 'Challenger Checkmate Swiss', url: 'https://ratings.uschess.org/event/202411212552' },
    { name: 'Hales Corners Challenge XXXV', url: 'https://ratings.uschess.org/event/202410126872' },
    { name: 'Fiat Fianchetto Bishop Swiss', url: 'https://ratings.uschess.org/event/202410105562' },
    { name: 'Pacifica Pawn Majority Swiss', url: 'https://ratings.uschess.org/event/202409055762' },
    { name: 'Joe Crothers Memorial Club Championship', url: 'https://ratings.uschess.org/event/202408016862' },
    { name: 'Corvette Stingray Blitz', url: 'https://ratings.uschess.org/event/202406136792' },
    { name: '2024 - Perelman Memorial', url: 'https://ratings.uschess.org/event/202406062932' },
    { name: 'Dodge The Queen Swiss', url: 'https://ratings.uschess.org/event/202405095622' },
    { name: 'Hales Corners Challenge XXXIV', url: 'https://ratings.uschess.org/event/202405042832' },
    { name: 'SWCC Lamborghini Lightning Action S', url: 'https://ratings.uschess.org/event/202404115392' },
    { name: 'Porsche Pawns Swiss', url: 'https://ratings.uschess.org/event/202403212362' },
    { name: 'Focus On Your Game Swiss', url: 'https://ratings.uschess.org/event/202402224072' },
    { name: 'King Impala Swiss', url: 'https://ratings.uschess.org/event/202401256402' },
    { name: 'Midwest Regional Championships - Ad', url: 'https://ratings.uschess.org/event/202401204712' },
  ],
  '2023': [
    { name: 'Santa Salmon Swiss', url: 'https://ratings.uschess.org/event/202312219682' },
    { name: 'Bishop Bluegill Swiss', url: 'https://ratings.uschess.org/event/202311306712' },
    { name: 'SWCC Candidate Catfish Swiss', url: 'https://ratings.uschess.org/event/202310266672' },
    { name: 'Hales Corners Challenge XXXIII', url: 'https://ratings.uschess.org/event/202309300722' },
    { name: 'White Shark Sudden Death Swiss', url: 'https://ratings.uschess.org/event/202309289392' },
    { name: 'Northern Pike Pawn Swiss', url: 'https://ratings.uschess.org/event/202308314422' },
    { name: 'Joe Crothers Memorial Club Championship', url: 'https://ratings.uschess.org/event/202308038802' },
    { name: '2d Daniel Perelman Memorial Swiss', url: 'https://ratings.uschess.org/event/202306225412' },
    { name: 'Knight Goby Swiss', url: 'https://ratings.uschess.org/event/202305250772' },
    { name: 'Hales Corners Challenge XXXII', url: 'https://ratings.uschess.org/event/202304293882' },
    { name: 'SWCC Rainbow Rook Trout Swiss', url: 'https://ratings.uschess.org/event/202304272492' },
    { name: 'Kanadi Kingfish Swiss', url: 'https://ratings.uschess.org/event/202303232942' },
    { name: 'Queen Parrotfish Swiss', url: 'https://ratings.uschess.org/event/202302091612' },
    { name: 'Barracuda Bishop Swiss', url: 'https://ratings.uschess.org/event/202301269742' },
  ],
  '2022': [
    { name: 'Bishop Olaf\'S Frozen Adventure Swiss', url: 'https://ratings.uschess.org/event/202212153672' },
    { name: 'City Of Ghosts Swiss', url: 'https://ratings.uschess.org/event/202212012812' },
    { name: 'The Polka King Swiss', url: 'https://ratings.uschess.org/event/202210272232' },
    { name: 'Last Knight In Soho Swiss', url: 'https://ratings.uschess.org/event/202209299842' },
    { name: 'Power Of The Queen Swiss', url: 'https://ratings.uschess.org/event/202209013702' },
    { name: 'Joe Crothers Memorial Club Championship', url: 'https://ratings.uschess.org/event/202208049972' },
    { name: 'Daniel Perelman Memorial', url: 'https://ratings.uschess.org/event/202206239422' },
    { name: 'Star Wars, The Last Jedi Knight Swiss', url: 'https://ratings.uschess.org/event/202205266842' },
    { name: 'Black Panther Bishop Swiss', url: 'https://ratings.uschess.org/event/202204283682' },
    { name: 'The Lion King Swiss', url: 'https://ratings.uschess.org/event/202203311142' },
    { name: 'How To Train Your Dragon Swiss', url: 'https://ratings.uschess.org/event/202202244062' },
    { name: 'Beach Blanket Bingo Bishop Swiss', url: 'https://ratings.uschess.org/event/202201272832' },
  ],
  '2021': [
    { name: 'Poison Ivy Itching Swiss', url: 'https://ratings.uschess.org/event/202112231382' },
    { name: 'Chased By Chickengunya Swiss', url: 'https://ratings.uschess.org/event/202112022512' },
    { name: 'Scared Of Shingles', url: 'https://ratings.uschess.org/event/202110287652' },
    { name: 'Joe Crothers Memorial Club Championship', url: 'https://ratings.uschess.org/event/202109306842' },
    { name: 'Running From Rickets Swiss', url: 'https://ratings.uschess.org/event/202108263912' },
  ],
  '2020': [
    { name: 'Lion King Action Swiss', url: 'https://ratings.uschess.org/event/202003124952' },
    { name: 'How To Train Your Dragon Swiss', url: 'https://ratings.uschess.org/event/202003051452' },
    { name: 'King Terminator Action Swiss', url: 'https://ratings.uschess.org/event/202002065052' },
    { name: 'Avengers (rook) Endgame Swiss', url: 'https://ratings.uschess.org/event/202001301702' },
  ],
  '2019': [
    { name: 'King Foster\'S Night Without Mate Sw', url: 'https://ratings.uschess.org/event/201912126992' },
    { name: 'Bishop Don\'T Know Schitz Swiss', url: 'https://ratings.uschess.org/event/201910249502' },
    { name: 'Hales Corners Challenge XXX', url: 'https://ratings.uschess.org/event/201910050042' },
    { name: 'Queen\'s Busch Action Swiss', url: 'https://ratings.uschess.org/event/201909266722' },
    { name: 'Blue Moon Knight Swiss', url: 'https://ratings.uschess.org/event/201909190662' },
    { name: 'Old Style Pawn Dueling Action', url: 'https://ratings.uschess.org/event/201908228962' },
    { name: 'Joe Crothers Memorial Club Championship', url: 'https://ratings.uschess.org/event/201908158162' },
    { name: 'King\'S Old Style Summertime Swiss', url: 'https://ratings.uschess.org/event/201906273812' },
    { name: 'Bishop\'S Bud Brewing Action Swiss', url: 'https://ratings.uschess.org/event/201905301252' },
    { name: 'Carlsberg Pawn Structure Swiss', url: 'https://ratings.uschess.org/event/201905238172' },
    { name: 'Knight’s Knock Down Miller Action Swiss', url: 'https://ratings.uschess.org/event/201904180822' },
    { name: 'Blatz Bishop Burping Swiss', url: 'https://ratings.uschess.org/event/201904137612' },
    { name: 'Hales Corners Challenge XXIX', url: 'https://ratings.uschess.org/event/201904138152' },
    { name: 'Rolling Rock Rook Rollicking Swiss', url: 'https://ratings.uschess.org/event/201903142592' },
    { name: 'King Kicking Icehouse Action Swiss', url: 'https://ratings.uschess.org/event/201902074292' },
    { name: 'Pabst Pawn Prowling Swiss', url: 'https://ratings.uschess.org/event/201901240582' },
  ],
  '2018': [
    { name: '\'View full archive on USCF →\'', url: 'https://ratings.uschess.org/affiliate/A6011047' },
  ],
};
