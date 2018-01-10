const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json('ok');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static asset...
app.use(express.static(__dirname + '/../client/dist'));

// when user login, username, password
app.get('/users/:username', (req, res) => {
  res.status(200).json('ok');
});

// when user create
app.post('/users', (req, res) => {
  res.status(201).json('ok');
});

// when user search
app.post('/businesses/search', (req, res) => {
  res.status(201).json('ok');
});

// when user clicks on a business
app.get('/businesses/:id', (req, res) => {
  res.status(200).json('ok');
});

// when user clicks on his/her profile
app.get('/profiles/:id', (req, res) => {
  res.status(200).json('ok');
});

const server = app.listen(3000, () => {
  const port = server.address().port;
  console.log(`Listening at port ${port}`);
});

module.exports = server;
