const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    } else {
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
    }
  });
}

module.exports = countStudents;
