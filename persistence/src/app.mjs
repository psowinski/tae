import express from 'express';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Tae Persistence 1.0.0');
});

app.get('/stream/:id', (req, res) => {
  res.send(`Get from stream ${req.params.id}`);
});

app.get('/stream/:id/:from', (req, res) => {
  res.send(`Get from stream ${req.params.id} since ${req.params.from}`);
});

app.get('/stream/:id/:from/:count', (req, res) => {
  res.send(`Get from stream ${req.params.id} since ${req.params.from} count ${req.params.count}`);
});

app.put('/stream', (req, res) => {
  res.json(req.body);
});

app.get('/event/:id', (req, res) => {
  res.send(`Get event by id ${req.params.id}`);
});

const PORT = process.env.port || 5801;

app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});

// process.on('exit', () => {
//   console.log('bye bye');
//   console.log('This process is your pid ' + process.pid);
//   server.close(() => { console.log('Closing server'); });
//   process.exit(0);
// });
