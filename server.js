//Dependencie
const express = require("express");

//Setup the Express App
const app = express();
const PORT = process.env.PORT || 3000;

//Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// makes public folder available to user 
app.use(express.static("public"));

// Route
// call back api routes
require("./routes/apiRoutes")(app);

//call back html routes
require("./routes/htmlRoutes")(app);

//start the server to begin listening
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

