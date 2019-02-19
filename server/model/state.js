var mongoose = require('mongoose');
var stateSchema = mongoose.Schema;


module.exports = mongoose.model('state', new stateSchema({
    country_name: String,
    state_name:String
}), 'state');

