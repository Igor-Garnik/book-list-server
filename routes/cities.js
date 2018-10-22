const express = require('express');
const router = express.Router();
const City = require('./../models/city.model');


router.get('/', (req, res) => {
    City.find((err, book) => {
        if (err) throw err;
        res.send(book);
    });
});

router.get('/serch', (req, res) => {
    let query = { _id: { $in: req.query.id } };
    City.find(query, (err, city) => {
        if (err) throw err;
        res.send(city);
    });
})

router.post('/post', (req, res) => {
    let city = new City(req.body)
    city.save((err) => {
        if (err) throw err;
        res.status(201);
    })
})

router.delete('/delete', (req, res) => {
    let query = { _id: req.query.id };
    City.deleteOne(query, () => {
        if (err) throw err;
        res.status(200);
    })
});

module.exports = router;