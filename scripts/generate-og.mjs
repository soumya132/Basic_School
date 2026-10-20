// One-off generator for the default Open Graph image.
// Run: node scripts/generate-og.mjs
import sharp from 'sharp';

const svg = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#102743"/>
  <rect x="0" y="560" width="1200" height="70" fill="#1f7a46"/>
  <circle cx="600" cy="190" r="70" fill="none" stroke="#f3dfab" stroke-width="4"/>
  <circle cx="600" cy="175" r="28" fill="#f3dfab"/>
  <path d="M480 300c40-24 80-24 120 0v80c-40-24-80-24-120 0z" fill="none" stroke="#ffffff" stroke-width="6" stroke-linejoin="round"/>
  <path d="M720 300c-40-24-80-24-120 0v80c40-24 80-24 120 0z" fill="none" stroke="#ffffff" stroke-width="6" stroke-linejoin="round"/>
  <path d="M600 300v80" stroke="#f3dfab" stroke-width="4"/>
  <text x="600" y="450" font-family="Georgia, serif" font-size="52" font-weight="bold" fill="#ffffff" text-anchor="middle">Saraswato Sisu Vidya Mandir</text>
  <text x="600" y="505" font-family="Helvetica, Arial, sans-serif" font-size="26" fill="#d8e4f0" text-anchor="middle">Nurturing young minds with care, values and knowledge</text>
  <text x="600" y="605" font-family="Helvetica, Arial, sans-serif" font-size="22" fill="#ffffff" text-anchor="middle">School website — informational pages for parents and community</text>
</svg>
`);

const info = await sharp(svg).jpeg({ quality: 82, mozjpeg: true }).toFile('public/images/og-default.jpg');
console.log(`og-default.jpg: ${info.width}x${info.height}, ${info.size} bytes`);
