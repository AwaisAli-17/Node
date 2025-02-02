const mongoose = require('mongoose');
const schema = mongoose.Schema;

const users = new schema({
    firstName: {type:String, required: true, maxlength: 250},
    lastName: {type:String, required: true, maxlength: 250} ,
    phoneNum: {type:Number, required: true, maxlength: 250} ,
    email: {type:String, required: true, maxlength: 250}
})

module.exports = mongoose.model("Users", users)