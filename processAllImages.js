const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'd:\\kehu\\1200wajue\\网站内容';
const outputDir = 'd:\\kehu\\1200wajue\\public\\images\\products';
const aboutOutputDir = 'd:\\kehu\\1200wajue\\public\\images\\about';

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });
if (!fs.existsSync(aboutOutputDir)) fs.mkdirSync(aboutOutputDir, { recursive: true });

const folders = {
  'NT10': 'NT10照片7张',
  'NT12': 'NT12照片5张',
  'NT12EV': 'NT12EV 照片4张',
  'HS12U': 'NT12U照片5张',
  'HS18': 'HS18 照片7张',
  'NT18DR': 'NT18DR 照片6张',
  'NT25': 'NT25照片2张',
  'HS27': 'HS27照片7张',
  'HS37': 'HS37照片7张'
};

async function processImages() {
  // Process product galleries
  for (const [model, folder] of Object.entries(folders)) {
    const folderPath = path.join(inputDir, folder);
    if (!fs.existsSync(folderPath)) continue;
    
    const productDir = path.join(outputDir, model.toLowerCase());
    if (!fs.existsSync(productDir)) fs.mkdirSync(productDir, { recursive: true });

    const files = fs.readdirSync(folderPath).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.png'));
    
    for (let i = 0; i < files.length; i++) {
      const inputPath = path.join(folderPath, files[i]);
      const outputPath = path.join(productDir, `${i + 1}.jpg`);
      try {
        await sharp(inputPath, { limitInputPixels: false })
          .resize({ width: 1200, withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true })
          .toFile(outputPath);
      } catch (e) {
        console.error(`Failed on ${model} - ${files[i]}:`, e);
      }
    }
    console.log(`Processed ${files.length} images for ${model}`);
  }

  // Process About images
  const aboutImages = [
    { src: '证书合集1 - 副本.jpg', dest: 'cert1.jpg' },
    { src: '员工照片.jpg', dest: 'employees.jpg' }
  ];

  for (const img of aboutImages) {
    const inputPath = path.join(inputDir, img.src);
    const outputPath = path.join(aboutOutputDir, img.dest);
    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath, { limitInputPixels: false })
          .resize({ width: 1200, withoutEnlargement: true })
          .jpeg({ quality: 85, progressive: true })
          .toFile(outputPath);
        console.log(`Processed ${img.dest}`);
      } catch(e) {
        console.error(`Failed on ${img.src}:`, e);
      }
    }
  }
}

processImages();
