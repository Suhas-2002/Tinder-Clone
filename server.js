import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
import Cards from './dbCards.js';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url = '<-Your MongoDB connect url';

// Middlewares
app.use(express.json());
app.use(Cors());

// DB Config
mongoose.connect(connection_url, {
});

// API Endpoints
app.get('/', (req, res) => {});

app.post('/tinder/cards', (req, res) => {
    const dbCard = req.body;

    Cards.create(dbCard)
        .then((data) => {
            res.status(201).send(data);
        })
        .catch((err) => {
            res.status(500).send(err);
        });
});

app.get('/tinder/cards', async (req, res) => {
    try {
      const data = await Cards.find();
      res.status(200).send(data);
    } catch (err) {
      res.status(500).send(err);
    }
  });

// Listener
app.listen(port, () => {
  console.log(`Listening on localhost:${port}`);
});