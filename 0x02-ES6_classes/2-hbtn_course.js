export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
      throw new TypeError('Name must be a number');
    }
    if (Array.isArray(students)) {
      this.arrayIsOfStrings(students);
      this._students = students;
    }

    this._length = length;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    if (typeof value === 'string') {
      this._name = value;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  set length(value) {
    if (typeof length === 'number') {
      this._length = value;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  set students(value) {
    if (Array.isArray(value)) {
      this.arrayIsOfStrings(value);
      this._students = value;
    }
  }

  arrayIsOfStrings(array) {
    array.forEach(element => {
      if (typeof element !== 'string') {
        throw new TypeError('Students must be an array of strings');
      }
    });
  }
}
