import express from 'express';
import sharp from 'sharp';
import { findImages } from '../../utilities/findImages';

const routes = express.Router();

routes.get('/api', (req, res) => {
  //   res.send('Hello World');
  //   const input: string = '123';
  //   sharp(input).resize({ height: 200, width: 200 });
  res.send(findImages());
});

export default routes;
