const axios = require('axios');
const googleAPI = `https://maps.googleapis.com/maps/api/place/`;
const location = `location=37.7749,-122.4194`;
const GOOGLE_API_KEY = 'AIzaSyA8edFDFzs5tRlTOLVXPlKkb3hKQKiS4F8'

const getBusinessInfo = (businessRef, cb) => {
  axios.get(`${googleAPI}details/json?reference=${businessRef}&key=${GOOGLE_API_KEY}`)
    .then(response => cb(response))
    .catch(error => console.log('error:', error))
}

const searchBusinesses = (query, cb) => {
  axios.get(`${googleAPI}textsearch/json?query=${query}&${location}&key=${GOOGLE_API_KEY}`)
    .then(response => cb(response))
    .catch(error => console.log('error:', error))
}

const getPhoto = (ref, cb) => {
    axios.get(`${googleAPI}photo?maxwidth=175&photoreference=${ref}&key=${GOOGLE_API_KEY}`)
    .then(response = cb(response))
    .catch(error => console.log('error:', error))
}

const getMap = (location, cb) => {
  axios.get(`${googleAPI}details/json?reference=${businessRef}&key=${GOOGLE_API_KEY}`)
  axios.get(`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
    &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
    &key=${GOOGLE_API_KEY}`
  )
    .then(response => cb(response))
    .catch(error => console.log('error:', error))
}

module.exports = {
  getBusinessInfo,
  searchBusinesses,
  getPhoto
}
