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
    let newBook = new Book(defineBook(req.body));
    newBook.save((err) => {
        if (err) throw err;
        res.send(newBook);
    })

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
        author: req.author,
        title: req.title,
        isbn: req.isbn,
        pages: req.pages,
        countryId: req.countryId,
        cityId: req.cityId,
        companyId: req.companyId,
        formatId: req.formatId,
        description: req.description,
        price: req.price
    }
}

module.exports = router;