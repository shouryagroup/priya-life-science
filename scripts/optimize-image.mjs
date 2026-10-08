#!/usr/bin/env node
// Prepares a raw photo for src/assets: applies EXIF orientation, caps the long
// edge, and re-encodes WITHOUT metadata (camera EXIF and GPS location are dropped).
// Usage: node scripts/optimize-image.mjs <input> <output.jpg> [maxEdge=2400]
import sharp from 'sharp';

const [input, output, maxEdgeArg] = process.argv.slice(2);

if (!input || !output) {
  console.error('Usage: node scripts/optimize-image.mjs <input> <output.jpg> [maxEdge]');
  process.exit(1);
}

const maxEdge = Number(maxEdgeArg ?? 2400);

try {
  const info = await sharp(input)
    .rotate()
    .resize({ width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: 86, mozjpeg: true, progressive: true })
    .toFile(output);
  console.log(`${output}  ${info.width}x${info.height}  ${(info.size / 1024).toFixed(0)} KB`);
} catch (error) {
  console.error(`Failed to process ${input}:`, error instanceof Error ? error.message : error);
  process.exit(1);
}
