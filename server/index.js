const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../database/index.js');
const api = require('../client/helper/yelpHelpers.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static asset...
app.use(express.static(__dirname + '/../client/dist'));

app.post('/server/login', (req, res) => {
  db.getUserByUsername(req.body, (err, results) => {
    if (err) {
      res.status(400);
      res.end('Invalid User.');
    } else {
      res.status(201).json(results);
    }
  });
});

app.post('/server/signup', (req, res) => {
  db.postUser(req.body, (err, results) => {
    if (err) {
      res.status(400);
      res.end('Failed to Create User.');
    } else {
      res.status(201).json(results);
    }
  });
});

// when user search
app.get('/server/search/:query', (req, res) => {
  api.searchBusinesses(req.params.query, results => {
    res.status(201).json(results.data.results);
  })
  // use below for test
  // db.tempSearch(req.body, (err, results) => {
  //   if (err) {
  //     res.status(400);
  //     res.end('Failed to Search.');
  //   } else {
  //     //using fake data object mirroring API
  //     res.status(201).json(api.fakeData);
  //   }
  // })
});

// when user clicks on a business
app.get('/server/business/:reference', (req, res) => {
  let businessRef = req.params.reference;
  api.getBusinessInfo(businessRef, data => {
    res.json(data.data.result)
  })
  // res.status(200).json('ok');
});

//when user submits a review for a business
app.post('/review', (req, res) => {
  let review = {
    rating: req.body.rating,
    text: req.body.text
  }
  db.addNewReview(req.body.userID, req.body.businessID, review, (err, results) => {
    if (err) {
      res.status(400);
      res.end('Unable to submit new review');
    } else {
      console.log(results);
      res.status(201).json(results);
    }
  })
});

//when business page reviews render
app.get('/server/reviews/friends', (req, res) => {
  db.getFriendsReviews(req.query.userId, req.query.businessId, (err, results) => {
    if (err) {
      res.status(400);
      res.end('Unable to retrieve friend reviews');
    } else {
      res.status(201).json(results);
    }
  })
})
//when business page reviews render
app.get('/server/reviews/others', (req, res) => {
  db.getStrangersReviews(req.query.userId, req.query.businessId, (err, results) => {
    if (err) {
      res.status(400);
      res.end('Unable to retrieve others reviews');
    } else {
      res.status(201).json(results);
    }
  })
})

app.get('/server/user', (req, res) => {
  db.getUsernameById(req.query.userId, (err, results) => {
    if (err) {
      res.send(400)
      res.end('Unable to retrieve username from id')
    } else {
      console.log(results);
      res.status(201).json(results)
    }
  })
})

// when user clicks on his/her profile
app.get('/profiles/:id', (req, res) => {
  res.status(200).json('ok');
});

const server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;
  console.log('Listening at port %s', port);
});

module.exports = server;
