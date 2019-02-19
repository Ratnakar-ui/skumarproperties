var mongoose = require('mongoose');
var mesurementsSchema = mongoose.Schema;

module.exports = mongoose.model('mesurements_setting', new mesurementsSchema({
    property_measurments: String,
    status: String
}), 'mesurements_setting');