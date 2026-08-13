import re

with open("app.js", "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for i, l in enumerate(lines):
    if "learningData" in l:
        print(f"L{i+1}: {l.strip()}")
