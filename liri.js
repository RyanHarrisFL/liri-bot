require("dotenv").config();
var axios = require("axios");
var fs = require("fs");
var moment = require('moment');
var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

var requestType = process.argv[2];
var nodeArgs = process.argv;

var artists = "";
var arr = 0;

console.log(nodeArgs.length);

function artistsLength () {
  if (nodeArgs.length === 3) { 
    nodeArgs = ("The Sign");
  }
}

switch (requestType) {
  case "concert-this":
    artistsLength();
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

arr = artists.length;
console.log(arr);


 console.log(artists);

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

    console.log(JSON.stringify("Artist(s): " + response.tracks.items[0].artists[0].name));
    console.log(JSON.stringify("Song: " + response.tracks.items[0].name));
    console.log(JSON.stringify("Album: " + response.tracks.items[0].album.name));
    console.log(JSON.stringify("Preview: " + response.tracks.items[0].preview_url));

  })
  .catch(function(err) {
    console.log(err);
  });

}       