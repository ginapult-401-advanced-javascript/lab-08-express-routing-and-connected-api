'use strict';

// What libraries || packages do we need?

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const apiRouter = require('./routes/api');

// Esoteric Resources
const errorHandler = require( './middleware/error.js');
const notFound = require( './middleware/404.js' );

// Configure MW?
const app = express();

// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Routes / Models?
app.use(apiRouter);

// Catchalls
app.use(notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: (port) => app.listen(port, () => console.log(`Server up on port ${port}`) ),
};
