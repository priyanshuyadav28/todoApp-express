
const mongoose = require("mongoose");

require("dotenv").config();

const connectToDB = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }) // this returns a promise
    // promise is either resolved or rejected so we will use,
    //  .then and .catch
    .then( () => {
        console.log("Successfully connected to database");
    })
    .catch( (err) => {
        console.log("An error occured while connecting to the database");
        console.log(err);
        process.exit(1); // exit the process with failure
    })
}

module.exports = connectToDB;