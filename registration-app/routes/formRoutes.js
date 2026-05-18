const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');

// GET Page
router.get('/', (req, res) => {

    res.render('form', {
        encryptedPassword: ''
    });
});

// POST Generate Password
router.post('/generate', async (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    // Encrypt Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Apache .htpasswd format
    const htpasswd = `${username}:${hashedPassword}`;

    res.render('form', {
        encryptedPassword: htpasswd
    });
});

module.exports = router;