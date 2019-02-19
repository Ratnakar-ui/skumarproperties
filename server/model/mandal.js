var mongoose = require('mongoose');
var mandalSchema = mongoose.Schema;


module.exports = mongoose.model('mandal', new mandalSchema({
    country_name: String,
    state_name: String,
    district_name: String,
    mandal_name: String
}), 'mandal');

