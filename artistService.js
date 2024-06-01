const axios = require('axios');
const csvWriter = require('./csvWriter'); 
const randomArtists = require('./randomArtists.json'); 
const API_KEY = process.env.LASTFM_API_KEY;
const API_URL = 'http://ws.audioscrobbler.com/2.0/';

async function searchArtist(name) {
  try {
    let response = await axios.get(API_URL, {
      params: {
        method: 'artist.search',
        artist: name,
        api_key: API_KEY,
        format: 'json'
      }
    });

    let artists = response.data.results.artistmatches.artist;
    artists = artists.filter(artist => artist.name.toLowerCase() === name.toLowerCase());

    if (artists.length === 0) {
      const randomIndex = Math.floor(Math.random() * randomArtists.length);
      const randomName = randomArtists[randomIndex];

      response = await axios.get(API_URL, {
        params: {
          method: 'artist.search',
          artist: randomName,
          api_key: API_KEY,
          format: 'json'
        }
      });

      artists = response.data.results.artistmatches.artist;
      if (artists.length > 0) {
        artists = [artists[0]];
      }
    }

    return artists;
  } catch (error) {
    throw new Error('Error searching for artist');
  }
}

async function writeResultsToCSV(artists, file) {
  const content = artists.map(artist => ({
    name: artist.name,
    mbid: artist.mbid,
    url: artist.url,
    image_small: artist.image[0]['#text'],
    image: artist.image[1]['#text']
  }));
  await csvWriter.writeCSV(content, file);
}

module.exports = {
  searchArtist,
  writeResultsToCSV
};
