const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const db = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// serve static asset...
app.use(express.static(__dirname + '/../client/dist'));

<<<<<<< HEAD
let fakeData = {
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    {
      "rating": 10,
      "price": "$$",
      "phone": "+1111111111",
      "id": "P-L-U-U",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 9000,
      "name": "P LUU",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    {
      "rating": 1,
      "price": "$",
      "phone": "+14152520800",
      "id": "hack-reactor",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Hack Reactor",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    }
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
}

app.post('/serverlogin', (req, res) => {
=======
app.post('/login', (req, res) => {
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
  db.getUserByUsername(req.body, (err, results) => {
    if (err) {
      res.status(400);
      res.end('Invalid User.');
    } else {
      res.status(201).json(results);
    }
  });
});

<<<<<<< HEAD
app.post('/serversignup', (req, res) => {
=======
app.post('/signup', (req, res) => {
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
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
<<<<<<< HEAD
app.get('/serversearch', (req, res) => {
  db.tempSearch(req.body, (err, results) => {
=======
app.get('/search', (req, res) => {
  db.tempSearch(req.body, (err, results) => {
    console.log(results)
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
    if (err) {
      res.status(400);
      res.end('Failed to Search.');
    } else {
<<<<<<< HEAD
      //using fake data object mirroring API
      res.status(201).json(fakeData);
=======
      res.status(201).json(results);
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
    }
  })
});

// when user clicks on a business
app.get('/businesses/:id', (req, res) => {
  res.status(200).json('ok');
});

// when user clicks on his/her profile
app.get('/profiles/:id', (req, res) => {
  res.status(200).json('ok');
});

<<<<<<< HEAD
const server = app.listen(process.env.PORT || 3000, () => {
  var port = server.address().port;
  console.log('Listening at port %s', port);
});

module.exports = server;
=======
app.listen(3000, () => {
  console.log(`Listening at port 3000`);
});

// server();
// const port = server.address().port;
// module.exports = server;
>>>>>>> d5b87b84fbfab645b869c05ed01548cf21d592d2
