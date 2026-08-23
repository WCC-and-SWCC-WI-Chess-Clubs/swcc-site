// src/App.jsx — Southwest Chess Club (standalone deploy, root of its own webserver)
import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import SWCCApp from './swcc/SWCCApp.jsx';

// This repo builds and deploys ONLY the SWCC site, at the root of its own
// webserver (vite build --base=/). SWCCApp reads its page from the "*"
// splat param, so it's always rendered under a wildcard Route.
function BodyTheme() {
  useEffect(() => {
    document.body.className = 'swcc-body';
  }, []);
  return null;
}

export default function App() {
  return (
    <>
      <BodyTheme />
      <Routes>
        <Route path="/*" element={<SWCCApp />} />
      </Routes>
    </>
  );
}
