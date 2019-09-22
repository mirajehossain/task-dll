const express = require('express');

const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const server = require('http').createServer(app);

const port = process.env.PORT || 3000;


const indexRoute = require('./routes/index');
require('./config/database').connection();

const corsOptions = {
  origin: true,
  methods: 'GET,HEAD,POST',
  credentials: true,
};

// applicaiton middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));


// Routing
app.use('/', indexRoute);

server.listen(port, () => {
  console.info(`Server is running on ${process.env.HOST}:${process.env.PORT}`);
});


module.exports = app;
