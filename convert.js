const fs = require('fs');
const path = require('path');

const files = [
  { in: 'stitch_html/home.html', out: 'src/app/page.tsx' },
  { in: 'stitch_html/products.html', out: 'src/app/products/page.tsx' },
  { in: 'stitch_html/detail.html', out: 'src/app/products/[id]/page.tsx' },
  { in: 'stitch_html/about.html', out: 'src/app/about/page.tsx' },
  { in: 'stitch_html/inquiry.html', out: 'src/app/inquiry/page.tsx' },
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function htmlToReact(html) {
  // Extract body content
  let bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return '';
  let content = bodyMatch[1];
  
  // Extract scripts
  const scripts = [];
  content = content.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, (match, scriptContent) => {
    if (scriptContent.trim() && !match.includes('src=')) {
      scripts.push(scriptContent);
    }
    return '';
  });

  // Convert basic HTML to JSX
  let jsx = content
    .replace(/class=/g, 'className=')
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<hr>/g, '<hr />')
    .replace(/for=/g, 'htmlFor=')
    .replace(/style="([^"]*)"/g, (match, styleString) => {
      // Very basic style string to object converter
      const styleObj = styleString.split(';').reduce((acc, rule) => {
        if (!rule.trim()) return acc;
        const parts = rule.split(':');
        if (parts.length < 2) return acc;
        const key = parts[0].trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
        acc[key] = parts.slice(1).join(':').trim();
        return acc;
      }, {});
      return `style={${JSON.stringify(styleObj)}}`;
    });
    
  return { jsx, scripts };
}

files.forEach(file => {
  if (!fs.existsSync(file.in)) {
    console.log('Skipping ' + file.in);
    return;
  }
  const html = fs.readFileSync(file.in, 'utf-8');
  const { jsx, scripts } = htmlToReact(html);
  
  const componentName = file.out.includes('[id]') ? 'ProductDetail' 
    : file.out.includes('products') ? 'ProductsList'
    : file.out.includes('about') ? 'AboutPage'
    : file.out.includes('inquiry') ? 'InquiryPage'
    : 'Home';
    
  let fileContent = `"use client";\nimport React, { useEffect } from 'react';\n`;
  if (scripts.length > 0) {
    fileContent += `import gsap from 'gsap';\nimport ScrollTrigger from 'gsap/ScrollTrigger';\n\n`;
    fileContent += `export default function ${componentName}() {\n`;
    fileContent += `  useEffect(() => {\n    gsap.registerPlugin(ScrollTrigger);\n`;
    
    // Cleanup script logic
    let scriptCode = scripts.join('\n');
    // Replace document.querySelector with ref logic ideally, but since we are preserving exactly as-is, we can just run it in useEffect.
    fileContent += `    try {\n      ${scriptCode.replace(/\n/g, '\n      ')}\n    } catch (e) { console.error(e) }\n`;
    
    fileContent += `  }, []);\n\n`;
  } else {
    fileContent += `export default function ${componentName}() {\n`;
  }
  
  fileContent += `  return (\n    <div className="bg-background text-on-surface font-body-md selection:bg-industrial-yellow selection:text-on-primary-fixed">\n      ${jsx}\n    </div>\n  );\n}\n`;

  ensureDir(path.dirname(file.out));
  fs.writeFileSync(file.out, fileContent);
  console.log(`Converted ${file.in} to ${file.out}`);
});
