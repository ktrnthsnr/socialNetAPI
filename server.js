//import express.js server module
const express = require('express');
//instantiate a server
const app = express();
//set a port
const PORT = process.env.PORT || 3002;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//importing routes
app.use(require('./routes'));

// console log port listening to
app.listen(PORT, () => console.log(`🌍 Connected on localhost PORT : ${PORT}`));
