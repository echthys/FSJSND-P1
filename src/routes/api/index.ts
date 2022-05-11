import express from 'express';
import cache from 'memory-cache';
import { findImages } from '../../utilities/findImages';
import { convertImages } from '../../utilities/convertImage';

const routes = express.Router();
const imageDir: string = '../../images';

//API Route
routes.get('/api', async (req: express.Request, res: express.Response) => {
  const params = req.query; // Get Params form URL

  const width: number | boolean = parseInt(params.width as string) //Convert param to number if possible else asign default value of 200
    ? (parseInt(params.width as string) as number)
    : false;
  const height: number | boolean = parseInt(params.height as string) //Convert param to number if possible else asign default value of 200
    ? (parseInt(params.height as string) as number)
    : false;

  const fileName: string = params.filename as string; // Get file name from params
  const newImageName: string = `${width}-${height}-${fileName}`; //Name of image after resize
  const imageExists: boolean = await findImages(fileName, imageDir); // Check if image exists

  if (width && height) {
    if (imageExists) {
      if (cache.get(`${newImageName}`)) {
        //check if image in cache
        res.send(`<img src="images/${newImageName}">`);
      } else {
        const updatedImageURL: string = await convertImages(
          //convert image and get new url
          fileName,
          width,
          height,
          newImageName
        );
        cache.put(`${newImageName}`, `${updatedImageURL}`); // Insert image into Cache here after converted
        res.send(`<img src="${updatedImageURL}">`);
      }
    } 
    else {
      res.send('Image not found');
    }
  } else {
    res.send('Incorrect value for width and height');
  }
});

export default routes;
