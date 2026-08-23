// src/swcc/pages/PersonalitiesPage.jsx — SWCC Notable Personalities
import zielstraImg from '../images/Zielstra.jpg';
import fonsImg from '../images/Fons.jpg';
import crothersImg from '../images/Crothers.jpg';

const PEOPLE = [
  {
    name: 'Fred Zielstra',
    role: 'Founder',
    img: zielstraImg,
    bio: 'Organized the Southwest Chess Club on February 15, 1987 in the Hunt Room of the Hales Corners Public Library, after placing a notice in the local newspaper. He served as the club\'s first Treasurer and chose the club\'s name based on its geographical location in Milwaukee County.',
  },
  {
    name: 'Bob Fons',
    role: 'Club Librarian',
    img: fonsImg,
    bio: 'Served as the club\'s Librarian and Equipment Manager since 1998 (except 2002). Author of the club\'s history "Part Two, 2001–2005." Bob oversaw the Henry R. Meifert Memorial Library, growing the collection from 153 books in 2001 to over 240 by 2005.',
  },
  {
    name: 'Joe Crothers',
    role: 'Club President',
    img: crothersImg,
    bio: 'Elected Club President at Zielstra\'s suggestion, eight months after the club\'s founding in 1987, and re-elected every year thereafter. The annual club championship bears his name: the Joe Crothers Memorial Southwest Chess Club Championship.',
  },
];

export default function PersonalitiesPage() {
  return (
    <div className="swcc-page-shell">
      <div className="swcc-page-banner">
        <p className="swcc-section-label">Our People</p>
        <h1 className="swcc-section-title">Notable Personalities</h1>
        <p className="swcc-page-banner-sub">
          The members who shaped the Southwest Chess Club
        </p>
      </div>

      <div className="swcc-page-inner">
        <div className="swcc-persons-grid">
          {PEOPLE.map(person => (
            <div key={person.name} className="swcc-person-card">
              <img
                src={person.img}
                alt={person.name}
                onError={e => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <p className="swcc-person-name">{person.name}</p>
              <p className="swcc-person-role">{person.role}</p>
              <p style={{
                fontSize: '0.84rem', lineHeight: 1.7, marginTop: '1rem',
                color: 'var(--swcc-color-text-dark)', textAlign: 'left',
              }}>
                {person.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
