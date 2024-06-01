# Artist Search API

## Description

This application is a Node.js REST API that allows you to search for artists by name using the Last.fm API.
The search results can be saved to a user-specified CSV file. If no results are found, the application retrieves random artist names from a list and continues the search.

## Prerequisites

- Node.js and npm installed on your machine.
- A Last.fm API key. 

## Installation

1. Clone the repository:
   git clone https://github.com/NadhirCh/SearchArtist.git

2.npm install

3.Create the .env file and add your Last.fm API key 
LASTFM_API_KEY= YOUR_KEY

## Running the app
node index.js

## Using the API 

Postman : 
Create a GET request with the following url 
http://localhost:3000/api/artist/search?name=<artist_name>&filename=<csv_filename>

OR 

curl "http://localhost:3000/api/artist/search?name=Cher&filename=results.csv"





