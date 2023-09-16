// Import necessary Node.js modules
const express = require("express"); // Import Express.js to create a web server
// const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction
const cors = require("cors"); // Import Cors for handling Cross-Origin Resource Sharing
// const UserModel = require("./model/Users"); // Import the User model from the models/users.js file

// Create an instance of the Express.js application
const app = express();

// Middleware setup:
app.use(express.json()); // Parse JSON data from incoming requests
app.use(express.urlencoded({extended: true}))
app.use(cors()); // Enable Cross-Origin Resource Sharing to allow requests from other domains

// // Connect to the MongoDB database at the specified URL
// mongoose.connect("mongodb://127.0.0.1:27017/user");

// // Define an HTTP POST route for user login
// app.post("/login", (req, res) => {
//     // Extract the email and password from the request body
//     const { email, password } = req.body;

//     // Search for a user in the database with the given email
//     UserModel.findOne({ email: email }).then((user) => {
//         if (user) {
//             // If a user with the email is found
//             if (user.password === password) {
//                 // If the provided password matches the stored password
//                 res.json("Success"); // Send a success response
//             } else {
//                 // If the provided password is incorrect
//                 res.json("The password is incorrect"); // Send a password error response
//             }
//         } else {
//             // If no user with the email is found
//             res.json("No record existed"); // Send a "no record" error response
//         }
//     });
// });

// Define an HTTP POST route for user registration
// app.post("/register", (req, res) => {
//     // Create a new user in the database using the data from the request body
//     UserModel.create(req.body)
//         .then((user) => res.json(user)) // Send the created user as a JSON response
//         .catch((err) => res.json(err)); // Send an error response if there's a problem
// });

app.post("/address", (req, res) => {
    const addressData = req.body.address;
    const test = req.body.data;
    const body = req.body;
    console.log(`${addressData}, ${test}, ${body}`);
})

// Start the web server and listen on port 3001
app.listen(3001, () => {
    console.log("server is running");
});


