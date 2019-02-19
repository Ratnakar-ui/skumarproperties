var mongoose = require('mongoose');
var countrySchema = mongoose.Schema;


module.exports = mongoose.model('country', new countrySchema({
    country_name: String
}), 'country');

