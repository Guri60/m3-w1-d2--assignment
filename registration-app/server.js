const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

// Routes
const formRoutes = require('./routes/formRoutes');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve Static Assets
app.use(express.static(path.join(__dirname, 'public')));

// Pug Setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.use('/', formRoutes);

// Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});