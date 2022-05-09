import { promises as fs } from 'fs';
import path from 'path';

async function findImages(imageDir: string) {
  let images: Array<string> = [];
  const files = await fs.readdir(path.resolve(__dirname, imageDir));
  files.forEach((image) => {
    images.push(path.resolve(__dirname, imageDir, image));
  });
  return images;
}

export { findImages };
