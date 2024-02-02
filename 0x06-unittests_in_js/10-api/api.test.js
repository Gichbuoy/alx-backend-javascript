const assert = require('assert');
const request = require('request');
const app = require('./api');

const baseUrl = 'http://localhost:7865';

describe('Index page', () => {
  // Existing tests for the index page
  // ...
});

describe('/available_payments endpoint', () => {
  it('should return correct result', (done) => {
    request.get(`${baseUrl}/available_payments`, (error, response, body) => {
      const expectedResponse = {
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      };
      assert.deepStrictEqual(JSON.parse(body), expectedResponse);
      done();
    });
  });

  // Add more test cases as needed
});

describe('/login endpoint', () => {
  it('should return correct result', (done) => {
    const requestBody = {
      userName: 'JohnDoe',
    };

    request.post(
      {
        url: `${baseUrl}/login`,
        json: true,
        body: requestBody,
      },
      (error, response, body) => {
        assert.strictEqual(body, 'Welcome JohnDoe');
        done();
      }
    );
  });

  // Add more test cases as needed
});

// Close the server after all tests are done
after(() => {
  app.close();
});
