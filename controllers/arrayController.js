const express = require('express');
const router = express.Router();
const arrayService = require('../services/arrayService');

// api/array/flatten-array
// accepts: as post data an array of arrays of integers
// returns: flattened array of integers
router.post('/flatten-array', (req, res) => {
    arrayService.flattenArray(req.body && req.body.data)
        .then((data) => {
                res.status(200).send({ data, error: null });
        })
        .catch((err) => {
            res.status(err.statusCode || 500).send({ data: null, error: err.message || err });
        });
});

module.exports = router;
