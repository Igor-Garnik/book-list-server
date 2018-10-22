const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const countryShema = new Shema({
    id: String,
    name: String
});

const Country = mongoose.model('Country', countryShema);

module.exports = Country;