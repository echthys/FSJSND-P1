import sharp from 'sharp';
import path from 'path';

const convertImageFolder: string = '../../public/images';
const convertImagePath = path.resolve(__dirname, convertImageFolder);

const convertImages = async (fileName: string, width: number, height: number): Promise<string> => {
  console.log(fileName);
  await sharp(path.resolve(__dirname,`../../images/${fileName}`))
      .resize(width, height)
      .toFile(`${convertImagePath}/${width}-${height}-${fileName}`);
  return(`images/${width}-${height}-${fileName}`);
};

export { convertImages };
