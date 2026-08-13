with open("app.js", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

lines = content.splitlines()
for i, l in enumerate(lines):
    if "Grafik" in l or "chart" in l.lower() or "tabGraphics" in l or "renderGraphic" in l:
        print(f"L{i+1}: {l.strip()[:120]}")
