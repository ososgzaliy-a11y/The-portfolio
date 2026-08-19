// ==========================================================================
// 1. Data-Driven Architecture & RTL Translation Engine
// ==========================================================================

const translations = {
    en: {
        nav_services: "Services",
        nav_work: "Work",
        nav_testimonials: "Testimonials",
        nav_lets_talk: "Let's Talk",
        hero_title: "We Engineer Digital<br><span class=\"accent-text\">Experiences</span><br>That Scale.",
        hero_subtitle: "We are an elite digital agency partnering with ambitious brands to build high-converting, Awwwards-tier web and mobile applications.",
        hero_cta_start: "Start a Project",
        hero_cta_view: "View Our Work",
        services_title: "Core Expertise",
        services_desc: "End-to-end digital product development engineered for maximum impact.",
        work_title: "Selected Works",
        work_desc: "Proof of our capability to deliver world-class digital solutions.",
        reviews_title: "Client Trust",
        footer_title: "Ready to<br><span class=\"accent-text\">Scale?</span>",
        footer_subtitle: "Drop us a line and let's engineer something extraordinary together.",
        form_name: "Name",
        form_email: "Work Email",
        form_company: "Company",
        form_budget: "Project Budget",
        form_budget_1: "$10k - $25k",
        form_budget_2: "$25k - $50k",
        form_budget_3: "$50k - $100k",
        form_budget_4: "$100k+",
        form_message: "Project Details",
        form_submit: "Submit Inquiry",
        footer_copyright: "&copy; 2026 AGENCY. Engineered with precision.",
        modal_title: "Live Client Work",

        agencyServices: [
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`, title: "Enterprise Web Apps", desc: "Scalable, high-performance web applications engineered to handle millions of users effortlessly.", tech: "React • Next.js • Node.js" },
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`, title: "Mobile Development", desc: "Native-feeling iOS and Android applications with flawless cross-platform parity.", tech: "React Native • Swift • Kotlin" },
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`, title: "UI/UX & Motion Design", desc: "Awwwards-winning interfaces that captivate users and drive aggressive conversion rates.", tech: "Figma • WebGL • GSAP" },
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`, title: "Cloud Architecture", desc: "Robust backend systems deployed on modern serverless or microservice infrastructures.", tech: "AWS • Docker • Kubernetes" }
        ],
        clientProjects: [
            { title: "Fintech Dashboard", client: "StripeX", tech: "React • TypeScript • D3.js", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo1" },
            { title: "E-Commerce Platform", client: "Aura Fashion", tech: "Next.js • GraphQL • Tailwind", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo2" },
            { title: "AI Marketing Tool", client: "CopyGenius", tech: "Vue 3 • OpenAI • Node.js", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo3" },
            { title: "Web3 Wallet", client: "Nexus Crypto", tech: "React • Ethers.js • Framer", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo4" }
        ],
        clientReviews: [
            { quote: "AGENCY completely transformed our digital presence. Our conversion rates increased by 150% within the first month of launch.", name: "Sarah Jenkins", company: "CMO, StripeX" },
            { quote: "The technical expertise and attention to motion design is unmatched. They delivered an Awwwards-winning site ahead of schedule.", name: "Michael Chen", company: "Founder, Aura Fashion" },
            { quote: "Their team engineered a highly complex AI backend while keeping the frontend buttery smooth. True world-class professionals.", name: "David Ross", company: "CTO, CopyGenius" },
            { quote: "Finding an agency that understands both elite UI/UX and hardcore engineering is rare. AGENCY brings both to the table effortlessly.", name: "Elena Rodriguez", company: "VP Product, Nexus" }
        ]
    },
    ar: {
        nav_services: "خدماتنا",
        nav_work: "أعمالنا",
        nav_testimonials: "آراء العملاء",
        nav_lets_talk: "دعنا نتحدث",
        hero_title: "نحن نصمم تجارب<br><span class=\"accent-text\">رقمية</span><br>قابلة للتوسع.",
        hero_subtitle: "نحن وكالة رقمية رائدة نتعاون مع العلامات التجارية الطموحة لبناء تطبيقات ويب وموبايل ذات تحويل عالي الجودة.",
        hero_cta_start: "ابدأ مشروعك",
        hero_cta_view: "شاهد أعمالنا",
        services_title: "خبراتنا الأساسية",
        services_desc: "تطوير شامل للمنتجات الرقمية مصمم لتحقيق أقصى تأثير.",
        work_title: "أعمال مختارة",
        work_desc: "دليل على قدرتنا على تقديم حلول رقمية عالمية المستوى.",
        reviews_title: "ثقة العملاء",
        footer_title: "مستعد<br><span class=\"accent-text\">للتوسع؟</span>",
        footer_subtitle: "تواصل معنا ودعنا نصمم شيئًا استثنائيًا معًا.",
        form_name: "الاسم",
        form_email: "بريد العمل",
        form_company: "الشركة",
        form_budget: "ميزانية المشروع",
        form_budget_1: "$10k - $25k",
        form_budget_2: "$25k - $50k",
        form_budget_3: "$50k - $100k",
        form_budget_4: "$100k+",
        form_message: "تفاصيل المشروع",
        form_submit: "إرسال الطلب",
        footer_copyright: "&copy; 2026 AGENCY. تم التصميم بدقة.",
        modal_title: "أعمال العملاء الحية",

        agencyServices: [
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`, title: "تطبيقات الويب", desc: "تطبيقات ويب قابلة للتطوير وعالية الأداء مصممة للتعامل مع ملايين المستخدمين بسهولة.", tech: "React • Next.js • Node.js" },
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`, title: "تطوير تطبيقات الموبايل", desc: "تطبيقات iOS و Android أصلية مع أداء سلس عبر المنصات.", tech: "React Native • Swift • Kotlin" },
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`, title: "تصميم واجهة وتجربة المستخدم", desc: "واجهات حائزة على جوائز تجذب المستخدمين وتزيد من معدلات التحويل.", tech: "Figma • WebGL • GSAP" },
            { icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`, title: "البنية التحتية السحابية", desc: "أنظمة خلفية قوية مبنية على خوادم حديثة بدون خادم.", tech: "AWS • Docker • Kubernetes" }
        ],
        clientProjects: [
            { title: "لوحة تحكم التكنولوجيا المالية", client: "StripeX", tech: "React • TypeScript • D3.js", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo1" },
            { title: "منصة تجارة إلكترونية", client: "Aura Fashion", tech: "Next.js • GraphQL • Tailwind", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo2" },
            { title: "أداة تسويق بالذكاء الاصطناعي", client: "CopyGenius", tech: "Vue 3 • OpenAI • Node.js", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo3" },
            { title: "محفظة ويب 3", client: "Nexus Crypto", tech: "React • Ethers.js • Framer", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo4" }
        ],
        clientReviews: [
            { quote: "قامت الوكالة بتحويل حضورنا الرقمي بالكامل. زادت معدلات التحويل لدينا بنسبة 150٪ في غضون الشهر الأول.", name: "سارة جينكينز", company: "StripeX" },
            { quote: "الخبرة التقنية والاهتمام بتصميم الحركة لا مثيل لهما. لقد قدموا موقعًا حائزًا على جوائز.", name: "مايكل تشين", company: "Aura Fashion" },
            { quote: "قام فريقهم بهندسة نظام خلفي معقد للغاية للذكاء الاصطناعي مع الحفاظ على الواجهة الأمامية سلسة.", name: "ديفيد روس", company: "CopyGenius" },
            { quote: "العثور على وكالة تفهم كل من تصميم واجهة المستخدم المتميزة والهندسة القوية أمر نادر. إنهم يقدمون كليهما ببراعة.", name: "إيلينا رودريغيز", company: "Nexus" }
        ]
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // 1. Update HTML language and direction
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

    // 2. Update static text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });

    // 3. Update Toggle Button Text
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.innerText = lang === 'en' ? 'AR' : 'EN';
    }

    // 4. Re-render dynamic grids
    renderServices();
    renderProjects();
    renderTestimonials();
}

// ==========================================================================
// 2. Dynamic Rendering Functions
// ==========================================================================

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    
    try {
        let html = '';
        translations[currentLang].agencyServices.forEach((service, index) => {
            const delayClass = `delay-${(index % 4) + 1}`;
            html += `
                <div class="service-card reveal-on-scroll ${delayClass}">
                    <div class="service-icon">${service.icon}</div>
                    <h3 class="service-title">${service.title}</h3>
                    <p class="service-desc">${service.desc}</p>
                    <div class="service-tech">${service.tech}</div>
                </div>
            `;
        });
        grid.innerHTML = html;
    } catch(err) {
        console.error("Failed to render services:", err);
        grid.innerHTML = `
            <div class="service-card reveal-on-scroll">
                <h3 class="service-title">Web Development</h3>
                <p class="service-desc">Scalable, high-performance web applications engineered to handle millions of users effortlessly.</p>
            </div>
            <div class="service-card reveal-on-scroll">
                <h3 class="service-title">Mobile Apps</h3>
                <p class="service-desc">Native-feeling iOS and Android applications with flawless cross-platform parity.</p>
            </div>
        `;
    }
}

function renderProjects() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    const oldHTML = grid.innerHTML;
    
    try {
        let html = '';
        translations[currentLang].clientProjects.forEach((project, index) => {
            const delayClass = `delay-${(index % 4) + 1}`;
            html += `
                <article class="work-card reveal-on-scroll ${delayClass}">
                    <div class="card-image-wrapper cursor-trigger" data-cursor="View" data-url="${project.liveUrl}" data-title="${project.title}">
                        <img src="${project.image}" alt="${project.title}" class="project-img">
                    </div>
                    <div class="card-info">
                        <div>
                            <h3 class="card-title">${project.title}</h3>
                            <p class="card-tech">${project.client} &nbsp;•&nbsp; ${project.tech}</p>
                        </div>
                    </div>
                </article>
            `;
        });
        grid.innerHTML = html;

        // Re-bind click listeners for the newly injected cards
        document.querySelectorAll('.card-image-wrapper').forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                const url = trigger.getAttribute('data-url');
                const title = trigger.getAttribute('data-title');
                if(url) {
                    const iframe = document.getElementById('liveIframe');
                    const modal = document.getElementById('liveModal');
                    iframe.src = url;
                    document.getElementById('modalTitle').textContent = title + " - Live Client Work";
                    modal.classList.add('active');
                    modal.setAttribute('aria-hidden', 'false');
                    document.body.style.overflow = 'hidden';
                    if (typeof lenis !== 'undefined') lenis.stop();
                }
            });
            // Re-bind cursor triggers for new cards
            trigger.addEventListener('mouseenter', () => {
                const cursor = document.querySelector('.custom-cursor');
                if(cursor) {
                    cursor.classList.add('hover-active');
                    cursor.querySelector('.cursor-text').textContent = trigger.getAttribute('data-cursor') || 'View';
                }
            });
            trigger.addEventListener('mouseleave', () => {
                const cursor = document.querySelector('.custom-cursor');
                if(cursor) cursor.classList.remove('hover-active');
            });
        });
    } catch(err) {
        grid.innerHTML = oldHTML;
        console.error("Failed to render projects:", err);
    }
}

