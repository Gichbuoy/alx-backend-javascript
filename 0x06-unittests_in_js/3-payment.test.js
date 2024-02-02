const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log the result', () => {
    // Arrange
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleLogSpy = sinon.spy(console, 'log');

    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));
    assert(consoleLogSpy.calledOnceWithExactly('The total is: 120'));

    // Clean up
    calculateNumberSpy.restore();
    consoleLogSpy.restore();
  });
});

