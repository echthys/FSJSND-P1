import { promises as fs } from 'fs';
const path = require('path');

const imageDir: string = '../../images';
const images: string[] = [];

const findImages = async () => {
  const files = await fs.readdir(path.resolve(__dirname, imageDir));
  console.log(files);
};

export { findImages };
