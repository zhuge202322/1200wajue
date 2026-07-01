const fs = require('fs');
const pages = ['products', 'about', 'cases', 'advantages', 'inquiry'];

pages.forEach(p => {
  const dir = 'src/app/' + p;
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, {recursive: true});
  
  const content = `import React from 'react';

export default function ${p.charAt(0).toUpperCase() + p.slice(1)}Page() {
  return (
    <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-background">
      <div className="text-center p-12 bg-surface-variant border border-outline shadow-sm">
        <h1 className="text-4xl font-bold text-on-background uppercase mb-4 tracking-wider">${p}</h1>
        <p className="text-on-surface-variant uppercase text-sm font-semibold tracking-widest">Page content coming soon.</p>
      </div>
    </div>
  );
}
`;
  fs.writeFileSync(dir + '/page.tsx', content);
  console.log('Updated ' + p);
});
