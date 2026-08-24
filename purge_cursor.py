import os
import re

css_files = [
    r"c:\Users\emad\Desktop\Git UPloads\The portfolio\src\styles\global.css",
    r"c:\Users\emad\Desktop\Git UPloads\The portfolio\style.css"
]

# This regex finds a whole CSS block that contains any of the cursor classes
# It matches from the start of the selector(s) to the closing '}'
pattern = re.compile(r'([^{]*?(?:custom-cursor|cursor-dot|cursor-outline)[^{]*?\{[^}]*?\})', re.IGNORECASE | re.DOTALL)

for filepath in css_files:
    if not os.path.exists(filepath):
        continue
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We also want to remove any CSS comments like /* --- CUSTOM CURSOR ... --- */
    content = re.sub(r'/\*.*?CUSTOM CURSOR.*?\*/', '', content, flags=re.IGNORECASE | re.DOTALL)

    # We loop to catch any blocks that are matched
    original = content
    content = pattern.sub('', content)
    
    # We might have left behind empty @media blocks
    content = re.sub(r'@media\s*\([^{]+\)\s*\{\s*\}', '', content, flags=re.IGNORECASE)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Cleaned {filepath}")
    else:
        print(f"No changes in {filepath}")

