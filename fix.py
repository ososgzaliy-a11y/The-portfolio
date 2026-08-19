import os

with open('style.css', 'r', encoding='utf-8') as f:
    style_lines = f.readlines()

with open('missing.css', 'r', encoding='utf-8') as f:
    missing_lines = f.readlines()

new_lines = style_lines[:286] + missing_lines + style_lines[286:]

with open('style.css', 'w', encoding='utf-8') as f:
    f.writelines(new_lines)
