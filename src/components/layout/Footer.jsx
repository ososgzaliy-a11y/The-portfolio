// ============================================================
//  src/components/layout/Footer.jsx
//  Site footer with contact form, social links, and copyright
// ============================================================
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../../context/LanguageContext';
import { useState, useRef, useEffect } from 'react';

export default function Footer() {
  const { t, lang } = useLang();
  const location = useLocation();
  const isRtl = lang === 'ar';
  const [budgetVal, setBudgetVal] = useState('');
  const [isSelectOpen, setIsSelectOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const selectRef = useRef(null);

  // Clear validation bubbles and close dropdowns when navigating between pages
  useEffect(() => {
    setErrors({});
    setIsSelectOpen(false);
  }, [location.pathname]);

  const handleInput = (e) => {
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: false }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const newErrors = {};
    const elements = form.elements;
    let hasError = false;
    
    // Validate required fields
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      if (el.name && el.required && !el.value.trim()) {
        newErrors[el.name] = true;
        hasError = true;
      }
    }
    
    // Custom phone validation
    const phoneEl = elements['phone'];
    if (phoneEl && phoneEl.value.trim()) {
      if (!/^01\d{9}$/.test(phoneEl.value.trim())) {
        newErrors['phone'] = true;
        hasError = true;
      }
    }

    // Custom email validation
    const emailEl = elements['email'];
    if (emailEl && emailEl.value.trim()) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
        newErrors['email'] = true;
        hasError = true;
      }
    }
    
    if (hasError) {
      setErrors(newErrors);
      return;
    }
    
    // Process form submission
    console.log("Form submitted successfully");
  };

  const renderValidationBubble = (fieldName) => {
    if (!errors[fieldName]) return null;
    
    const errorKeys = {
      name: 'errName',
      email: 'errEmail',
      phone: 'errPhone',
      budget: 'errBudget',
      message: 'errMessage'
    };

    return (
      <div className="validation-bubble">
        <span className="validation-icon">!</span>
        <span>{t(errorKeys[fieldName])}</span>
      </div>
    );
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setIsSelectOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <footer id="contact" className="footer-section" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="container footer-grid " style={{ textAlign: isRtl ? 'right' : 'left' }}>
        {/* Left: CTA & Social */}
        <div className="contact-info">
          <h2 className="massive-title" dir={isRtl ? 'rtl' : 'ltr'} style={{ lineHeight: isRtl ? '1.4' : '1.1', overflow: 'visible', paddingBottom: '0.2em' }}>
            {t('ctaScale').replace(t('ctaScaleAccent'), '')}
            <span className="text-accent" style={{ display: 'inline-block', paddingRight: '0.15em', paddingBottom: '0.2em', paddingTop: '0.1em' }}>
              {t('ctaScaleAccent')}
            </span>
          </h2>
          <p className="contact-subtext" dir={isRtl ? 'rtl' : 'ltr'}>{t('footerSubtitle')}</p>

          <div className="social-links">
            <a
              href="https://www.facebook.com/profile.php?id=61593454711340"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic"
              data-strength="30"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/zero_0ne_group/?__pwa=1"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic"
              data-strength="30"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Contact form */}
        <form className="contact-form" id="contactForm" onSubmit={handleSubmit} onInput={handleInput} noValidate>
          <div className="form-row">
            <div className="input-group">
              <input type="text" id="footer-name" name="name" required placeholder=" " />
              <label htmlFor="footer-name">{t('formName')}</label>
              {renderValidationBubble('name')}
            </div>
            <div className="input-group">
              <input type="email" id="footer-email" name="email" required placeholder=" " />
              <label htmlFor="footer-email">{t('formEmail')}</label>
              {renderValidationBubble('email')}
            </div>
          </div>

          <div className="form-row">
            <div className="input-group">
              <input 
                type="tel" 
                id="footer-phone" 
                name="phone" 
                required 
                placeholder=" " 
                maxLength="11"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, ''); // Numbers only
                }}
              />
              <label htmlFor="footer-phone">{t('formPhone')}</label>
              {renderValidationBubble('phone')}
            </div>

            <div className={`input-group custom-select-wrapper ${isSelectOpen || budgetVal ? 'active' : ''}`} ref={selectRef}>
              <input 
                type="text" 
                id="footer-budget" 
                name="budget" 
                required 
                placeholder=" " 
                readOnly 
                value={budgetVal ? `${budgetVal} ${isRtl ? 'ج.م' : 'EGP'}` : ''} 
                dir="ltr"
                style={{ textAlign: isRtl ? 'right' : 'left', unicodeBidi: 'isolate' }}
                onClick={(e) => {
                  if (isSelectOpen) {
                    e.target.blur();
                  }
                  setIsSelectOpen(!isSelectOpen);
                }}
                className="dropdown-trigger-input"
              />
              <label htmlFor="footer-budget">{t('formBudget')}</label>
              
              <div className="dropdown-icons-container" dir="ltr">
                <svg 
                  className={`dropdown-chevron ${isSelectOpen ? 'open' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  width="20" 
                  height="20"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>

                {budgetVal && (
                  <span 
                    className="dropdown-clear" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setBudgetVal('');
                      setIsSelectOpen(false);
                    }}
                    title="Clear selection"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </span>
                )}
              </div>
              {renderValidationBubble('budget')}
              
              <div className={`custom-dropdown-menu ${isSelectOpen ? 'show' : ''}`}>
                {['10,000 - 25,000', '25,000 - 50,000', '50,000 - 100,000', '+100,000'].map(val => (
                  <div 
                    key={val} 
                    className={`dropdown-option ${budgetVal === val ? 'selected' : ''}`}
                    onClick={() => {
                      setBudgetVal(val);
                      setIsSelectOpen(false);
                      if (errors.budget) {
                        setErrors(prev => ({ ...prev, budget: false }));
                      }
                    }}
                  >
                    <span dir="ltr" style={{ display: 'inline-block', unicodeBidi: 'isolate' }}>{val} {isRtl ? 'ج.م' : 'EGP'}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="input-group">
            <textarea id="footer-message" name="message" rows="3" required placeholder=" "></textarea>
            <label htmlFor="footer-message">{t('formMessage')}</label>
            {renderValidationBubble('message')}
          </div>

          <button type="submit" className="btn btn-primary submit-btn magnetic" data-strength="40">
            {t('formSubmit')}
          </button>
        </form>
      </div>

      <div className="footer-bottom" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', width: '100%' }}>
        <p style={{ textAlign: 'center', margin: 0, width: '100%' }}>
          {isRtl ? (
            <>
              © 2026 <span dir="ltr" style={{ display: 'inline-block', unicodeBidi: 'isolate' }}>01 Group</span> للحلول الرقمية. جميع الحقوق محفوظة.
            </>
          ) : (
            <>
              © 2026 <span dir="ltr" style={{ display: 'inline-block', unicodeBidi: 'isolate' }}>01 Group Digital Solutions</span>. All rights reserved.
            </>
          )}
        </p>
      </div>
    </footer>
  );
}
