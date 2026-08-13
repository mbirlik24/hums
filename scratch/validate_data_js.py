import json

with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

# Strip `const learningData = ` and trailing `;`
prefix = "const learningData = "
if content.startswith(prefix):
    json_str = content[len(prefix):].rstrip()
    if json_str.endswith(";"):
        json_str = json_str[:-1]

try:
    data = json.loads(json_str)
    print("JSON parsed successfully!")
    print("Top level keys:", list(data.keys()))
    if "weeks" in data:
        print("Week keys in data['weeks']:", list(data["weeks"].keys()))
        for wk, wobj in data["weeks"].items():
            print(f"Week {wk}: title={wobj.get('title')}, slides_count={len(wobj.get('slides', []))}")
            for idx, s in enumerate(wobj.get('slides', [])):
                if "text" not in s or "tr" not in s["text"]:
                    print(f"ERROR: Week {wk} slide {idx} missing text.tr")
except Exception as e:
    print("JSON PARSE ERROR:", e)
