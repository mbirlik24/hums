with open('scratch/build_all.js', 'r', encoding='utf-8') as f:
    code = f.read()

code = code.replace('    sourceUrl":', '    sourceUrl:')

with open('scratch/build_all.js', 'w', encoding='utf-8') as f:
    f.write(code)

print("Fixed build_all.js quotes successfully.")
