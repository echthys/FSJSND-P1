import sharp from 'sharp';
import path from 'path';

const convertImageFolder: string = '../../public/images';
const convertImagePath = path.resolve(__dirname, convertImageFolder);

/**
 * @description resizes an image
 * @param {string} fileName - Name of image
 * @param {number} width - The width the image will be
 * @param {number} height - The height the image will be
 * @param {string} newImageName - The name of the updated image
 * @returns {string} - location of converted image
 */
const convertImages = async (
  fileName: string,
  width: number,
  height: number,
  newImageName: string
): Promise<string> => {
  await sharp(path.resolve(__dirname, `../../images/${fileName}`))
    .resize(width, height)
    .toFile(`${convertImagePath}/${width}-${height}-${fileName}`);
  return `images/${newImageName}`;
};

export { convertImages };
