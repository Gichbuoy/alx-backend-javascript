const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with successful response for success=true', (done) => {
    // Act
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Assert
        assert.deepStrictEqual(result, { data: 'Successful response from the API' });
        done(); // Call done to signal completion of the async test
      })
      .catch((error) => {
        done(error); // Call done with an error if the promise is rejected
      });
  });

  it('should return a resolved promise with undefined for success=false', (done) => {
    // Act
    getPaymentTokenFromAPI(false)
      .then((result) => {
        // Assert
        assert.strictEqual(result, undefined);
        done(); // Call done to signal completion of the async test
      })
      .catch((error) => {
        done(error); // Call done with an error if the promise is rejected
      });
  });
});
