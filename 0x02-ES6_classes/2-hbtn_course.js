export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.checkVal(name, 'string', 'Name');
    this._length = this.checkVal(length, 1, 'Length');
    this._students = this.checkVal(students, [[]], 'Students');
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

  set name(name) {
    this._name = this.checkVal(name, 'string', 'Name');
  }

  set length(length) {
    this._length = this.checkVal(length, 1, 'Length');
  }

  set students(students) {
    this._students = this.checkVal(students, [[]], 'Students');
  }

  static checkVal(val, type, variable) {
    if (typeof (val) !== typeof (type)) {
      throw TypeError(`${variable} must be a ${type}`);
    }
    return val;
  }
}
