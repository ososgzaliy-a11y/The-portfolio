// ============================================================
//  src/components/layout/Navbar.jsx
//  Top navigation — logo, links, language toggle, CTA
// ============================================================
import { Link, NavLink } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';

export default function Navbar() {
  const { t, toggleLang, lang } = useLang();

  return (
    <header className="navbar">
      <div className="container nav-container">
        {/* Logo */}
        <Link to="/" className="brand-logo-text magnetic" data-strength="20" dir="ltr">
          <span className="brand-name">01</span>{' '}
          <span className="brand-group">GROUP</span>
        </Link>

        {/* Hamburger (toggled by JS hook) */}
        <button className="hamburger magnetic" aria-label="Toggle Navigation" data-strength="20" id="hamburger-btn">
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Nav links */}
        <nav className="nav-links" id="nav-links">
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
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.3)',
              background: 'transparent',
              marginLeft: '10px',
              padding: '0.5rem 1rem',
            }}
          >
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>

          {/* CTA */}
          <Link to="/contact" className="btn btn-nav magnetic" data-strength="30">
            {t('ctaProject')}
          </Link>
        </nav>
      </div>
    </header>
  );
}
