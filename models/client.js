const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newClient = new Schema({
    name: {type: String, required: true},
    height:{type: Number, required: true},
    weight:{type: Number, required: true},
    bodyfat:{type: Number, required: true}

});

const Client = mongoose.model("Book", newClient);

module.exports = Client;