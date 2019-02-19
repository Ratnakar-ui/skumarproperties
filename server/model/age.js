var mongoose = require('mongoose');
var ageSchema = mongoose.Schema;


module.exports = mongoose.model('age_setting', new ageSchema({
    pro_age: String,
    status: String
}), 'age_setting');

