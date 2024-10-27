// Import necessary modules
const express = require('express'); // Import Express framework
const mongoose = require('mongoose'); // Import Mongoose for MongoDB interaction
const cors = require('cors'); // Import CORS to enable cross-origin requests
const app = express(); // Create an Express application instance

// Load environment variables from .env file
require('dotenv').config(); // Loads variables from the .env file into process.env

// Middleware to parse JSON data from incoming requests
app.use(express.json()); // Allows Express to parse JSON data in request bodies
app.use(cors()); // Enables CORS for all routes

// Connect to MongoDB using the connection string from environment variables
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true, // Option to parse the MongoDB connection string
  useUnifiedTopology: true, // Option to use the new connection management engine
})
  .then(() => console.log('Connected to MongoDB')) // Log success message if connection is successful
  .catch((error) => console.error('MongoDB connection error:', error)); // Log error if connection fails

// Import the Item model from the models directory
const Item = require('./models/Item'); // Ensure the path to the Item model is correct

// Import API routes from the routes directory
const apiRoutes = require('./routes/apiRoutes'); // Import the defined API routes
app.use('/api', apiRoutes); // Use the imported routes, prefixing them with '/api'

// Start the server and listen on the specified port
const PORT = process.env.PORT || 5000; // Use the port from the environment variable or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log the port number when the server starts
});
