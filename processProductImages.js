const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'd:\\kehu\\1200wajue\\网站内容';
const outputDir = 'd:\\kehu\\1200wajue\\public\\images\\products';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Map model ID to folder name
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
  for (const [model, folder] of Object.entries(folders)) {
    const folderPath = path.join(inputDir, folder);
    if (!fs.existsSync(folderPath)) {
      console.log(`Folder not found: ${folderPath}`);
      continue;
    }
    const files = fs.readdirSync(folderPath).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.png'));
    if (files.length > 0) {
      // take the first file
      const inputPath = path.join(folderPath, files[0]);
      const outputPath = path.join(outputDir, `${model.toLowerCase()}.jpg`);
      
      console.log(`Processing ${model} from ${files[0]}...`);
      try {
        await sharp(inputPath, { limitInputPixels: false })
          .resize({ width: 800, withoutEnlargement: true })
          .jpeg({ quality: 80, progressive: true })
          .toFile(outputPath);
      } catch (e) {
        console.error(`Failed on ${model}:`, e);
      }
    }
  }
}

processImages();
