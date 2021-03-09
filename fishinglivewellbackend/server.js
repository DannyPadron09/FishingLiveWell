import express from 'express';
import data from './data.js';

const app = express();


app.get('/api/lures/:id', (req, res) => {
  const lure = data.lures.find((x) => x._id === req.params.id)
  if(lure) {
    res.send(lure)
  } else {
    res.status(404).send({message: 'Lure not found'})
  }
});

app.get('/api/lures', (req, res) => {
  res.send(data.lures);
});

app.get('/', (req, res) => {
  res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});