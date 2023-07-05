function countStudents(path) {
  /*
  The script should attempt to read the database file synchronously
If the database is not available, it should throw an error with the text Cannot load the database
If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
CSV file can contain empty lines (at the end) - and they are not a valid student!
  */
  const fs = require('fs');
  
  fs.readFile(path, 'utf8', (err, data) => {
    // If the database is not available, it should throw an error with the text Cannot load the database
    if (err) throw new Error('Cannot load the database');
    // If the database is available, it should log the following message to the console Number of students: NUMBER_OF_STUDENTS
    const lines = data.split('\n');
    const students = lines.filter((line) => line).map((line) => line.split(','));
    const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0;
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    // It should log the number of students in each field, and the list with the following format: Number of students in FIELD: 6. List: LIST_OF_FIRSTNAMES
    const fields = {};
    for (const student of students) {
      if (!fields[student[3]]) fields[student[3]] = [];
      fields[student[3]].push(student[0]);
    }
  });
}