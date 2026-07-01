const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = 'd:\\kehu\\1200wajue\\网站内容\\6张轮番图';
const outputDir = 'd:\\kehu\\1200wajue\\public\\images\\banner';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processImages() {
  try {
    const files = fs.readdirSync(inputDir).filter(f => f.toLowerCase().endsWith('.jpg') || f.toLowerCase().endsWith('.jpeg') || f.toLowerCase().endsWith('.png'));
    
    console.log(`Found ${files.length} images to process.`);
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const inputPath = path.join(inputDir, file);
      const outputPath = path.join(outputDir, `slide${i + 1}.jpg`);
      
      console.log(`Processing ${file}...`);
      
      await sharp(inputPath, { limitInputPixels: false })
        .resize({ width: 1920, withoutEnlargement: true })
        .jpeg({ quality: 80, progressive: true })
        .toFile(outputPath);
        
      console.log(`Saved as slide${i + 1}.jpg`);
    }
    
    console.log('All images processed successfully.');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

processImages();
