// Import necessary Node.js modules
const express = require("express"); // Import Express.js to create a web server
// const mongoose = require("mongoose"); // Import Mongoose for MongoDB interaction
const cors = require("cors"); // Import Cors for handling Cross-Origin Resource Sharing
// const UserModel = require("./model/Users"); // Import the User model from the models/users.js file
const https = require("https");

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

let address = " ";

function replaceSpaces(inputString) {
    var result = "";
    
    for (var i = 0; i < inputString.length; i++) {
      if (inputString[i] === " ") {
        result += "%20";
      } else {
        result += inputString[i];
      }
    }
    
    return result;
  }

const latitude = 0;
const longitude = 0;


app.post("/address", (req, res) => {
    let addressData = req.body.address.address;
    let formattedAddress = addressData.replace(/ /g, "%20");
    console.log(`AddressReplace: ${formattedAddress}`);
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${formattedAddress}&key=AIzaSyBSthcoFNRHBpQm38xhAX5kCY5_QI-AxPA`;
    https.get(url, (res) => {
      res.on("data",(data) => {
        const var1 = JSON.parse(data);
        latitude = var1.results[0].geometry.location.lat;

      })

    })

})


// Start the web server and listen on port 3001
app.listen(3001, () => {
    console.log("server is running");
});


