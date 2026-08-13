import json, re

with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

print("Length of data.js:", len(content))

# Find week keys in data.js
matches = re.findall(r'["\']?(\d+)["\']?\s*:\s*\{\s*["\']?id["\']?\s*:\s*["\']?(\d+)["\']?', content)
print("Weeks found:", matches)
