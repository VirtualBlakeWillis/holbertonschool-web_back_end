// creating a simple HTTP server using Node's HTTP module
const http = require('http');
const countStudents = require('./3-read_file_async');

const port = 1245;
// use local host
const host = '127.0.0.1';

const app = http.createServer((req, res) => {

  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(process.argv[2])
      .then((data) => {
        res.end(data);
      })
      .catch((error) => {
        res.end(error.message);
      });
  }
});

app.listen(port, host);

module.exports = app;
