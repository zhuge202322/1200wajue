const fs = require('fs');
const glob = ['src/app/page.tsx', 'src/app/products/page.tsx', 'src/app/products/[id]/page.tsx', 'src/app/about/page.tsx', 'src/app/inquiry/page.tsx'];
glob.forEach(f => {
  if (fs.existsSync(f)) {
    let c = fs.readFileSync(f, 'utf8');
    c = c.replace(/return \([\s\n]*<div className="bg-background text-on-surface font-body-md selection:bg-industrial-yellow selection:text-on-primary-fixed">([\s\S]*?)<\/div>[\s\n]*\);/g, 'return (\n    <>\n$1\n    </>\n  );');
    fs.writeFileSync(f, c);
    console.log('Removed wrapper from ' + f);
  }
});
