const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Routes
const indexRoute = require('./routes/index');
const usersRoute = require('./routes/users');
const tokensRoute = require('./routes/tokens');
const s3Route = require('./routes/s3');
const secretsRoute = require('./routes/secrets');

app.use('/', indexRoute);
app.use('/users', usersRoute);
app.use('/tokens', tokensRoute);
app.use('/s3', s3Route);
app.use('/secrets', secretsRoute);


app.get('/fetch-data', (req, res) => {
  res.send(`Fetch Data IP: ${process.env.INTERNAL_IP}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Vulnerable app listening at http://localhost:${port}`);
});
