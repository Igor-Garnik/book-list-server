const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const cityShema = new Shema({
    id: Number,
    countryId: String,
    name: String
});

const City = mongoose.model('City', cityShema);

module.exports = City;