// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

module.exports = app;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


//var friends = require("./app/data/friends.js");


// Homepage route
// app.get("/", function(req, res) {
//   // res.send("Welcome to the Friend FinderPage!")
//   res.sendFile(path.join(__dirname, "./app/public/home.html"));
// });

// // survey routes
// app.get("/survey", function(req, res) {
//   // res.send("Welcome to the Friend FinderPage!")
//   res.sendFile(path.join(__dirname, "./app/public/survey.html"));
// });


// Routes
// =============================================================
var htmlRoutes = require("./app/routing/htmlRoutes.js")(app);
var apiRoutes = require("./app/routing/apiRoutes.js")(app);


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});




// FRIENDS DATA
// =============================================================
var friends = [
  {
    name: 'Jason',
    photo: 'http://www3.pictures.zimbio.com/mp/02jN6t8s8CIl.jpg',
    scores: [5, 4, 3, 4, 2,1 , 5, 3, 4,2]
  },
  {
    name: 'Guillaume',
    photo: 'https://images-na.ssl-images-amazon.com/images/M/MV5BNjM1MTk0NTk4NF5BMl5BanBnXkFtZTcwMDY0NzU0Nw@@._V1_SY1000_CR0,0,666,1000_AL_.jpg',
    scores: [4, 5, 2, 1, 4,1 , 3, 5, 4,1]
  },
  {
    name: 'Kiera',
    photo: 'https://pmcdeadline2.files.wordpress.com/2014/10/knightly.jpg?w=446&h=299&crop=1',
    scores: [2, 4, 5, 2, 4,1 , 2, 3, 1,1]
  },
  {
    name: 'James',
    photo: 'http://s3.amazonaws.com/digitaltrends-uploads-prod/2017/06/james-mcavoy-charles-xavier.jpg',
    scores: [3, 1, 4, 3, 5,1 , 2, 5, 4,1]
  }
];


