
const express = require('express');
const app = express();

const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;



//set router through express
const router = require('express').Router();

//use express and make path to db
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'))
});

// add notes thru post method
app.post('/api/notes', (req, res) => {
    let newNote = req.body
    let addNote = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'))
    let noteLength = addNote.length.toString()
    newNote.id = noteLength
    addNote.push(newNote)
    fs.writeFileSync('./db/db.json', JSON.stringify(addNote))
    res.json(addNote)
});


// Request & Reponse
app.get('/', (req, res) =>
    res.sendFile(path.join(__dirname, './public/index.html'))
);

// Listening notification within console
app.listen(PORT, () => {
    console.log(`App listening at http//localhost:${PORT}`)
});