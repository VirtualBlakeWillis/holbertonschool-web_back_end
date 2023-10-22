const express = require('express');
const app = express();
const port = 1245;
const router = require('./routes/index');

app.use('/', router);
app.use('/students', router);
app.use('/students/:major', router);
app.listen(port);

module.exports = app;