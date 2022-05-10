import e from 'express';
import { promises as fs } from 'fs';
import path from 'path';

async function findImages(image: string, imageDir: string): Promise<string> {
  let files: string[] = await fs.readdir(path.resolve(__dirname, imageDir));
  try{
    for (let i = 0; i < files.length; i++) {
      const e = files[i];
      if(e === image)
      {
        return image;
      }
    }
  }
  catch{
    return 'No image found catch';
  }
  return 'No image found return';
}

export { findImages };
