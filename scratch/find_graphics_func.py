with open("app.js", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

import re
matches = [m.start() for m in re.finditer(r'graphics', content, re.IGNORECASE)]
print(f"Total occurrences of graphics: {len(matches)}")

lines = content.splitlines()
for i, line in enumerate(lines):
    if "graphics-panel" in line or "graphics-container" in line or "renderGraphics" in line or "renderGraphic" in line or "switchTab('graphics')" in line or "renderDiagram" in line:
        print(f"L{i+1}: {line[:100]}")
