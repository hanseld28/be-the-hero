const express = require('express'); // import module 'express'
const cors = require('cors');       // import module of security 'cors'
const routes = require('./routes'); // import archive 'routes.js'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);
