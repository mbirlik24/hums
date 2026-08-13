with open("app.js", "r", encoding="utf-8", errors="ignore") as f:
    lines = f.readlines()

for l in lines[1599:1680]:
    print(l.rstrip())
