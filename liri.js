require("dotenv").config();

var fs = require("fs");

var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);

var requestType = process.argv[2];
var requestValue = process.argv[3];

var axios = require("axios");

var queryUrl = "https://rest.bandsintown.com/artists/" + requestType + "/events?app_id=codingbootcamp"

axios.get(queryUrl).then(
    function(response) {
      console.log(response.data);
    }
  );
  