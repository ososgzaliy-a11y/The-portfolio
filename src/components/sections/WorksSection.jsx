import React, { useState } from 'react';
import { useLang } from '../../context/LanguageContext';

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

      {/* Grid Container */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:grid md:grid-cols-2 gap-[28px] md:gap-[28px]">
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

      {/* Project Details Modal with Gallery */}
      {activeModal !== null && currentProject && (
        <div 
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}
        >
          <div 
            style={{ backgroundColor: '#121212', border: '1px solid #262626', borderRadius: '32px', width: '100%', maxWidth: '1300px', height: '80vh', display: 'flex', flexDirection: 'row', overflow: 'hidden', position: 'relative' }}
          >
            {/* Close Button - Adjusted position for RTL / LTR */}
            <button 
              onClick={() => setActiveModal(null)}
              aria-label={t[activeLang]?.closeBtn || t['ar'].closeBtn}
              style={{ position: 'absolute', top: '24px', [activeLang === 'ar' ? 'left' : 'right']: '24px', backgroundColor: '#222', color: 'white', border: '1px solid #333', width: '44px', height: '44px', borderRadius: '50%', fontSize: '18px', cursor: 'pointer', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
            >
              ✕
            </button>

            {/* Left Side (or Right in LTR): Details & Value (30%) */}
            <div style={{ width: '30%', padding: '3rem 2rem', overflowY: 'auto', borderLeft: activeLang === 'ar' ? '1px solid #222' : 'none', borderRight: activeLang === 'en' ? '1px solid #222' : 'none', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: activeLang === 'ar' ? 'right' : 'left' }}>
              <div>
                <span style={{ color: '#888888', fontSize: '14px', display: 'block', marginBottom: '0.5rem' }}>
                  {t[activeLang]?.modalSub || t['ar'].modalSub}
                </span>
                <h3 style={{ color: 'white', fontSize: '28px', fontWeight: 'bold', marginBottom: '1.5rem' }}>
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
                  <ul style={{ color: '#999', fontSize: '14px', lineHeight: '1.7', paddingInlineStart: '1rem', listStyleType: 'disc' }}>
                    {(currentProject.features[activeLang] || currentProject.features['ar']).map((feat, idx) => (
                      <li key={idx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <a 
                href="https://example.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ backgroundColor: 'white', color: 'black', padding: '14px 20px', borderRadius: '14px', fontWeight: 'bold', fontSize: '14px', textAlign: 'center', textDecoration: 'none', display: 'block' }}
              >
                {t[activeLang]?.visitSite || t['ar'].visitSite}
              </a>
            </div>

            {/* Right Side: Gallery Slider & Thumbnails (70%) */}
            <div style={{ width: '70%', backgroundColor: '#0a0a0a', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '5rem 3rem 3rem 3rem' }}>
              
              {/* Main Active Screen Display */}
              <div style={{ width: '100%', height: 'calc(100% - 90px)', border: '1px solid #222', borderRadius: '20px', backgroundColor: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                
                {/* Right Arrow Button (Points Right →) */}
                <button 
                  onClick={handleNextImage}
                  aria-label="Next image"
                  style={{ position: 'absolute', right: '20px', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', border: '1px solid #333', width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Current Image / Mockup Text */}
                <span style={{ color: '#fff', fontSize: '22px', fontWeight: 'bold', textAlign: 'center', padding: '0 80px' }}>
                  {currentProject.images[activeImageIndex][activeLang] || currentProject.images[activeImageIndex]['ar']}
                </span>

                {/* Left Arrow Button (Points Left ←) */}
                <button 
                  onClick={handlePrevImage}
                  aria-label="Previous image"
                  style={{ position: 'absolute', left: '20px', backgroundColor: 'rgba(0,0,0,0.6)', color: 'white', border: '1px solid #333', width: '45px', height: '45px', borderRadius: '50%', cursor: 'pointer', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
              </div>

              {/* Mini Photos / Thumbnails Bar (Centered) */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px', height: '70px', marginTop: '20px', overflowX: 'auto', paddingBottom: '4px', width: '100%' }}>
                {currentProject.images.map((imgObj, index) => {
                  const titleStr = imgObj[activeLang] || imgObj['ar'];
                  return (
                    <div 
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      style={{ 
                        minWidth: '110px', 
                        height: '100%', 
                        backgroundColor: '#161616', 
                        border: activeImageIndex === index ? '2px solid white' : '1px solid #262626', 
                        borderRadius: '12px', 
                        cursor: 'pointer', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        padding: '0 8px',
                        transition: 'all 0.2s',
                        opacity: activeImageIndex === index ? 1 : 0.6
                      }}
                    >
                      <span style={{ color: '#ccc', fontSize: '11px', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {titleStr.split(' - ')[1] || titleStr}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
