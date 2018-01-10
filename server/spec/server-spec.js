const assert = require('assert');
const expect = require('chai').expect;
const request = require('supertest');

describe('loading express', function() {
  let server;

  beforeEach(function() {
    server = require('../index.js');
  });

  afterEach(function() {
    server.close();
  });

  // it('should respond to GET /', function() {
  //   return request(server)
  //     .get('/')
  //     .set('Accept', 'application/json')
  //     .expect(200)
  //     .then(resp => {
  //       expect(resp.body).to.equal('ok');
  //     });
  // });

  it('should respond to GET /users', function() {
    return request(server)
      .get('/users/username')
      .set('Accept', 'application/json')
      .expect(200)
      .then(resp => {
        expect(resp.body).to.equal('ok');
      });
  });

  it('should respond to POST /users', function() {
    return request(server)
      .post('/users')
      .set('Accept', 'application/json')
      .expect(201)
      .then(resp => {
        expect(resp.body).to.equal('ok');
      });
  });

  it('should respond to POST /businesses/search', function() {
    return request(server)
      .post('/businesses/search')
      .set('Accept', 'application/json')
      .expect(201)
      .then(resp => {
        expect(resp.body).to.equal('ok');
      });
  });

  it('should respond to GET /businesses/id', function() {
    return request(server)
      .get('/businesses/id')
      .set('Accept', 'application/json')
      .expect(200)
      .then(resp => {
        expect(resp.body).to.equal('ok');
      });
  });

  it('should respond to GET /profiles/id', function() {
    return request(server)
      .get('/profiles/id')
      .set('Accept', 'application/json')
      .expect(200)
      .then(resp => {
        expect(resp.body).to.equal('ok');
      });
  });

  it('should 404 to GET /foo/bar', function(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
