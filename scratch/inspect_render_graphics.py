with open("app.js", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

lines = content.splitlines()
in_func = False
func_lines = []
for i, l in enumerate(lines):
    if "function renderGraphics" in l or "function renderGraphic" in l or "switchTab('graphics')" in l:
        print(f"Found at L{i+1}: {l}")
        in_func = True
    if in_func:
        func_lines.append(f"L{i+1}: {l}")
        if len(func_lines) > 80:
            break

for l in func_lines:
    print(l)
