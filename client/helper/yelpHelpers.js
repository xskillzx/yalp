const axios = require('axios');
const config = require('../../config.js')
/**
 * two functions
 * 
 * -get businesses' object 
 * GET https://api.yelp.com/v3/businesses/{id}
 * 
 * -search businesses (get) 
 * GET https://api.yelp.com/v3/businesses/search
 */

 const getBusiness = (business, cb) => {

  // var authOptions = {
  //   method: 'POST',
  //   url: 'http://10.254.147.184:7777/auth/oauth/token',
  //   data: qs.stringify(data),
  //   headers: {
  //       'Authorization': 'Basic Y2xpZW50OnNlY3JldA==',
  //       'Content-Type': 'application/x-www-form-urlencoded'
  //   },
  //   json: true
  // };

  // return dispatch => {
  //   return axios(authOptions)
  //   .then(function(response){
  //     console.log(response.data);
  //     console.log(response.status);
  //   })
  //   .catch(function(error){
  //     console.log(error);
  //   });

   axios.get(`https://api.yelp.com/v3/businesses/${business}`, {
      headers: {
        'Authorization': `Bearer ${config.YELP_API_KEY}`,
        'Content-Type': 'application/json'
      }
   })
   .then(response => cb(response))
   .catch(error => console.log('error:', error))
 }

 const searchBusinesses = (query, cb) => {
  axios.get(`https://api.yelp.com/v3/businesses/search?term=${query}`, {
    params: {
      'Authorization': `Bearer ${config.YELP_API_KEY}`,
      'Content-Type': 'application/json'
    }
  })
   .then(response => cb(response))
   .catch(error => console.log('error:', error))
 }

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

module.exports = {
    getBusiness,
    searchBusinesses,
    fakeData
}
