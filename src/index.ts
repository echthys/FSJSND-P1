import express from 'express';
import routes from './routes/api/index';

const app = express();
const port = 3000;

app.use('/', routes);
app.use(express.static(__dirname + '/../public'));

app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
