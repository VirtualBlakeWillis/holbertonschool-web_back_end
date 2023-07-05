// reading a file asynchronously with Node JS

const fs = require('fs');

function countStudents(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    // error if not avalible
    if (err) throw new Error('Cannot load the database');

    const rows = data.split('\n').filter((row) => row);
    const headers = rows.shift().split(',');
    const fieldIndex = headers.indexOf('field');
    const firstNameIndex = headers.indexOf('firstname');
    // number of studdents
    console.log(`Number of students: ${rows.length}`);

    // log the number of students in each field, with the following format:
    // Number of students in <field>: <number>. List: <firstname1>, <firstname2>, ...
    const fields = {};
    rows.forEach((row) => {
      const field = row.split(',')[fieldIndex];
      const firstName = row.split(',')[firstNameIndex];
      if (!fields[field]) {
        fields[field] = {
          count: 0,
          students: [],
        };
    }
      fields[field].count += 1;
      fields[field].students.push(firstName);
    });

    for (const field in fields) {
      if (field) {
        const n = fields[field].count;
        const names = fields[field].students.join(', ');
        console.log(`Number of students in ${field}: ${n}. List: ${names}`);
      }
    }
  });
}

module.exports = countStudents;