import sharp from 'sharp';
import path from 'path';

const convertImageFolder: string = '../converted_images';
const convertImagePath = path.resolve(__dirname, convertImageFolder);

const convertImages = async (images: string[]): Promise<void> => {
  images.forEach(async (image) => {
    console.log(`image: ${image} being converted`);
    await sharp(image)
      .resize(200, 200)
      .toFile(`${convertImagePath}/200_200-${image.split('/').at(-1)}`);
    //   .toFile(`${path.dirname(image)}/200_200-${image.split('/').at(-1)}`);
  });
  console.log(process.cwd());
};

export { convertImages };
