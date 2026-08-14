const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });

function copyRecursive(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    for (const file of fs.readdirSync(src)) {
      copyRecursive(path.join(src, file), path.join(dest, file));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Files and patterns to copy to dist
const rootFiles = fs.readdirSync(__dirname);
for (const file of rootFiles) {
  // Exclude node_modules, dist, .git, .vercel, scratch
  if (['node_modules', 'dist', '.git', '.vercel', 'scratch', 'build.js'].includes(file)) continue;
  
  const srcPath = path.join(__dirname, file);
  const destPath = path.join(distDir, file);
  copyRecursive(srcPath, destPath);
  console.log(`Copied ${file} -> dist/${file}`);
}

console.log('Build completed successfully. All static files copied to dist/.');
