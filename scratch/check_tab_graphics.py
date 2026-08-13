with open("app.js", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

lines = content.splitlines()
for i, l in enumerate(lines):
    if "graphics" in l.lower():
        print(f"L{i+1}: {l.strip()[:100]}")
