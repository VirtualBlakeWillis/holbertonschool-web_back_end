const fs = require('fs').promises;

function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((data) => {
      const lines = data.split('\n').slice(1);
      const students = {};
      let studentCount = 0;
      for (const line of lines) {
        const student = line.split(',');
        if (student[0] !== '') {
          if (!students[student[3]]) {
            students[student[3]] = [];
          }
          students[student[3]].push(student[0]);
          studentCount += 1;
        }
      }
      console.log(`Number of students: ${studentCount}`);
      for (const field in students) {
        if (field) {
          console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
        }
      }
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
