const mongoose = require('mongoose');
const Shema = mongoose.Schema;

const companyShema = new Shema({
    id: Number,
    cityId: String,
    name: String
});

const Company = mongoose.model('Company', companyShema);

module.exports = Company;