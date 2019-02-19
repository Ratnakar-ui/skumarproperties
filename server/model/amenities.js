var mongoose = require('mongoose');
var amenitiesSchema = mongoose.Schema;


module.exports = mongoose.model('amenities_setting', new amenitiesSchema({
    pro_amenities: String,
    status: String
}), 'amenities_setting');

