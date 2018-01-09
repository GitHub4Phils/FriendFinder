// Dependencies
// =============================================================
// var express = require("express");
// var bodyParser = require("body-parser");
var path = require("path");
module.exports = function(donkey){


// // Sets up the Express App
// // =============================================================
 //var app = express();

var friends = require("../data/friends.js");


// Homepage route
donkey.get("/", function(req, res) {
  // res.send("Welcome to the Friend FinderPage!")
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

// survey routes
donkey.get("/survey", function(req, res) {
  // res.send("Welcome to the Friend FinderPage!")
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});
}
