const express = require('express');
const router = express.Router();
const Format = require('./../models/format.model');

router.get('/', (req, res) => {
    Format.find((err, country) => {
        if (err) throw err;
        res.send(country);
    });
});

router.get('/search', (req, res) => {
    let query = { _id: { $in: req.query.id } };
    Format.find(query, (err, format) => {
        if (err) throw err;
        res.send(format);
    });
})

router.post('/post', (req, res) => {
    let format = new Format(req.body)
    format.save((err) => {
        if (err) throw err;
        res.status(201);
    })
})

router.delete('/delete', (req, res) => {
    let query = { _id: req.query.id };
    Format.deleteOne(query, () => {
        if (err) throw err;
        res.status(200);
    })
});

module.exports = router;