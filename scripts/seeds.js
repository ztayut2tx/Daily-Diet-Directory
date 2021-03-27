const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/Daily-Diet-Directory"
  );

const newClient = [
    {
     name: "Big Guns Gary",
     height: 5.7,
     weight: 160,
     bodyfat: 12,
     date: new Date(Date.now())   
    }
];

db.Client
    .remove({})
    .then(() => db.Client.collection.insertMany(newClient))
    .then(data => {
        console.log(data.result.n  + "data inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });