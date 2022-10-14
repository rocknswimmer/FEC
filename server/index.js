const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const { api } = require('../client/src/config/config.js');

app.use(express.static(path.join(__dirname, '../public')));

//PRODUCT VIEW ROUTES
app.get('/products', (req, res) => {
  let urlVariable = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.id}`;

  let options = {
    "headers": {
      "Authorization": api
    }
  };

  axios.get(urlVariable, options)
    .then(results => {
      console.log('these are the /products response from the api -->', results);
      res.send(results.data);
    })
    .catch(err => {
      console.log('there was an error in the api call for the get product --> ', err);
      res.status(404).end();
    });

});

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



console.log('Listening on port 3001');