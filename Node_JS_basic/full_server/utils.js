const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

function readDatabase(path) {
  return readFile(path, 'utf8').then((data) => {
    const students = {};
    const lines = data.split('\n').slice(1);
    for (const line of lines) {
      const student = line.split(',');
      if (student[0] !== '') {
        if (!students[student[3]]) {
          students[student[3]] = [];
        }
        students[student[3]].push(student[0]);
      }
    }
    return students;
  })
  .catch((err) => {
    throw new Error('Cannot load the database');
  });
}

module.exports = readDatabase;
