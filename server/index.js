const express = require('express');
const app = express();
const path = require('path');
const {api} = require('../client/src/config/config.js');

app.use(express.static(path.join(__dirname, '../public')));

//REVIEWS ROUTES

  //List Reviews
app.get('/reviews/', (req, res) => {

});

  //Get Review Metadata
app.get('/reviews/meta', (req, res) => {

});

  //Add a Review
app.post('/reviews', (req, res) => {

});

  //Mark Review as Helpful
app.put('/reviews/:review_id/helpful', (req, res) => {

});

  //Report Review
app.put('/reviews/:review_id/report', (req, res) => {

});


app.listen(3001);

app.get('/products', (req, res) => {

});

console.log('Listening on port 3001');