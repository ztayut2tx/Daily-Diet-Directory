const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newMeal = new Schema({
    title: {type: String},
    foods: [{
        food: {type: String},
        amount: {type: Number},
        calories: {type: Number},
        fat: {type: Number},
        protein: {type: Number}
    }],
    notes: {type: String}

})

module.exports = Meal = mongoose.model("Meal", newMeal);