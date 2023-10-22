const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    let result = 'This is the list of our students\n';
    let total = 0;
    readDatabase(process.argv[2])
      .then((data) => {
        for (const field in data) {
          if (field) {
            total += data[field].length;
          }
        }
        result += `Number of students: ${total}\n`;
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
      });
    }
  }
}

module.exports = StudentsController;