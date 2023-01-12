/*eslint valid-typeof: ["error", { "requireStringLiterals": false }]*/
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.checkVal(name, 'string', 'Name');
    this._length = HolbertonCourse.checkVal(length, 'number', 'Length');
    this._students = HolbertonCourse.checkVal(students, 'object', 'Students');
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
    this._name = HolbertonCourse.checkVal(name, 'string', 'Name');
  }

  set length(length) {
    this._length = HolbertonCourse.checkVal(length, 'number', 'Length');
  }

  set students(students) {
    this._students = HolbertonCourse.checkVal(students, 'object', 'Students');
  }

  static checkVal(val, type, variable) {
    if (typeof (val) !== type) {
      throw TypeError(`${variable} must be a ${type}`);
    }
    return val;
  }
}
