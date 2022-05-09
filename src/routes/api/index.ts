import express from 'express';
import { findImages } from '../../utilities/findImages';
import { convertImages } from '../../utilities/convertImage';

const routes = express.Router();
const imageDir: string = '../../images';

routes.get('/api', async (req, res) => {
  const images = await findImages(imageDir);
  convertImages(images);
  res.sendStatus(200);
});

export default routes;
