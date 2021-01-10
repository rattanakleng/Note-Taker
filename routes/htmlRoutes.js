const path = require("path");

module.exports = function (app) {

    // Basic route that sends the user to the AJAX Page
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname + "/public/index.html"));
    });

    // route that send notes.html to user
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname + "/public/notes.html"));
    });
};