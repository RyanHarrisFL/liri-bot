require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var moment = require('moment');
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");
//

var requestType = process.argv[2];
var nodeArgs = process.argv;

var artists = "";


switch (requestType) {
  case "concert-this":
    loopNames();
    bandsInTown();
    break;
  case "spotify-this-song":
    loopNames();
    spotifyThisSong();
    break;
}

function loopNames() {
for (var i = 3; i < nodeArgs.length; i++) {
  if (i > 3 && i < nodeArgs.length) {
    artists = artists + "+" + nodeArgs[i];
  } else {
    artists += nodeArgs[i];
  }
}
}

//Bands In Town Function that retrieves data object
function bandsInTown() {
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

//Spotify function that retrieves data object
function spotifyThisSong() {
  var spotify = new Spotify(keys.spotify);

  spotify
  .search({ type: 'track', query: artists })
  .then(function(response) {
    console.log(JSON.stringify(response.tracks.items[0].artists[0].name));
    console.log(JSON.stringify(response.tracks.items[0].name));
    console.log(JSON.stringify(response.tracks.items[0].album.name));
    console.log(JSON.stringify(response.tracks.items[0].preview_url));
    
    //console.log(response.tracks);
  })
  .catch(function(err) {
    console.log(err);
  });

}