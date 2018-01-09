// Dependencies
// =============================================================
// var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app){

// Sets up the Express App
// =============================================================
// var app = express();

// Get all friends
app.get("/all", function(req, res) {
  res.json(friends);
});

// Search for Specific friends (or all friends) - provides JSON
app.get("/api/:friends?", function(req, res) {
  var chosen = req.params.friends;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < friends.length; i++) {
      if (chosen === friends[i].name) {
        return res.json(friends[i]);
      }
    }
    return res.json(false);
  }
  return res.json(friends);
});

// Create New Friend - takes in JSON input
app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newfriend = req.body;

  console.log(newfriend);

  // We then add the json the user sent to the friend array
  characters.push(newcharacter);

  // We then display the JSON to the users
  res.json(newfriend);
});

}