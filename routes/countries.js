const express = require('express');
const router = express.Router();
const Country = require('./../models/country.model');

router.get('/', (req, res) => {
    Country.find((err, country) => {
        if (err) throw err;
        res.send(country);
    });
});

router.get('/search', (req, res) => {
    let query = { _id: { $in: req.query.id } };
    Country.find(query, (err, country) => {
        if (err) throw err;
        res.send(country);
    });
})

router.post('/post', (req, res) => {
    let country = new Country(req.body)
    country.save((err) => {
        if (err) throw err;
        res.status(201);
    })
})

router.delete('/delete', (req, res) => {
    let query = { _id: req.query.id };
    Company.deleteOne(query, () => {
        if (err) throw err;
        res.status(200);
    })
});

module.exports = router;