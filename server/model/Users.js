// Import the 'mongoose' library, which helps interact with MongoDB
const mongoose = require("mongoose");

// Define a schema for the User model
const UserSchema = new mongoose.Schema({
    // The 'name' field is of type String, storing the user's name
    name: String,

    // The 'email' field is of type String, storing the user's email address
    email: String,

    // The 'password' field is of type String, storing the user's password
    password: String,
});

// Create a User model based on the UserSchema.
// The model represents the structure of documents in the 'users' collection.
const UserModel = mongoose.model("User", UserSchema);

// Export the UserModel to make it available for use in other parts of the application
module.exports = UserModel;
