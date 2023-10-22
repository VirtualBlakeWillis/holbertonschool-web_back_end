const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    let result = 'This is the list of our students\n';
    readDatabase(process.argv[2])
      .then((data) => {
        for (const field in data) {
          if (field) {
            result += `Number of students in ${field}: ${data[field].length}. List: ${data[field].join(', ')}\n`;
          }
        }
        response.status(200);
        response.send(result);
      })
      .catch((error) => {
        response.status(500);
        response.send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const { major } = request.params;
    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).send('Major parameter must be CS or SWE');
    } else {
      readDatabase(process.argv[2])
        .then((data) => {
          const students = data[major];
          response.status(200).send(`List: ${students.join(', ')}`);
        })
        .catch(() => {
          response.status(500).send('Cannot load the database');
        });
    }
  }
}

module.exports = StudentsController;
