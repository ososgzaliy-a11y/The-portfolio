import json

with open(r'C:\Users\emad\.gemini\antigravity-ide\brain\e2e49a33-d1f1-4ed5-a32b-d99996775569\.system_generated\logs\transcript_full.jsonl', 'r', encoding='utf-8') as f:
    for line in f:
        data = json.loads(line)
        if data.get('type') == 'TOOL_RESPONSE' and data.get('content') and '673' in data['content'] and 'diff_block_start' in data['content']:
            with open('diff_out.txt', 'w', encoding='utf-8') as out:
                out.write(data['content'])
            break
