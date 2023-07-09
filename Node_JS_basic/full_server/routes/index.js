// linking routes to classes

const express = require('express');
const AppController = require('../controllers/AppController');
const StudentsController = require('../controllers/StudentsController');

const router = express.Router();

router.get('/', (req, res) => AppController.getHomepage(req, res));

router.get('/students', (req, res) => StudentsController.getAllStudents(req, res));

module.exports = router;
