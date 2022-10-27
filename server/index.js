const express = require('express');
const axios = require('axios');
const app = express();
const path = require('path');
const { api } = require('../client/src/config/config.js');
require('dotenv').config();

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));


//PRODUCT VIEW ROUTES
app.get('/products', (req, res) => {
  let urlVariable = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.id}`;

  let options = {
    'headers': {
      'Authorization': api
    }
  };

  axios.get(urlVariable, options)
    .then(results => {
      // console.log('these are the /products response from the api -->', results);
      res.send(results.data);
    })
    .catch(err => {
      //console.log('there was an error in the api call for the get product --> ', err);
      res.status(404).end();
    });

});

app.get('/products/:product_id/styles', (req, res) => {
  let urlVariable = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/products/${req.query.id}/styles`;

  let options = {
    'headers': {
      'Authorization': api
    }
  };

  axios.get(urlVariable, options)
    .then(results => {
      //console.log('these are the /products response from the api -->', results);
      res.send(results.data);
    })
    .catch( err => {
      console.log('there was an error in the api call for the get product/product_id/styles --> ', err);
      res.status(404).end();
    });
});


//REVIEWS ROUTES

//List Reviews
app.get('/reviews/', (req, res) => {
  //console.log('reviews query', req.query);
  let apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews';

  let options = {
    params: {
      'page': 1,
      'count': 1000,
      'sort': req.query.sort,
      'product_id': req.query.id
    },
    headers: {
      'Authorization': api
    }
  };

  axios.get(apiUrl, options)
    .then((data) => {
      res.json(data.data);
      res.end();
    })
    .catch((err) => {
      console.log('error in server request', err);
      res.status(500);
      res.end();
    });

});

//Get Review Metadata
app.get('/reviews/meta', (req, res) => {
  let apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/meta';

  let options = {
    params: {
      'product_id': req.query.product_id
    },
    headers: {
      'Authorization': api
    }
  };

  axios.get(apiUrl, options)
    .then((data) => {
      res.json(data.data);
      res.end();
    })
    .catch((err) => {
      console.log('error in server get for meta', err);
      res.status(500);
      res.end();
    });
});

//Add a Review
app.post('/reviews', (req, res) => {

  console.log(req.body);
  let apiUrl = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews';

  let authHeader = {
    'headers': {
      'Authorization': api
    }
  };

  axios.post(apiUrl, req.body, authHeader)
    .then((data) => {
      res.status(201);
      res.send('CREATED').end();
    })
    .catch((err) => {
      console.log('error in server post', err);
      res.status(500);
      res.end();
    });
});

//Mark Review as Helpful
app.put('/reviews/:review_id/helpful', (req, res) => {
  console.log(req.body);
  let options = {
    'headers': {
      'Authorization': api
    }
  };
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${req.body.review_id}/helpful`, {}, options)
    .then((results) => {
      console.log(results);
      res.send('question marked helpful');
    })
    .catch((err) => {
      console.log('error putting Q helpful: ', err);
      res.status(404).end();
    });


});

//Report Review
app.put('/reviews/:review_id/report', (req, res) => {

  let options = {
    'headers': {
      'Authorization': api
    }
  };
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/reviews/${req.body.review_id}/report`, {}, options)
    .then((results) => {
      console.log(results);
      res.send('review reported');
    })
    .catch((err) => {
      console.log('error putting Q helpful: ', err);
      res.status(404).end();
    });


});

//Q&A routes

// Get Questions
app.get('/qa/questions/', (req, res) => {
  let urlVariable = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/';

  let options = {
    'headers': {
      'Authorization': api
    },
    'params': {
      'product_id': req.query.id,
      'count': 1000
    }
  };

  axios.get(urlVariable, options)
    .then(results => {
      // console.log('answers data: ', results.data);
      res.send(results.data);
    })
    .catch(err => {
      console.log('error getting questions: ', err);
      res.status(404).end();
    });

});

// Post Questions
app.post('/qa/questions/', (req, res) => {
  // console.log(req.body);
  // res.send('hit server');
  let urlVariable = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions';
  let options = {
    'body': req.body.body,
    'name': req.body.name,
    'email': req.body.email,
    'product_id': Number(req.body.product_id)
  };
  let authHeaders = {
    'headers': {
      'Authorization': api
    }
  };

  axios.post(urlVariable, options, authHeaders)
    .then(results => {
      console.log('question post results:', results);
      res.send(' queston posted');
    })
    .catch((err) => {
      console.log('error posting questions: ', err);
      res.status(404).end();
    });
});

// Post Answer
app.post('/qa/questions/:question_id/ansers', (req, res) => {
  // console.log(req.body);
  // res.send('hit server');
  let urlVariable = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.body.question_id}/answers`;
  let body = {
    'body': req.body.body,
    'name': req.body.name,
    'email': req.body.email,
    'photos': req.body.photos
  };
  let options = {
    'headers': {
      'Authorization': api
    }
  };

  axios.post(urlVariable, body, options)
    .then(results => {
      // console.log('question post results:', results);
      res.send(' queston posted');
    })
    .catch((err) => {
      console.log('error posting questions: ', err);
      res.status(404).end();
    });
});

//Q&A Puts
app.put('/qa/questions/:question_id/helpful', (req, res) => {
  let options = {
    'headers': {
      'Authorization': api
    }
  };
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/questions/${req.body.question}/helpful`, {}, options)
    .then((results) => {
      // console.log(results);
      res.send('question marked helpful');
    })
    .catch((err) => {
      console.log('error putting Q helpful: ', err);
      res.status(404).end();
    });
});

app.put('/qa/answers/:answer_id/helpful', (req, res) => {
  let options = {
    'headers': {
      'Authorization': api
    }
  };
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${req.body.answer}/helpful`, {}, options)
    .then((results) => {
      // console.log(results);
      res.send('answer marked helpful');
    })
    .catch((err) => {
      console.log('error reporting answer: ', err);
      res.status(404).end();
    });
});

app.put('/qa/answers/:answer_id/report', (req, res) => {
  let options = {
    'headers': {
      'Authorization': api
    }
  };
  axios.put(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/qa/answers/${req.body.answer}/report`, {}, options)
    .then((results) => {
      // console.log(results);
      res.send('answer reported');
    })
    .catch((err) => {
      console.log('error reporting answer: ', err);
      res.status(404).end();
    });
});

// Change request
app.post('/interactions', (req, res) => {
  let body = {
    'element': req.body.element,
    'widget': req.body.widget,
    'time': req.body.time
  };
  let options = {
    'headers': {
      'Authorization': api
    }
  };
  axios.post('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe/interactions', body, options)
    .then((results) => {
      // console.log('interactions results', results);
      res.send(results.data);
    })
    .catch((err) => {
      console.log('error reporting interaction: ', err);
      res.status(404).end();
    });
});



app.listen(3001);



console.log('Listening on port 3001');