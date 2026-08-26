import React, { useState } from 'react';
import { useLang } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

export default function WorksSection({ lang, isEnglish, language }) {
  const langContext = useLang();
  const contextLang = langContext?.lang || 'ar';
  
  // Determine active language flexibly from props OR global context
  const activeLang = (isEnglish || lang === 'en' || language === 'en' || contextLang === 'en') ? 'en' : 'ar';
  
  const [activeModal, setActiveModal] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Translation Dictionary
  const t = {
    ar: {
      sectionTag: "سابقة",
      sectionTagHighlight: "أعمالنا",
      sectionSub: "دليل على قدرتنا على تقديم حلول رقمية عالمية المستوى.",
      liveDemo: "تجربة النسخة الحية ↗",
      viewDetails: "عرض التفاصيل",
      modalSub: "تفاصيل المشروع التفاعلي",
      keyValueTitle: "القيمة المستفادة:",
      featuresTitle: "المزايا والتقنيات:",
      visitSite: "زيارة الموقع الحي ↗",
      closeBtn: "إغلاق"
    },
    en: {
      sectionTag: "Our",
      sectionTagHighlight: "Portfolio",
      sectionSub: "A testament to our ability to deliver world-class digital solutions.",
      liveDemo: "Live Demo ↗",
      viewDetails: "View Details",
      modalSub: "Interactive Project Details",
      keyValueTitle: "Key Value Delivered:",
      featuresTitle: "Features & Technologies:",
      visitSite: "Visit Live Site ↗",
      closeBtn: "Close"
    }
  };

  const projects = [
    { 
      id: 1, 
      title: { ar: "اسم المشروع الأول", en: "Digital Platform Project" }, 
      subtitle: { ar: "تصميم وتطوير منصة رقمية", en: "UI/UX & Platform Development" }, 
      desc: { 
        ar: "وصف مختصر يوضح الفكرة من المشروع والحلول البرمجية أو التصميمية التي تم تقديمها لتحقيق أهداف العميل.", 
        en: "A concise overview highlighting the project concept and custom digital solutions built to drive client objectives." 
      },
      value: {
        ar: "تقديم حلول برمجية متكاملة تضمن سرعة الأداء، تجربة استخدام سلسة، ومعدل تحويل أعلى للزوار إلى عملاء دائمين.",
        en: "Delivering end-to-end software solutions ensuring high speed, seamless UX, and higher visitor-to-client conversion rates."
      },
      features: {
        ar: ["تصميم متجاوب بالكامل مع جميع الأجهزة", "أداء فائق السرعة وبنية تحتية مؤمنة", "لوحة تحكم مرنة وسهلة الإدارة"],
        en: ["Fully responsive UI across all screen sizes", "High performance with secure architecture", "Flexible and intuitive admin control panel"]
      },
      images: [
        { ar: "معاينة رئيسية - لوحة التحكم", en: "Main Preview - Admin Dashboard" },
        { ar: "معاينة ثانية - صفحة المنتجات", en: "Second Preview - Products Page" },
        { ar: "معاينة ثالثة - واجهة الجوال", en: "Third Preview - Mobile View" },
        { ar: "معاينة رابعة - إحصائيات المبيعات", en: "Fourth Preview - Sales Analytics" }
      ]
    },
    { 
      id: 2, 
      title: { ar: "اسم المشروع الثاني", en: "Smart Web Application" }, 
      subtitle: { ar: "تطبيقات الويب الذكية", en: "Intelligent Web Solutions" }, 
      desc: { 
        ar: "وصف مختصر يوضح الفكرة من المشروع والحلول البرمجية أو التصميمية التي تم تقديمها لتحقيق أهداف العميل.", 
        en: "A concise description explaining the project concept and tailored software solutions provided to meet client goals." 
      },
      value: {
        ar: "بناء أنظمة تفاعلية ذكية تتيح للعملاء أتمتة العمليات اليومية وتوفير الوقت والمجهود.",
        en: "Building smart interactive systems enabling clients to automate daily routines and save time and effort."
      },
      features: {
        ar: ["واجهات مستخدم متطورة", "تكامل كامل مع قواعد البيانات", "دعم متعدد اللغات والعملات"],
        en: ["Advanced modern user interfaces", "Seamless database integration", "Multi-language & multi-currency support"]
      },
      images: [
        { ar: "معاينة رئيسية - الصفحة الرئيسية", en: "Main Preview - Landing Page" },
        { ar: "معاينة ثانية - نظام الحجوزات", en: "Second Preview - Booking System" },
        { ar: "معاينة ثالثة - لوحة الإدارة", en: "Third Preview - Admin Panel" }
      ]
    },
    { 
      id: 3, 
      title: { ar: "اسم المشروع الثالث", en: "Server & Systems Engineering" }, 
      subtitle: { ar: "هندسة السيرفرات والأنظمة", en: "Cloud Infrastructure Setup" }, 
      desc: { 
        ar: "وصف مختصر يوضح الفكرة من المشروع والحلول البرمجية أو التصميمية التي تم تقديمها لتحقيق أهداف العميل.", 
        en: "A detailed breakdown of the cloud infrastructure and backend engineering provided to ensure system reliability." 
      },
      value: {
        ar: "توفير بنية تحتية قوية ومستقرة تضمن استمرارية الأعمال بأعلى كفاءة.",
        en: "Providing a robust and stable infrastructure ensuring business continuity with maximum efficiency."
      },
      features: {
        ar: ["هيكل سيرفر متطور", "مراقبة الأداء على مدار الساعة", "أنظمة حماية متقدمة"],
        en: ["Advanced scalable server architecture", "24/7 proactive performance monitoring", "Advanced firewall and security systems"]
      },
      images: [
        { ar: "معاينة رئيسية - هيكل السيرفر", en: "Main Preview - Server Architecture" },
        { ar: "معاينة ثانية - التقارير الحية", en: "Second Preview - Live Performance Reports" }
      ]
    },
    { 
      id: 4, 
      title: { ar: "اسم المشروع الرابع", en: "AI Automation Workflow" }, 
      subtitle: { ar: "حلول الأتمتة والذكاء الاصطناعي", en: "AI & Process Automation" }, 
      desc: { 
        ar: "وصف مختصر يوضح الفكرة من المشروع والحلول البرمجية أو التصميمية التي تم تقديمها لتحقيق أهداف العميل.", 
        en: "An overview of how AI and automation were seamlessly integrated into the client's existing business processes." 
      },
      value: {
        ar: "تحسين كفاءة العمليات وتقليل الأخطاء البشرية من خلال الاعتماد على الذكاء الاصطناعي.",
        en: "Improving operational efficiency and reducing human errors by heavily leveraging Artificial Intelligence."
      },
      features: {
        ar: ["نماذج ذكاء اصطناعي مخصصة", "أتمتة سير العمل بالكامل", "تكامل سلس مع الأنظمة الحالية"],
        en: ["Custom trained AI models", "Fully automated end-to-end workflows", "Seamless integration with existing CRM systems"]
      },
      images: [
        { ar: "معاينة رئيسية - تدفق الأتمتة", en: "Main Preview - Automation Flow" },
        { ar: "معاينة ثانية - واجهة المحادثة", en: "Second Preview - Chat Interface" },
        { ar: "معاينة ثالثة - إعدادات الذكاء الاصطناعي", en: "Third Preview - AI Settings" }
      ]
    }
  ];

  const currentProject = projects.find(p => p.id === activeModal);

  const handleNextImage = () => {
    if (currentProject) {
      setActiveImageIndex((prev) => (prev + 1) % currentProject.images.length);
    }
  };

  const handlePrevImage = () => {
    if (currentProject) {
      setActiveImageIndex((prev) => (prev - 1 + currentProject.images.length) % currentProject.images.length);
    }
  };

  const openModal = (id) => {
    setActiveModal(id);
    setActiveImageIndex(0); // Reset to first image on open
  };

  return (
    <section 
      dir={activeLang === 'ar' ? 'rtl' : 'ltr'} 
      className="w-full py-16 md:py-24 px-4 sm:px-6 md:px-16 bg-black overflow-x-hidden"
    >
      
      {/* Section Header */}
      <div 
        className={`mx-auto mb-16 ${activeLang === 'ar' ? 'text-right' : 'text-left'}`}
        style={{ width: '100%', maxWidth: '1400px', margin: '0 auto 4rem auto' }}
      >
        <h2 
          className="text-white font-black tracking-tight mb-4 flex flex-wrap items-center"
          style={{ 
            fontSize: 'clamp(2.5rem, 4vw, 4rem)', 
            lineHeight: '1.2',
            gap: '0.45em'
          }}
        >
          <span>{t[activeLang]?.sectionTag || t['ar'].sectionTag}</span>
          <span style={{ color: '#9ca3af' }}>{t[activeLang]?.sectionTagHighlight || t['ar'].sectionTagHighlight}</span>
        </h2>
        <p 
          className="text-neutral-400 font-medium"
          style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}
        >
          {t[activeLang]?.sectionSub || t['ar'].sectionSub}
        </p>
      </div>

      {/* Desktop 2x2 Grid / Mobile 1 Column Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
          gap: '24px',
          width: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '40px 16px'
        }}
        className="works-grid-container"
      >
        {/* CSS Media Query Override */}
        <style>{`
          @media (min-width: 768px) {
            .works-grid-container {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 767px) {
            .works-grid-container {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>

        {projects.map((project) => (
          <div key={project.id} className="w-full">
            <div 
              className="w-full h-full bg-[#121212] rounded-[20px] border border-[#262626] flex flex-col justify-between transition-all hover:border-neutral-700"
              style={{ minHeight: '560px', padding: '20px' }}
            >
            {/* Header */}
            <div style={{ marginBottom: '1.5rem', textAlign: activeLang === 'ar' ? 'right' : 'left' }}>
              <h3 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '0.6rem' }}>
                {project.title[activeLang] || project.title['ar']}
              </h3>
              <span style={{ color: '#888888', fontSize: '15px' }}>
                {project.subtitle[activeLang] || project.subtitle['ar']}
              </span>
            </div>

            {/* Middle Image Container */}
            <div 
              className="w-full bg-neutral-900 rounded-2xl border border-neutral-800 overflow-hidden flex items-center justify-center"
              style={{ width: '100%', height: '260px', backgroundColor: '#0a0a0a', borderRadius: '24px', border: '1px solid #262626', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0.5rem 0' }}
            >
              <span style={{ color: '#525252', fontSize: '16px', textAlign: 'center', padding: '0 20px' }}>
                {project.images[0][activeLang] || project.images[0]['ar']}
              </span>
            </div>

            {/* Footer with Description & Action Buttons */}
            <div style={{ marginTop: '1.2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem', textAlign: activeLang === 'ar' ? 'right' : 'left' }}>
              <p style={{ color: '#a3a3a3', fontSize: '15px', lineHeight: '1.6' }}>
                {project.desc[activeLang] || project.desc['ar']}
              </p>
              
              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem', flexDirection: 'row' }}>
                <a 
                  href="https://example.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ flex: 1, backgroundColor: 'white', color: 'black', padding: '12px 20px', borderRadius: '14px', fontWeight: 'bold', fontSize: '14px', textAlign: 'center', textDecoration: 'none', display: 'inline-block' }}
                >
                  {t[activeLang]?.liveDemo || t['ar'].liveDemo}
                </a>
                <button 
                  onClick={() => openModal(project.id)}
                  style={{ flex: 1, backgroundColor: 'transparent', color: 'white', border: '1px solid #333333', padding: '12px 20px', borderRadius: '14px', fontWeight: 'bold', fontSize: '14px', cursor: 'pointer' }}
                >
                  {t[activeLang]?.viewDetails || t['ar'].viewDetails}
                </button>
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>

      {/* See More Projects CTA */}
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '48px', width: '100%' }}>
        <Link 
          to="/portfolio" 
          style={{ 
            backgroundColor: '#171717', 
            color: '#ffffff', 
            padding: '16px 36px', 
            borderRadius: '9999px', 
            fontSize: '16px', 
            fontWeight: '700', 
            textDecoration: 'none', 
            border: '1px solid #262626',
            transition: 'background-color 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#262626'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#171717'}
        >
          {activeLang === 'ar' ? 'عرض كافة المشاريع ↗' : 'View All Projects ↗'}
        </Link>
      </div>

      {/* Project Details Modal with Gallery */}
      {activeModal !== null && currentProject && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
          onClick={() => setActiveModal(null)}
        >
          <div 
            style={{ backgroundColor: '#121212', border: '1px solid #262626', borderRadius: '24px', width: '100%', maxWidth: '850px', maxHeight: '90vh', overflowY: 'auto', position: 'relative', padding: '20px', color: '#ffffff', boxShadow: '0 24px 60px rgba(0,0,0,0.7)', boxSizing: 'border-box' }}
            onClick={(e) => e.stopPropagation()}
            dir={activeLang === 'ar' ? 'rtl' : 'ltr'}
          >
            {/* Modal Top Header Bar with Clean Independent X Button */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', paddingBottom: '12px', borderBottom: '1px solid #222222' }}>
              <span style={{ fontSize: '13px', color: '#888888', fontWeight: '600' }}>
                {t[activeLang]?.modalSub || t['ar'].modalSub}
              </span>

              <button
                onClick={() => setActiveModal(null)}
                aria-label={t[activeLang]?.closeBtn || t['ar'].closeBtn}
                style={{ backgroundColor: '#1c1c1c', border: '1px solid #333333', color: '#ffffff', width: '38px', height: '38px', borderRadius: '50%', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background-color 0.2s ease' }}
              >
                ✕
              </button>
            </div>

            {/* Dynamic Responsive Layout */}
            <div className="modal-body-wrapper">
              <style>{`
                .modal-body-wrapper {
                  display: flex;
                  flex-direction: column;
                  gap: 20px;
                }
                .gallery-container {
                  width: 100%;
                  height: clamp(240px, 40vh, 320px);
                }
                .details-container {
                  width: 100%;
                }
                @media (min-width: 768px) {
                  .modal-body-wrapper {
                    flex-direction: ${activeLang === 'ar' ? 'row-reverse' : 'row'} !important;
                  }
                  .gallery-container {
                    width: 50% !important;
                    height: 380px !important;
                  }
                  .details-container {
                    width: 50% !important;
                  }
                }
              `}</style>

              {/* Top (Mobile) / Left (Desktop): Independent Touch Swipable Gallery Box */}
              <div
                className="gallery-container"
                style={{ position: 'relative', backgroundColor: '#171717', border: '1px solid #262626', borderRadius: '16px', overflow: 'hidden' }}
              >
                {/* Horizontal Scrollable Slide Track */}
                <div
                  onScroll={(e) => {
                    const width = e.currentTarget.offsetWidth;
                    const index = Math.round(e.currentTarget.scrollLeft / width);
                    setActiveImageIndex(Math.abs(index));
                  }}
                  style={{ display: 'flex', flexDirection: 'row', overflowX: 'auto', overflowY: 'hidden', scrollSnapType: 'x mandatory', touchAction: 'pan-x', width: '100%', height: '100%', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
                >
                  {currentProject.images.map((imgObj, idx) => {
                    const titleStr = imgObj[activeLang] || imgObj['ar'];
                    return (
                      <div
                        key={idx}
                        style={{ flexShrink: 0, width: '100%', height: '100%', scrollSnapAlign: 'start', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1a1a1a', color: '#888888', fontSize: '15px', fontWeight: '600', padding: '16px', boxSizing: 'border-box' }}
                      >
                        {titleStr}
                      </div>
                    );
                  })}
                </div>

                {/* Slider Dots Indicator */}
                {currentProject.images.length > 1 && (
                  <div style={{ position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '6px', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '6px 12px', borderRadius: '9999px', backdropFilter: 'blur(4px)' }}>
                    {currentProject.images.map((_, idx) => (
                      <div
                        key={idx}
                        style={{ width: activeImageIndex === idx ? '16px' : '6px', height: '6px', borderRadius: '9999px', backgroundColor: activeImageIndex === idx ? '#ffffff' : '#525252', transition: 'all 0.25s ease' }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom (Mobile) / Right (Desktop): Project Text & Details */}
              <div className="details-container" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: activeLang === 'ar' ? 'right' : 'left' }}>
                <div>
                  <h3 style={{ color: 'white', fontSize: '24px', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                    {currentProject.title[activeLang] || currentProject.title['ar']}
                  </h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#ccc', fontSize: '16px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      {t[activeLang]?.keyValueTitle || t['ar'].keyValueTitle}
                    </h4>
                    <p style={{ color: '#999', fontSize: '14px', lineHeight: '1.6' }}>
                      {currentProject.value[activeLang] || currentProject.value['ar']}
                    </p>
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <h4 style={{ color: '#ccc', fontSize: '16px', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                      {t[activeLang]?.featuresTitle || t['ar'].featuresTitle}
                    </h4>
                    <ul style={{ color: '#999', fontSize: '14px', lineHeight: '1.7', paddingInlineStart: '1.5rem', listStyleType: 'disc' }}>
                      {(currentProject.features[activeLang] || currentProject.features['ar']).map((feat, idx) => (
                        <li key={idx} style={{ paddingLeft: '4px' }}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a 
                  href="https://example.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ backgroundColor: 'white', color: 'black', padding: '14px 20px', borderRadius: '14px', fontWeight: 'bold', fontSize: '14px', textAlign: 'center', textDecoration: 'none', display: 'block', marginTop: '1.5rem' }}
                >
                  {t[activeLang]?.visitSite || t['ar'].visitSite}
                </a>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}
