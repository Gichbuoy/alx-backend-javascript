export default class Currency {
  constructor (code, name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get name () {
    return this._name;
  }

  get code () {
    return this._code;
  }

  displayFullCurrency () {
    return `${this.name} (${this.code})`;
  }

  set name (value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set code (value) {
    if (typeof code === 'number') {
      this._code = value;
    } else {
      throw new TypeError('Code must be a string');
    }
  }
}
