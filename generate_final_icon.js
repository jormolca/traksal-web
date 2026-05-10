const fs = require('fs');
const path = require('path');

const pngBuffer = fs.readFileSync('src/app/icon.png');
const base64 = pngBuffer.toString('base64');

const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <defs>
    <clipPath id="round-mask">
      <rect width="512" height="512" rx="85" ry="85" />
    </clipPath>
  </defs>
  <image width="512" height="512" href="data:image/png;base64,${base64}" clip-path="url(#round-mask)" />
</svg>`;

fs.writeFileSync('src/app/icon.svg', svgContent);
fs.writeFileSync('public/icon.svg', svgContent);
console.log('Icono autoportante generado con éxito.');
