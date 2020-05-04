import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('*', (req, res) => {
  res.send(`hello ${req.path}`);
});

app.listen(port, () => console.log(`[server] listening on port ${port}!`));
