const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

// Import Router
const formRoutes = require('./routes/formRoutes');

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Static Folder
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