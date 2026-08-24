import re

filepaths = [
    r"c:\Users\emad\Desktop\Git UPloads\The portfolio\src\styles\global.css",
    r"c:\Users\emad\Desktop\Git UPloads\The portfolio\style.css"
]

for filepath in filepaths:
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Remove cursor: none completely
    content = re.sub(r'^\s*cursor:\s*none\s*(?:!important)?\s*;\s*$', '', content, flags=re.IGNORECASE | re.MULTILINE)
    content = re.sub(r'cursor:\s*none\s*(?:!important)?\s*;', '', content, flags=re.IGNORECASE)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
        
print("Purged cursor: none everywhere.")
