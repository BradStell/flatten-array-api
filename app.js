const express = require('express');
const apiController = require('./controllers');
const path = require('path');
const app = express();

// get port from environment variable or set to 7777
const PORT = process.env.PORT || 7777;

// attatch api controller/router to endpoints prefixed with '/api'
app.use('/api', apiController);

// serve files in public statically (needed for css file)
app.use(express.static(path.join(__dirname, 'public')));

// respond with api info page
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')));

// error route if something went wrong in middleware
// most likely issue: parsing json data that was formed incorrectly
app.use((err, req, res, next) =>
    res.status(500).send({ data: null, error: `Error processing request body: ${err.message}`})
);

// start server
app.listen(PORT, () => console.log(`App started on port ${PORT}`));

module.exports = app;
