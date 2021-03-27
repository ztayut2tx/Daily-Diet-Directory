const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newClient = new Schema({
    name: {type: String, required: true},
    height:{type: Number, required: true},
    weight:{type: Number, required: true},
    bodyfat:{type: Number, required: true},
    date: { type: Date, default: Date.now}

});

const Client = mongoose.model("Client", newClient);

module.exports = Client;