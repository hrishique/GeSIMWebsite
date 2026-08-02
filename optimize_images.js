import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

const publicDir = './public';

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      if (name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.jpeg')) {
        files.push(name);
      }
    }
  }
  return files;
}

const allImages = getFiles(publicDir);
console.log(`Found ${allImages.length} images to process.`);

for (const imgPath of allImages) {
  const stat = fs.statSync(imgPath);
  const sizeKb = Math.round(stat.size / 1024);

  if (sizeKb > 50) {
    const webpPath = imgPath.substring(0, imgPath.lastIndexOf('.')) + '.webp';
    try {
      execSync(`npx sharp-cli -i "${imgPath}" -o "${webpPath}"`, { stdio: 'ignore' });
      if (fs.existsSync(webpPath)) {
        const webpStat = fs.statSync(webpPath);
        const webpKb = Math.round(webpStat.size / 1024);
        console.log(`✓ ${imgPath} (${sizeKb}KB) -> ${webpPath} (${webpKb}KB) [${Math.round((1 - webpStat.size / stat.size) * 100)}% smaller]`);
      }
    } catch (e) {
      console.error(`Failed to convert ${imgPath}:`, e.message);
    }
  }
}
