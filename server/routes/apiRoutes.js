// Import necessary modules
const express = require('express'); // Import Express framework
const router = express.Router(); // Create a new router instance for defining routes
const Item = require('../models/Item'); // Import the Item model for database operations

// Middleware to handle JSON requests
router.use(express.json()); // Allows the router to parse JSON data in request bodies

// GET /api/items - Get all items from the database
router.get('/items', async (req, res) => {
  try {
    const items = await Item.find(); // Fetch all items from the Item collection
    res.json(items); // Respond with the retrieved items as JSON
  } catch (err) {
    res.status(500).json({ message: err.message }); // Handle error and send a 500 status
  }
});

// POST /api/items - Create a new item in the database
router.post('/items', async (req, res) => {
  // Destructure the name and description from the request body
  const { name, brand, ingredients, skinConcern, rating, reviews } = req.body;

  // Basic validation: check if name is provided
  if (!name) {
    return res.status(400).json({ message: 'Name is required.' }); // Respond with 400 if name is missing
  }

  // Create a new Item instance with the provided data
  const newItem = new Item({
    name,
    brand,
    ingredients,
    skinConcern,
    rating,
    reviews,
  });

  try {
    const savedItem = await newItem.save(); // Save the new item to the database
    res.status(201).json(savedItem); // Respond with the saved item and a 201 status
  } catch (err) {
    res.status(400).json({ message: err.message }); // Handle error and send a 400 status
  }
});

// Export the router to be used in the main application
module.exports = router; // Allows the router to be imported in other files
