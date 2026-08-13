with open("data.js", "r", encoding="utf-8") as f:
    content = f.read()

pos = content.find('"8":')
if pos != -1:
    print(content[pos:pos+500])
else:
    print("Not found with double quotes, checking single quotes or without quotes")
    pos2 = content.find('8:')
    if pos2 != -1:
        print(content[pos2:pos2+500])
