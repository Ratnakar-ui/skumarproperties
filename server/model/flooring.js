var mongoose = require('mongoose');
var flooringSchema = mongoose.Schema;


module.exports = mongoose.model('flooring_setting', new flooringSchema({
    property_flooring: String,
    status: String
}), 'flooring_setting');