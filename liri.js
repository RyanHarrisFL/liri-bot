require("dotenv").config();

//Keys to access packages 
var axios = require("axios");
var fs = require("fs");
var moment = require("moment");
var Spotify = require("node-spotify-api");
var keys = require("./keys.js");

// Setting variables store value of key strokes 
var requestType = process.argv[2];
var nodeArgs = process.argv;

var artists = "";
var arr;

arr = artists.length;

console.log(artists);

switch (requestType) {
  case "concert-this":
    loopNames();
    bandsInTown();
    break;
  case "spotify-this-song":
    loopNames();
    spotifyThisSong();
    break;
  case "movie-this":
    loopNames();
    movieThis();
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
    for (i = 0; i < response.data.length; i++) {
      console.log("Name of the venue: " + response.data[0].venue.name);
      console.log("City: " + response.data[i].venue.city);
      console.log(
        "Date of the event: " + moment(response.data[i].datetime).format("L")
      );
    }
  });
}

//Spotify function that retrieves data object
function spotifyThisSong() {
  var spotify = new Spotify(keys.spotify);

  if (artists.length === 0) {
    spotify

      .search({ type: "track", query: "The Sign" })

      .then(function(response) {
        console.log("Artist(s): " + response.tracks.items[9].artists[0].name);
        console.log("Song: " + response.tracks.items[9].name);
        console.log("Album: " + response.tracks.items[9].album.name);
        console.log("Preview: " + response.tracks.items[9].preview_url);
      })
      .catch(function(err) {
        console.log(err);
      });
  } else {
    spotify

      .search({ type: "track", query: artists })

      .then(function(response) {
        console.log("Artist(s): " + response.tracks.items[0].artists[0].name);
        console.log("Song: " + response.tracks.items[0].name);
        console.log("Album: " + response.tracks.items[0].album.name);
        console.log("Preview: " + response.tracks.items[0].preview_url);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}

//Movie function that retrieves data object and parses data based on response.
function movieThis() {

  var queryUrl = "http://www.omdbapi.com/?t=" + artists + "&y=&plot=short&apikey=trilogy";

  axios.get(queryUrl).then(function(response){

    console.log("Movie Title: " + response.data.Title);
    console.log("Year: " + response.data.Year);
    console.log("IMBD Rating: " + response.data.Ratings[0].Value);
    console.log("Rotten Tomatoes Rating: " + response.data.Ratings[0].Value);
    console.log("Country: " + response.data.Country);
    console.log("Language: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);

  });

}