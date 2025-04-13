const express = require("express");
const Store = require("../models/Store.js");

const router = express.Router();

router.get("/search", async (req, res) => {
    const { name } = req.query;
  
    if (!name) {
      return res.status(400).json({ error: "Medicine name is required" });
    }
  
    try {
      const results = await Store.find({
        inventory: { $elemMatch: { medicineName: { $regex: name, $options: "i" }, inStock: true } }
      });
  
      if (results.length === 0) {
        return res.json({ message: "No stores found with that medicine" });
      }
  
      const formatted = results.map(store => {
        const med = store.inventory.find(m => m.medicineName.toLowerCase().includes(name.toLowerCase()));
        return {
          storeId: store._id,
          storeName: store.name,
          location: store.location,
          contact: store.contact,
          price: med?.price,
        };
      });
  
      res.json(formatted);
    } catch (err) {
      res.status(500).json({ error: "Something went wrong" });
    }
  });
  

module.exports = router;