import sharp from 'sharp';
import path from 'path';

const convertImageFolder: string = '../converted_images';
const convertImagePath = path.resolve(__dirname, convertImageFolder);

const convertImages = async (images: string[], width: number, height: number): Promise<void> => {
  images.forEach(async (image) => {
    await sharp(image)
      .resize(width, height)
      .toFile(`${convertImagePath}/${width}-${height}-${image.split('/').at(-1)}`);
  });
};

export { convertImages };
