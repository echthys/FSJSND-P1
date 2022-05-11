import {convertImages} from '../utilities/convertImage'
import app from '../index';
import path from 'path';

const convertImageFolder: string = '../../public/images';
const convertImagePath = path.resolve(__dirname, convertImageFolder);

it('ensures image converts', async () => {
  const newImageName: string = '200-200-test.jpg';
  const response = await convertImages('test.jpg', 200, 200, newImageName);
  expect(response).toEqual(`images/${newImageName}`);
});
