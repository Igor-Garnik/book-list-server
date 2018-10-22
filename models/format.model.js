const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const formatShema = new Shema({
    id: Number,
    name: String
});

const Format = mongoose.model('Format', formatShema);

module.exports = Format;