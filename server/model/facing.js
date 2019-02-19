var mongoose = require('mongoose');
var facingSchema = mongoose.Schema;


module.exports = mongoose.model('facing_setting', new facingSchema({
    property_facing: String,
    status: String
}), 'facing_setting');