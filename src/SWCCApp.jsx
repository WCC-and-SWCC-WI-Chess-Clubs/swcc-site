// src/swcc/SWCCApp.jsx — Southwest Chess Club sub-site shell
import { useState } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import MainNav from './MainNav.jsx';
import SiteFooter from './SiteFooter.jsx';
import HomePage from './pages/HomePage.jsx';
import ChampionsPage from './pages/ChampionsPage.jsx';
import TournamentsPage from './pages/TournamentsPage.jsx';
import PersonalitiesPage from './pages/PersonalitiesPage.jsx';
import ClubDetailsPage from './pages/ClubDetailsPage.jsx';
import BookListPage from './pages/BookListPage.jsx';
import DVDListPage from './pages/DVDListPage.jsx';
import History1Page from './pages/History1Page.jsx';
import History2Page from './pages/History2Page.jsx';

// Section IDs that exist on the HomePage (scroll targets)
const SECTION_IDS = new Set(['schedule', 'tournament', 'about']);

export default function SWCCApp() {
  const navigate = useNavigate();
  // SWCCApp is always rendered as the element of a wildcard Route —
  // "/swcc/*" when nested in the root build, "/*" when this is its own
  // dedicated /swcc/ build. Either way, the "*" param is the path
  // *within* this sub-site, with no prefix to strip. Reading it this
  // way (instead of parsing location.pathname for a literal "/swcc"
  // prefix) keeps this component correct in both deployments.
  const params = useParams();
  const splat = params['*'] || '';
  const path = splat || 'home';
  const currentPage = path || 'home';

  const [swccTheme, setSwccTheme] = useState(
    () => localStorage.getItem('swcc-theme') || 'forest'
  );

  const handleThemeChange = (t) => {
    setSwccTheme(t);
    localStorage.setItem('swcc-theme', t);
  };

  // Plain relative navigation (e.g. navigate('champions')) resolves
  // against the FULL current pathname, not this sub-site's base —
  // React Router only anchors relative navigation to a stable base
  // when it crosses a nested <Route> boundary. Since every page here
  // is a single segment below the sub-site root, we always need to
  // climb back out of whatever segment we're currently on before
  // descending into the target, or clicking a nav item while already
  // on a sub-page just appended onto the current URL instead of
  // replacing it (URL changed, page didn't). Works from either
  // deployment (nested "/swcc/*" or dedicated "/*").
  //
  // The { relative: 'path' } option is required alongside the ".."
  // segments below: with the default relative:"route" mode, a leading
  // ".." tells React Router to pop to an ancestor *Route match*, not a
  // URL segment — and since SWCCApp's own useNavigate() is anchored to
  // a single, un-nested route match, there's no ancestor to pop to, so
  // it fell through all the way to the site root (e.g. "/dvds" instead
  // of "/swcc/dvds"). relative:'path' makes ".." do plain string-based
  // segment popping against the current URL instead.
  const toBase = (target) => {
    const depth = splat.split('/').filter(Boolean).length;
    const up = '../'.repeat(depth);
    return target ? `${up}${target}` : (up || '.');
  };

  const onNavigate = (id) => {
    if (id === 'home') {
      navigate(toBase(), { relative: 'path' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (SECTION_IDS.has(id)) {
      // Navigate to homepage first, then scroll to the section
      navigate(toBase(id), { relative: 'path' });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 50);
    } else {
      // Full page routes
      navigate(toBase(id), { relative: 'path' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div data-swcc-theme={swccTheme}>
      <MainNav currentPage={currentPage} onNavigate={onNavigate} />
      <Routes>
        <Route path="/"              element={<HomePage onNavigate={onNavigate} theme={swccTheme} onThemeChange={handleThemeChange} />} />
        <Route path="champions"      element={<ChampionsPage />} />
        <Route path="tournaments"    element={<TournamentsPage />} />
        <Route path="personalities"  element={<PersonalitiesPage />} />
        <Route path="club-details"   element={<ClubDetailsPage />} />
        <Route path="books"          element={<BookListPage />} />
        <Route path="dvds"           element={<DVDListPage />} />
        <Route path="history1"       element={<History1Page />} />
        <Route path="history2"       element={<History2Page />} />
        {/* Scroll-target routes and fallback — all render HomePage */}
        <Route path="*"              element={<HomePage onNavigate={onNavigate} theme={swccTheme} onThemeChange={handleThemeChange} />} />
      </Routes>
      <SiteFooter onNavigate={onNavigate} />
    </div>
  );
}
