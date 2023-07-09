// Student Controller class

const readDatabase = require('../utils');

class StudentsController {
  static getAllStudents(request, response) {
    response.status(200).send('This is the list of our students');
    data = readDatabase(process.argv[2]);
    
  }
}

module.exports = StudentsController;
