const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newCoach = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, requied: true},
    clients: {
        name: {type: String},
        height: {type: Number},
        weight: {type: Number},
        bodyfat: {type: Number},
        age: {type: Number},
        mealPlans: {
            date: {type: Date},
            meals: {
                foods: {
                    food: {type: String},
                    amount: {type: Number},
                    calories: {type: Number},
                    fat: {type: Number},
                    protein: {type: Number}
                }
            }
        }
    }
});

const Coach = mongoose.model("Coach", newCoach);

module.exports = Coach;