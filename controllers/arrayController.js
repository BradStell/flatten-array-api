const express = require('express');
const arrayService = require('../services/arrayService');
const router = express.Router();

// api/array/flatten-array
// accepts: as post data an array of arrays of integers
// returns: flattened array of integers
router.post('/flatten-array', (req, res) => {

    let array = [];

    if (req.body instanceof Array) {
        // If array was sent as the body
        array = req.body;
    } else if (req.body && req.body.data && req.body.data instanceof Array) {
        // If array was sent in JSON object in data property
        array = req.body.data;
    } else {
        // Array was not sent in valid form to server
        res.status(400).send({ data: null, error: 'Incorrect data format'});
        return;
    }

    arrayService.flattenArray(array)
        .then((data) => {
            res.status(200).send({ data, error: null });
        })
        .catch((err) => {
            res.status(err.statusCode || 500).send({ data: null, error: err.message || err });
        });
});

module.exports = router;
