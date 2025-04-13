const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  name: String,
  location: String,
  contact: String,
  inventory: [
    {
      medicineName: String,
      price: Number,
      inStock: Boolean,
    }
  ]
});

module.exports = mongoose.model("Store", StoreSchema);