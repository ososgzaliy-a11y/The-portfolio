// ============================================================
//  src/components/layout/Navbar.jsx
//  Top navigation — logo, links, language toggle, CTA
// ============================================================
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';

export default function Navbar() {
  const { t, toggleLang, lang } = useLang();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isRtl = lang === 'ar';

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  return (
    <>
      <style>{`
        /* Hide Hamburger on Desktop & Show Desktop Nav Links */
        @media (min-width: 1024px) {
          .mobile-toggle-btn {
            display: none !important;
          }
          .desktop-nav-links {
            display: flex !important;
          }
        }

        /* Show Hamburger on Mobile & Hide Desktop Nav Links */
        @media (max-width: 1023px) {
          .mobile-toggle-btn {
            display: flex !important;
          }
          .desktop-nav-links {
            display: none !important;
          }
        }
      `}</style>

      {/* Spacer to prevent content overlap from fixed header */}
      <div style={{ height: '80px', width: '100%', flexShrink: 0 }} aria-hidden="true" />

      <header 
        style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          width: '100%',
          zIndex: 1000,
          backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.85)' : 'rgba(10, 10, 10, 0.65)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '14px 24px',
          margin: 0,
          boxSizing: 'border-box',
          transition: 'background-color 0.3s ease, border-color 0.3s ease'
        }}
        dir={isRtl ? 'rtl' : 'ltr'}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link
            to="/"
            className="brand-logo-text magnetic"
            data-strength="20"
            dir="ltr"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="brand-name">01</span>{' '}
            <span className="brand-group">GROUP</span>
          </Link>

          {/* STATIC MOBILE TOGGLE HAMBURGER BUTTON */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="mobile-toggle-btn"
            style={{
              width: '40px',
              height: '40px',
              gap: '6px',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: 0
            }}
            aria-label="Open Mobile Menu"
          >
            <span style={{ width: '26px', height: '2.5px', backgroundColor: '#ffffff', borderRadius: '2px' }} />
            <span style={{ width: '26px', height: '2.5px', backgroundColor: '#ffffff', borderRadius: '2px' }} />
            <span style={{ width: '26px', height: '2.5px', backgroundColor: '#ffffff', borderRadius: '2px' }} />
          </button>

          {/* Desktop Nav links */}
          <nav className="desktop-nav-links" style={{ alignItems: 'center', gap: '32px' }}>
            <NavLink to="/"        className="magnetic" data-strength="15">{t('navHome')}</NavLink>
            <NavLink to="/about"   className="magnetic" data-strength="15">{t('navAbout')}</NavLink>
            <NavLink to="/services" className="magnetic" data-strength="15">{t('navServices')}</NavLink>
            <NavLink to="/portfolio" className="magnetic" data-strength="15">{t('navWork')}</NavLink>

            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="lang-toggle-btn btn btn-nav magnetic"
              id="langToggle"
              data-strength="15"
              style={{
                padding: '6px 14px', 
                borderRadius: '9999px', 
                border: '1px solid #404040', 
                backgroundColor: '#171717', 
                color: '#ffffff', 
                fontSize: '12px', 
                cursor: 'pointer', 
                fontWeight: '600'
              }}
            >
              {lang === 'ar' ? 'EN' : 'AR'}
            </button>

            {/* CTA */}
            <Link to="/contact" className="btn btn-nav magnetic" data-strength="30" style={{ padding: '10px 22px', backgroundColor: '#ffffff', color: '#000000', fontWeight: 'bold', borderRadius: '9999px', textDecoration: 'none', fontSize: '14px' }}>
              {t('ctaProject')}
            </Link>
          </nav>
        </div>
      </header>

      {/* PORTAL TO BODY: Prevents any parent clipping/transform bugs */}
      {mounted && createPortal(
        <div 
          style={{ 
            position: 'fixed', 
            inset: 0, 
            zIndex: 999998, 
            width: '100vw', 
            height: '100vh', 
            display: 'flex',
            pointerEvents: isMobileMenuOpen ? 'auto' : 'none',
            visibility: isMobileMenuOpen ? 'visible' : 'hidden',
            transition: isMobileMenuOpen ? 'visibility 0s' : 'visibility 0s 350ms'
          }}
        >
          {/* Animated Backdrop */}
          <div 
            onClick={() => setIsMobileMenuOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(8px)',
              opacity: isMobileMenuOpen ? 1 : 0,
              transition: 'opacity 350ms cubic-bezier(0.16, 1, 0.3, 1)',
              zIndex: 999998
            }}
          />

          {/* Sliding Navigation Drawer */}
          <aside 
            dir={isRtl ? 'rtl' : 'ltr'}
            style={{
              position: 'fixed',
              top: 0,
              bottom: 0,
              left: isRtl ? 0 : 'auto',
              right: isRtl ? 'auto' : 0,
              width: '85%',
              maxWidth: '360px',
              height: '100vh',
              backgroundColor: '#0a0a0a',
              borderRight: isRtl ? '1px solid #262626' : 'none',
              borderLeft: isRtl ? 'none' : '1px solid #262626',
              zIndex: 999999,
              padding: '90px 24px 32px 24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: isRtl ? '10px 0 25px rgba(0,0,0,0.5)' : '-10px 0 25px rgba(0,0,0,0.5)',
              transform: isMobileMenuOpen ? 'translateX(0)' : (isRtl ? 'translateX(-100%)' : 'translateX(100%)'),
              transition: 'transform 350ms cubic-bezier(0.16, 1, 0.3, 1)'
            }}
          >
            {/* EXPLICIT CLOSE 'X' BUTTON */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                position: 'absolute',
                top: '24px',
                left: isRtl ? '24px' : 'auto',
                right: isRtl ? 'auto' : '24px',
                width: '40px',
                height: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
                zIndex: 1000000
              }}
              aria-label="Close Mobile Menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Navigation Links */}
            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '32px', margin: 'auto 0', textAlign: 'center' }}>
              {[
                { to: '/',          label: t('navHome') },
                { to: '/about',     label: t('navAbout') },
                { to: '/services',  label: t('navServices') },
                { to: '/portfolio', label: t('navWork') },
              ].map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="active:scale-95 active:opacity-80 transition-all duration-200"
                  style={{ fontSize: '30px', fontWeight: '700', color: '#ffffff', textDecoration: 'none' }}
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            {/* Bottom Action Section */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', paddingTop: '16px', borderTop: '1px solid #262626' }}>
              <button 
                onClick={() => { toggleLang(); setIsMobileMenuOpen(false); }}
                style={{ padding: '6px 20px', borderRadius: '9999px', border: '1px solid #404040', backgroundColor: '#171717', color: '#ffffff', fontSize: '12px', fontWeight: '600', cursor: 'pointer' }}
              >
                {lang === 'ar' ? 'EN' : 'AR'}
              </button>
              
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)} 
                style={{ width: '100%', padding: '14px', backgroundColor: '#ffffff', color: '#000000', fontWeight: 'bold', borderRadius: '9999px', textAlign: 'center', textDecoration: 'none', fontSize: '16px' }}
              >
                {t('ctaProject') || 'ابدأ مشروعك'}
              </Link>
            </div>
          </aside>
        </div>,
        document.body
      )}
    </>
  );
}
