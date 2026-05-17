const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

const auth = require('../middleware/auth');

// GET Form Page
router.get('/', auth, (req, res) => {

    res.render('form', {
        errors: [],
        oldData: {}
    });
});

// POST Form
router.post(
    '/submit',

    auth,

    [
        body('name')
            .isLength({ min: 3 })
            .withMessage('Name must be at least 3 characters'),

        body('email')
            .isEmail()
            .withMessage('Enter a valid email'),

        body('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters')
    ],

    (req, res) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()) {

            return res.render('form', {
                errors: errors.array(),
                oldData: req.body
            });
        }

        res.render('success', {
            name: req.body.name
        });
    }
);

module.exports = router;