// ============================================================
//  src/components/sections/HeroSection.jsx
//  Hero section — title, subtitle, CTAs, stats counter
// ============================================================
import { Link } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';

const STATS = [
  { target: 150, suffix: '+', labelKey: 'stat1' },
  { target: 100, suffix: '%', labelKey: 'stat2' },
  { target: 12,  suffix: '',  labelKey: 'stat3' },
];

export default function HeroSection() {
  const { t, lang } = useLang();
  const isRtl = lang === 'ar';

  return (
    <section id="hero" className="hero container text-center" style={{ textAlign: 'center' }} dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="hero-content-wrapper text-center mx-auto" style={{ display: 'block' }}>
        <div className="hero-text-content text-center mx-auto" style={{ maxWidth: '800px', margin: '0 auto' }}>

          <h1 className="hero-title text-center mx-auto" style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.4', textAlign: 'center' }} dir={isRtl ? 'rtl' : 'ltr'}>
            {lang === 'en' ? (
              <>
                <span style={{ display: 'block' }}>We Design</span>
                <span style={{ display: 'block' }}>Scalable Digital</span>
                <span style={{ display: 'block' }}>
                  <span className="text-accent">Experiences</span>.
                </span>
              </>
            ) : t('heroTitle').includes(t('heroTitleAccent')) ? (
              <>
                {t('heroTitle').split(t('heroTitleAccent'))[0]}
                <span className="text-accent">{t('heroTitleAccent')}</span>
                {t('heroTitle').split(t('heroTitleAccent'))[1]}
              </>
            ) : (
              t('heroTitle')
            )}
          </h1>

          <p className="hero-subtitle text-center mx-auto" style={{ maxWidth: '600px', margin: '1.5rem auto', textAlign: 'center' }}>
            {t('heroSubtitle')}
          </p>

          <div className="hero-cta" style={{ justifyContent: 'center', margin: '2rem auto' }}>
            <Link to="/contact" className="btn btn-primary btn-glow magnetic" data-strength="50">
              {t('ctaProject')}
            </Link>
            <Link to="/portfolio" className="btn btn-secondary magnetic" data-strength="30">
              {t('ctaWork')}
            </Link>
          </div>

          {/* Stats */}
          <div className="stats-container" style={{ justifyContent: 'center', maxWidth: '600px', margin: '3rem auto 0', paddingTop: '3rem' }}>
            {STATS.map(({ target, suffix, labelKey }) => (
              <div className="stat-item" key={labelKey}>
                <div>
                  <span className="stat-number stat-counter" data-target={target}>0</span>
                  <span className="stat-number">{suffix}</span>
                </div>
                <span className="stat-label">{t(labelKey)}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
