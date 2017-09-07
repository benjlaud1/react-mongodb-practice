const express = require('express');
const mongoose  = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

const port = process.env.API_PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get('/', function (req, res) {
  res.json({ message: 'API initialized!' });
});

app.use('/api', router);

app.listen(port, function () {
  console.log('====================================');
  console.log('API running on port ${port}');
  console.log('====================================');
})