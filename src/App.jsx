// ============================================================
//  src/App.jsx
//  Root router — wraps every page with Layout via React Router Outlet
// ============================================================
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home      from './pages/Home';
import About     from './pages/About';
import Services  from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact   from './pages/Contact';

export default function App() {
  useEffect(() => {
    document.body.style.setProperty('cursor', 'auto', 'important');
    document.documentElement.style.setProperty('cursor', 'auto', 'important');
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        {/*
          Layout is the parent route — it renders <Outlet /> where the
          active child route should appear, between Navbar and Footer.
          No page component needs to import Navbar or Footer ever again.
        */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index           element={<Home />} />
            <Route path="about"     element={<About />} />
            <Route path="services"  element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="contact"   element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}
