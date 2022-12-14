const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;

let db = require('./db/db.json')

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);
app.use('/', html);

// Listening notification within console
app.listen(PORT, () => {
    console.log(`App listening at http//localhost:${PORT}`)
});