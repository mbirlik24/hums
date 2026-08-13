import json

with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

prefix = "var learningData = window.learningData = "
if content.startswith(prefix):
    json_str = content[len(prefix):].rstrip()
    if json_str.endswith(";"):
        json_str = json_str[:-1]

data = json.loads(json_str)

if "weeks" in data and "10" in data["weeks"]:
    w10 = data["weeks"]["10"]
    print("Old Week 10 video:", w10.get("video"))
    w10["video"] = {
        "src": "https://drive.google.com/file/d/1HiUBw_oq2PV-r8R3BlrwsFGGfJbwAPWM/view?usp=sharing",
        "desc": {
            "tr": "1871 Paris Komünü, İşçi Hareketi ve Sosyalist Reformlar Video Anlatımı.",
            "en": "1871 Paris Commune, Labor Movement & Socialist Reforms Video Summary."
        }
    }
    print("New Week 10 video:", w10["video"])

new_content = "var learningData = window.learningData = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"

with open("data.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("data.js updated with Week 10 video URL!")
