const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

module.exports = function(app, config){
  console.log(`morgan/body parser`);
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(cors());
};