const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function fixNT12() {
  const sourceDir = 'd:\\kehu\\1200wajue\\网站内容\\NT12照片5张';
  const publicDir = 'd:\\kehu\\1200wajue\\public\\images\\products';
  
  const files = fs.readdirSync(sourceDir).filter(f => f.toLowerCase().endsWith('.jpg'));
  
  for(let i=0; i<files.length; i++) {
    await sharp(path.join(sourceDir, files[i]))
      .resize({width: 1200, withoutEnlargement: true})
      .jpeg({quality: 80})
      .toFile(path.join(publicDir, 'nt12', `${i+1}.jpg`));
  }
  
  const img2083 = files.find(f => f.includes('2083'));
  if (img2083) {
    await sharp(path.join(sourceDir, img2083))
      .resize({width: 800, withoutEnlargement: true})
      .jpeg({quality: 80})
      .toFile(path.join(publicDir, 'nt12.jpg'));
  }
}

fixNT12().catch(console.error);
