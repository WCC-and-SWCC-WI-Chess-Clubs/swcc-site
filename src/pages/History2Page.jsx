// src/swcc/pages/History2Page.jsx — SWCC Club History, 2001–2005 (by Robert L. Fons)

const CHAPTERS = [
  { id: 'introduction',   num: 'I',    title: 'Introduction' },
  { id: 'pass-in-review', num: 'II',   title: 'Pass In Review' },
  { id: 'winter2001',     num: 'III',  title: 'Winter – Spring 2001' },
  { id: 'thursdays',      num: 'IV',   title: 'Thursday Nights at the Club' },
  { id: 'business',       num: 'V',    title: 'Official Business' },
  { id: 'membership',     num: 'VI',   title: 'Membership and Tournament Fees' },
  { id: 'fallen',         num: 'VII',  title: 'Fallen Flags' },
  { id: 'library',        num: 'VIII', title: 'The Henry R. Meifert Memorial Library' },
  { id: 'technology',     num: 'IX',   title: 'Information Technology' },
  { id: 'equipment',      num: 'X',    title: 'The Equipment' },
  { id: 'events',         num: 'XI',   title: 'Special Events' },
  { id: 'players',        num: 'XII',  title: 'Our Stronger Players' },
  { id: 'visitors',       num: 'XIII', title: 'Club Visitors' },
  { id: 'presses',        num: 'XIV',  title: 'Roll the Presses' },
  { id: 'service',        num: 'XV',   title: 'Community Service' },
];

