const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Find the directory containing "6张轮番图" to avoid hardcoded chinese char issues if any
const baseDir = "D:\\kehu\\1200wajue\\网站内容";
let sourceDir = "";
const dirs = fs.readdirSync(baseDir);
for (const d of dirs) {
    if (d.includes('6') && d.includes('图')) {
        sourceDir = path.join(baseDir, d);
        break;
    }
}

if (!sourceDir) {
    console.error("Could not find the source directory.");
    process.exit(1);
}

const destDir = "D:\\kehu\\1200wajue\\public\\images\\banner";

async function run() {
    const files = fs.readdirSync(sourceDir);
    let counter = 1;
    for (const file of files) {
        if (file.match(/\.(jpg|jpeg|png)$/i)) {
            const inPath = path.join(sourceDir, file);
            const outPath = path.join(destDir, `slide${counter}.jpg`);
            console.log(`Processing ${inPath} -> ${outPath}`);
            await sharp(inPath, { limitInputPixels: false })
                .resize({ width: 1920, withoutEnlargement: true })
                .jpeg({ quality: 80 })
                .toFile(outPath);
            console.log(`Saved slide${counter}.jpg`);
            counter++;
        }
    }
}
run().catch(console.error);
