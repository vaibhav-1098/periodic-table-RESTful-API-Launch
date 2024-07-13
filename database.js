const mongoose = require("mongoose");

// create database
mongoose.connect(process.env.DB_URL).then(() => {
  console.log("connected to database");
});

// create document format
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
    enum: ["alkali-metal", "alkaline-earth", "transition-metal", "basic-metal", "metalloid", "non-metal", "halogen", "noble-gas", "actinide", "lanthanide", "less-known"],
  },
  electronegativity: {
    type: Number,
    default: 0,
  },
  atomic_radius: {
    type: Number,
  },
  standard_state: {
    type: String,
    enum: ["solid", "liquid", "gas"],
  },
  electronic_configuration: {
    required: true,
    type: String,
    unique: true,
  },
  audio: {
    type: String,
    unique: true,
    match: /^(ftp|http|https):\/\/[^ "]+$/,
  },
});

// create collection
const Element = mongoose.model("element", ElementSchema);
module.exports = Element;
