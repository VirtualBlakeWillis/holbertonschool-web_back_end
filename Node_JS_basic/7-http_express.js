const express = require('express');
const app = express();
const port = 1245;
const fs = require('fs').promises;

function countStudents(path) {
  let result = '';
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
      result += `Number of students: ${studentCount}\n`;
      for (const field in students) {
        if (field) {
          result += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
        }
      }
      return result;
    })
    .catch(() => {
      throw new Error('Cannot load the database');
    });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});
app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2], res)
    .then((data) => {
      res.end(data);
    })
    .catch((error) => {
      res.end(error.message);
    });
});

app.listen(port);

module.exports = app;
