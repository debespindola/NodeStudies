const express = require('express');
const cors = require('cors');
const dbConnection = require('./dbConnection');
const routes = require('../routes')

dbConnection();

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;