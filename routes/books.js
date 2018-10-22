const express = require('express');
const router = express.Router();
const Book = require('./../models/book.model');


router.get('/', (req, res) => {
    Book.find((err, book) => {
        if (err) throw err;
        res.send(book);
    });

});

router.post('/post', (req, res) => {
    let newBook = Book(defineBook(req.body));
    newBook.save((err) => {
        if (err) throw err;
        res.send(newBook);
    })
    res.send('hello');

});

router.get('/search', (req, res) => {
    let query = { _id: { $in: req.query.id } };
    Book.find(query, (err, book) => {
        if (err) throw err;
        res.send(book);
    });
});

function defineBook(req) {
    return {
        author: req.body.author,
        title: req.body.title,
        isbn: req.body.isbn,
        pages: req.body.pages,
        countryId: req.body.countryId,
        cityId: req.body.cityId,
        companyId: req.body.companyId,
        formatId: req.body.formatId,
        description: req.body.description,
        price: req.body.price
    }
}

module.exports = router;