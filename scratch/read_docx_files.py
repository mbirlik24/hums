import zipfile, xml.etree.ElementTree as ET, glob, os

def get_docx_text(path):
    try:
        with zipfile.ZipFile(path) as z:
            xml_content = z.read('word/document.xml')
            tree = ET.fromstring(xml_content)
            paragraphs = []
            for elem in tree.iter():
                if elem.tag.endswith('p'):
                    texts = [e.text for e in elem.iter() if elem.tag.endswith('t') or e.tag.endswith('t')]
                    t_str = "".join([t for t in texts if t])
                    if t_str.strip():
                        paragraphs.append(t_str.strip())
            return "\n".join(paragraphs)
    except Exception as e:
        return f"Error reading {path}: {e}"

files = glob.glob("*.docx")
for fpath in sorted(files):
    print(f"=== READING: {fpath} ===")
    txt = get_docx_text(fpath)
    print(f"Length: {len(txt)} chars")
    # Save extracted txt
    out_name = fpath.replace(" ", "_").replace(".docx", "_extracted.txt")
    with open(os.path.join("scratch", out_name), "w", encoding="utf-8") as out:
        out.write(txt)
    print(f"Saved to scratch/{out_name}")
