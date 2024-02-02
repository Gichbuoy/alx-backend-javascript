const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  let consoleLogSpy;

  beforeEach(() => {
    // Create a spy on console.log before each test
    consoleLogSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore the spy after each test
    consoleLogSpy.restore();
  });

  it('should log correct message for payment with 100 and 20', () => {
    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));
  });

  it('should log correct message for payment with 10 and 10', () => {
    // Act
    sendPaymentRequestToApi(10, 10);

    // Assert
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 20'));
  });
});
