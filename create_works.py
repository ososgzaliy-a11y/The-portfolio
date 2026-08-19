import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Remove the hero section
content = re.sub(r'<!-- Hero Section -->.*?</section>\s*(<!-- Services Section -->)', r'\1', content, flags=re.DOTALL)

# Remove the services section
content = re.sub(r'<!-- Services Section -->.*?</section>\s*(<!-- Live Works Showcase -->)', r'\1', content, flags=re.DOTALL)

# Remove the testimonials section
content = re.sub(r'<!-- Social Proof / Testimonials -->.*?</section>\s*(<!-- Contact / Footer -->)', r'\1', content, flags=re.DOTALL)

# Change title
content = content.replace('<title>01 Group Digital Solutions</title>', '<title>All Works | 01 Group</title>')

# Remove the "View All Works" button at the bottom of the grid
content = re.sub(
    r'<div class="view-all-container[^>]*>.*?</div>\s*</section>',
    r'</section>',
    content,
    flags=re.DOTALL
)

# Replace "Latest" with "All" in the new page
content = content.replace(
    '<button class="filter-btn active magnetic" data-filter="latest" data-strength="15" data-i18n="filter_latest">Latest</button>',
    '<button class="filter-btn active magnetic" data-filter="all" data-strength="15" data-i18n="filter_all">All</button>'
)

with open('works.html', 'w', encoding='utf-8') as f:
    f.write(content)
