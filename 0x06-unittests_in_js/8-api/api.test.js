const assert = require('assert');
const request = require('request');
const app = require('./api');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  it('should return correct status code', (done) => {
    request.get(baseUrl, (error, response) => {
      assert.strictEqual(response.statusCode, 200);
      done();
    });
  });

  it('should return correct result', (done) => {
    request.get(baseUrl, (error, response, body) => {
      assert.strictEqual(body, 'Welcome to the payment system');
      done();
    });
  });

  it('should handle other cases', (done) => {
    // Add additional test cases as needed
    done();
  });
});

// Close the server after all tests are done
after(() => {
  app.close();
});
