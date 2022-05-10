import express from 'express';
import { findImages } from '../../utilities/findImages';
import { convertImages } from '../../utilities/convertImage';

const routes = express.Router();
const imageDir: string = '../../images';

routes.get('/api', async (req, res) => {
  const params = req.query;
  const width: number = parseInt(params.width as string) ? parseInt(params.width as string) as number : 200;
  const height: number = parseInt(params.height as string) ? parseInt(params.height as string) as number : 200;
  const images: string[] = await findImages(imageDir);
  convertImages(images, width, height);
  res.sendStatus(200);
});

export default routes;
