var mongoose = require('mongoose');
var possessionSchema = mongoose.Schema;


module.exports = mongoose.model('possession_setting', new possessionSchema({
    pro_possession: String,
    status: String
}), 'possession_setting');

