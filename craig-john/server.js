'use strict';

//TODO: Finish out the server code according to the instructions in the lab README
var cowsay = require('cowsay');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.get('/new', (req,res) => {
  console.log('Hello');
  res.sendFile('public/new.html', {root: '.'});
})
// REVIEW: POST route needs to parse the body passed in with the request.
// POST middleware


app.use(express.urlencoded({ extended: true }));

app.use(express.static('./public'));
//files are stored in public directory to organize them for access when requesting pages. To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

app.get('*', (req,res) => {
  res.status(404).send('404 something went wrong');
});

app.listen(PORT, () => {
  console.log(cowsay.say({
    text : `Server is running on port ${PORT}!`
  }));
});


app.post('/articles', (request, response) => {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.status(201).json(request.body);
});
