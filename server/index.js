const express = require('express');
const app = express();
const path = require('path');
const {api} = require('../client/src/config/config.js');

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3001);

app.get('/products', (req, res) => {

});

console.log('Listening on port 3001');