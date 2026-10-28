import { rm, mkdir, cp } from 'node:fs/promises';
await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
for (const file of ['index.html', 'src', 'public']) await cp(file, `dist/${file}`, { recursive: true });
await cp('public/robots.txt', 'dist/robots.txt');
await cp('public/.nojekyll', 'dist/.nojekyll');
console.log('Built static preview in dist/');
