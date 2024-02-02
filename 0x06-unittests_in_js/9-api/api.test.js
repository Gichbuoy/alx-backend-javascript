const assert = require('assert');
const request = require('request');
const app = require('./api');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  // Existing tests for the index page
  // ...

  // New test suite for the cart page
  describe('Cart page', () => {
    it('should return correct status code when :id is a number', (done) => {
      request.get(`${baseUrl}/cart/123`, (error, response) => {
        assert.strictEqual(response.statusCode, 200);
        done();
      });
    });

    it('should return correct result when :id is a number', (done) => {
      request.get(`${baseUrl}/cart/456`, (error, response, body) => {
        assert.strictEqual(body, 'Payment methods for cart 456');
        done();
      });
    });

    it('should return 404 status code when :id is NOT a number', (done) => {
      request.get(`${baseUrl}/cart/abc`, (error, response) => {
        assert.strictEqual(response.statusCode, 404);
        done();
      });
    });

    // Add more test cases as needed
  });
});

// Close the server after all tests are done
after(() => {
  app.close();
});
