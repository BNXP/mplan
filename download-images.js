/**
 * Download competitor product images
 * 
 * Usage: node download-images.js
 * 
 * This script downloads placeholder images for competitor products.
 * Run this in your project root after creating the images/ directory.
 */

const fs = require('fs');
const https = require('https');
const path = require('path');

const imagesDir = path.join(__dirname, 'public', 'images', 'competitors');
const ourImagesDir = path.join(__dirname, 'public', 'images');

// Create directories
[imagesDir, ourImagesDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created: ${dir}`);
  }
});

// For now, this script creates placeholder files
// Replace the URLs below with real image URLs when available
const placeholderNote = `// Placeholder - Replace with actual product image
// Image path referenced in: src/App.jsx and src/App-en.jsx
// 
// To add real images:
// 1. Place PNG files in public/images/competitors/
// 2. Place your product images in public/images/
// 3. The app will automatically pick them up on next build
`;

const competitorFiles = [
  'viagra.png', 'cialis.png', 'snafi.png', 'erecta.png', 'wafi.png',
  'priligy.png', 'lejam.png', 'endura.png',
  'procomil.png', 'dynamo.png', 'stud100.png', 'pjur-prolong.png', 'eros-delay.png',
  'himcolin.png', 'eroxon.png', 'prila-cream.png', 'emla-cream.png', 'lidocaine-cream.png'
];

const ourProductFiles = [
  'our-product-main.png',
  'our-product-box.png',
  'our-product-bottle.png'
];

// Create placeholder files (0-byte markers)
competitorFiles.forEach(file => {
  const filePath = path.join(imagesDir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, placeholderNote);
    console.log(`Placeholder created: images/competitors/${file}`);
  } else {
    console.log(`Already exists: images/competitors/${file}`);
  }
});

ourProductFiles.forEach(file => {
  const filePath = path.join(ourImagesDir, file);
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, placeholderNote);
    console.log(`Placeholder created: images/${file}`);
  } else {
    console.log(`Already exists: images/${file}`);
  }
});

console.log('\n✅ Done! Placeholder files created.');
console.log('\nNext steps:');
console.log('1. Replace placeholder files with real product images');
console.log('2. Run: npm run build');
console.log('3. Deploy to GitHub Pages');
