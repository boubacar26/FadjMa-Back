const mongoose = require("mongoose");

const Medicaments = mongoose.model("Medicaments", {
  image: String,
  name: String,
  description: String,
  groupName: String,
  stock: Number,
  dosage: String,
  price: Number,
  category: String,
});

module.exports = Medicaments;
