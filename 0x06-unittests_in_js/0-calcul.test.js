const calculateNumber = require("./0-calcul.js");
const assert = require('assert');

describe('calculateNumber', () => {
    it('should round and sum two positive numbers', () => {
        assert.equal(calculateNumber(15.78, 2), 18);
        assert.equal(calculateNumber(1.2, 0), 1);
        assert.equal(calculateNumber(3.5, 2), 6);
    });

    it('should round and sum two negative numbers', () => {
        assert.equal(calculateNumber(2, 15.78), 18);
        assert.equal(calculateNumber(0, 1.2), 1);
        assert.equal(calculateNumber(2, 3.5), 6);
    });

    it('should round and sum a positive and negative numbers', () => {
        assert.equal(calculateNumber(15.78, 2.5), 19);
        assert.equal(calculateNumber(1.2, 0.2), 1);
        assert.equal(calculateNumber(3.5, 2.7), 7);
    });
})
