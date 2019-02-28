// Express.js is for routes, import express for use in this file
const express = require('express');
const mongoose = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

//Create instance of express to help with routes / server
const app = express();

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB database
mongoose
  .connect(db)
  .then(() => {
    console.log('MongoDB Connected Gilberto')
  })
  .catch(err => console.log(err));

//Send this message on the "home page"
app.get('/', (req, res) => {
  res.send('Hello Gilberto! LOL');
});

// Use routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

//Run either on the port that Heroku uses or port 5000 when running locally
const port = process.env.PORT || 5000;

//Prints a message to the console telling me the app is listening / started
//We added the "server" script in package.json so that we do not have to restart the server
//to view changes to the file - we use nodemon so that we can simply refresh and observe
// the changes
app.listen(port, () => {
  console.log(`Server running on port ${port}...`)
});