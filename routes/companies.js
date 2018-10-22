const express = require('express');
const router = express.Router();
const Company = require('./../models/company.model');

router.get('/', (req, res) => {
    Company.find((err, company) => {
        if (err) throw err;
        res.send(company);
    });
});

router.get('/search', (req, res) => {
    let query = { _id: { $in: req.query.id } };
    Company.find(query, (err, company) => {
        if (err) throw err;
        res.send(company);
    });
})

router.post('/post', (req, res) => {
    let company = new Company(req.body)
    company.save((err) => {
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