// ==========================================================================
// 1. Data-Driven Architecture (JSON Structure)
// ==========================================================================

const agencyServices = [
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
        title: "Enterprise Web Apps",
        desc: "Scalable, high-performance web applications engineered to handle millions of users effortlessly.",
        tech: "React • Next.js • Node.js"
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>`,
        title: "Mobile Development",
        desc: "Native-feeling iOS and Android applications with flawless cross-platform parity.",
        tech: "React Native • Swift • Kotlin"
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
        title: "UI/UX & Motion Design",
        desc: "Awwwards-winning interfaces that captivate users and drive aggressive conversion rates.",
        tech: "Figma • WebGL • GSAP"
    },
    {
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
        title: "Cloud Architecture",
        desc: "Robust backend systems deployed on modern serverless or microservice infrastructures.",
        tech: "AWS • Docker • Kubernetes"
    }
];

const clientProjects = [
    {
        title: "Fintech Dashboard",
        client: "StripeX",
        tech: "React • TypeScript • D3.js",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
        liveUrl: "https://example.com/demo1"
    },
    {
        title: "E-Commerce Platform",
        client: "Aura Fashion",
        tech: "Next.js • GraphQL • Tailwind",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
        liveUrl: "https://example.com/demo2"
    },
    {
        title: "AI Marketing Tool",
        client: "CopyGenius",
        tech: "Vue 3 • OpenAI • Node.js",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
        liveUrl: "https://example.com/demo3"
    },
    {
        title: "Web3 Wallet",
        client: "Nexus Crypto",
        tech: "React • Ethers.js • Framer",
        image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
        liveUrl: "https://example.com/demo4"
    }
];

const clientReviews = [
    {
        quote: "AGENCY completely transformed our digital presence. Our conversion rates increased by 150% within the first month of launch.",
        name: "Sarah Jenkins",
        company: "CMO, StripeX"
    },
    {
        quote: "The technical expertise and attention to motion design is unmatched. They delivered an Awwwards-winning site ahead of schedule.",
        name: "Michael Chen",
        company: "Founder, Aura Fashion"
    },
    {
        quote: "Their team engineered a highly complex AI backend while keeping the frontend buttery smooth. True world-class professionals.",
        name: "David Ross",
        company: "CTO, CopyGenius"
    },
    {
        quote: "Finding an agency that understands both elite UI/UX and hardcore engineering is rare. AGENCY brings both to the table effortlessly.",
        name: "Elena Rodriguez",
        company: "VP Product, Nexus"
    }
];

// ==========================================================================
// 2. Dynamic Rendering Functions
// ==========================================================================

function renderServices() {
    const grid = document.getElementById('servicesGrid');
    if (!grid) return;
    let html = '';
    agencyServices.forEach((service, index) => {
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
}

function renderProjects() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    let html = '';
    clientProjects.forEach((project, index) => {
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
}

function renderTestimonials() {
    const content1 = document.getElementById('testimonialsContent1');
    const content2 = document.getElementById('testimonialsContent2');
    if (!content1 || !content2) return;
    
    let html = '';
    clientReviews.forEach(review => {
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
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);
    revealElements.forEach(el => revealOnScroll.observe(el));

    // --- Navbar ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    // --- Mobile Menu ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navLinks.classList.contains('active') ? lenis.stop() : lenis.start();
    });
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
                lenis.start();
            }
        });
    });

    // --- Modal Logic ---
    const modal = document.getElementById('liveModal');
    const iframe = document.getElementById('liveIframe');
    
    function openModal(url, title) {
        iframe.src = url;
        document.getElementById('modalTitle').textContent = title + " - Live Client Work";
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
        lenis.stop();
    }
    
    function closeModal() {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        lenis.start();
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
});
