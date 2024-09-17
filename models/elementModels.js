const mongoose = require("mongoose");
require("dotenv").config();

// create database
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("database connected");
});

// schema to make document
const ElementSchema = new mongoose.Schema({
    atomic_number: {
        required: true,
        type: Number,
        unique: true,
        validate: Number.isInteger,
        min: 1,
        max: 120,
    },
    symbol: {
        required: true,
        type: String,
        unique: true,
    },
    name: {
        required: true,
        type: String,
        unique: true,
    },
    atomic_mass: {
        required: true,
        type: Number,
    },
    period_number: {
        required: true,
        type: Number,
        validate: Number.isInteger,
        min: 1,
        max: 7,
    },
    group_number: {
        required: true,
        type: Number,
        validate: Number.isInteger,
        min: 1,
        max: 18,
    },
    type: {
        required: true,
        type: String,
        enum: [
            "alkali-metal",
            "alkaline-earth",
            "transition-metal",
            "basic-metal",
            "metalloid",
            "non-metal",
            "halogen",
            "noble-gas",
            "actinide",
            "lanthanide",
            "less-known",
        ],
    },
    electronegativity: {
        type: Number,
        default: 0,
    },
    atomic_radius: {
        required: false,
        type: Number,
    },
    standard_state: {
        required: false,
        type: String,
        enum: ["solid", "liquid", "gas"],
    },
    electronic_configuration: {
        required: true,
        type: String,
        unique: true,
    },
    audio: {
        required: false,
        type: String,
        unique: true,
        match: /^(ftp|http|https):\/\/[^ "]+$/,
    },
});

// collection to make model
const ElementModel = mongoose.model("element", ElementSchema);
module.exports = ElementModel;
