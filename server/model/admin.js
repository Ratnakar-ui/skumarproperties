var mongoose=require('mongoose');
var adminSchema=mongoose.Schema;


module.exports=mongoose.model('admin',new adminSchema({
    'email':String,
    'password':String,
    '_id':String
}),'admin');