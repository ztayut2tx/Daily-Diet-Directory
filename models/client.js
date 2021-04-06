const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newClient = new Schema({
    name: {type: String, required: true},
    height: {type: Number, required: true},
    weight: {type: Number, required: true},
    bodyfat: {type: Number, required: true},
    age: {type: Number, required: true},
})

module.exports = Client = mongoose.model("Client", newClient);