import json

with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

prefix = "var learningData = window.learningData = "
if content.startswith(prefix):
    json_str = content[len(prefix):].rstrip()
    if json_str.endswith(";"):
        json_str = json_str[:-1]
elif content.startswith("const learningData = "):
    json_str = content[len("const learningData = "):].rstrip()
    if json_str.endswith(";"):
        json_str = json_str[:-1]
else:
    json_str = content

data = json.loads(json_str)

weeks = data.get("weeks", {})
for wk_id, wobj in weeks.items():
    chart_data = wobj.get("chart") or wobj.get("graphics") or wobj.get("chartData")
    has_chart = bool(chart_data)
    print(f"Week {wk_id}: chart_keys={list(wobj.keys())}, has_chart={has_chart}")
    if chart_data:
        print(f"   Chart data summary for week {wk_id}: {str(chart_data)[:150]}...")
