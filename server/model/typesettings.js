var mongoose = require('mongoose');
var typeSchema = mongoose.Schema;


module.exports = mongoose.model('typesettings', new typeSchema({
    pro_type: String,
    show_amenties: String,
    status: String
}), 'typesettings');

