'use strict';

//TODO: Finish out the server code according to the instructions in the lab README

//Load Express
const express = require('express');
//Instantiate Express so that we can use its functionality
const app = express();
//Designate a port to serve our app on
const PORT = process.env.PORT || 3000;

// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware
app.use(express.urlencoded({ extended: true }));

app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});

// Home page
app.get('/', (req, res) => {
  res.sendFile('public/index.html', { root: '.'});
});

//Include a comment to explain why our files are in a "public" directory now and how ExpressJS serves our local files.
// Our files are in a separate directory to keep server files apart from other files and scripts. In the line below we tell ExpressJS where to find the local files
// Define which directory we will serve files from
app.use(express.static('./public'));

// Here is one way to set up a route... bats...
app.get('/new', (req, res) => {
  res.sendFile('public/new.html', { root: '.'});
});

// Let's 404 everything except for our routes and index.html
app.get('*', (req, res) => {
  res.status(404);
  res.sendFile('public/404.html', { root: '.'});
});

// Include a message to let you know on which port your server is running.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}!`);
});