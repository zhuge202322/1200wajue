const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceDir = "D:\\kehu\\1200wajue\\网站内容\\20260702\\HS12U 图片";
const targetDir = "d:\\kehu\\1200wajue\\public\\images\\products\\hs12u";

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

async function run() {
    const files = fs.readdirSync(sourceDir).filter(f => f.match(/\.(png|jpe?g)$/i)).sort();
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const sourcePath = path.join(sourceDir, file);
        const targetPath = path.join(targetDir, `${i+1}.jpg`);
        console.log(`Resizing ${file} to ${i+1}.jpg`);
        await sharp(sourcePath).resize(800, null, { withoutEnlargement: true }).jpeg({ quality: 80 }).toFile(targetPath);
        
        if (i === 0) {
            const mainPath = "d:\\kehu\\1200wajue\\public\\images\\products\\hs12u.jpg";
            await sharp(sourcePath).resize(800, null, { withoutEnlargement: true }).jpeg({ quality: 80 }).toFile(mainPath);
        }
    }
}
run();
