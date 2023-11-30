import Currency from './3-currency.js';

export default class Pricing {
  constructor (amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be a known currency type');
    }
    this._amount = amount;
    this._currency = currency;
  }

  get amount () {
    return this._amount;
  }

  get currency () {
    return this._currency;
  }

  displayFullPrice () {
    return `${this.amount} ${this.currency.displayFullCurrency()}`;
  }

  set amount (value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value;
  }

  set currency (value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be a known currency type');
    }
    this._currency = value;
  }
}
