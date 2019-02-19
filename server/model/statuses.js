var mongoose = require('mongoose');
var statusSchema = mongoose.Schema;


module.exports = mongoose.model('status_setting', new statusSchema({
    pro_status: String,
    status: String
}), 'status_setting');

