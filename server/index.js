const express = require('express')
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
var cors = require('cors')
const categoryRouter = require('./routers/category')
app.use(cors());
app.use(express.json())
app.use(categoryRouter)
app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);

