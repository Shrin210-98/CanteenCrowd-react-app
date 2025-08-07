// Add ts-nocheck to all .tsx files in a folder
import fs from 'fs';
import path from 'path';

const folder = './src/pages'; // change as needed

function addTsNocheckToFiles(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      addTsNocheckToFiles(filePath); // recurse into subfolder
    } else if (file.endsWith('.tsx')) {
      const content = fs.readFileSync(filePath, 'utf8');
      if (!content.startsWith('// @ts-nocheck')) {
        fs.writeFileSync(filePath, `// @ts-nocheck\n${content}`);
      }
    }
  });
}

addTsNocheckToFiles(folder);


// Run with
// node src/utils/scripts/ts-nocheck.js