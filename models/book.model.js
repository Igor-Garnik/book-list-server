const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const bookShema = new Shema({
    author: String,
    title: String,
    isbn: String,
    pages: Number,
    countryId: String,
    cityId: String,
    companyId: String,
    formatId: String,
    description: String,
    price: Number
});

const Book = mongoose.model('Book', bookShema);

module.exports = Book;