const express = require('express');
const bodyParser = require('body-parser');
const arrayController = require('./arrayController');
const router = express.Router();

// json parsing middleware
const jsonParser = bodyParser.json();

// array controller route
// common array functionality
router.use('/array', jsonParser, arrayController);

module.exports = router;
