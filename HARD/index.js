'use strict';

const express = require('express');
// const bodyParser = require ('body-parser'); // Allows you to take in import requests
const app = express();

app.use(express.json());

const usersRoutes = require('./routes/users.js') 

app.use('/', usersRoutes); // it allow us to grab the routes we have created in the routes folder


// Listen on PORT 5000 or other specified value
const PORT = 5000 || process.argv.PORT;



// app.use(bodyParser.json()); //it initializes body-parser & it tells our app that it will be using json data



app.listen(PORT);