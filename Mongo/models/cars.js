const mongoose = require("mongoose");
var schema = mongoose.Schema;

var cars = new schema({
    brand: {type:String, required: true, maxlength: 200},
    model: {type:String, required: true, maxlength: 200},
    color: {type:String, required: true, maxlength: 200},
    year: {type:String, required: true, maxlength: 200}
})

module.exports = mongoose.model("Cars",cars);

