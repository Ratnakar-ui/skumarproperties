var mongoose = require('mongoose');
var parkingSchema = mongoose.Schema;


module.exports = mongoose.model('property_parking', new parkingSchema({
    property_parking: String,
    status: String
}), 'property_parking');