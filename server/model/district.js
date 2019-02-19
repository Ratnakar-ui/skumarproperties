var mongoose = require('mongoose');
var districtSchema = mongoose.Schema;


module.exports = mongoose.model('district', new districtSchema({
    country_name: String,
    state_name:String,
    district_name: String
}), 'district');

