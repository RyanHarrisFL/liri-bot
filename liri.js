require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var moment = require('moment');

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var requestType = process.argv[2];
var nodeArgs = process.argv;

var artists = "";

switch (requestType) {
  case "concert-this":
    bandsInTown();
    break;
}

//Bands In Town Function
function bandsInTown() {
  for (var i = 3; i < nodeArgs.length; i++) {
    if (i > 3 && i < nodeArgs.length) {
      artists = artists + "+" + nodeArgs[i];
    } else {
      artists += nodeArgs[i];
    }
  }

  var queryUrl =
    "https://rest.bandsintown.com/artists/" +
    artists +
    "/events?app_id=codingbootcamp";

  axios.get(queryUrl).then(function(response) {
    for (i = 0; i < response.data.length; i++){
      console.log("Name of the venue: " + response.data[0].venue.name);
      console.log("City: " + response.data[i].venue.city);
      console.log("Date of the event: " + moment(response.data[i].datetime).format("L"));
      }
  });
}


function spotifyThisSong() {



}