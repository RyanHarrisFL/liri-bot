# Liri Bot Application 

**Contact:** ryanharrisfl@gmail.com

**Technologies Used** 
* node.js
* Javascript
* API queries
* NPM Packages (axios, dotenv, spotify, moment)

**Purpose of Project:** This project is getting us comfortable utilizing npm packages for Node.js. The packages used in this project include the Axios package, Spotify, Bands In Town and OMDB NPM packages and APIs. 

**What it Does:** Using the below commands in the terminal the application will either (1) retreive upcoming concert information for your favorite band, (2) search for artist album information for a particular song, (3) find information about a particular movie or (4) do one of the 3 previous commands based on what is entered into the random.txt file. 

**Commands for Terminal**
* node liri.js concert-this <artist/band name here>
* node liri.js spotify-this-song <song name here> (If no song is entered a default selection with be provided)
* node liri.js movie-this <movie name here> (If no movie is entered a default selection with be provided)
* node liri.js do-what-it-says

## Commands In Action 

### Bands In Town

1. node liri.js concert-this <artist/band name here>

![Alt Text](https://github.com/RyanHarrisFL/liri-node-app/blob/master/assets/concert-this.gif)

### Spotify

2. node liri.js spotify-this-song <song name here>

![Alt Text](https://github.com/RyanHarrisFL/liri-node-app/blob/master/assets/spotify-purple-rain.gif)

3. node liri.js spotify-this-song (WITHOUT SONG SELECTION)

![Alt Text](https://github.com/RyanHarrisFL/liri-node-app/blob/master/assets/spotify-no-choice-the-sign-default.gif)

### OMDB Movie Database

4. node liri.js movie-this <movie name here>

![Alt Text](https://github.com/RyanHarrisFL/liri-node-app/blob/master/assets/movie-this-fellowship.gif)

5. node liri.js movie-this (WITHOUT MOVIE SELECTION)

![Alt Text](https://github.com/RyanHarrisFL/liri-node-app/blob/master/assets/movie-this-default-mr-nobody.gif)

### Do What It Says

6. node liri.js do-what-it-says (with Spotify selection in Random.txt)

![Alt Text](https://github.com/RyanHarrisFL/liri-node-app/blob/master/assets/do-what-it-says-spotify.gif)

7. node liri.js do-what-it-says (with Movie selection in Random.txt)

![Alt Text](https://github.com/RyanHarrisFL/liri-node-app/blob/master/assets/do-what-it-says-movie.gif)


## Do It Yourself

Follow the instructions below if you would like to run the application in your terminal. 

1. Clone down the respoitory to a place on your local machine
2. Open root folder in your code editor
3. In your terminal type "npm install" to install all npm packages.
4. The Spotify API requires you sign up as a developer to generate the necessary credentials. You can follow these steps in order to generate a **client id** and **client secret**:

   * Step One: Visit <https://developer.spotify.com/my-applications/#!/>

   * Step Two: Either login to your existing Spotify account or create a new one (a free account is fine) and log in.

   * Step Three: Once logged in, navigate to <https://developer.spotify.com/my-applications/#!/applications/create> to register a new application to be used with the Spotify API. You can fill in whatever you'd like for these fields. When finished, click the "complete" button.

   * Step Four: On the next screen, scroll down to where you see your client id and client secret. Copy these values down somewhere, you'll need them to use the Spotify API and the [node-spotify-api package](https://www.npmjs.com/package/node-spotify-api).

5. Next, in the root folder create a file named `.env`in the roo, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```js
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

```
6. Use the following commands to retrieve your requested data. Have fun!

* node liri.js concert-this <artist/band name here>
* node liri.js spotify-this-song <song name here> (If no song is entered a default selection with be provided)
* node liri.js movie-this <movie name here> (If no movie is entered a default selection with be provided)
* node liri.js do-what-it-says


