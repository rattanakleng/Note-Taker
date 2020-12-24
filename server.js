//Dependencie
const express = require("express");
const path = require("path");
const fs = require("fs");
// require("./public/assets/js/index.js")

const uniqid = require('uniqid');

//Setup the Express App
const app = express();
const PORT = process.env.PORT || 3000;

//Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// makes public folder available to user 
app.use(express.static('public'));

// Route
app.get("/api/notes", function (req, res) {

    // Use the fs module to read the file   
    fs.readFile("/api/notes", function (req, res) {
        fs.readFile(path.join(__dirname + "/db/db.json"), "utf8", function (err, data) {
            if (err) throw err;

            // Parse the file contents with JSON.parse() to get the real data
            let content = JSON.parse(dada);

            // Then send the paresed data back to the client with res.json();
            res.json(content);
        })
    })
});

//POST request update db.json
app.post("/api/notes", function (req, res) {

    // Acess the POSTed data in 'req.body
    let newNote = req.body;

    // Create newNote.id with uniqid api
    newNote.id = uniqid.time();

    // use fs module to read the file
    fs.readFile(path.join(__dirname + "/db/db.json"), "utf8", function (err, data) {
        if (err) throw err;

        // parse file contents with JSON.parse() to get real data and return as JSON
        let allNotes = JSON.parse(data);
        allNotes.push(newNote);
        let allNotestring = JSON.stringify(allNotes);

        // add new note to db.json and refresh page
        fs.writeFile(path.join(__dirname + "/db/db.json"), allNotesString, function (err) {
            if (err) throw err;
            res.json(allNotes);
        });
    });
});

