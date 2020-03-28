const express = require('express'); // import module 'express'
const cors = require('cors');       // import module of security 'cors'
const { errors } = require('celebrate'); // import module of errors validation in 'celebrate'
const routes = require('./routes'); // import archive 'routes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports = app;