export default function History2Page() {
  return (
    <div className="swcc-page-shell">
      <div className="swcc-page-banner">
        <p className="swcc-section-label">Club History · Part Two</p>
        <h1 className="swcc-section-title">2001 – 2005</h1>
        <p className="swcc-page-banner-sub">
          History of the Southwest Chess Club · by Robert L. Fons · First published February 16, 2006
        </p>
      </div>

      <div className="swcc-page-inner" style={{ maxWidth: 760 }}>

        <div className="swcc-history-meta">
          <strong>Robert L. Fons</strong> · Club Librarian &amp; Equipment Manager<br />
          3329 South Taylor Avenue · Milwaukee, Wisconsin 53207<br />
          Editor: Robin J. Grochowski · © Robert L. Fons · 3,621 words
        </div>

        {/* Table of Contents */}
        <div className="swcc-history-toc">
          <h3>Table of Contents</h3>
          <ol>
            {CHAPTERS.map(ch => (
              <li key={ch.id}>
                <a href={`#${ch.id}`}>
                  Chapter {ch.num} — {ch.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Chapter I */}
        <div className="swcc-history-chapter" id="introduction">
          <h2 className="swcc-history-chapter-title">Chapter I — Introduction</h2>
          <p>
            This is a true story about a Wisconsin Chess Club, namely, the Southwest Chess Club
            ("SWCC"), of Hales Corners, Wisconsin, covering the period from January 1, 2001 through
            December 31, 2005 with some earlier references. The information provided herein came
            from the SWCC newsletters entitled "Chess Fever," edited by Newton Barry; its successors
            commencing in January 2002 known firstly as the "Southwest Chess Club," then the
            "Southwest Chess Club Newsletter," both edited by Allen J. Becker; and from this writer's
            observations and interviews with others. It is a look at our Club's players and their
            "playground" in a battlefield board game which is international in scope and of record
            dating back to the 6th Century A.D.
          </p>
        </div>

        {/* Chapter II */}
        <div className="swcc-history-chapter" id="pass-in-review">
          <h2 className="swcc-history-chapter-title">Chapter II — Pass in Review</h2>
          <p>
            In review of the late Fred G. Zeilstra's "History of the Southwest Chess Club," dated
            March 29, 2001, which became "Part One" of this ongoing historical account, it should
            be recalled that the SWCC was first organized on February 15, 1987 in the W. Ben Hunt
            room of the Hales Corners Public Library by some two dozen players attending that first
            meeting. The name of the Club was chosen by Mr. Zeilstra, the Club's first treasurer,
            for its location within Milwaukee County. The Club's only charter members who were still
            active in the Club as of December 31, 2005 were Tom Fogec and David Sagunsky.
          </p>
        </div>

        {/* Chapter III */}
        <div className="swcc-history-chapter" id="winter2001">
          <h2 className="swcc-history-chapter-title">Chapter III — Winter – Spring 2001</h2>
          <p>
            The vice-president of the SWCC, Newton Berry, was editing and cranking out the "Chess
            Fever" Club newsletter such as the Winter – Spring 2001 edition which included the
            following headlines, among others:
          </p>
          <p>
            <strong>"Van Dyke Wins King's Knight Out"</strong> — Patrick Van Dyke, once of the SWCC
            who was described as our Club's newest expert, won first place in the "King's Knight Out"
            house tournament with a 4-0 record. Van Dyke subsequently moved to our country's golden west.
          </p>
          <p>
            <strong>"Gimme Morra: Burton and Rossi"</strong> — Experts Tim Burton and Bill Rossi tied
            for first place each with 5-0 records in the Smith-Morra Gambit theme tournament. Such
            tournaments with prescribed opening moves were played often in those days.
          </p>
          <p>
            <strong>"Wierzbicki Takes GMO"</strong> — National Master Michael Wierzbicki took first
            place with a 4-0 record in the January 2001 Greater Milwaukee Open, a SWCC tournament
            held in the Hales Corners Village Hall.
          </p>
          <p>
            <strong>"Hayes Takes WI Senior"</strong> — Three members of the SWCC won first place in
            their respective classes in the Wisconsin Senior Open Chess Tournament at Oshkosh, Wisconsin,
            in November 2000. Raymond Hayes was victorious in the open section; Tom Fogec won the Class
            B prize; and Mike Fixel captured the Class C honors.
          </p>
          <p>
            <strong>"SWCC Web Site"</strong> — Thanks chiefly to the efforts of Club members David
            Van Scyoc, Allen Becker, and Don Matthys, the SWCC acquired its own Internet website at{' '}
            <a href="http://www.southwestchessclub.com" target="_blank" rel="noreferrer" className="swcc-text-link">
              www.southwestchessclub.com ↗
            </a>.
          </p>
        </div>

        {/* Chapter IV */}
        <div className="swcc-history-chapter" id="thursdays">
          <h2 className="swcc-history-chapter-title">Chapter IV — Thursday Nights at the Club</h2>
          <p>
            In January 2001, the SWCC still met on most Thursday nights, except during holidays and
            heavy snow storms, in the W. Ben Hunt room of the Hales Corners Public Library at the NW
            corner of Janesville Road and 116th Street. The doors opened at 6:00 p.m. and any current
            Club tournament games commenced about 7:00 p.m. Thanks to the efforts of our President,
            Joe Crothers, after alternating Thursday meetings between the Public Library and the
            Village Hall, on February 27, 2003, our Club's new Thursday night home became the bigger
            and brighter lighted James Meadows Room of the Hales Corners Village Hall located at
            5635 South New Berlin Road, one level beneath the Police Department with our same hours
            as before this move.
          </p>
          <p>
            When our members began arriving at our meetings, did Gary Wright's wheelchair slow him
            down? Not at all. He was often the first member to arrive at the Club. Soon after Tatyana
            Bratishko or her husband Oleg drove their hazel Chrysler Pacifica onto the village hall
            parking lot, their eleven-year-old son Mikhail — who preferred to be called Mike — walked
            into the chess hall preceded by his dynamic little eight-year-old brother Eddie, who ran
            in because that's what he loved to do.
          </p>
          <p>
            As the typical Thursday evening developed, other members arrived, such as: Dr. David Resk,
            Marvin Schultz, Andrew R. Grochowski and his father Robin J. Grochowski, Benjamin Levy,
            Ron Katka, Jorge Morales, Robert Vlach, James Faustmann, Jonathan Ireland, Kaushal J.
            Malde, Mark Politowski, eight-year-old Alexander Velikanov and his father Peter Velikanov.
            As the Club's librarian/equipment manager, I brought in a box of chess books from which a
            member could borrow usually one or two for up to a month's free reading.
          </p>
          <p>
            At the SWCC, under the direction of a member/tournament director, we played many different
            types of chess tournaments, matches, and time limits throughout the year. Of course, we also
            played the leisurely games of chess called "skittles" which did not require a chess clock
            or score sheet. In 2005, at the suggestion of Robin Grochowski, our Club commenced "ladder
            games" — opposing players' names were moved up or down a list as they won, lost, or drew.
            Robin's thirteen-year-old son Andrew, who often defeated opponents many years his senior,
            began hauling into the Club meetings a five-foot wooden step ladder painted with black and
            white squares as an eye-catching display of current standings.
          </p>
          <p>
            Tournament prizes ranged from a trophy, plaque, book, sweat shirt, cash, certificate,
            and/or recognition in the next newsletter. On some non-tournament nights, our masters and
            experts gave lectures with the aid of a demonstration board.
          </p>
        </div>

        {/* Chapter V */}
        <div className="swcc-history-chapter" id="business">
          <h2 className="swcc-history-chapter-title">Chapter V — Official Business</h2>
          <p>
            At our Club's annual, organization meetings (held in March), we elected our officers and
            directors. At our meeting of March 17, 2005, held in the James Meadows room, the following
            Club officers were elected or re-elected:
          </p>
          <p>
            <strong>President Joe Crothers</strong> — assumed our top post in 1987, when our Club was
            eight months old, and was re-elected to it every year thereafter.
          </p>
          <p>
            <strong>Vice-President Sheldon Gelbart</strong> — was named to and remained in this position
            since a special board meeting in September 2001, soon after the previous Vice President
            Newton Berry became inactive in our Club.
          </p>
          <p>
            <strong>Librarian/Equipment Manager Robert L. Fons</strong> — manned our chess books and
            inventories since 1998 except for the year 2002 term when Jason Lippert handled the job.
          </p>
          <p>
            <strong>Treasurer/C.F.O. Tom Fogec</strong> — replaced John Demler who cared for our
            funds since 1999 when Fred Zeilstra, our first treasurer, retired from this task.
          </p>
          <p>
            <strong>Secretary Robin J. Grochowski</strong> — stepped into the shoe prints of Fred
            Zeilstra, Sheldon Gelbart, and Tom Fogec, who preceded him in that order.
          </p>
          <p>
            <strong>Chief Information Officer Allen J. Becker</strong> — occupied this office since
            its inception, March 7, 2002.
          </p>
          <p>
            At the March 17, 2005 meeting, the following directors were elected or re-elected:
            Tatyana Bratishko, Don R. Madden, Jorge Morales, Ashish Vaja, and Gary Wright.
          </p>
          <p>
            On December 31, 2005, our Club had five USCF certified tournament directors: Sheldon
            Gelbart, Tom Fogec, Allen Becker, Gary Wright, and Robin J. Grochowski. The Club's
            by-laws were approved at the March 6, 2003 meeting, prepared mostly by Joe Crothers,
            Jason Lippert, John Demler, and Gary Wright. Club finances grew from $1,369.01 on
            December 23, 2000 to $2,504.69 on December 31, 2005.
          </p>
        </div>

        {/* Chapter VI */}
        <div className="swcc-history-chapter" id="membership">
          <h2 className="swcc-history-chapter-title">Chapter VI — Membership and Tournament Fees</h2>
          <p>
            The membership fees in the SWCC have not changed from 2001 to 2005. The basic membership
            fee was $10.00 per person per year, with a $5.00 fee for each additional member from the
            same family. A Lifetime membership was available for a one-time payment of $50.00.
            Honorary membership was awarded free to certified chess masters. Free membership was
            granted to applicants under 16 or over 63 years of age.
          </p>
          <p>
            Tournament fees in 2005 were similar or slightly higher than amounts charged in 2001.
            A typical Thursday night regular tournament fee ranged from $5.00 to $7.00 per member
            and $6.00 to $10.00 per non-member. Speed tournament fees ranged from $5.00 to $6.00
            in 2005 (up from $1.00–$2.00 in 2001). Special weekend tournaments of four to six games
            had fees ranging from $25.00 to $40.00 in 2005 (up from $15.00–$20.00 in 2001).
          </p>
        </div>

        {/* Chapter VII */}
        <div className="swcc-history-chapter" id="fallen">
          <h2 className="swcc-history-chapter-title">Chapter VII — Fallen Flags</h2>
          <p>The following former members of the Southwest Chess Club have died, but we will remember them:</p>
          <table className="fallen-table">
            <tbody>
              {[
                ['Frederick Gerhard Zeilstra', '1918 – 2003'],
                ['Henry R. Meifert',            '1925 – 1998'],
                ['Henry Kunsmann',              '1936 – 2000'],
                ['George Rick',                 '1937 – 2004'],
                ['Thomas R. Mertins',           '1976 – 2003'],
              ].map(([name, years]) => (
                <tr key={name}>
                  <td><strong>{name}</strong></td>
                  <td style={{ color: 'var(--swcc-color-text-muted)' }}>{years}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Chapter VIII */}
        <div className="swcc-history-chapter" id="library">
          <h2 className="swcc-history-chapter-title">Chapter VIII — The Henry R. Meifert Memorial Library</h2>
          <p>
            On October 9, 1998, after receiving donations of chess books from Club members Sheldon
            Gelbart, Steve Bogdanski, and Don R. Madden, our Club owned a total of 29 books in its
            free lending library.
          </p>
          <p>
            SWCC member Henry R. Meifert was a U.S. Army Infantryman wounded in World War II and
            awarded a Purple Heart with two Clusters. He was also a long-time employee of the
            Harnischfeger Corporation and Wisconsin's first class master. Henry Meifert died on
            October 13, 1998 at the age of 73. Our Vice President Newton Berry asked Henry's widow,
            Mary Alice Meifert, if she would consent to naming our library in his memory. Mrs. Meifert
            graciously consented, and by Club Resolution dated October 15, 1998, the Henry R. Meifert
            Memorial Library of the Southwest Chess Club was established.
          </p>
          <p>
            On November 5, 1998, Mrs. Meifert generously donated 46 chess books from the estate of
            Mr. Meifert to the library. On January 1, 2001, the library owned 153 books. By
            December 31, 2005, it owned 240 books, plus a gradually increasing number of magazines,
            newspapers, and one Fritz disc.
          </p>
        </div>

        {/* Chapter IX */}
        <div className="swcc-history-chapter" id="technology">
          <h2 className="swcc-history-chapter-title">Chapter IX — Information Technology</h2>
          <p>
            Now that chess has marched us well into the Twenty-First Century, learning about the game
            has many more resources than just watching it being played and reading related books and
            periodicals. In 2005, there were books that taught readers how to use computers to search
            for and view played games. The "Links" system on the website and the "Chess Base" software
            provided for the study of millions of grandmaster games.
          </p>
          <p>
            "Chess Base and Fritz discs are considered revolutionary sources of chess data," said NM
            Sheldon Gelbart. Many of our Club members, especially the stronger players, avail
            themselves of this new technology.
          </p>
        </div>

        {/* Chapter X */}
        <div className="swcc-history-chapter" id="equipment">
          <h2 className="swcc-history-chapter-title">Chapter X — The Equipment</h2>
          <p>
            If armies traveled on their stomachs, the SWCC traveled on its equipment boxes. To
            efficiently account for our Club's chess equipment and easily locate it where and when
            needed, we devised a practical system: seven Club members each kept one gray or yellow
            Plano box — which looked like a large tool box or fishing tackle box — in which was
            stored a fixed number of chess sets, boards, clocks, plus some score sheets and writing
            materials. By custodial members each bringing their one loaded Plano box to our Thursday
            night sessions and/or assigning it to someone else for a special purpose such as a
            weekend tournament, our equipment was easily controlled despite an occasional missed
            attendance by a custodial member.
          </p>
        </div>

        {/* Chapter XI */}
        <div className="swcc-history-chapter" id="events">
          <h2 className="swcc-history-chapter-title">Chapter XI — Special Events</h2>
          <p>
            The SWCC conducted about fourteen chess tournaments of various types annually. They were
            played during our Thursday night sessions and two weekends at our home in the James
            Meadows Room of the village hall. Among our Club tournaments was our well-respected Club
            Championship, which usually occupied six or seven Thursday night meetings mostly in June
            and July. The winners of the Southwest Chess Club Championship during this period were:
          </p>
          <table className="inline-champions">
            <tbody>
              {[
                ['Newton Berry',      '1993'],
                ['Sheldon Gelbart',   '1994'],
                ['Sheldon Gelbart',   '1995'],
                ['Mark Sokolowski',   '1996'],
                ['Mark Sokolowski',   '1997'],
                ['David Van Scyoc',   '1998'],
                ['Mark Sokolowski',   '1999'],
                ['William Wenz',      '2000'],
                ['Isaac Gabrilovich', '2001'],
                ['David Van Scyoc',   '2002'],
                ['Allen J. Becker',   '2003'],
                ['Robert Lee Murphy', '2004'],
                ['Kenneth Bastin',    '2005'],
              ].map(([name, year]) => (
                <tr key={year}>
                  <td>{name}</td>
                  <td style={{ color: 'var(--swcc-color-text-muted)' }}>{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            In addition to our SWCC tournaments, our Club cooperated in the following events with
            other chess clubs. In some inter-Club matches, we loaned a few of our players to the
            opposing team to fill their ranks. We also had members who held dual memberships in both
            opposing clubs. But these factors never seemed to dampen team spirit.
          </p>
          <p>
            The <strong>"War of the Roses"</strong> was an inter-Club chess match between the
            Waukesha Chess Club (WCC) and the SWCC from 1992 to 2002. It was held one Saturday
            afternoon every June in the Boerner Botanical Gardens of Whitnall Park during the annual
            Rose Festival. This pleasant, picnic-styled, summertime event was the idea of former
            member the late Henry Kunsmann, a man who loved to play chess and grow roses. Henry
            Kunsmann died on March 14, 2000. The War of the Roses ended with its final games played
            the weekend of June 22, 2002. SWCC won nine years (1992–1994, 1997–2002); WCC won two
            years (1995–1996).
          </p>
          <p>
            <strong>Germanfest</strong> was worked by SWCC volunteers from 1994 through 2000, held
            on a three-day weekend each July at Milwaukee's downtown festival grounds overlooking
            Lake Michigan. Under the "Schach" (Chess) tent, experts and masters from the SWCC and
            other clubs played all challengers in simultaneous exhibition games for a $2.00 fee.
          </p>
          <p>
            A Russian-American chess club occasionally sent its team to challenge our best players
            on a Thursday night. The SWCC managed to win one such late fall 2002 match 5–2. On a
            Thursday night in most Decembers, our Club held a winter holiday party with casual chess
            and refreshments.
          </p>
        </div>

        {/* Chapter XII */}
        <div className="swcc-history-chapter" id="players">
          <h2 className="swcc-history-chapter-title">Chapter XII — Our Stronger Players</h2>
          <p>
            In the 2001 calendar year, 61 persons became new Club members or renewed their
            membership. In the year 2005, that number was 77. The following names of SWCC members
            are shown with their regular USCF rating effective December 1, 2005.
          </p>
          <p>
            Our Club Vice-President and National Master, <strong>Sheldon M. Gelbart (2340)</strong>,
            had a chess career filled with admirable achievements. His three favorite first place
            finishes in open competition: the 1967 City of Chicago Open Championship (winning the
            Wamsley Cup); the 1972 State of Illinois Championship at Chicago's Palmer House; and the
            2001 Kenwood Open at the University of Wisconsin-Milwaukee with a 7-0 record.
          </p>
          <p>
            Other masters (2200–2399) in our Club were: NMs William Williams (2200) and Jeff Cooper
            (2200). In the expert classification (2000–2199): Raymond C. Hayes (2100), Ashish Vaja
            (2096), Allen J. Becker (2025), and Timothy E. Burton (2003). Our Class A rated players
            (1800–1999) included 17-year-old Derek R. Paitrick (1978), Robert Lee Murphy (1914),
            Souvik Roychoudhury (1959), Jeremy Lynch (1896), Herman Presswood (1850), Jerry Jones
            (1839), Isaak Gabrilovich (1836), James J. Coons (1818), and Ivan Wijetunge (1810).
          </p>
        </div>

        {/* Chapter XIII */}
        <div className="swcc-history-chapter" id="visitors">
          <h2 className="swcc-history-chapter-title">Chapter XIII — Club Visitors</h2>
          <p>
            In addition to our regular members, our Club was also visited occasionally by guests who
            played chess on the basis of the first night free admission and a $1.00 charge for each
            additional night of attendance without actually becoming a member. One of those guests was
            Dimitri Gomon, born in Tallin, Estonia, in 1985, a student at Tallin Technical University
            in the School of Mechanical Engineering temporarily living and working near Milwaukee in
            August 2005. His chess ratings were 2095 FIDE and 2143 in the Estonian national rating
            system. Our Club was honored to host all of our guests.
          </p>
        </div>

        {/* Chapter XIV */}
        <div className="swcc-history-chapter" id="presses">
          <h2 className="swcc-history-chapter-title">Chapter XIV — Roll the Presses</h2>
          <p>
            Occasionally, the SWCC received encouraging attention in the print media for its chess
            operations. Our own Southwest Chess Club Newsletter and its predecessors were packed with
            detailed tournament results, ratings, game descriptions, coming events, and other Club
            business. Among local newspapers complimentary to the SWCC were: the Hales Corners
            Village Hub, Greenfield Observer, West Allis Star, UW-M Post, the Milwaukee Journal
            Sentinel, and its predecessors. Chess publications included Chess Life (the national,
            official, monthly magazine of the USCF) and a local Milwaukee chess report entitled
            "Badger Chess," which is no longer in circulation.
          </p>
          <p>
            Arthur Bisguier, a U.S. Senior Chess Champion, authored his 2003 book "The Art of
            Bisguier, Vol I, The Early Years (1945–1960)." For this book, Mr. Bisguier enlisted the
            aid of three SWCC members: Newton Berry as associate author; NM Sheldon M. Gelbart as
            technical editor; and Allen J. Becker as associate technical editor.
          </p>
        </div>

        {/* Chapter XV */}
        <div className="swcc-history-chapter" id="service">
          <h2 className="swcc-history-chapter-title">Chapter XV — Community Service</h2>
          <p>
            Tatyana Bratishko was our Club's Community Service Director. She worked diligently to
            bring chess to children such as the students of the Tess Corners Elementary School with
            the assistance of other members in our Club. Mrs. Bratishko also arranged for children
            to visit our Club with a parent or guardian on Thursday nights for instruction and games.
          </p>
          <p>
            Robin J. Grochowski volunteered at the YMCA in 2004–2005 to teach chess to children. Our
            members also had a tradition of visiting other area schools and institutions to help their
            chess programs, such as Dr. Sheldon Gelbart who coached the Whitnall High School Chess
            Team.
          </p>
          <p>
            And remember — any respectful person was welcome to visit our meetings and play chess.
            For chess players of all ilk, ages, and abilities, the casual game of chess and the good
            fellowship it fosters was always available at the Southwest Chess Club.
          </p>
        </div>

        <p style={{
          fontSize: '0.82rem', color: 'var(--swcc-color-text-muted)',
          borderTop: '1px solid var(--swcc-color-card-border)',
          paddingTop: '1.25rem', marginTop: '1rem',
        }}>
          ← Read{' '}
          <a href="/history1" className="swcc-text-link">History Part One: The Early Years</a>
        </p>

      </div>
    </div>
  );
}
