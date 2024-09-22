const mongoose = require("mongoose");
require("dotenv").config();

// create database
const connectDB = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("database connected");
    });
};

module.exports = connectDB;
