import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'style.css', 'app.js', 'favicon.svg', 'valve-god.png', 'digital-art-pen.png']) await copyFile(file, `dist/${file}`);
console.log('Built static site in dist/');
