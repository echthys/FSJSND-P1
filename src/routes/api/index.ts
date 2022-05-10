import express from 'express';
import { findImages } from '../../utilities/findImages';
import { convertImages } from '../../utilities/convertImage';

const routes = express.Router();
const imageDir: string = '../../images';

routes.get('/api', async (req, res) => {
  const params = req.query;
  const width: number = parseInt(params.width as string) ? parseInt(params.width as string) as number : 200;
  const height: number = parseInt(params.height as string) ? parseInt(params.height as string) as number : 200;
  const fileName: string = params.filename as string;
  const image: string = await findImages(fileName, imageDir);
  const updatedImageURL: string = await convertImages(image, width, height);
  res.send(`<img src="${updatedImageURL}">`);
});

export default routes;
