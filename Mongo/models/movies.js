var mongoose = require("mongoose");
var schema = mongoose.Schema;
var movieSchema = new schema({
    title: {type:String, required: true, maxlength:150},
    director: {type:String, required: true, maxlength:150},
    year: {type:String, required: true}
});

module.exports = mongoose.model('Movies', movieSchema);