var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var questionSchema = new Schema({
    name: String,
    email: String,
    question: String,    
});

module.exports = mongoose.model("question", questionSchema);