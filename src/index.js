import 'dotenv/config';
import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Flight of Sakura: Sakura Escape');
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
