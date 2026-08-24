// ============================================================
//  src/components/ui/SectionTitle.jsx
//  Reusable section heading with optional accent span
// ============================================================
import { useLang } from '../../context/LanguageContext';

export default function SectionTitle({ title, accent, desc, className = '' }) {
  const { lang } = useLang();
  const isRtl = lang === 'ar';
  // If `accent` is provided, wrap it in the accent span inside `title`
  const renderTitle = () => {
    if (!accent || !title.includes(accent)) {
      return title;
    }
    const parts = title.split(accent);
    return (
      <>
        {parts[0]}
        <span className="text-accent">{accent}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div 
      className={`section-header  ${className}`} 
      dir={isRtl ? 'rtl' : 'ltr'} 
      style={{ textAlign: isRtl ? 'right' : 'left' }}
    >
      <h2 className="section-title" style={{ textAlign: isRtl ? 'right' : 'left' }}>{renderTitle()}</h2>
      {desc && <p className="section-desc" style={{ textAlign: isRtl ? 'right' : 'left' }}>{desc}</p>}
    </div>
  );
}
