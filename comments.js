// Create a web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = []; // In-memory comments storage

app.use(bodyParser.json());