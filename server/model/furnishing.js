var mongoose = require('mongoose');
var furnishinghSchema = mongoose.Schema;


module.exports = mongoose.model('property_furnishing', new furnishinghSchema({
    property_furnishing: String,
    status: String
}), 'property_furnishing');

