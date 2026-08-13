import json, os, re

# Load data.js
with open('data.js', 'r', encoding='utf-8') as f:
    content = f.read()

print("Original data.js size:", len(content))
