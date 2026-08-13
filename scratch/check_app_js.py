import re

with open("app.js", "r", encoding="utf-8", errors="ignore") as f:
    content = f.read()

print("app.js length:", len(content))
print("learningData count:", content.count("learningData"))
print("ld count:", content.count("ld"))

# Find any global variables or errors at top or bottom
lines = content.splitlines()
print("Top 10 lines:")
for l in lines[:10]:
    print("  ", l)

print("Bottom 10 lines:")
for l in lines[-10:]:
    print("  ", l)
