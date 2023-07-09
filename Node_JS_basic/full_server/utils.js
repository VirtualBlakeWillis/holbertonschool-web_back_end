// readDatabase function

const fs = require('fs').promise;

function readDatabase(path) {
  return fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw new Error('Cannot load the database');

    const names = [];
    const rows = data.split('\n').filter((row) => row);
    const headers = rows.shift().split(',');
    const firstNameIndex = headers.indexOf('firstname');
    rows.forEach((row) => {
      const firstName = row.split(',')[firstNameIndex];
      names.push(firstName);
    });

    return (names);
});
}

module.exports = readDatabase;
