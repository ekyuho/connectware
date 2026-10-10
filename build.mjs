import { mkdir, copyFile } from 'node:fs/promises';
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'about.html', 'kim-kyuho.jpg', 'style.css', 'app.js', 'favicon.svg', 'valve-god.png', 'digital-art-pen.png', 'bus-sensor-installed.png', 'bus-sensor-unit.png']) await copyFile(file, `dist/${file}`);
console.log('Built static site in dist/');
