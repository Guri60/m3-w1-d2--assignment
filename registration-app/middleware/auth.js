const basicAuth = require('express-basic-auth');

const auth = basicAuth({
    users: {
        admin: '1234'
    },
    challenge: true
});

module.exports = auth;