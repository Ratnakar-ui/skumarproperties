var mongoose = require('mongoose');
var layoutSchema = mongoose.Schema;


module.exports = mongoose.model('layout_setting', new layoutSchema({
    layout_name: String,
    layout_files: String,
    status: String
}), 'layout_setting');

