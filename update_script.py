import json
import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Add English strings
en_strings = """
        work_title: "Selected Works",
        work_desc: "Proof of our capability to deliver world-class digital solutions.",
        work_view_all: "View All Works",
        filter_all: "All",
        filter_ecommerce: "E-Commerce",
        filter_landing: "Landing Pages",
        filter_dashboards: "Dashboards & Systems",
        filter_ai: "AI & Automation",
"""
content = re.sub(
    r'work_title: "Selected Works",\s*work_desc: "Proof of our capability to deliver world-class digital solutions.",',
    en_strings.strip(),
    content
)

# Add Arabic strings
ar_strings = """
        work_title: "أعمال مختارة",
        work_desc: "دليل على قدرتنا على تقديم حلول رقمية عالمية المستوى.",
        work_view_all: "عرض جميع الأعمال",
        filter_all: "الكل",
        filter_ecommerce: "المتاجر الإلكترونية",
        filter_landing: "الصفحات التعريفية",
        filter_dashboards: "الأنظمة الداخلية واللوحات",
        filter_ai: "أدوات الذكاء الاصطناعي",
"""
content = re.sub(
    r'work_title: "أعمال مختارة",\s*work_desc: "دليل على قدرتنا على تقديم حلول رقمية عالمية المستوى.",',
    ar_strings.strip(),
    content
)

# Update English projects
en_projects = """
        clientProjects: [
            { category: "dashboards", title: "Fintech Dashboard", client: "StripeX", tech: "React • TypeScript • D3.js", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo1" },
            { category: "ecommerce", title: "E-Commerce Platform", client: "Aura Fashion", tech: "Next.js • GraphQL • Tailwind", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo2" },
            { category: "ai", title: "AI Marketing Tool", client: "CopyGenius", tech: "Vue 3 • OpenAI • Node.js", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo3" },
            { category: "landing", title: "Web3 Wallet", client: "Nexus Crypto", tech: "React • Ethers.js • Framer", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo4" }
        ],
"""
content = re.sub(
    r'clientProjects: \[\s*\{ title: "Fintech Dashboard"[^\]]+\]\,',
    en_projects.strip() + ",",
    content,
    count=1
)

# Update Arabic projects
ar_projects = """
        clientProjects: [
            { category: "dashboards", title: "لوحة تحكم التكنولوجيا المالية", client: "StripeX", tech: "React • TypeScript • D3.js", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo1" },
            { category: "ecommerce", title: "منصة تجارة إلكترونية", client: "Aura Fashion", tech: "Next.js • GraphQL • Tailwind", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo2" },
            { category: "ai", title: "أداة تسويق بالذكاء الاصطناعي", client: "CopyGenius", tech: "Vue 3 • OpenAI • Node.js", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo3" },
            { category: "landing", title: "محفظة ويب 3", client: "Nexus Crypto", tech: "React • Ethers.js • Framer", image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80", liveUrl: "https://example.com/demo4" }
        ],
"""
content = re.sub(
    r'clientProjects: \[\s*\{ title: "لوحة تحكم التكنولوجيا المالية"[^\]]+\]\,',
    ar_projects.strip() + ",",
    content,
    count=1
)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)
