var mongoose = require('mongoose');
var villageSchema = mongoose.Schema;


module.exports = mongoose.model('village', new villageSchema({
    country_name: String,
    state_name: String,
    district_name: String,
    mandal_name: String,
    village_name:String
}), 'village');
