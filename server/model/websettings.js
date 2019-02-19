var mongoose = require('mongoose');
var websettingsSchema = mongoose.Schema;


module.exports = mongoose.model('websettings', new websettingsSchema({
    address: String,
    email: String,
    contact: String,
    about: String,
    ourvision: String
}), 'websettings');