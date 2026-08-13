import json

with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

prefix = "var learningData = window.learningData = "
if content.startswith(prefix):
    json_str = content[len(prefix):].rstrip()
    if json_str.endswith(";"):
        json_str = json_str[:-1]

data = json.loads(json_str)

if "weeks" in data and "7" in data["weeks"]:
    w7 = data["weeks"]["7"]
    print("Old Week 7 video:", w7.get("video"))
    w7["video"] = {
        "src": "https://drive.google.com/file/d/1yoqJYTnqDBwlU_fe4fH4AOU6NXrNMPzb/view?usp=sharing",
        "desc": {
            "tr": "Oryantalizm: Napolyon Mısır'da ve Avrupa Emperyalizmi Video Anlatımı.",
            "en": "Orientalism: Napoleon in Egypt & European Imperialism Video Summary."
        }
    }
    print("New Week 7 video:", w7["video"])

new_content = "var learningData = window.learningData = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n"

with open("data.js", "w", encoding="utf-8") as f:
    f.write(new_content)

print("data.js updated with Week 7 video URL!")
