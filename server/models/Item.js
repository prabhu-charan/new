// Import Mongoose for MongoDB interaction
const mongoose = require('mongoose');

// Define the schema for the Item model
const itemSchema = new mongoose.Schema({
    name: String,
  brand: String,
  ingredients: [String],
  skinConcern: String,
  rating: Number,
  reviews: [{ user: String, comment: String }]
});

// Check if the model already exists to prevent overwriting
const Item = mongoose.models.Item || mongoose.model('Item', itemSchema); // Use existing model or create a new one

// Export the Item model for use in other files
module.exports = Item; // Allows the model to be imported in other files
