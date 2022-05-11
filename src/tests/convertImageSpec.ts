import { convertImages } from '../utilities/convertImage';

it('ensures image converts', async () => {
  const newImageName: string = '200-200-test.jpg';
  const response = await convertImages('test.jpg', 200, 200, newImageName);
  expect(response).toEqual(`images/${newImageName}`);
});
