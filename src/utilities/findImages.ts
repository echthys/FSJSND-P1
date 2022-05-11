import { promises as fs } from 'fs';
import path from 'path';

/**
 * @description Checks image exists in direcotry
 * @param {string } image name of image
 * @param {string} imageDir location of image direcoty
 * @returns
 */
async function findImages(image: string, imageDir: string): Promise<boolean> {
  let files: string[] = await fs.readdir(path.resolve(__dirname, imageDir));
  try {
    for (let i = 0; i < files.length; i++) {
      const e = files[i];
      if (e === image) {
        return true;
      }
    }
  } catch {
    return false;
  }
  return false;
}

export { findImages };
