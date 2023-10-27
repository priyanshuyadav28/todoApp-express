
const express = require('express');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT || 5000;

//  for parsing 
app.use(express.json());

// import the routes
const todoRoutes = require("./routes/todos");

// middleware the routes 
app.use("/api/v1", todoRoutes);

// import the database connection file to connect to the database
const connectDB = require("./config/database");
connectDB();

// defalut route
app.get("/", (req, res) => {
    res.send("Welcome to the blog app");
})

// starting the server 
app.listen(PORT, () => {
    console.log((`Server is running on port ${PORT}`));
})



