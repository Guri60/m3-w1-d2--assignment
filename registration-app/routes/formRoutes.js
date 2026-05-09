const express = require('express');
const router = express.Router();

const { body, validationResult } = require('express-validator');

// GET Form Page
router.get('/', (req, res) => {

    res.render('form', {
        errors: [],
        oldData: {}
    });
});

// POST Form Data
router.post(
    '/submit',

    [
        body('name')
            .isLength({ min: 3 })
            .withMessage('Name must be at least 3 characters'),

        body('email')
            .isEmail()
            .withMessage('Please enter a valid email'),

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