function renderTestimonials() {
    const content1 = document.getElementById('testimonialsContent1');
    const content2 = document.getElementById('testimonialsContent2');
    if (!content1 || !content2) return;
    
    let html = '';
    translations[currentLang].clientReviews.forEach(review => {
        html += `
            <div class="testimonial-card">
                <p class="testimonial-quote">"${review.quote}"</p>
                <p class="testimonial-author">${review.name}</p>
                <p class="testimonial-company">${review.company}</p>
            </div>
        `;
    });
    content1.innerHTML = html;
    content2.innerHTML = html;
}

// ==========================================================================
// Main Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Render all dynamic sections first
    renderServices();
    renderProjects();
    renderTestimonials();

    // --- Page Load Animation ---
    setTimeout(() => {
        document.querySelector('.loader-overlay').classList.add('hidden');
    }, 1000);

    // --- Lenis Smooth Scroll ---
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // --- Smooth Anchor Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('mousedown', function (e) {
            if (e.button !== 0) return; // Only respond to left clicks
            const targetId = this.getAttribute('href');
            if (!targetId || targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                // If mobile menu is open, close it
                const hamburger = document.querySelector('.hamburger');
                const navLinks = document.querySelector('.nav-links');
                if (navLinks && navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    if (typeof lenis !== 'undefined') lenis.start();
                }

                if (typeof lenis !== 'undefined') {
                    lenis.scrollTo(targetElement, { offset: -100, duration: 1.2 });
                } else {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // --- Custom Cursor & Mouse Glow ---
    const cursor = document.querySelector('.custom-cursor');
    const cursorText = document.querySelector('.cursor-text');
    const root = document.documentElement;
    let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        root.style.setProperty('--mouse-x', `${mouseX}px`);
        root.style.setProperty('--mouse-y', `${mouseY}px`);
        cursor.style.opacity = '1';
    });

    // Fix cursor travelling bug on window edge crossing
    document.addEventListener('mouseleave', () => {
        cursor.style.opacity = '0';
    });
    document.addEventListener('mouseenter', (e) => {
        mouseX = e.clientX; mouseY = e.clientY;
        cursorX = mouseX; cursorY = mouseY;
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        cursor.style.opacity = '1';
    });

    const lerp = (start, end, amt) => (1 - amt) * start + amt * end;

    function renderCursor() {
        if (window.innerWidth > 1024) {
            cursorX = lerp(cursorX, mouseX, 0.2);
            cursorY = lerp(cursorY, mouseY, 0.2);
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        }
        requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Contextual Cursor Hover States
    const cursorTriggers = document.querySelectorAll('.cursor-trigger');
    cursorTriggers.forEach(trigger => {
        trigger.addEventListener('mouseenter', () => {
            const contextText = trigger.getAttribute('data-cursor');
            cursorText.textContent = contextText;
            cursor.classList.add('hover-active');
        });
        trigger.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover-active');
        });
    });

    // Hide custom cursor when hovering over iframe
    const iframeContainer = document.querySelector('.iframe-container');
    if (iframeContainer) {
        iframeContainer.addEventListener('mouseenter', () => {
            cursor.style.opacity = '0';
        });
        iframeContainer.addEventListener('mouseleave', (e) => {
            mouseX = e.clientX; mouseY = e.clientY;
            cursorX = mouseX; cursorY = mouseY;
            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            cursor.style.opacity = '1';
        });
    }

    // --- Magnetic Elements ---
    const magnetics = document.querySelectorAll('.magnetic');
    magnetics.forEach(elem => {
        elem.addEventListener('mousemove', (e) => {
            const rect = elem.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            const strength = elem.getAttribute('data-strength') || 20;
            elem.style.transform = `translate(${x / strength}px, ${y / strength}px)`;
            cursor.classList.add('hover-magnetic');
        });
        
        elem.addEventListener('mouseleave', () => {
            elem.style.transform = `translate(0px, 0px)`;
            cursor.classList.remove('hover-magnetic');
        });
    });

    // --- Scroll Reveals ---
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    const revealOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        try {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        } catch(e) { console.error("Reveal Error:", e); }
    }, revealOptions);
    revealElements.forEach(el => revealOnScroll.observe(el));

    // --- Navbar ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        try {
            if (window.scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        } catch(e) {}
    });

    // --- Mobile Menu & Smooth Scroll Routing ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            if (typeof lenis !== 'undefined') {
                navLinks.classList.contains('active') ? lenis.stop() : lenis.start();
            }
        });

        // Close menu immediately on any link or button click
        document.querySelectorAll('.nav-links a, .nav-links button').forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                if (typeof lenis !== 'undefined') lenis.start();
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                // Scroll to section smoothly using Lenis (or fallback)
                if (typeof lenis !== 'undefined') {
                    lenis.scrollTo(targetSection, { offset: -100 });
                } else {
                    window.scrollTo({
                        top: targetSection.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
                
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    hamburger.classList.remove('active');
                    navLinks.classList.remove('active');
                    if (typeof lenis !== 'undefined') lenis.start();
                }
            }
        });
    });

    // --- Scroll-Spy Active Highlighting ---
    const sections = document.querySelectorAll('section, footer');
    const navItems = document.querySelectorAll('.nav-links a:not(.btn)');
    
    const spyOptions = {
        root: null,
        rootMargin: '-150px 0px -50% 0px',
        threshold: 0
    };
    
    const scrollSpy = new IntersectionObserver((entries) => {
        try {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navItems.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${entry.target.id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        } catch(e) { console.error("ScrollSpy Error:", e); }
    }, spyOptions);
    
    sections.forEach(sec => scrollSpy.observe(sec));

    // --- Modal Logic ---
    const modal = document.getElementById('liveModal');
    const iframe = document.getElementById('liveIframe');
    
    function openModal(url, title) {
        iframe.src = url;
        document.getElementById('modalTitle').textContent = title + " - Live Client Work";
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        if (typeof lenis !== 'undefined') lenis.stop();
    }
    
    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Restore scrolling
        if (typeof lenis !== 'undefined') lenis.start();
        setTimeout(() => iframe.src = '', 600);
    }

    document.querySelectorAll('.card-image-wrapper').forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            const url = trigger.getAttribute('data-url');
            const title = trigger.getAttribute('data-title');
            if(url) openModal(url, title);
        });
    });

    document.querySelector('.btn-close-modal').addEventListener('click', closeModal);
    document.querySelector('.close-dot').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-backdrop')) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
    });

    // --- CRO Form Submission Simulation ---
    const contactForm = document.getElementById('contactForm');
    if(contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('.submit-btn');
            const originalText = btn.textContent;
            
            btn.textContent = 'Processing Inquiry...';
            btn.style.opacity = '0.7';
            
            setTimeout(() => {
                btn.textContent = 'Inquiry Received!';
                btn.style.background = '#00f2fe';
                btn.style.color = '#000';
                btn.style.opacity = '1';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.style.color = '';
                }, 4000);
            }, 1500);
        });
    }

    // --- Language Translation Engine Init ---
    setLanguage('en'); // Initialize default language
    const langBtn = document.getElementById('langToggle');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            setLanguage(newLang);
        });
    }

});
