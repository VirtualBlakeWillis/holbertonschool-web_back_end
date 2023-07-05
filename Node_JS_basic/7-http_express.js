// small HTTP express server, same functionality as 5-http.js
const express = require('express');
const fs = require('fs').promises;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  let result = '';
  fs.readFile(process.argv[2], 'utf8')
    .then((data) => {
      const rows = data.split('\n').filter((row) => row);
      const headers = rows.shift().split(',');
      const fieldIndex = headers.indexOf('field');
      const firstNameIndex = headers.indexOf('firstname');
      const fields = [...new Set(rows.map((row) => row.split(',')[fieldIndex]))];
      result += 'This is the list of our students\n';
      result += `Number of students: ${rows.length}\n`;
      fields.forEach((field) => {
        const students = rows.filter((row) => row.split(',')[fieldIndex] === field);
        result += `Number of students in ${field}: ${students.length}. List: ${students.map((student) => student.split(',')[firstNameIndex]).join(', ')}\n`;
      });
      res.send(result);
    })
    .catch(() => {
      res.send('Cannot load the database');
    });
});

app.listen(1245);

module.exports = app;
