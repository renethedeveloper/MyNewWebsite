
const mongoose = require('mongoose');

// create schema (breakdown of what our data should look like)
const eventSchema = new mongoose.Schema(
    {
        
        title: String,
        description: String,
        

        
    },
    {
        timestamps: true
    }
);

// create Model with that schema
// whatever we put as the collection name will be lowercased and pluralized +s
// Veggies > veggies
const Event = mongoose.model("Event", eventSchema);

module.exports = Event;

