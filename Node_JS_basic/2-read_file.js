const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

    let lines = data.split('\n');
    lines = lines.slice(1, lines.length);
    console.log(`Number of students: ${lines.length}`);
    const students = {};
    for (const line of lines) {
      const student = line.split(',');
      if (!students[student[3]]) {
        students[student[3]] = [];
      }
      students[student[3]].push(student[0]);
    }
    for (const field in students) {
      if (field) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
